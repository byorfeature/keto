// source: ory/keto/relation_tuples/v1alpha2/read_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var ory_keto_relation_tuples_v1alpha2_relation_tuples_pb = require('../../../../ory/keto/relation_tuples/v1alpha2/relation_tuples_pb.js');
goog.object.extend(proto, ory_keto_relation_tuples_v1alpha2_relation_tuples_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
goog.exportSymbol('proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest', null, global);
goog.exportSymbol('proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query', null, global);
goog.exportSymbol('proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.displayName = 'proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.displayName = 'proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.repeatedFields_, null);
};
goog.inherits(proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.displayName = 'proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.toObject(includeInstance, f),
    expandMask: (f = msg.getExpandMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    snaptoken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest;
  return proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query;
      reader.readMessage(value,proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setExpandMask(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnaptoken(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.serializeBinaryToWriter
    );
  }
  f = message.getExpandMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getSnaptoken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.toObject = function(opt_includeInstance) {
  return proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    object: jspb.Message.getFieldWithDefault(msg, 2, ""),
    relation: jspb.Message.getFieldWithDefault(msg, 3, ""),
    subject: (f = msg.getSubject()) && ory_keto_relation_tuples_v1alpha2_relation_tuples_pb.Subject.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query;
  return proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setObject(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelation(value);
      break;
    case 4:
      var value = new ory_keto_relation_tuples_v1alpha2_relation_tuples_pb.Subject;
      reader.readMessage(value,ory_keto_relation_tuples_v1alpha2_relation_tuples_pb.Subject.deserializeBinaryFromReader);
      msg.setSubject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSubject();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      ory_keto_relation_tuples_v1alpha2_relation_tuples_pb.Subject.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query} returns this
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.setNamespace = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query} returns this
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.clearNamespace = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.hasNamespace = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string object = 2;
 * @return {string}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.getObject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query} returns this
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.setObject = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query} returns this
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.clearObject = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string relation = 3;
 * @return {string}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.getRelation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query} returns this
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.setRelation = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query} returns this
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.clearRelation = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.hasRelation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Subject subject = 4;
 * @return {?proto.ory.keto.relation_tuples.v1alpha2.Subject}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.getSubject = function() {
  return /** @type{?proto.ory.keto.relation_tuples.v1alpha2.Subject} */ (
    jspb.Message.getWrapperField(this, ory_keto_relation_tuples_v1alpha2_relation_tuples_pb.Subject, 4));
};


/**
 * @param {?proto.ory.keto.relation_tuples.v1alpha2.Subject|undefined} value
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query} returns this
*/
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.setSubject = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query} returns this
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.clearSubject = function() {
  return this.setSubject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query.prototype.hasSubject = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Query query = 1;
 * @return {?proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.prototype.getQuery = function() {
  return /** @type{?proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query} */ (
    jspb.Message.getWrapperField(this, proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query, 1));
};


/**
 * @param {?proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.Query|undefined} value
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest} returns this
*/
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest} returns this
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask expand_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.prototype.getExpandMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest} returns this
*/
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.prototype.setExpandMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest} returns this
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.prototype.clearExpandMask = function() {
  return this.setExpandMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.prototype.hasExpandMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string snaptoken = 3;
 * @return {string}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.prototype.getSnaptoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest} returns this
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.prototype.setSnaptoken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest} returns this
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest} returns this
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    relationTuplesList: jspb.Message.toObjectList(msg.getRelationTuplesList(),
    ory_keto_relation_tuples_v1alpha2_relation_tuples_pb.RelationTuple.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse;
  return proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ory_keto_relation_tuples_v1alpha2_relation_tuples_pb.RelationTuple;
      reader.readMessage(value,ory_keto_relation_tuples_v1alpha2_relation_tuples_pb.RelationTuple.deserializeBinaryFromReader);
      msg.addRelationTuples(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelationTuplesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      ory_keto_relation_tuples_v1alpha2_relation_tuples_pb.RelationTuple.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated RelationTuple relation_tuples = 1;
 * @return {!Array<!proto.ory.keto.relation_tuples.v1alpha2.RelationTuple>}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.prototype.getRelationTuplesList = function() {
  return /** @type{!Array<!proto.ory.keto.relation_tuples.v1alpha2.RelationTuple>} */ (
    jspb.Message.getRepeatedWrapperField(this, ory_keto_relation_tuples_v1alpha2_relation_tuples_pb.RelationTuple, 1));
};


/**
 * @param {!Array<!proto.ory.keto.relation_tuples.v1alpha2.RelationTuple>} value
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse} returns this
*/
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.prototype.setRelationTuplesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ory.keto.relation_tuples.v1alpha2.RelationTuple=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.RelationTuple}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.prototype.addRelationTuples = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ory.keto.relation_tuples.v1alpha2.RelationTuple, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse} returns this
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.prototype.clearRelationTuplesList = function() {
  return this.setRelationTuplesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse} returns this
 */
proto.ory.keto.relation_tuples.v1alpha2.ListRelationTuplesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.ory.keto.relation_tuples.v1alpha2);
