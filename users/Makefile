
docker-build:
	docker build -t eshurupov/bp-users:1.2 -t eshurupov/bp-users:latest .

docker-login:
	docker login

docker-push:
	docker push --all-tags eshurupov/bp-users

docker-build-push: docker-build docker-push
