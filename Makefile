install: # install dependencies
	npm ci

brain-games:
	node bin/brain-games.js

publish: # publish to npm
	npm publish --dry-run

lint:
	npx eslint .
