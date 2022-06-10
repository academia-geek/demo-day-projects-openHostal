import { Pool } from "pg";

export const pool = new Pool({
 user:'postgres',
 host:'34.74.87.25',
 password:'1234',
 database:'openhostal',
 port:5432
});