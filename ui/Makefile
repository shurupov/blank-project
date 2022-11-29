
docker-build:
	docker build -t eshurupov/bp-ui:1.0 -t eshurupov/bp-ui:latest .

docker-login:
	docker login

docker-push:
	docker push --all-tags eshurupov/bp-ui

docker-build-push: docker-build docker-push
