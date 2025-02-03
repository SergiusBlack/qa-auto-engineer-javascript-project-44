install: # install dependencies
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

publish: # publish to npm
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .
