# Use the official Ubuntu base image
FROM ubuntu:latest

# Install required packages
RUN apt-get update && \
    apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

# Install Docker
RUN curl -fsSL https://get.docker.com -o get-docker.sh && \
    sh get-docker.sh

# Install Docker Compose
RUN curl -fsSL https://github.com/docker/compose/releases/latest/download/docker-compose-Linux-x86_64 -o /usr/local/bin/docker-compose && \
    chmod +x /usr/local/bin/docker-compose

COPY django-DefectDojo /django-DefectDojo

# Optional: Add a non-root user (uncomment if needed)
# RUN useradd -m dockeruser
# USER dockeruser

# Optional: Set working directory (uncomment if needed)
# WORKDIR /path/to/your/app

# Optional: Copy your application files (uncomment if needed)
# COPY . .

# Command to run on container start
CMD ["/bin/bash"]
