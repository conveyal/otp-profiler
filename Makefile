
COMPONENT := ./node_modules/.bin/component
JS := $(shell find lib test -name '*.js' -print)

PORT = 3000

build: components $(JS)
	@$(MAKE) lint
	@$(COMPONENT) build --dev --verbose

beautify: node_modules $(JS)
	@./node_modules/.bin/js-beautify --replace $(JS)

clean:
	rm -rf build components

components: node_modules component.json
	@$(COMPONENT) install --dev

install: node_modules components

lint: node_modules $(JS)
	@./node_modules/.bin/jshint --verbose $(JS)

node_modules: package.json
	@npm install

test: build
	@$(COMPONENT) test phantom

watch:
	@watch $(MAKE) build

.PHONY: clean install lint test watch