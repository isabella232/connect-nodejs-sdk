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
 * The ListEmployeesRequest model module.
 * @module model/ListEmployeesRequest
 */

/**
 * Constructs a new <code>ListEmployeesRequest</code>.
 * 
 * @alias module:model/ListEmployeesRequest
 * @class
 */
var exports = function() {
  var _this = this;





};

/**
 * Constructs a <code>ListEmployeesRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ListEmployeesRequest} obj Optional instance to populate.
 * @return {module:model/ListEmployeesRequest} The populated <code>ListEmployeesRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
      if (data.hasOwnProperty('limit')) {
      obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
    }
  return obj;
}

/**
 * Filter employees returned to only those that are associated with the specified location.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * Specifies the EmployeeStatus to filter the employee by. See [EmployeeStatus](#type-employeestatus) for possible values
 * @member {String} status
 */
exports.prototype['status'] = undefined;
/**
 * The number of employees to be returned on each page.
 * @member {Number} limit
 */
exports.prototype['limit'] = undefined;
/**
 * The token required to retrieve the specified page of results.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



