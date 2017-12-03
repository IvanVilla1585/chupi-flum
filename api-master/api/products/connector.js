// @flow
import BaseConnector from '../helpers/BaseConnector';

/**
 * Exteds of BaseConnector, obtains the base methods to fetch * resources given the url
 * @extends BaseConnector
 * @class
 */
export default class ProductConnector extends BaseConnector {
  constructor(API_ROOT: string = '') {
    super(API_ROOT);
  }

  getFormulas(query) {
    return this.fetch(`/formula/${this._parse_filters(query)}`);
  }
}
