---
title: "docker cheatsheet"
description: contains usefull tip and tricks related to docker
---


# Docker cheatsheet

## How do I SSH into a running container
> reference https://phase2.github.io/devtools/common-tasks/ssh-into-a-container/

There is a docker exec command that can be used to connect to a container that is already running.

* Use `docker ps` to get the name of the existing container
* Use the `command docker exec -it <container name> /bin/bash` to get a bash shell in the container
* Generically, use `docker exec -it <container name> <command>` to execute whatever command you specify in the container.

## inspect the docker
```
docker inspect <containerID>
```
## Build docker file
```
docker build -t image-name .
# the directory contain the file named `Dockerfile`
```
> https://docs.docker.com/engine/reference/commandline/build/

## Starting the yaml container
* the dir must contain yml file
```
docker-compose up -d
```
> -d will run it in background

## view all the images
```
sudo docker images
```

## docker remove image
```
docker image rm 7a17ef1d6f58
```

## run docker in interactive mode
```
docker run -p 80:80 -it image-name
```
## run docker
```
docker run -it \
    --restart always \
    --name localtunnel \
    --net host \
    localhost:latest --port 3000
```    


## view all the processes
```
 sudo docker ps -a
```

## remove the container
```
sudo docker rm 5478cc604bf4 //5478cc604bf4 --> container id
```

## view docker logs
```
sudo docker logs 513a402cc1a8 //5478cc604bf4 --> container id
```
## view docker ip
```
sudo docker inspect --format '{{ .NetworkSettings.IPAddress }}' 6eac680f260d
```

## ssh docker
```
sudo docker exec it <container_id> /bin/bash
```
