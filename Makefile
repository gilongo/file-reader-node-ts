DOCKER_IMAGE_NAME = file-reader-app
DOCKER_COMPOSE_FILE = docker-compose.yml
DOCKERFILE_PATH = .

.PHONY: build run compose-up stop

build:
	docker build -t $(DOCKER_IMAGE_NAME) $(DOCKERFILE_PATH)

run:
	docker run -p 3000:3000 $(DOCKER_IMAGE_NAME)

compose-up:
	docker-compose up --build -d

stop:
	docker-compose stop