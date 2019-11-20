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
var Money = require('./Money');




/**
 * The ItemVariationLocationOverrides model module.
 * @module model/ItemVariationLocationOverrides
 */

/**
 * Constructs a new <code>ItemVariationLocationOverrides</code>.
 * Price and inventory alerting overrides for a &#x60;CatalogItemVariation&#x60; at a specific &#x60;Location&#x60;.
 * @alias module:model/ItemVariationLocationOverrides
 * @class
 */
var exports = function() {
  var _this = this;







};

/**
 * Constructs a <code>ItemVariationLocationOverrides</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ItemVariationLocationOverrides} obj Optional instance to populate.
 * @return {module:model/ItemVariationLocationOverrides} The populated <code>ItemVariationLocationOverrides</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('price_money')) {
      obj['price_money'] = Money.constructFromObject(data['price_money']);
    }
      if (data.hasOwnProperty('pricing_type')) {
      obj['pricing_type'] = ApiClient.convertToType(data['pricing_type'], 'String');
    }
      if (data.hasOwnProperty('track_inventory')) {
      obj['track_inventory'] = ApiClient.convertToType(data['track_inventory'], 'Boolean');
    }
      if (data.hasOwnProperty('inventory_alert_type')) {
      obj['inventory_alert_type'] = ApiClient.convertToType(data['inventory_alert_type'], 'String');
    }
      if (data.hasOwnProperty('inventory_alert_threshold')) {
      obj['inventory_alert_threshold'] = ApiClient.convertToType(data['inventory_alert_threshold'], 'Number');
    }
    }
  return obj;
}

/**
 * The ID of the `Location`.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * The price of the `CatalogItemVariation` at the given `Location`, or blank for variable pricing.
 * @member {module:model/Money} price_money
 */
exports.prototype['price_money'] = undefined;
/**
 * The pricing type (fixed or variable) for the `CatalogItemVariation` at the given `Location`. See [CatalogPricingType](#type-catalogpricingtype) for possible values
 * @member {String} pricing_type
 */
exports.prototype['pricing_type'] = undefined;
/**
 * If `true`, inventory tracking is active for the `CatalogItemVariation` at this `Location`.
 * @member {Boolean} track_inventory
 */
exports.prototype['track_inventory'] = undefined;
/**
 * Indicates whether the `CatalogItemVariation` displays an alert when its inventory quantity is less than or equal to its `inventory_alert_threshold`. See [InventoryAlertType](#type-inventoryalerttype) for possible values
 * @member {String} inventory_alert_type
 */
exports.prototype['inventory_alert_type'] = undefined;
/**
 * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type` is `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard.  This value is always an integer.
 * @member {Number} inventory_alert_threshold
 */
exports.prototype['inventory_alert_threshold'] = undefined;



module.exports = exports;



