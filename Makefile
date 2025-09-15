SHELL = /bin/bash
COMPOSE=docker compose -f docker-compose.yml
##
# Hagglebot
##
up:
	@$(COMPOSE) up

down:
	@$(COMPOSE) down

ps:
	@$(COMPOSE) ps

build:
	@$(COMPOSE) up --build

deploy:
	./bin/deploy.sh

web:
	chromium 'http://localhost:5173'
