// @flow
import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();

export const CREATED_RADICATED  = 'created_radicated';
export const RADICATED_ADD_DOCUMENT  = 'radicated_add_document';
export const RADICATED_ADD_MEMORANDUM  = 'radicated_add_memorandum';
export const RADICATED_ADD_OFFICE  = 'radicated_add_office';
