// @flow
import fetch from 'node-fetch';

/**
 * Contains the base methods to fetch * resources given the url
 * @params {URL} url - base url to fetch
*/
export default class BaseConnector {
  API_ROOT: string;
  constructor(url: string) {
    this.API_ROOT = url;
  }

  /**
   * Make a get request using to path, if errors found throw
   * @params {string} url - path to fetch (ROOT+url)
   * @returns {JSON}
  */
  async fetch(url: string) {
    const URL = this.API_ROOT + url;
    const res = await fetch(URL).then(r => r.json());

    if (res.errors) throw Error(res.message);
    return res;
  }

  /**
   * Make a post given the url, if errors found throw
   * @params {string} url - path to fetch (ROOT+url)
   * @params {object} data - body to send
   * @params {POST | DELETE | PUT | PATCH } method - default method to make request (POST)
   * @returns {JSON}
  */
  async post(url: string, data: any, method: string = 'POST') {
    const URL = this.API_ROOT + url;
    const options = {
      method,
      body: JSON.stringify(data),
    };
    const res = await fetch(URL, options).then(r => r.json());

    if (res.errors) throw Error(res.message);
    return res;
  }

  /**
   * Send a get request with serialized object as paramter
   * @params {object} filters
   * @returns {JSON}
  */
  get(filters: any) {
    return this.fetch(`/query/${this._parse_filters(filters)}`);
  }

  /**
   * find data by id
   * @params {string} id
   * @returns {JSON}
  */
  getById(id: any){
    return this.fetch(`/${id}`)
  }
  /**
   * Requst a post with body as data
   * @params {object} data - into to create
   * @returns {JSON}
  */
  create(data: any) {
    return this.post('/', data);
  }

  /**
   * Try to update resource
   * @params {string} id - identification of resource
   * @params {object} data - info to update
   * @returns {JSON}
  */
  update(id: string, data: any) {
    return this.post(`/${id}`, data, 'PUT');
  }

  /**
   * Try to update status resource
   * @params {string} id - identification of resource
   * @params {object} data - info status to update
   * @returns {JSON}
  */
  updateStatus(id: string, data: any) {
    return this.post(`/status/${id}`, data, 'PUT');
  }

  /**
   * Requst remove a resource using his id
   * @params {string} id - identification of resource
   * @returns {object}
  */
  delete(id: string) {
    return this.post(`/${id}`, {}, 'DELETE');
  }

  /**
   * Serialize object to stringify parameters '?foo=bar'
   * @params {object} filters
   * @returns {string}
  */
  _parse_filters(filters: any) : string {
    if (!filters) return '';
    let response = '';
    // eslint-disable-next-line
    for(let key in filters){
      response += `&${key}=${JSON.stringify(filters[key])}`;
    }
    return `?${response.substring(1)}`;
  }
}
