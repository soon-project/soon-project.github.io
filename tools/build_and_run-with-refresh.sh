#!/bin/bash

CONTAINER_NAME="soon-website"

# Stop & remove existing image
docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME

# Build docker image
docker build -f tools/Dockerfile -t $CONTAINER_NAME .

# Run image
docker run -p 4000:4000 -v ${PWD}:/site --name soon-website --restart=always -d soon-website:latest
