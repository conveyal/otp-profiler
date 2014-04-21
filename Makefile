
COMPONENT := ./node_modules/.bin/component
JS := index.js test/index.js

build: install $(JS)
	@$(MAKE) lint
	@$(COMPONENT) build --dev --verbose

beautify: install $(JS)
	@./node_modules/.bin/js-beautify --replace $(JS)

clean:
	rm -rf build components

components: node_modules component.json
	@$(COMPONENT) install --dev

install: node_modules components

lint: install $(JS)
	@./node_modules/.bin/jshint --verbose $(JS)

node_modules: package.json
	@npm install

test: build
	@$(COMPONENT) test phantom

watch:
	@watch $(MAKE) build

.PHONY: beautify clean install lint test watch