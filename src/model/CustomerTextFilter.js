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
 * The CustomerTextFilter model module.
 * Note: This model is in beta.
 * @module model/CustomerTextFilter
 */

/**
 * Constructs a new <code>CustomerTextFilter</code>.
 * A filter to select customers based on exact or fuzzy matching of customer attributes against a specified query. Depending on customer attributes,  the filter can be case sensitive. This filter can be either exact or fuzzy. It cannot be both.
 * @alias module:model/CustomerTextFilter
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>CustomerTextFilter</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CustomerTextFilter} obj Optional instance to populate.
 * @return {module:model/CustomerTextFilter} The populated <code>CustomerTextFilter</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('exact')) {
      obj['exact'] = ApiClient.convertToType(data['exact'], 'String');
    }
      if (data.hasOwnProperty('fuzzy')) {
      obj['fuzzy'] = ApiClient.convertToType(data['fuzzy'], 'String');
    }
    }
  return obj;
}

/**
 * Use the exact filter to select customers whose attributes match exactly the specified query.
 * @member {String} exact
 */
exports.prototype['exact'] = undefined;
/**
 * Use the fuzzy filter to select customers whose attributes match the specified query  in a fuzzy manner. When the fuzzy option is used, search queries are tokenized, and then  each query token must be matched somewhere in the searched attribute. For single token queries,  this is effectively the same behavior as a partial match operation.
 * @member {String} fuzzy
 */
exports.prototype['fuzzy'] = undefined;



module.exports = exports;



