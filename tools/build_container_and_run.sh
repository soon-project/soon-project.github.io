#!/bin/bash

# Stop & remove existing image
docker stop soon-website
docker rm soon-website

# Build docker image
docker build -f tools/Dockerfile -t soon-website .

# Run image
docker run -p 4000:4000 --name soon-website --restart=always -d soon-website:latest
