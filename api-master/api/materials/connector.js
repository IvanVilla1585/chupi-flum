// @flow
import BaseConnector from '../helpers/BaseConnector';

/**
 * Exteds of BaseConnector, obtains the base methods to fetch * resources given the url
 * @extends BaseConnector
 * @class
 */
export default class MaterialConnector extends BaseConnector {
  constructor(API_ROOT: string = '') {
    super(API_ROOT);
  }
}
