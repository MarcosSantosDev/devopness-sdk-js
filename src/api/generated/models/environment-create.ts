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


import { EnvironmentType } from './environment-type';

/**
 * 
 * @export
 * @interface EnvironmentCreate
 */
export interface EnvironmentCreate {
    /**
     * The environment\'s name
     * @type {string}
     * @memberof EnvironmentCreate
     */
    name: string;
    /**
     * 
     * @type {EnvironmentType}
     * @memberof EnvironmentCreate
     */
    type: EnvironmentType;
}

