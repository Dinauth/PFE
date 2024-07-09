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

# Pulls the image
resource "docker_image" "build" {
  name = "ubuntu:22.04"
  build {
    context    = "../"
    dockerfile = "Dockerfile"
    #args       = { "PORT" = "5037" } # Ajouter cette ligne pour passer un argument au Dockerfile
  }
  #tags = var.tags
}

# Create a container
resource "docker_container" "container" {
  image = docker_image.build.image_id
  name  = "container"
  ports {
     internal = 5037 # Port interne du conteneur
     external = 5037 # Port externe
  }
}