clone-proto:
	git clone https://github.com/cloudquery/plugin-pb

gen-proto:
	cd plugin-pb && git pull && cd ..

	mkdir -p ./protos/cloudquery/plugin_v3
	cp ./plugin-pb/plugin/v3/*.proto ./protos/cloudquery/plugin_v3/.
	# python -m grpc_tools.protoc -I./protos --python_out=. --pyi_out=. --grpc_python_out=. ./protos/cloudquery/plugin_v3/*.proto
	grpc_tools_node_protoc \
		--js_out=import_style=commonjs,binary:. \
		--grpc_out=grpc_js:. \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		-I ./protos \
		./protos/cloudquery/plugin_v3/*.proto


	mkdir -p ./protos/cloudquery/discovery_v1
	cp ./plugin-pb/discovery/v1/*.proto ./protos/cloudquery/discovery_v1/.
	grpc_tools_node_protoc \
		--js_out=import_style=commonjs,binary:. \
		--grpc_out=grpc_js:. \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		-I ./protos \
		./protos/cloudquery/discovery_v1/*.proto
