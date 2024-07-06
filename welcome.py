#!/usr/bin/env python3

import subprocess
import psycopg2
import os
import getpass
import pyfiglet

def connect_to_postgresql():
    try:
        connection = psycopg2.connect(
            host="localhost",
            database="defectdojo",
            user="defectdojo",
            password="defectdojo",
            port=8085
        )
        return connection
    except Exception as error:
        print(f"Error connecting to PostgreSQL: {error}")
        exit(1)

def check_user_exists(connection, username):
    try:
        cursor = connection.cursor()
        cursor.execute("SELECT EXISTS(SELECT 1 FROM auth_user WHERE username = %s)", (username,))
        exists = cursor.fetchone()[0]
        cursor.close()
        return exists
    except Exception as error:
        print(f"Error checking user in PostgreSQL: {error}")
        exit(1)

def create_super_user():
    command_x = "cd .. && cd vm/django-DefectDojo && docker compose exec uwsgi /bin/bash -c 'python manage.py createsuperuser'"
    subprocess.run(command_x, shell=True)
    print("Your account has been created. Log in at localhost:8080 to enjoy your dashboard.")



def main():
    os.system("start cmd")
    welcome_message = pyfiglet.figlet_format("Welcome to Security in CI/CD")
    print(welcome_message)

    # User check-in
    username = input("Please enter your name: ")
    connection = connect_to_postgresql()
    user_exists = check_user_exists(connection, username)

    # Project checkin
    if not user_exists:
        create_super_user()
    project_name = input("Please enter the name of your project: ")

    docker_use = ""
    docker_use = input("Is the code in a Docker image? (yes/no): ").strip().lower()
    while docker_use != "no" and docker_use != "yes":
        print("Please input a valid response.")
        docker_use = input("Is the code in a Docker image? (yes/no): ").strip().lower()
    if docker_use == "yes":
        docker_image = input("Please enter the pull target of your docker image: ")

    internet_access = ""
    internet_access = input("Is your app accessible from your browser? (yes/no): ").strip().lower()
    while internet_access != "no" and internet_access != "yes":
        print("Please input a valid response.")
        internet_access = input("Is your app accessible from your browser? (yes/no): ").strip().lower()
    if internet_access == "yes":
        internet_access = input("Please enter the adress of your webapp: ")
    
    uses_python = ""
    uses_python = input("Does the code use Python? (yes/no): ").strip().lower()
    while uses_python != "no" and uses_python != "yes":
        print("Please input a valid response.")
        uses_python = input("Does the code use Python? (yes/no): ").strip().lower()

    uses_go = ""
    uses_go = input("Does the code use Go? (yes/no): ").strip().lower()
    while uses_go != "no" and uses_go != "yes":
        print("Please input a valid response.")
        uses_go = input("Does the code use Go? (yes/no): ").strip().lower()

    # Parameters verification
    print("\nSummary of your inputs:")
    print(f"Username: {username}")
    print(f"Project Name: {project_name}")
    print(f"Code in Docker image: {docker_use}")
    if docker_use == "yes":
        print(f"Docker image: {docker_image}")
    print(f"Webapp : {internet_access}")
    print(f"Code uses Python: {uses_python}")
    print(f"Code uses Go: {uses_go}")

    # Scanning jobs edition
    file_path = 'zap.sh'
    replacements = {
        'https://www.example.com': internet_access,
        'hello-world': docker_image
    }

    with open(file_path, 'r') as file:
        file_contents = file.readlines()

    modified_lines = []

    for line in file_contents:
        modified_line = line
        for placeholder, replacement in replacements.items():
            if placeholder in line:
                if replacement:
                    modified_line = modified_line.replace(placeholder, replacement)
                else:
                    modified_line = None
                    break 
        if modified_line is not None:
            modified_lines.append(modified_line)

    # Edit the simulated job runner
    runner_path = file_path.replace('.sh', '_modified.sh')
    with open(runner_path, 'w') as new_file:
        new_file.writelines(modified_lines)
    
    # Run the scans
    subprocess.run(['sh', runner_path])





if __name__ == "__main__":
    main()
