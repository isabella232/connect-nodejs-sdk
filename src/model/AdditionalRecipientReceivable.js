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
var AdditionalRecipientReceivableRefund = require('./AdditionalRecipientReceivableRefund');
var Money = require('./Money');




/**
 * The AdditionalRecipientReceivable model module.
 * @module model/AdditionalRecipientReceivable
 * @version 2.5.5
 */

/**
 * Constructs a new <code>AdditionalRecipientReceivable</code>.
 * Represents a monetary distribution of part of a [Transaction](#type-transaction)&#39;s amount for Transactions which included additional recipients. The location of this receivable is that same as the one specified in the [AdditionalRecipient](#type-additionalrecipient).
 * @alias module:model/AdditionalRecipientReceivable
 * @class
 * @param id {String} The additional recipient receivable's unique ID, issued by Square payments servers.
 * @param transactionId {String} The ID of the transaction that the additional recipient receivable was applied to.
 * @param transactionLocationId {String} The ID of the location that created the receivable. This is the location ID on the associated transaction.
 * @param amountMoney {module:model/Money} The amount of the receivable. This will always be non-negative.
 */
var exports = function(id, transactionId, transactionLocationId, amountMoney) {
  var _this = this;

  _this['id'] = id;
  _this['transaction_id'] = transactionId;
  _this['transaction_location_id'] = transactionLocationId;
  _this['amount_money'] = amountMoney;


};

/**
 * Constructs a <code>AdditionalRecipientReceivable</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/AdditionalRecipientReceivable} obj Optional instance to populate.
 * @return {module:model/AdditionalRecipientReceivable} The populated <code>AdditionalRecipientReceivable</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('transaction_id')) {
      obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
    }
      if (data.hasOwnProperty('transaction_location_id')) {
      obj['transaction_location_id'] = ApiClient.convertToType(data['transaction_location_id'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('refunds')) {
      obj['refunds'] = ApiClient.convertToType(data['refunds'], [AdditionalRecipientReceivableRefund]);
    }
    }
  return obj;
}

/**
 * The additional recipient receivable's unique ID, issued by Square payments servers.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The ID of the transaction that the additional recipient receivable was applied to.
 * @member {String} transaction_id
 */
exports.prototype['transaction_id'] = undefined;
/**
 * The ID of the location that created the receivable. This is the location ID on the associated transaction.
 * @member {String} transaction_location_id
 */
exports.prototype['transaction_location_id'] = undefined;
/**
 * The amount of the receivable. This will always be non-negative.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;
/**
 * The time when the additional recipient receivable was created, in RFC 3339 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * Any refunds of the receivable that have been applied.
 * @member {Array.<module:model/AdditionalRecipientReceivableRefund>} refunds
 */
exports.prototype['refunds'] = undefined;



module.exports = exports;



