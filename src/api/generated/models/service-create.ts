/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { EnvironmentLinkItem } from './environment-link-item';
import { ServiceInitialState } from './service-initial-state';
import { ServiceName } from './service-name';

/**
 * 
 * @export
 * @interface ServiceCreate
 */
export interface ServiceCreate {
    /**
     * 
     * @type {ServiceName}
     * @memberof ServiceCreate
     */
    name: ServiceName;
    /**
     * Indicates if the service is marked for start automatically on operating system boot
     * @type {boolean}
     * @memberof ServiceCreate
     */
    auto_start: boolean;
    /**
     * 
     * @type {ServiceInitialState}
     * @memberof ServiceCreate
     */
    initial_state: ServiceInitialState;
    /**
     * 
     * @type {Array<EnvironmentLinkItem>}
     * @memberof ServiceCreate
     */
    environments?: Array<EnvironmentLinkItem>;
}

