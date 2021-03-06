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
 * The CatalogItemOptionValue model module.
 * Note: This model is in beta.
 * @module model/CatalogItemOptionValue
 */

/**
 * Constructs a new <code>CatalogItemOptionValue</code>.
 * An enumerated value that can link a &#x60;CatalogItemVariation&#x60; to an item option as one of its item option values.
 * @alias module:model/CatalogItemOptionValue
 * @class
 */
var exports = function() {
  var _this = this;






};

/**
 * Constructs a <code>CatalogItemOptionValue</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogItemOptionValue} obj Optional instance to populate.
 * @return {module:model/CatalogItemOptionValue} The populated <code>CatalogItemOptionValue</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('item_option_id')) {
      obj['item_option_id'] = ApiClient.convertToType(data['item_option_id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('description')) {
      obj['description'] = ApiClient.convertToType(data['description'], 'String');
    }
      if (data.hasOwnProperty('color')) {
      obj['color'] = ApiClient.convertToType(data['color'], 'String');
    }
      if (data.hasOwnProperty('ordinal')) {
      obj['ordinal'] = ApiClient.convertToType(data['ordinal'], 'Number');
    }
    }
  return obj;
}

/**
 * Unique ID of the associated item option.
 * @member {String} item_option_id
 */
exports.prototype['item_option_id'] = undefined;
/**
 * Name of this item option value. This is a searchable attribute for use in applicable query filters.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * A human-readable description for the option value. This is a searchable attribute for use in applicable query filters.
 * @member {String} description
 */
exports.prototype['description'] = undefined;
/**
 * The HTML-supported hex color for the item option (e.g., \"#ff8d4e85\"). Only displayed if `show_colors` is enabled on the parent `ItemOption`. When left unset, `color` defaults to white (\"#ffffff\") when `show_colors` is enabled on the parent `ItemOption`.
 * @member {String} color
 */
exports.prototype['color'] = undefined;
/**
 * Determines where this option value appears in a list of option values.
 * @member {Number} ordinal
 */
exports.prototype['ordinal'] = undefined;



module.exports = exports;



