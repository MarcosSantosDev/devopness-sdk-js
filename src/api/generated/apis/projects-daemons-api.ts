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

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { ApiError } from '../../generated/models';
import { Daemon } from '../../generated/models';
import { DaemonCreate } from '../../generated/models';

/**
 * ProjectsDaemonsApiService - Auto-generated
 */
export class ProjectsDaemonsApiService extends ApiBaseService {
    /**
     * 
     * @summary Add a daemon to the given project
     * @param {number} projectId The project numeric Id
     * @param {DaemonCreate} daemonCreate A JSON object containing daemon data
     */
    public async addDaemonToProject(projectId: number, daemonCreate: DaemonCreate): Promise<ApiResponse<Daemon>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'addDaemonToProject');
        }
        if (daemonCreate === null || daemonCreate === undefined) {
            throw new ArgumentNullException('daemonCreate', 'addDaemonToProject');
        }
        const queryString = [].join('&');
        const requestUrl = '/projects/{project_id}/daemons' + (queryString? `?${queryString}` : '');

        const response = await this.post <Daemon, DaemonCreate>(requestUrl.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))), daemonCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Returns a list of all daemons belonging to a project
     * @param {number} projectId Numeric ID of the project to get daemons from
     */
    public async listProjectDaemons(projectId: number): Promise<ApiResponse<Array<Daemon>>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectDaemons');
        }
        const queryString = [].join('&');
        const requestUrl = '/projects/{project_id}/daemons' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<Daemon>>(requestUrl.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return new ApiResponse(response);
    }
}
