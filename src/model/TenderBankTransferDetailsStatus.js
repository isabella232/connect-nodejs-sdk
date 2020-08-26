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
 * Enum class TenderBankTransferDetailsStatus.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "PENDING"
   * @const
   */
  "PENDING": "PENDING",
  /**
   * value: "COMPLETED"
   * @const
   */
  "COMPLETED": "COMPLETED",
  /**
   * value: "FAILED"
   * @const
   */
  "FAILED": "FAILED"};

/**
 * Returns a <code>TenderBankTransferDetailsStatus</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/TenderBankTransferDetailsStatus} The enum <code>TenderBankTransferDetailsStatus</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


