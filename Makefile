
COMPONENT := ./node_modules/.bin/component
JS := $(shell find lib -name '*.js' -print)

PORT = 3000

build: components $(JS)
	$(MAKE) lint
	$(COMPONENT) build --dev --verbose

clean:
	rm -rf build components

components: component.json
	$(COMPONENT) install --dev --verbose

install: node_modules components

lint: $(JS)
	./node_modules/.bin/jshint --verbose $(JS)

node_modules: package.json
	npm install

test:
	$(COMPONENT) test phantom

watch:
	watch $(MAKE) build

.PHONY: clean install lint test watch