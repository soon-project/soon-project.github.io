#!/bin/bash

CONTAINER_NAME="soon-website"

# Stop & remove existing image
docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME

# Build docker image
docker build -f tools/Dockerfile -t $CONTAINER_NAME .

# Run image
docker run -p 4000:4000 --name $CONTAINER_NAME --restart=always -d $CONTAINER_NAME:latest
