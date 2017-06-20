

init: clean
	npm install

clean:
	rm -rf node-modules

watch:
	NODE_ENV=dev webpack -w

serve:
	node server.js

.PHONY: init clean watch serve
