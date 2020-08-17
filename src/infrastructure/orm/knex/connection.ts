import knex from 'knex';
import sqliteConfig from './sqliteConfig';

const knexConnection = knex(sqliteConfig);

export default knexConnection;
