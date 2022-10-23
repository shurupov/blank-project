# Blank of any project with microservicearchitecture

## Starting microservices in docker-compose
* Production version with built images. To start execute `docker-compose up`  

* Production version with building images from source codes. To start execute `docker-compose --file docker-compose-build.yml up`  
  
* Development version. To start execute `docker-compose --file docker-compose-dev.yml up`

  Before starting all services have to be built to jar-files.

## Starting microservices in kubernetes
Go to [k8s](/k8s) folder and apply all configs here. 

Now it's deployed [here](http://146.185.243.90/swagger-ui/index.html) in k8s. 