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
import { Server } from './server';

/**
 * 
 * @export
 * @interface Environment
 */
export interface Environment {
    /**
     * Unique id of the given record
     * @type {number}
     * @memberof Environment
     */
    id: number;
    /**
     * Environment\'s name
     * @type {string}
     * @memberof Environment
     */
    name: string;
    /**
     * 
     * @type {EnvironmentType}
     * @memberof Environment
     */
    type: EnvironmentType;
    /**
     * 
     * @type {Array<Server>}
     * @memberof Environment
     */
    servers?: Array<Server>;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof Environment
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof Environment
     */
    updated_at?: string;
}

