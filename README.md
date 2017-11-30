# DDOCs
Development environment for Digital Docs Backend

## Prerequisites
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/community-edition#/download)
- [docker-compose](https://docs.docker.com/compose/install/)
- [docker-machine](https://docs.docker.com/machine/install-machine/)
- [nodejs LTS](https://nodejs.org/es/download/) 

## Let's get started
- git -v
- docker -v
- docker-compose -v
- docker-machine -v
- git clone https://github.com/thesoftdevteam/docubot-backend  && cd docubot-backend

## Next  Docker Machine
- docker-machine create development
- docker-machine env development
- eval $(docker-machine env development)


## Next Docker compose
- cd docubot-backend
- docker-compose up -d

## Run seeder (eventType system, ).
- docker-compose exec api-master bash
- npm run prod:seed

## How to create a New Micro services
- npm install --global yo
- npm install --global generator-micro-service
- yo micro-service
- Follow the questions :)
- cd into your new Servive and create a Dockerfile
- update docker-compose.yml
- navigate to host:9000 to have access the Simple management UI for Docker

## READ documentation
- https://github.com/zeit/micro
- https://github.com/apollographql/graphql-server
- https://github.com/apollographql/GitHunt-API
- https://www.youtube.com/watch?v=PHabPhgRUuU
