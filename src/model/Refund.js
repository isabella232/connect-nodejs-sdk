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
var AdditionalRecipient = require('./AdditionalRecipient');
var Money = require('./Money');




/**
 * The Refund model module.
 * @module model/Refund
 */

/**
 * Constructs a new <code>Refund</code>.
 * Represents a refund processed for a Square transaction.
 * @alias module:model/Refund
 * @class
 * @param id {String} The refund's unique ID.
 * @param locationId {String} The ID of the refund's associated location.
 * @param transactionId {String} The ID of the transaction that the refunded tender is part of.
 * @param tenderId {String} The ID of the refunded tender.
 * @param reason {String} The reason for the refund being issued.
 * @param amountMoney {module:model/Money} The amount of money refunded to the buyer.
 * @param status {String} The current status of the refund (`PENDING`, `APPROVED`, `REJECTED`, or `FAILED`). See [RefundStatus](#type-refundstatus) for possible values
 */
var exports = function(id, locationId, transactionId, tenderId, reason, amountMoney, status) {
  var _this = this;

  _this['id'] = id;
  _this['location_id'] = locationId;
  _this['transaction_id'] = transactionId;
  _this['tender_id'] = tenderId;

  _this['reason'] = reason;
  _this['amount_money'] = amountMoney;
  _this['status'] = status;


};

/**
 * Constructs a <code>Refund</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Refund} obj Optional instance to populate.
 * @return {module:model/Refund} The populated <code>Refund</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('transaction_id')) {
      obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
    }
      if (data.hasOwnProperty('tender_id')) {
      obj['tender_id'] = ApiClient.convertToType(data['tender_id'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('reason')) {
      obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
      if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
      if (data.hasOwnProperty('processing_fee_money')) {
      obj['processing_fee_money'] = Money.constructFromObject(data['processing_fee_money']);
    }
      if (data.hasOwnProperty('additional_recipients')) {
      obj['additional_recipients'] = ApiClient.convertToType(data['additional_recipients'], [AdditionalRecipient]);
    }
    }
  return obj;
}

/**
 * The refund's unique ID.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The ID of the refund's associated location.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * The ID of the transaction that the refunded tender is part of.
 * @member {String} transaction_id
 */
exports.prototype['transaction_id'] = undefined;
/**
 * The ID of the refunded tender.
 * @member {String} tender_id
 */
exports.prototype['tender_id'] = undefined;
/**
 * The timestamp for when the refund was created, in RFC 3339 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * The reason for the refund being issued.
 * @member {String} reason
 */
exports.prototype['reason'] = undefined;
/**
 * The amount of money refunded to the buyer.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;
/**
 * The current status of the refund (`PENDING`, `APPROVED`, `REJECTED`, or `FAILED`). See [RefundStatus](#type-refundstatus) for possible values
 * @member {String} status
 */
exports.prototype['status'] = undefined;
/**
 * The amount of Square processing fee money refunded to the *merchant*.
 * @member {module:model/Money} processing_fee_money
 */
exports.prototype['processing_fee_money'] = undefined;
/**
 * Additional recipients (other than the merchant) receiving a portion of this refund. For example, fees assessed on a refund of a purchase by a third party integration.
 * @member {Array.<module:model/AdditionalRecipient>} additional_recipients
 */
exports.prototype['additional_recipients'] = undefined;



module.exports = exports;



