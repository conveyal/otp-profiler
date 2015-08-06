
COMPONENT := ./node_modules/.bin/component
JS := index.js $(shell find test -name '*.js' -print)

build: install $(JS)
	@$(COMPONENT) build --dev --verbose

clean:
	rm -rf build components

components: node_modules component.json
	@$(COMPONENT) install --dev

install: node_modules components

node_modules: package.json
	@npm install

test:
	./node_modules/.bin/mocha --timeout 10s

test-client: build
	@$(COMPONENT) test phantom

watch:
	@watch $(MAKE) build

.PHONY: beautify clean install test watch