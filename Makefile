up: docker-up
down: docker-down
restart: down up

install:
	npm i

dev:
	npm run start

prod: docker-down frontent-build server-build docker-up

frontent-build:
	npm run build

server-build:
	docker build --file=docker/nginx/Dockerfile --tag=react-dev .

docker-up:
	docker-compose up --remove-orphans -d

docker-down:
	docker-compose down --remove-orphans

lint:
	npx eslint .

push:
	git push -u origin main

clean:
	rm -rf public

.PHONY: test
