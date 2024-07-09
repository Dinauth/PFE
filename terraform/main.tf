terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}

provider "docker" {
  host = "unix:///var/run/docker.sock"
}
resource "null_resource" "run_docker_compose" {
  provisioner "local-exec" {
    command = "docker-compose -f ../docker-compose.yml up"
  }
}