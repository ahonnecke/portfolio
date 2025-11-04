SHELL = /bin/bash
COMPOSE = docker compose -f docker-compose.yml

.PHONY: help ci.install ci.pre-commit web

##
# Docker Compose Commands
##

up: ## Start the docker containers
	@$(COMPOSE) up

down: ## Stop the docker containers
	@$(COMPOSE) down

ps: ## Show status of docker containers
	@$(COMPOSE) ps

build: ## Build and start the docker containers
	@$(COMPOSE) up --build

##
# Deployment
##

deploy: ## Deploy the application
	./bin/deploy.sh

##
# CI Commands - Run GitLab CI jobs locally
##

ci.install: ## Install dependencies (mimics CI install stage)
	@echo "Installing dependencies with pnpm..."
	corepack enable
	corepack prepare pnpm@10 --activate
	pnpm config set store-dir .pnpm-store
	pnpm install --frozen-lockfile

ci.pre-commit: ## Run pre-commit hooks on all files (mimics CI pre-commit stage)
	@echo "Running pre-commit hooks..."
	@echo "  - File quality checks (trailing whitespace, YAML/JSON validation)"
	@echo "  - Biome linting & formatting (auto-fixes)"
	@echo "  - TypeScript type checking"
	@echo ""
	pre-commit run --all-files

##
# Utilities
##

web: ## Open the web application in browser
	chromium 'http://localhost:5173'

help: ## Show this help menu
	@echo 'Usage: make [TARGET]'
	@echo ''
	@echo 'Targets:'
	@grep -E '^[a-zA-Z_.-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
