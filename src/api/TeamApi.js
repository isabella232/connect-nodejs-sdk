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
var BulkCreateTeamMembersRequest = require('../model/BulkCreateTeamMembersRequest');
var BulkCreateTeamMembersResponse = require('../model/BulkCreateTeamMembersResponse');
var BulkUpdateTeamMembersRequest = require('../model/BulkUpdateTeamMembersRequest');
var BulkUpdateTeamMembersResponse = require('../model/BulkUpdateTeamMembersResponse');
var CreateTeamMemberRequest = require('../model/CreateTeamMemberRequest');
var CreateTeamMemberResponse = require('../model/CreateTeamMemberResponse');
var RetrieveTeamMemberResponse = require('../model/RetrieveTeamMemberResponse');
var RetrieveWageSettingResponse = require('../model/RetrieveWageSettingResponse');
var SearchTeamMembersRequest = require('../model/SearchTeamMembersRequest');
var SearchTeamMembersResponse = require('../model/SearchTeamMembersResponse');
var UpdateTeamMemberRequest = require('../model/UpdateTeamMemberRequest');
var UpdateTeamMemberResponse = require('../model/UpdateTeamMemberResponse');
var UpdateWageSettingRequest = require('../model/UpdateWageSettingRequest');
var UpdateWageSettingResponse = require('../model/UpdateWageSettingResponse');

/**
 * Team service.
 * @module api/TeamApi
 */

/**
 * Constructs a new TeamApi. 
 * @alias module:api/TeamApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * BulkCreateTeamMembers
   * Creates multiple &#x60;TeamMember&#x60; objects. The created &#x60;TeamMember&#x60; objects will be returned on successful creates. This process is non-transactional and will process as much of the request as is possible. If one of the creates in the request cannot be successfully processed, the request will NOT be marked as failed, but the body of the response will contain explicit error information for this particular create.  Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#bulkcreateteammembers).
   * @param {module:model/BulkCreateTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BulkCreateTeamMembersResponse} and HTTP response
   */
  this.bulkCreateTeamMembersWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling bulkCreateTeamMembers");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = BulkCreateTeamMembersResponse;

    return this.apiClient.callApi(
      '/v2/team-members/bulk-create', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * BulkCreateTeamMembers
   * Creates multiple &#x60;TeamMember&#x60; objects. The created &#x60;TeamMember&#x60; objects will be returned on successful creates. This process is non-transactional and will process as much of the request as is possible. If one of the creates in the request cannot be successfully processed, the request will NOT be marked as failed, but the body of the response will contain explicit error information for this particular create.  Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#bulkcreateteammembers).
   * @param {module:model/BulkCreateTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BulkCreateTeamMembersResponse}
   */
  this.bulkCreateTeamMembers = function(body) {
    return this.bulkCreateTeamMembersWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * BulkUpdateTeamMembers
   * Updates multiple &#x60;TeamMember&#x60; objects. The updated &#x60;TeamMember&#x60; objects will be returned on successful updates. This process is non-transactional and will process as much of the request as is possible. If one of the updates in the request cannot be successfully processed, the request will NOT be marked as failed, but the body of the response will contain explicit error information for this particular update. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#bulkupdateteammembers).
   * @param {module:model/BulkUpdateTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BulkUpdateTeamMembersResponse} and HTTP response
   */
  this.bulkUpdateTeamMembersWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling bulkUpdateTeamMembers");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = BulkUpdateTeamMembersResponse;

    return this.apiClient.callApi(
      '/v2/team-members/bulk-update', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * BulkUpdateTeamMembers
   * Updates multiple &#x60;TeamMember&#x60; objects. The updated &#x60;TeamMember&#x60; objects will be returned on successful updates. This process is non-transactional and will process as much of the request as is possible. If one of the updates in the request cannot be successfully processed, the request will NOT be marked as failed, but the body of the response will contain explicit error information for this particular update. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#bulkupdateteammembers).
   * @param {module:model/BulkUpdateTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BulkUpdateTeamMembersResponse}
   */
  this.bulkUpdateTeamMembers = function(body) {
    return this.bulkUpdateTeamMembersWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * CreateTeamMember
   * Creates a single &#x60;TeamMember&#x60; object. The &#x60;TeamMember&#x60; will be returned on successful creates. You must provide the following values in your request to this endpoint: - &#x60;first_name&#x60; - &#x60;last_name&#x60; Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#createteammember).
   * @param {module:model/CreateTeamMemberRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateTeamMemberResponse} and HTTP response
   */
  this.createTeamMemberWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createTeamMember");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CreateTeamMemberResponse;

    return this.apiClient.callApi(
      '/v2/team-members', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateTeamMember
   * Creates a single &#x60;TeamMember&#x60; object. The &#x60;TeamMember&#x60; will be returned on successful creates. You must provide the following values in your request to this endpoint: - &#x60;first_name&#x60; - &#x60;last_name&#x60; Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#createteammember).
   * @param {module:model/CreateTeamMemberRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateTeamMemberResponse}
   */
  this.createTeamMember = function(body) {
    return this.createTeamMemberWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveTeamMember
   * Retrieve a &#x60;TeamMember&#x60; object for the given &#x60;TeamMember.id&#x60; Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#retrieveteammember).
   * @param {String} teamMemberId The ID of the team member to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveTeamMemberResponse} and HTTP response
   */
  this.retrieveTeamMemberWithHttpInfo = function(teamMemberId) {
    var postBody = null;

    // verify the required parameter 'teamMemberId' is set
    if (teamMemberId === undefined || teamMemberId === null) {
      throw new Error("Missing the required parameter 'teamMemberId' when calling retrieveTeamMember");
    }


    var pathParams = {
      'team_member_id': teamMemberId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RetrieveTeamMemberResponse;

    return this.apiClient.callApi(
      '/v2/team-members/{team_member_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveTeamMember
   * Retrieve a &#x60;TeamMember&#x60; object for the given &#x60;TeamMember.id&#x60; Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#retrieveteammember).
   * @param {String} teamMemberId The ID of the team member to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveTeamMemberResponse}
   */
  this.retrieveTeamMember = function(teamMemberId) {
    return this.retrieveTeamMemberWithHttpInfo(teamMemberId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveWageSetting
   * Retrieve a &#x60;WageSetting&#x60; object for a team member specified by &#x60;TeamMember.id&#x60;. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#retrievewagesetting).
   * @param {String} teamMemberId The ID of the team member to retrieve wage setting for
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveWageSettingResponse} and HTTP response
   */
  this.retrieveWageSettingWithHttpInfo = function(teamMemberId) {
    var postBody = null;

    // verify the required parameter 'teamMemberId' is set
    if (teamMemberId === undefined || teamMemberId === null) {
      throw new Error("Missing the required parameter 'teamMemberId' when calling retrieveWageSetting");
    }


    var pathParams = {
      'team_member_id': teamMemberId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RetrieveWageSettingResponse;

    return this.apiClient.callApi(
      '/v2/team-members/{team_member_id}/wage-setting', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveWageSetting
   * Retrieve a &#x60;WageSetting&#x60; object for a team member specified by &#x60;TeamMember.id&#x60;. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#retrievewagesetting).
   * @param {String} teamMemberId The ID of the team member to retrieve wage setting for
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveWageSettingResponse}
   */
  this.retrieveWageSetting = function(teamMemberId) {
    return this.retrieveWageSettingWithHttpInfo(teamMemberId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * SearchTeamMembers
   * Returns a paginated list of &#x60;TeamMember&#x60; objects for a business. The list to be returned can be filtered by: - location IDs **and** - &#x60;is_active&#x60;
   * @param {module:model/SearchTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchTeamMembersResponse} and HTTP response
   */
  this.searchTeamMembersWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling searchTeamMembers");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = SearchTeamMembersResponse;

    return this.apiClient.callApi(
      '/v2/team-members/search', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * SearchTeamMembers
   * Returns a paginated list of &#x60;TeamMember&#x60; objects for a business. The list to be returned can be filtered by: - location IDs **and** - &#x60;is_active&#x60;
   * @param {module:model/SearchTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchTeamMembersResponse}
   */
  this.searchTeamMembers = function(body) {
    return this.searchTeamMembersWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * UpdateTeamMember
   * Updates a single &#x60;TeamMember&#x60; object. The &#x60;TeamMember&#x60; will be returned on successful updates. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#updateteammember).
   * @param {String} teamMemberId The ID of the team member to update.
   * @param {module:model/UpdateTeamMemberRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateTeamMemberResponse} and HTTP response
   */
  this.updateTeamMemberWithHttpInfo = function(teamMemberId, body) {
    var postBody = body;

    // verify the required parameter 'teamMemberId' is set
    if (teamMemberId === undefined || teamMemberId === null) {
      throw new Error("Missing the required parameter 'teamMemberId' when calling updateTeamMember");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling updateTeamMember");
    }


    var pathParams = {
      'team_member_id': teamMemberId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = UpdateTeamMemberResponse;

    return this.apiClient.callApi(
      '/v2/team-members/{team_member_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * UpdateTeamMember
   * Updates a single &#x60;TeamMember&#x60; object. The &#x60;TeamMember&#x60; will be returned on successful updates. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#updateteammember).
   * @param {String} teamMemberId The ID of the team member to update.
   * @param {module:model/UpdateTeamMemberRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateTeamMemberResponse}
   */
  this.updateTeamMember = function(teamMemberId, body) {
    return this.updateTeamMemberWithHttpInfo(teamMemberId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * UpdateWageSetting
   * Creates or updates a &#x60;WageSetting&#x60; object. The object is created if a &#x60;WageSetting&#x60; with the specified &#x60;team_member_id&#x60; does not exist. Otherwise, it fully replaces the &#x60;WageSetting&#x60; object for the team member. The &#x60;WageSetting&#x60; will be returned upon successful update. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#updatewagesetting).
   * @param {String} teamMemberId The ID of the team member to update the &#x60;WageSetting&#x60; object for.
   * @param {module:model/UpdateWageSettingRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateWageSettingResponse} and HTTP response
   */
  this.updateWageSettingWithHttpInfo = function(teamMemberId, body) {
    var postBody = body;

    // verify the required parameter 'teamMemberId' is set
    if (teamMemberId === undefined || teamMemberId === null) {
      throw new Error("Missing the required parameter 'teamMemberId' when calling updateWageSetting");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling updateWageSetting");
    }


    var pathParams = {
      'team_member_id': teamMemberId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = UpdateWageSettingResponse;

    return this.apiClient.callApi(
      '/v2/team-members/{team_member_id}/wage-setting', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * UpdateWageSetting
   * Creates or updates a &#x60;WageSetting&#x60; object. The object is created if a &#x60;WageSetting&#x60; with the specified &#x60;team_member_id&#x60; does not exist. Otherwise, it fully replaces the &#x60;WageSetting&#x60; object for the team member. The &#x60;WageSetting&#x60; will be returned upon successful update. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#updatewagesetting).
   * @param {String} teamMemberId The ID of the team member to update the &#x60;WageSetting&#x60; object for.
   * @param {module:model/UpdateWageSettingRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateWageSettingResponse}
   */
  this.updateWageSetting = function(teamMemberId, body) {
    return this.updateWageSettingWithHttpInfo(teamMemberId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
