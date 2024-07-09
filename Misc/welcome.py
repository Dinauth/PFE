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

    github_repo = ""
    github_repo = input("Do you have a public github repository ? (yes/no): ").strip().lower()
    while github_repo != "no" and github_repo != "yes":
        print("Please input a valid response.")
        github_repo = input("Do you have a public github repository ? (yes/no): ").strip().lower()
    if github_repo == "yes":
        github_repo = input("Please enter your github repository (SSH only) :")
    
    uses_python = ""
    uses_python = input("Does the code use Python? (yes/no): ").strip().lower()
    while uses_python != "no" and uses_python != "yes":
        print("Please input a valid response.")
        uses_python = input("Does the code use Python? (yes/no): ").strip().lower()

    # Parameters verification
    print("\nSummary of your inputs:")
    print(f"Username: {username}")
    print(f"Project Name: {project_name}")
    print(f"Code in Docker image: {docker_use}")
    if docker_use == "yes":
        print(f"Docker image: {docker_image}")
    print(f"Webapp : {internet_access}")
    print(f"Code uses Python: {uses_python}")

    # Scanning jobs edition
    runner_path = 'runner_scans.sh'
    new_lines = []
    
    if docker_image != "":
        new_lines.append("docker run --rm -v $(pwd)/reports:/reports aquasec/trivy:latest image --format json --output /reports/report.json " + docker_image + '\n')
    
    if internet_access != "":
        new_lines.append("docker run -v $(pwd):/zap/wrk/:rw -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py -t " + internet_access + " -x report.xml" + '\n')
    
    if github_repo != "":
        subprocess.run(['git', 'clone', github_repo])
        parts = github_repo.split('/')
        repo_name_with_suffix = parts[-1]
        repo_name = repo_name_with_suffix.replace('.git', '')
        new_lines.append("docker run --rm -v $(pwd)/" + repo_name + ":/" + repo_name + " -v $(pwd):/output zricethezav/gitleaks detect --source /" + repo_name + " --report-path /output/gitleaks_report.json" + '\n')
        if uses_python != "":
            dockerfile_content = """\
FROM python:latest

RUN pip install bandit

COPY . /PFE

CMD ["bandit", "-r", "./", "-f", "json", "-o", "/PFE/bandit_results.json"]
            """
            new_dockerfile_content = dockerfile_content.replace("PFE", repo_name)
            # Optionally, write the new Dockerfile content to a file
            with open('Dockerfile.bandit', 'w') as file:
                file.write(new_dockerfile_content)
            new_lines.append("docker build -t bandit -f Dockerfile.bandit ." + '\n')
            new_lines.append("docker run --name bandit-ct bandit" + '\n')
            new_lines.append("docker cp bandit-ct:/" + repo_name + "/bandit_results.json ./" + '\n')
            new_lines.append("docker stop bandit-ct" + '\n')
            new_lines.append("docker rm bandit-ct" + '\n')
        

    with open(runner_path, 'w') as file:
        file.writelines(new_lines)
    
    # Run the scans
    subprocess.run(['sh', runner_path])

    subprocess.run(['docker-compose', 'up', '-d'])

    print("Scans have been successfully uploaded!")



if __name__ == "__main__":
    main()
