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
var TimeRange = require('./TimeRange');




/**
 * The TerminalCheckoutQueryFilter model module.
 * Note: This model is in beta.
 * @module model/TerminalCheckoutQueryFilter
 */

/**
 * Constructs a new <code>TerminalCheckoutQueryFilter</code>.
 * 
 * @alias module:model/TerminalCheckoutQueryFilter
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>TerminalCheckoutQueryFilter</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/TerminalCheckoutQueryFilter} obj Optional instance to populate.
 * @return {module:model/TerminalCheckoutQueryFilter} The populated <code>TerminalCheckoutQueryFilter</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('device_id')) {
      obj['device_id'] = ApiClient.convertToType(data['device_id'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = TimeRange.constructFromObject(data['created_at']);
    }
      if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
    }
  return obj;
}

/**
 * `TerminalCheckout`s associated with a specific device. If no device is specified then all `TerminalCheckout`s for the merchant will be displayed.
 * @member {String} device_id
 */
exports.prototype['device_id'] = undefined;
/**
 * Time range for the beginning of the reporting period. Inclusive. Default: The current time minus one day.
 * @member {module:model/TimeRange} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * Filtered results with the desired status of the `TerminalCheckout` Options: PENDING, IN\\_PROGRESS, CANCELED, COMPLETED
 * @member {String} status
 */
exports.prototype['status'] = undefined;



module.exports = exports;


