
docker-build:
	docker build -t eshurupov/bp-tasks:1.2 -t eshurupov/bp-tasks:latest .

docker-login:
	docker login

docker-push:
	docker push --all-tags eshurupov/bp-tasks

docker-build-push: docker-build docker-push
