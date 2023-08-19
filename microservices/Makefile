up-dev:
	docker compose -f docker-compose.yaml up --force-recreate

down-dev:
	docker compose -f docker-compose.yaml down

sq:
	docker compose -f docker-compose-sq.yaml up --force-recreate

down-sq:
    docker compose -f docker-compose-sq.yaml down

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .
