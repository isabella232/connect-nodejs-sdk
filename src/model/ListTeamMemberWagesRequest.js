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
 * The ListTeamMemberWagesRequest model module.
 * @module model/ListTeamMemberWagesRequest
 */

/**
 * Constructs a new <code>ListTeamMemberWagesRequest</code>.
 * A request for a set of &#x60;TeamMemberWage&#x60; objects
 * @alias module:model/ListTeamMemberWagesRequest
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>ListTeamMemberWagesRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ListTeamMemberWagesRequest} obj Optional instance to populate.
 * @return {module:model/ListTeamMemberWagesRequest} The populated <code>ListTeamMemberWagesRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('team_member_id')) {
      obj['team_member_id'] = ApiClient.convertToType(data['team_member_id'], 'String');
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
 * Filter wages returned to only those that are associated with the specified team member.
 * @member {String} team_member_id
 */
exports.prototype['team_member_id'] = undefined;
/**
 * Maximum number of Team Member Wages to return per page. Can range between 1 and 200. The default is the maximum at 200.
 * @member {Number} limit
 */
exports.prototype['limit'] = undefined;
/**
 * Pointer to the next page of Employee Wage results to fetch.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



