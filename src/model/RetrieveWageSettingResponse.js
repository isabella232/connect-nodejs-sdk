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
var Error = require('./Error');
var WageSetting = require('./WageSetting');




/**
 * The RetrieveWageSettingResponse model module.
 * @module model/RetrieveWageSettingResponse
 */

/**
 * Constructs a new <code>RetrieveWageSettingResponse</code>.
 * Represents a response from a retrieve request, containing the specified &#x60;WageSetting&#x60; object or error messages.
 * @alias module:model/RetrieveWageSettingResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>RetrieveWageSettingResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RetrieveWageSettingResponse} obj Optional instance to populate.
 * @return {module:model/RetrieveWageSettingResponse} The populated <code>RetrieveWageSettingResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('wage_setting')) {
      obj['wage_setting'] = WageSetting.constructFromObject(data['wage_setting']);
    }
      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
    }
  return obj;
}

/**
 * The successfully retrieved `WageSetting` object.
 * @member {module:model/WageSetting} wage_setting
 */
exports.prototype['wage_setting'] = undefined;
/**
 * The errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;



module.exports = exports;



