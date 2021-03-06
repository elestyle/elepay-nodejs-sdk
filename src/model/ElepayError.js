/**
 * elepay API リファレンス
 * elepay APIはRESTをベースに構成された決済APIです。支払い処理、返金処理など、決済に関わる運用における様々なことができます。 
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ElepayError model module.
 * @module model/ElepayError
 * @version 1.0
 */
class ElepayError {
    /**
     * Constructs a new <code>ElepayError</code>.
     * エラー情報
     * @alias module:model/ElepayError
     */
    constructor() { 
        
        ElepayError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ElepayError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ElepayError} obj Optional instance to populate.
     * @return {module:model/ElepayError} The populated <code>ElepayError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ElepayError();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * エラーコードとメッセージ
 * @member {module:model/ElepayError.TypeEnum} type
 */
ElepayError.prototype['type'] = undefined;

/**
 * エラーコード
 * @member {module:model/ElepayError.CodeEnum} code
 */
ElepayError.prototype['code'] = undefined;

/**
 * エラーメッセージ
 * @member {String} message
 */
ElepayError.prototype['message'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ElepayError['TypeEnum'] = {

    /**
     * value: "not_found_error"
     * @const
     */
    "not_found_error": "not_found_error",

    /**
     * value: "invalid_request_error"
     * @const
     */
    "invalid_request_error": "invalid_request_error",

    /**
     * value: "channel_validation_error"
     * @const
     */
    "channel_validation_error": "channel_validation_error",

    /**
     * value: "channel_error"
     * @const
     */
    "channel_error": "channel_error",

    /**
     * value: "provider_error"
     * @const
     */
    "provider_error": "provider_error",

    /**
     * value: "connection_error"
     * @const
     */
    "connection_error": "connection_error",

    /**
     * value: "process_error"
     * @const
     */
    "process_error": "process_error",

    /**
     * value: "authentication_error"
     * @const
     */
    "authentication_error": "authentication_error",

    /**
     * value: "forbidden_error"
     * @const
     */
    "forbidden_error": "forbidden_error",

    /**
     * value: "rate_limit_error"
     * @const
     */
    "rate_limit_error": "rate_limit_error",

    /**
     * value: "api_error"
     * @const
     */
    "api_error": "api_error",

    /**
     * value: "api_connection_error"
     * @const
     */
    "api_connection_error": "api_connection_error"
};


/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
ElepayError['CodeEnum'] = {

    /**
     * value: "not_found"
     * @const
     */
    "not_found": "not_found",

    /**
     * value: "not_found_charge"
     * @const
     */
    "not_found_charge": "not_found_charge",

    /**
     * value: "auth_invalid_credential"
     * @const
     */
    "auth_invalid_credential": "auth_invalid_credential",

    /**
     * value: "auth_invalid_provider"
     * @const
     */
    "auth_invalid_provider": "auth_invalid_provider",

    /**
     * value: "invalid_request"
     * @const
     */
    "invalid_request": "invalid_request",

    /**
     * value: "invalid_order_no"
     * @const
     */
    "invalid_order_no": "invalid_order_no",

    /**
     * value: "invalid_payment_method"
     * @const
     */
    "invalid_payment_method": "invalid_payment_method",

    /**
     * value: "invalid_amount"
     * @const
     */
    "invalid_amount": "invalid_amount",

    /**
     * value: "invalid_token"
     * @const
     */
    "invalid_token": "invalid_token",

    /**
     * value: "invalid_front_url"
     * @const
     */
    "invalid_front_url": "invalid_front_url",

    /**
     * value: "invalid_cancel_url"
     * @const
     */
    "invalid_cancel_url": "invalid_cancel_url",

    /**
     * value: "invalid_contract_number"
     * @const
     */
    "invalid_contract_number": "invalid_contract_number",

    /**
     * value: "invalid_username"
     * @const
     */
    "invalid_username": "invalid_username",

    /**
     * value: "invalid_email"
     * @const
     */
    "invalid_email": "invalid_email",

    /**
     * value: "invalid_password"
     * @const
     */
    "invalid_password": "invalid_password",

    /**
     * value: "invalid_order_no_length"
     * @const
     */
    "invalid_order_no_length": "invalid_order_no_length",

    /**
     * value: "invalid_status_change"
     * @const
     */
    "invalid_status_change": "invalid_status_change",

    /**
     * value: "invalid_status_change_by_app"
     * @const
     */
    "invalid_status_change_by_app": "invalid_status_change_by_app",

    /**
     * value: "invalid_status_change_by_provider"
     * @const
     */
    "invalid_status_change_by_provider": "invalid_status_change_by_provider",

    /**
     * value: "invalid_provider_unique_id"
     * @const
     */
    "invalid_provider_unique_id": "invalid_provider_unique_id",

    /**
     * value: "invalid_provider_capture_id"
     * @const
     */
    "invalid_provider_capture_id": "invalid_provider_capture_id",

    /**
     * value: "invalid_channel_group"
     * @const
     */
    "invalid_channel_group": "invalid_channel_group",

    /**
     * value: "invalid_buyer_name"
     * @const
     */
    "invalid_buyer_name": "invalid_buyer_name",

    /**
     * value: "invalid_buyer_phone"
     * @const
     */
    "invalid_buyer_phone": "invalid_buyer_phone",

    /**
     * value: "invalid_buyer_email"
     * @const
     */
    "invalid_buyer_email": "invalid_buyer_email",

    /**
     * value: "invalid_buyer_zip"
     * @const
     */
    "invalid_buyer_zip": "invalid_buyer_zip",

    /**
     * value: "invalid_buyer_address1"
     * @const
     */
    "invalid_buyer_address1": "invalid_buyer_address1",

    /**
     * value: "invalid_buyer_address2"
     * @const
     */
    "invalid_buyer_address2": "invalid_buyer_address2",

    /**
     * value: "invalid_code_url"
     * @const
     */
    "invalid_code_url": "invalid_code_url",

    /**
     * value: "invalid_shop_id"
     * @const
     */
    "invalid_shop_id": "invalid_shop_id",

    /**
     * value: "invalid_shop_name"
     * @const
     */
    "invalid_shop_name": "invalid_shop_name",

    /**
     * value: "invalid_shop_no"
     * @const
     */
    "invalid_shop_no": "invalid_shop_no",

    /**
     * value: "invalid_product_id"
     * @const
     */
    "invalid_product_id": "invalid_product_id",

    /**
     * value: "invalid_product_name"
     * @const
     */
    "invalid_product_name": "invalid_product_name",

    /**
     * value: "invalid_product_price"
     * @const
     */
    "invalid_product_price": "invalid_product_price",

    /**
     * value: "invalid_product_count"
     * @const
     */
    "invalid_product_count": "invalid_product_count",

    /**
     * value: "invalid_setting_type"
     * @const
     */
    "invalid_setting_type": "invalid_setting_type",

    /**
     * value: "invalid_setting_name"
     * @const
     */
    "invalid_setting_name": "invalid_setting_name",

    /**
     * value: "invalid_category_id"
     * @const
     */
    "invalid_category_id": "invalid_category_id",

    /**
     * value: "invalid_category_name"
     * @const
     */
    "invalid_category_name": "invalid_category_name",

    /**
     * value: "invalid_order_amount"
     * @const
     */
    "invalid_order_amount": "invalid_order_amount",

    /**
     * value: "invalid_order_amount_change"
     * @const
     */
    "invalid_order_amount_change": "invalid_order_amount_change",

    /**
     * value: "invalid_product_inactive"
     * @const
     */
    "invalid_product_inactive": "invalid_product_inactive",

    /**
     * value: "invalid_name"
     * @const
     */
    "invalid_name": "invalid_name",

    /**
     * value: "invalid_role"
     * @const
     */
    "invalid_role": "invalid_role",

    /**
     * value: "invalid_campaign_name"
     * @const
     */
    "invalid_campaign_name": "invalid_campaign_name",

    /**
     * value: "invalid_campaign_time"
     * @const
     */
    "invalid_campaign_time": "invalid_campaign_time",

    /**
     * value: "invalid_campaign_start_time"
     * @const
     */
    "invalid_campaign_start_time": "invalid_campaign_start_time",

    /**
     * value: "invalid_campaign_expired_time"
     * @const
     */
    "invalid_campaign_expired_time": "invalid_campaign_expired_time",

    /**
     * value: "invalid_campaign_discount_type"
     * @const
     */
    "invalid_campaign_discount_type": "invalid_campaign_discount_type",

    /**
     * value: "invalid_campaign_discount_value"
     * @const
     */
    "invalid_campaign_discount_value": "invalid_campaign_discount_value",

    /**
     * value: "invalid_campaign_condition_type"
     * @const
     */
    "invalid_campaign_condition_type": "invalid_campaign_condition_type",

    /**
     * value: "invalid_value"
     * @const
     */
    "invalid_value": "invalid_value",

    /**
     * value: "invalid_theme_name"
     * @const
     */
    "invalid_theme_name": "invalid_theme_name",

    /**
     * value: "invalid_label_name"
     * @const
     */
    "invalid_label_name": "invalid_label_name",

    /**
     * value: "invalid_sku"
     * @const
     */
    "invalid_sku": "invalid_sku",

    /**
     * value: "invalid_charge"
     * @const
     */
    "invalid_charge": "invalid_charge",

    /**
     * value: "invalid_from"
     * @const
     */
    "invalid_from": "invalid_from",

    /**
     * value: "invalid_to"
     * @const
     */
    "invalid_to": "invalid_to",

    /**
     * value: "invalid_export_data_date_range"
     * @const
     */
    "invalid_export_data_date_range": "invalid_export_data_date_range",

    /**
     * value: "invalid_secret_key"
     * @const
     */
    "invalid_secret_key": "invalid_secret_key",

    /**
     * value: "invalid_auth_code"
     * @const
     */
    "invalid_auth_code": "invalid_auth_code",

    /**
     * value: "invalid_terminal_id"
     * @const
     */
    "invalid_terminal_id": "invalid_terminal_id",

    /**
     * value: "invalid_lang"
     * @const
     */
    "invalid_lang": "invalid_lang",

    /**
     * value: "invalid_title"
     * @const
     */
    "invalid_title": "invalid_title",

    /**
     * value: "invalid_content"
     * @const
     */
    "invalid_content": "invalid_content",

    /**
     * value: "invalid_type"
     * @const
     */
    "invalid_type": "invalid_type",

    /**
     * value: "invalid_legal_registration_no"
     * @const
     */
    "invalid_legal_registration_no": "invalid_legal_registration_no",

    /**
     * value: "invalid_country"
     * @const
     */
    "invalid_country": "invalid_country",

    /**
     * value: "invalid_publish_date"
     * @const
     */
    "invalid_publish_date": "invalid_publish_date",

    /**
     * value: "invalid_json_format"
     * @const
     */
    "invalid_json_format": "invalid_json_format",

    /**
     * value: "invalid_title_length"
     * @const
     */
    "invalid_title_length": "invalid_title_length",

    /**
     * value: "invalid_name_length"
     * @const
     */
    "invalid_name_length": "invalid_name_length",

    /**
     * value: "invalid_ref_type_length"
     * @const
     */
    "invalid_ref_type_length": "invalid_ref_type_length",

    /**
     * value: "invalid_ref_id_length"
     * @const
     */
    "invalid_ref_id_length": "invalid_ref_id_length",

    /**
     * value: "invalid_type_length"
     * @const
     */
    "invalid_type_length": "invalid_type_length",

    /**
     * value: "invalid_desc_length"
     * @const
     */
    "invalid_desc_length": "invalid_desc_length",

    /**
     * value: "invalid_key_length"
     * @const
     */
    "invalid_key_length": "invalid_key_length",

    /**
     * value: "invalid_code_length"
     * @const
     */
    "invalid_code_length": "invalid_code_length",

    /**
     * value: "invalid_legal_registration_no_length"
     * @const
     */
    "invalid_legal_registration_no_length": "invalid_legal_registration_no_length",

    /**
     * value: "invalid_establishment_date_length"
     * @const
     */
    "invalid_establishment_date_length": "invalid_establishment_date_length",

    /**
     * value: "invalid_country_length"
     * @const
     */
    "invalid_country_length": "invalid_country_length",

    /**
     * value: "invalid_bank_code_length"
     * @const
     */
    "invalid_bank_code_length": "invalid_bank_code_length",

    /**
     * value: "invalid_branch_code_length"
     * @const
     */
    "invalid_branch_code_length": "invalid_branch_code_length",

    /**
     * value: "invalid_bank_account_number_length"
     * @const
     */
    "invalid_bank_account_number_length": "invalid_bank_account_number_length",

    /**
     * value: "invalid_birthday_length"
     * @const
     */
    "invalid_birthday_length": "invalid_birthday_length",

    /**
     * value: "invalid_email_length"
     * @const
     */
    "invalid_email_length": "invalid_email_length",

    /**
     * value: "invalid_zip_length"
     * @const
     */
    "invalid_zip_length": "invalid_zip_length",

    /**
     * value: "invalid_tel_length"
     * @const
     */
    "invalid_tel_length": "invalid_tel_length",

    /**
     * value: "invalid_fax_length"
     * @const
     */
    "invalid_fax_length": "invalid_fax_length",

    /**
     * value: "invalid_sort_order_length"
     * @const
     */
    "invalid_sort_order_length": "invalid_sort_order_length",

    /**
     * value: "invalid_parking_rack_no"
     * @const
     */
    "invalid_parking_rack_no": "invalid_parking_rack_no",

    /**
     * value: "invalid_parking_rack_status"
     * @const
     */
    "invalid_parking_rack_status": "invalid_parking_rack_status",

    /**
     * value: "invalid_parking_rack_status_not_used"
     * @const
     */
    "invalid_parking_rack_status_not_used": "invalid_parking_rack_status_not_used",

    /**
     * value: "invalid_parking_rack_status_opened"
     * @const
     */
    "invalid_parking_rack_status_opened": "invalid_parking_rack_status_opened",

    /**
     * value: "invalid_parking_rack_status_locked"
     * @const
     */
    "invalid_parking_rack_status_locked": "invalid_parking_rack_status_locked",

    /**
     * value: "invalid_parking_rack_status_connect_fail"
     * @const
     */
    "invalid_parking_rack_status_connect_fail": "invalid_parking_rack_status_connect_fail",

    /**
     * value: "invalid_parking_no_or_rack_no"
     * @const
     */
    "invalid_parking_no_or_rack_no": "invalid_parking_no_or_rack_no",

    /**
     * value: "invalid_parking_pin_code"
     * @const
     */
    "invalid_parking_pin_code": "invalid_parking_pin_code",

    /**
     * value: "incorrect_currency"
     * @const
     */
    "incorrect_currency": "incorrect_currency",

    /**
     * value: "incorrect_card_number"
     * @const
     */
    "incorrect_card_number": "incorrect_card_number",

    /**
     * value: "incorrect_amount"
     * @const
     */
    "incorrect_amount": "incorrect_amount",

    /**
     * value: "incorrect_merchant_id"
     * @const
     */
    "incorrect_merchant_id": "incorrect_merchant_id",

    /**
     * value: "incorrect_product_id"
     * @const
     */
    "incorrect_product_id": "incorrect_product_id",

    /**
     * value: "incorrect_export_data_date_range"
     * @const
     */
    "incorrect_export_data_date_range": "incorrect_export_data_date_range",

    /**
     * value: "incorrect_status"
     * @const
     */
    "incorrect_status": "incorrect_status",

    /**
     * value: "provider_response_result_failed"
     * @const
     */
    "provider_response_result_failed": "provider_response_result_failed",

    /**
     * value: "no_such_token"
     * @const
     */
    "no_such_token": "no_such_token",

    /**
     * value: "duplicate_order_no"
     * @const
     */
    "duplicate_order_no": "duplicate_order_no",

    /**
     * value: "duplicate_shop_no"
     * @const
     */
    "duplicate_shop_no": "duplicate_shop_no",

    /**
     * value: "duplicate_contract_number"
     * @const
     */
    "duplicate_contract_number": "duplicate_contract_number",

    /**
     * value: "duplicate_email"
     * @const
     */
    "duplicate_email": "duplicate_email",

    /**
     * value: "duplicate_legal_registration_no"
     * @const
     */
    "duplicate_legal_registration_no": "duplicate_legal_registration_no",

    /**
     * value: "duplicate_key"
     * @const
     */
    "duplicate_key": "duplicate_key",

    /**
     * value: "duplicate_category_name"
     * @const
     */
    "duplicate_category_name": "duplicate_category_name",

    /**
     * value: "expired_card"
     * @const
     */
    "expired_card": "expired_card",

    /**
     * value: "card_declined"
     * @const
     */
    "card_declined": "card_declined",

    /**
     * value: "processing_card_error"
     * @const
     */
    "processing_card_error": "processing_card_error",

    /**
     * value: "required_key"
     * @const
     */
    "required_key": "required_key",

    /**
     * value: "charge_already_captured"
     * @const
     */
    "charge_already_captured": "charge_already_captured",

    /**
     * value: "charge_already_refunded"
     * @const
     */
    "charge_already_refunded": "charge_already_refunded",

    /**
     * value: "refused_refund"
     * @const
     */
    "refused_refund": "refused_refund",

    /**
     * value: "refused_refund_constraint_day"
     * @const
     */
    "refused_refund_constraint_day": "refused_refund_constraint_day",

    /**
     * value: "refused_refund_non_captured"
     * @const
     */
    "refused_refund_non_captured": "refused_refund_non_captured",

    /**
     * value: "inactive_application"
     * @const
     */
    "inactive_application": "inactive_application",

    /**
     * value: "inactive_payment_method"
     * @const
     */
    "inactive_payment_method": "inactive_payment_method",

    /**
     * value: "inactive_product"
     * @const
     */
    "inactive_product": "inactive_product",

    /**
     * value: "exist_payment_method"
     * @const
     */
    "exist_payment_method": "exist_payment_method",

    /**
     * value: "campaign_already_started"
     * @const
     */
    "campaign_already_started": "campaign_already_started",

    /**
     * value: "over_shop_limit_count"
     * @const
     */
    "over_shop_limit_count": "over_shop_limit_count",

    /**
     * value: "over_product_limit_count"
     * @const
     */
    "over_product_limit_count": "over_product_limit_count",

    /**
     * value: "process_error"
     * @const
     */
    "process_error": "process_error",

    /**
     * value: "api_connection_error"
     * @const
     */
    "api_connection_error": "api_connection_error",

    /**
     * value: "provider_config_error"
     * @const
     */
    "provider_config_error": "provider_config_error",

    /**
     * value: "api_error"
     * @const
     */
    "api_error": "api_error",

    /**
     * value: "forbidden"
     * @const
     */
    "forbidden": "forbidden",

    /**
     * value: "forbidden_close_self"
     * @const
     */
    "forbidden_close_self": "forbidden_close_self",

    /**
     * value: "recaptcha_fail"
     * @const
     */
    "recaptcha_fail": "recaptcha_fail"
};



export default ElepayError;

