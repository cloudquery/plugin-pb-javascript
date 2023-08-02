// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var cloudquery_discovery_v1_discovery_pb = require('../../cloudquery/discovery_v1/discovery_pb.js');

function serialize_cloudquery_discovery_v1_GetVersions_Request(arg) {
  if (!(arg instanceof cloudquery_discovery_v1_discovery_pb.GetVersions.Request)) {
    throw new Error('Expected argument of type cloudquery.discovery.v1.GetVersions.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_discovery_v1_GetVersions_Request(buffer_arg) {
  return cloudquery_discovery_v1_discovery_pb.GetVersions.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cloudquery_discovery_v1_GetVersions_Response(arg) {
  if (!(arg instanceof cloudquery_discovery_v1_discovery_pb.GetVersions.Response)) {
    throw new Error('Expected argument of type cloudquery.discovery.v1.GetVersions.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_discovery_v1_GetVersions_Response(buffer_arg) {
  return cloudquery_discovery_v1_discovery_pb.GetVersions.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var DiscoveryService = exports.DiscoveryService = {
  // Get the name of the plugin
getVersions: {
    path: '/cloudquery.discovery.v1.Discovery/GetVersions',
    requestStream: false,
    responseStream: false,
    requestType: cloudquery_discovery_v1_discovery_pb.GetVersions.Request,
    responseType: cloudquery_discovery_v1_discovery_pb.GetVersions.Response,
    requestSerialize: serialize_cloudquery_discovery_v1_GetVersions_Request,
    requestDeserialize: deserialize_cloudquery_discovery_v1_GetVersions_Request,
    responseSerialize: serialize_cloudquery_discovery_v1_GetVersions_Response,
    responseDeserialize: deserialize_cloudquery_discovery_v1_GetVersions_Response,
  },
};

exports.DiscoveryClient = grpc.makeGenericClientConstructor(DiscoveryService);
