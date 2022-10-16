
docker-build:
	docker build -t eshurupov/bp-balancer:1.0 -t eshurupov/bp-balancer:latest .

docker-login:
	docker login

docker-push:
	docker push --all-tags eshurupov/bp-balancer

docker-build-push: docker-build docker-push
