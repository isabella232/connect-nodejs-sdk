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
 * The CatalogItemOptionForItem model module.
 * Note: This model is in beta.
 * @module model/CatalogItemOptionForItem
 */

/**
 * Constructs a new <code>CatalogItemOptionForItem</code>.
 *  A list of item option values that can be assigned to item variations. For example, a t-shirt item may offer a color option or a size option.
 * @alias module:model/CatalogItemOptionForItem
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>CatalogItemOptionForItem</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogItemOptionForItem} obj Optional instance to populate.
 * @return {module:model/CatalogItemOptionForItem} The populated <code>CatalogItemOptionForItem</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('item_option_id')) {
      obj['item_option_id'] = ApiClient.convertToType(data['item_option_id'], 'String');
    }
    }
  return obj;
}

/**
 * The unique id of the item option, used to form the dimensions of the item option matrix in a specified order.
 * @member {String} item_option_id
 */
exports.prototype['item_option_id'] = undefined;



module.exports = exports;


