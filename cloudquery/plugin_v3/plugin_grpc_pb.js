// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var cloudquery_plugin_v3_plugin_pb = require('../../cloudquery/plugin_v3/plugin_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_cloudquery_plugin_v3_Close_Request(arg) {
  if (!(arg instanceof cloudquery_plugin_v3_plugin_pb.Close.Request)) {
    throw new Error('Expected argument of type cloudquery.plugin.v3.Close.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_plugin_v3_Close_Request(buffer_arg) {
  return cloudquery_plugin_v3_plugin_pb.Close.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cloudquery_plugin_v3_Close_Response(arg) {
  if (!(arg instanceof cloudquery_plugin_v3_plugin_pb.Close.Response)) {
    throw new Error('Expected argument of type cloudquery.plugin.v3.Close.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_plugin_v3_Close_Response(buffer_arg) {
  return cloudquery_plugin_v3_plugin_pb.Close.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cloudquery_plugin_v3_GetName_Request(arg) {
  if (!(arg instanceof cloudquery_plugin_v3_plugin_pb.GetName.Request)) {
    throw new Error('Expected argument of type cloudquery.plugin.v3.GetName.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_plugin_v3_GetName_Request(buffer_arg) {
  return cloudquery_plugin_v3_plugin_pb.GetName.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cloudquery_plugin_v3_GetName_Response(arg) {
  if (!(arg instanceof cloudquery_plugin_v3_plugin_pb.GetName.Response)) {
    throw new Error('Expected argument of type cloudquery.plugin.v3.GetName.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_plugin_v3_GetName_Response(buffer_arg) {
  return cloudquery_plugin_v3_plugin_pb.GetName.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cloudquery_plugin_v3_GetTables_Request(arg) {
  if (!(arg instanceof cloudquery_plugin_v3_plugin_pb.GetTables.Request)) {
    throw new Error('Expected argument of type cloudquery.plugin.v3.GetTables.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_plugin_v3_GetTables_Request(buffer_arg) {
  return cloudquery_plugin_v3_plugin_pb.GetTables.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cloudquery_plugin_v3_GetTables_Response(arg) {
  if (!(arg instanceof cloudquery_plugin_v3_plugin_pb.GetTables.Response)) {
    throw new Error('Expected argument of type cloudquery.plugin.v3.GetTables.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_plugin_v3_GetTables_Response(buffer_arg) {
  return cloudquery_plugin_v3_plugin_pb.GetTables.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cloudquery_plugin_v3_GetVersion_Request(arg) {
  if (!(arg instanceof cloudquery_plugin_v3_plugin_pb.GetVersion.Request)) {
    throw new Error('Expected argument of type cloudquery.plugin.v3.GetVersion.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_plugin_v3_GetVersion_Request(buffer_arg) {
  return cloudquery_plugin_v3_plugin_pb.GetVersion.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cloudquery_plugin_v3_GetVersion_Response(arg) {
  if (!(arg instanceof cloudquery_plugin_v3_plugin_pb.GetVersion.Response)) {
    throw new Error('Expected argument of type cloudquery.plugin.v3.GetVersion.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_plugin_v3_GetVersion_Response(buffer_arg) {
  return cloudquery_plugin_v3_plugin_pb.GetVersion.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cloudquery_plugin_v3_Init_Request(arg) {
  if (!(arg instanceof cloudquery_plugin_v3_plugin_pb.Init.Request)) {
    throw new Error('Expected argument of type cloudquery.plugin.v3.Init.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_plugin_v3_Init_Request(buffer_arg) {
  return cloudquery_plugin_v3_plugin_pb.Init.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cloudquery_plugin_v3_Init_Response(arg) {
  if (!(arg instanceof cloudquery_plugin_v3_plugin_pb.Init.Response)) {
    throw new Error('Expected argument of type cloudquery.plugin.v3.Init.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_plugin_v3_Init_Response(buffer_arg) {
  return cloudquery_plugin_v3_plugin_pb.Init.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cloudquery_plugin_v3_Read_Request(arg) {
  if (!(arg instanceof cloudquery_plugin_v3_plugin_pb.Read.Request)) {
    throw new Error('Expected argument of type cloudquery.plugin.v3.Read.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_plugin_v3_Read_Request(buffer_arg) {
  return cloudquery_plugin_v3_plugin_pb.Read.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cloudquery_plugin_v3_Read_Response(arg) {
  if (!(arg instanceof cloudquery_plugin_v3_plugin_pb.Read.Response)) {
    throw new Error('Expected argument of type cloudquery.plugin.v3.Read.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_plugin_v3_Read_Response(buffer_arg) {
  return cloudquery_plugin_v3_plugin_pb.Read.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cloudquery_plugin_v3_Sync_Request(arg) {
  if (!(arg instanceof cloudquery_plugin_v3_plugin_pb.Sync.Request)) {
    throw new Error('Expected argument of type cloudquery.plugin.v3.Sync.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_plugin_v3_Sync_Request(buffer_arg) {
  return cloudquery_plugin_v3_plugin_pb.Sync.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cloudquery_plugin_v3_Sync_Response(arg) {
  if (!(arg instanceof cloudquery_plugin_v3_plugin_pb.Sync.Response)) {
    throw new Error('Expected argument of type cloudquery.plugin.v3.Sync.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_plugin_v3_Sync_Response(buffer_arg) {
  return cloudquery_plugin_v3_plugin_pb.Sync.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cloudquery_plugin_v3_Write_Request(arg) {
  if (!(arg instanceof cloudquery_plugin_v3_plugin_pb.Write.Request)) {
    throw new Error('Expected argument of type cloudquery.plugin.v3.Write.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_plugin_v3_Write_Request(buffer_arg) {
  return cloudquery_plugin_v3_plugin_pb.Write.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cloudquery_plugin_v3_Write_Response(arg) {
  if (!(arg instanceof cloudquery_plugin_v3_plugin_pb.Write.Response)) {
    throw new Error('Expected argument of type cloudquery.plugin.v3.Write.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cloudquery_plugin_v3_Write_Response(buffer_arg) {
  return cloudquery_plugin_v3_plugin_pb.Write.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var PluginService = exports.PluginService = {
  // Get the name of the plugin
getName: {
    path: '/cloudquery.plugin.v3.Plugin/GetName',
    requestStream: false,
    responseStream: false,
    requestType: cloudquery_plugin_v3_plugin_pb.GetName.Request,
    responseType: cloudquery_plugin_v3_plugin_pb.GetName.Response,
    requestSerialize: serialize_cloudquery_plugin_v3_GetName_Request,
    requestDeserialize: deserialize_cloudquery_plugin_v3_GetName_Request,
    responseSerialize: serialize_cloudquery_plugin_v3_GetName_Response,
    responseDeserialize: deserialize_cloudquery_plugin_v3_GetName_Response,
  },
  // Get the current version of the plugin
getVersion: {
    path: '/cloudquery.plugin.v3.Plugin/GetVersion',
    requestStream: false,
    responseStream: false,
    requestType: cloudquery_plugin_v3_plugin_pb.GetVersion.Request,
    responseType: cloudquery_plugin_v3_plugin_pb.GetVersion.Response,
    requestSerialize: serialize_cloudquery_plugin_v3_GetVersion_Request,
    requestDeserialize: deserialize_cloudquery_plugin_v3_GetVersion_Request,
    responseSerialize: serialize_cloudquery_plugin_v3_GetVersion_Response,
    responseDeserialize: deserialize_cloudquery_plugin_v3_GetVersion_Response,
  },
  // Configure the plugin with the given credentials and mode
init: {
    path: '/cloudquery.plugin.v3.Plugin/Init',
    requestStream: false,
    responseStream: false,
    requestType: cloudquery_plugin_v3_plugin_pb.Init.Request,
    responseType: cloudquery_plugin_v3_plugin_pb.Init.Response,
    requestSerialize: serialize_cloudquery_plugin_v3_Init_Request,
    requestDeserialize: deserialize_cloudquery_plugin_v3_Init_Request,
    responseSerialize: serialize_cloudquery_plugin_v3_Init_Response,
    responseDeserialize: deserialize_cloudquery_plugin_v3_Init_Response,
  },
  // Get all tables the source plugin supports. Must be called after Init
getTables: {
    path: '/cloudquery.plugin.v3.Plugin/GetTables',
    requestStream: false,
    responseStream: false,
    requestType: cloudquery_plugin_v3_plugin_pb.GetTables.Request,
    responseType: cloudquery_plugin_v3_plugin_pb.GetTables.Response,
    requestSerialize: serialize_cloudquery_plugin_v3_GetTables_Request,
    requestDeserialize: deserialize_cloudquery_plugin_v3_GetTables_Request,
    responseSerialize: serialize_cloudquery_plugin_v3_GetTables_Response,
    responseDeserialize: deserialize_cloudquery_plugin_v3_GetTables_Response,
  },
  // Start a sync on the source plugin. It streams messages as output.
sync: {
    path: '/cloudquery.plugin.v3.Plugin/Sync',
    requestStream: false,
    responseStream: true,
    requestType: cloudquery_plugin_v3_plugin_pb.Sync.Request,
    responseType: cloudquery_plugin_v3_plugin_pb.Sync.Response,
    requestSerialize: serialize_cloudquery_plugin_v3_Sync_Request,
    requestDeserialize: deserialize_cloudquery_plugin_v3_Sync_Request,
    responseSerialize: serialize_cloudquery_plugin_v3_Sync_Response,
    responseDeserialize: deserialize_cloudquery_plugin_v3_Sync_Response,
  },
  // Start a Read on the source plugin for a given table and schema. It streams messages as output.
// The plugin assume that that schema was used to also write the data beforehand
read: {
    path: '/cloudquery.plugin.v3.Plugin/Read',
    requestStream: false,
    responseStream: true,
    requestType: cloudquery_plugin_v3_plugin_pb.Read.Request,
    responseType: cloudquery_plugin_v3_plugin_pb.Read.Response,
    requestSerialize: serialize_cloudquery_plugin_v3_Read_Request,
    requestDeserialize: deserialize_cloudquery_plugin_v3_Read_Request,
    responseSerialize: serialize_cloudquery_plugin_v3_Read_Response,
    responseDeserialize: deserialize_cloudquery_plugin_v3_Read_Response,
  },
  // Write resources. Write is the mirror of Sync, expecting a stream of messages as input.
write: {
    path: '/cloudquery.plugin.v3.Plugin/Write',
    requestStream: true,
    responseStream: false,
    requestType: cloudquery_plugin_v3_plugin_pb.Write.Request,
    responseType: cloudquery_plugin_v3_plugin_pb.Write.Response,
    requestSerialize: serialize_cloudquery_plugin_v3_Write_Request,
    requestDeserialize: deserialize_cloudquery_plugin_v3_Write_Request,
    responseSerialize: serialize_cloudquery_plugin_v3_Write_Response,
    responseDeserialize: deserialize_cloudquery_plugin_v3_Write_Response,
  },
  // Send signal to flush and close open connections
close: {
    path: '/cloudquery.plugin.v3.Plugin/Close',
    requestStream: false,
    responseStream: false,
    requestType: cloudquery_plugin_v3_plugin_pb.Close.Request,
    responseType: cloudquery_plugin_v3_plugin_pb.Close.Response,
    requestSerialize: serialize_cloudquery_plugin_v3_Close_Request,
    requestDeserialize: deserialize_cloudquery_plugin_v3_Close_Request,
    responseSerialize: serialize_cloudquery_plugin_v3_Close_Response,
    responseDeserialize: deserialize_cloudquery_plugin_v3_Close_Response,
  },
};

exports.PluginClient = grpc.makeGenericClientConstructor(PluginService);
