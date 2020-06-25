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
var TeamMember = require('./TeamMember');




/**
 * The SearchTeamMembersResponse model module.
 * @module model/SearchTeamMembersResponse
 */

/**
 * Constructs a new <code>SearchTeamMembersResponse</code>.
 * Represents a response from a search request, containing a filtered list of &#x60;TeamMember&#x60; objects.
 * @alias module:model/SearchTeamMembersResponse
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>SearchTeamMembersResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchTeamMembersResponse} obj Optional instance to populate.
 * @return {module:model/SearchTeamMembersResponse} The populated <code>SearchTeamMembersResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('team_members')) {
      obj['team_members'] = ApiClient.convertToType(data['team_members'], [TeamMember]);
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
    }
  return obj;
}

/**
 * The filtered list of `TeamMember` objects.
 * @member {Array.<module:model/TeamMember>} team_members
 */
exports.prototype['team_members'] = undefined;
/**
 * The opaque cursor for fetching the next page. Read about [pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) with Square APIs for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;
/**
 * The errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;



module.exports = exports;



