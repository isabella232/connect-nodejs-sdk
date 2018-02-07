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
var Customer = require('./Customer');
var Error = require('./Error');




/**
 * The UpdateCustomerResponse model module.
 * @module model/UpdateCustomerResponse
 * @version 2.5.5
 */

/**
 * Constructs a new <code>UpdateCustomerResponse</code>.
 * Defines the fields that are included in the response body of a request to the [UpdateCustomer](#endpoint-updatecustomer) endpoint.  One of &#x60;errors&#x60; or &#x60;customer&#x60; is present in a given response (never both).
 * @alias module:model/UpdateCustomerResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>UpdateCustomerResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/UpdateCustomerResponse} obj Optional instance to populate.
 * @return {module:model/UpdateCustomerResponse} The populated <code>UpdateCustomerResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('customer')) {
      obj['customer'] = Customer.constructFromObject(data['customer']);
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The updated customer.
 * @member {module:model/Customer} customer
 */
exports.prototype['customer'] = undefined;



module.exports = exports;



