/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');




/**
 * The PayOrderRequest model module.
 * Note: This model is in beta.
 * @module model/PayOrderRequest
 */

/**
 * Constructs a new <code>PayOrderRequest</code>.
 * Defines the fields that are included in requests to the [PayOrder](#endpoint-payorder) endpoint.
 * @alias module:model/PayOrderRequest
 * @class
 * @param idempotencyKey {String} A value you specify that uniquely identifies this request among requests you've sent. If you're unsure whether a particular payment request was completed successfully, you can reattempt it with the same idempotency key without worrying about duplicate payments.  See [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency) for more information.
 */
var exports = function(idempotencyKey) {
  var _this = this;

  _this['idempotency_key'] = idempotencyKey;


};

/**
 * Constructs a <code>PayOrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/PayOrderRequest} obj Optional instance to populate.
 * @return {module:model/PayOrderRequest} The populated <code>PayOrderRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('order_version')) {
      obj['order_version'] = ApiClient.convertToType(data['order_version'], 'Number');
    }
      if (data.hasOwnProperty('payment_ids')) {
      obj['payment_ids'] = ApiClient.convertToType(data['payment_ids'], ['String']);
    }
    }
  return obj;
}

/**
 * A value you specify that uniquely identifies this request among requests you've sent. If you're unsure whether a particular payment request was completed successfully, you can reattempt it with the same idempotency key without worrying about duplicate payments.  See [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency) for more information.
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * The version of the order being paid. If not supplied, the latest version will be paid.
 * @member {Number} order_version
 */
exports.prototype['order_version'] = undefined;
/**
 * 
 * @member {Array.<String>} payment_ids
 */
exports.prototype['payment_ids'] = undefined;



module.exports = exports;


