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
var CreateCheckoutRequest = require('../model/CreateCheckoutRequest');
var CreateCheckoutResponse = require('../model/CreateCheckoutResponse');

/**
 * Checkout service.
 * @module api/CheckoutApi
 */

/**
 * Constructs a new CheckoutApi. 
 * @alias module:api/CheckoutApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * CreateCheckout
   * Links a &#x60;checkoutId&#x60; to a &#x60;checkout_page_url&#x60; that customers will be directed to in order to provide their payment information using a payment processing workflow hosted on connect.squareup.com.
   * @param {String} locationId The ID of the business location to associate the checkout with.
   * @param {module:model/CreateCheckoutRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateCheckoutResponse} and HTTP response
   */
  this.createCheckoutWithHttpInfo = function(locationId, body) {
    var postBody = body;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling createCheckout");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createCheckout");
    }


    var pathParams = {
      'location_id': locationId
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
    var returnType = CreateCheckoutResponse;

    return this.apiClient.callApi(
      '/v2/locations/{location_id}/checkouts', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateCheckout
   * Links a &#x60;checkoutId&#x60; to a &#x60;checkout_page_url&#x60; that customers will be directed to in order to provide their payment information using a payment processing workflow hosted on connect.squareup.com.
   * @param {String} locationId The ID of the business location to associate the checkout with.
   * @param {module:model/CreateCheckoutRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateCheckoutResponse}
   */
  this.createCheckout = function(locationId, body) {
    return this.createCheckoutWithHttpInfo(locationId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
