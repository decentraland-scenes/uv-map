deploy:
	rm -r -f bin
	rm -r -f node_modules
	rm -f package-lock.json	
	npm unlink decentraland-ecs
	npm install decentraland-ecs@next
	dcl build
	dcl deploy -y