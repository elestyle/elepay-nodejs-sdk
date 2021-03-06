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
* Enum class PaymentMethodType.
* @enum {}
* @readonly
*/
export default class PaymentMethodType {
    
        /**
         * value: "alipay"
         * @const
         */
        "alipay" = "alipay";

    
        /**
         * value: "alipay_web"
         * @const
         */
        "alipay_web" = "alipay_web";

    
        /**
         * value: "applepay"
         * @const
         */
        "applepay" = "applepay";

    
        /**
         * value: "applepay_web"
         * @const
         */
        "applepay_web" = "applepay_web";

    
        /**
         * value: "applepay_cn"
         * @const
         */
        "applepay_cn" = "applepay_cn";

    
        /**
         * value: "applepay_cn_web"
         * @const
         */
        "applepay_cn_web" = "applepay_cn_web";

    
        /**
         * value: "creditcard"
         * @const
         */
        "creditcard" = "creditcard";

    
        /**
         * value: "googlepay"
         * @const
         */
        "googlepay" = "googlepay";

    
        /**
         * value: "paypal"
         * @const
         */
        "paypal" = "paypal";

    
        /**
         * value: "unionpay"
         * @const
         */
        "unionpay" = "unionpay";

    
        /**
         * value: "unionpay_web"
         * @const
         */
        "unionpay_web" = "unionpay_web";

    
        /**
         * value: "linepay_web"
         * @const
         */
        "linepay_web" = "linepay_web";

    
        /**
         * value: "linepay"
         * @const
         */
        "linepay" = "linepay";

    
        /**
         * value: "wechat"
         * @const
         */
        "wechat" = "wechat";

    
        /**
         * value: "wechat_qr"
         * @const
         */
        "wechat_qr" = "wechat_qr";

    
        /**
         * value: "paidy"
         * @const
         */
        "paidy" = "paidy";

    
        /**
         * value: "paypay"
         * @const
         */
        "paypay" = "paypay";

    
        /**
         * value: "alipay_qr"
         * @const
         */
        "alipay_qr" = "alipay_qr";

    

    /**
    * Returns a <code>PaymentMethodType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/PaymentMethodType} The enum <code>PaymentMethodType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

