import knex from 'knex';
import sqliteConfig from './sqliteConfig';

const knexDatabase = knex(sqliteConfig);

export default knexDatabase;
