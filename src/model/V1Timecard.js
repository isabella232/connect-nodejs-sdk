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
 * The V1Timecard model module.
 * @module model/V1Timecard
 * @version 2.5.5
 */

/**
 * Constructs a new <code>V1Timecard</code>.
 * Represents a timecard for an employee.
 * @alias module:model/V1Timecard
 * @class
 * @param employeeId {String} The ID of the employee the timecard is associated with.
 */
var exports = function(employeeId) {
  var _this = this;


  _this['employee_id'] = employeeId;







};

/**
 * Constructs a <code>V1Timecard</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1Timecard} obj Optional instance to populate.
 * @return {module:model/V1Timecard} The populated <code>V1Timecard</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('employee_id')) {
      obj['employee_id'] = ApiClient.convertToType(data['employee_id'], 'String');
    }
      if (data.hasOwnProperty('deleted')) {
      obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
    }
      if (data.hasOwnProperty('clockin_time')) {
      obj['clockin_time'] = ApiClient.convertToType(data['clockin_time'], 'String');
    }
      if (data.hasOwnProperty('clockout_time')) {
      obj['clockout_time'] = ApiClient.convertToType(data['clockout_time'], 'String');
    }
      if (data.hasOwnProperty('clockin_location_id')) {
      obj['clockin_location_id'] = ApiClient.convertToType(data['clockin_location_id'], 'String');
    }
      if (data.hasOwnProperty('clockout_location_id')) {
      obj['clockout_location_id'] = ApiClient.convertToType(data['clockout_location_id'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
    }
    }
  return obj;
}

/**
 * The timecard's unique ID.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The ID of the employee the timecard is associated with.
 * @member {String} employee_id
 */
exports.prototype['employee_id'] = undefined;
/**
 * If true, the timecard was deleted by the merchant, and it is no longer valid.
 * @member {Boolean} deleted
 */
exports.prototype['deleted'] = undefined;
/**
 * The clock-in time for the timecard, in ISO 8601 format.
 * @member {String} clockin_time
 */
exports.prototype['clockin_time'] = undefined;
/**
 * The clock-out time for the timecard, in ISO 8601 format. Provide this value only if importing timecard information from another system.
 * @member {String} clockout_time
 */
exports.prototype['clockout_time'] = undefined;
/**
 * The ID of the location the employee clocked in from, if any.
 * @member {String} clockin_location_id
 */
exports.prototype['clockin_location_id'] = undefined;
/**
 * The ID of the location the employee clocked out from. Provide this value only if importing timecard information from another system.
 * @member {String} clockout_location_id
 */
exports.prototype['clockout_location_id'] = undefined;
/**
 * The time when the timecard was created, in ISO 8601 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * The time when the timecard was most recently updated, in ISO 8601 format.
 * @member {String} updated_at
 */
exports.prototype['updated_at'] = undefined;



module.exports = exports;



