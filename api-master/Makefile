
DOCKERREPO=${DOCKER_REPO}
VERSION=0.1-$(shell git rev-parse --short HEAD)

dockerbuild:
	docker build -t ${DOCKERREPO}/api-master:${VERSION} .

docker:
	@make dockerbuild
	gcloud docker -- push ${DOCKERREPO}/api-master:${VERSION}