import mysql from 'promise-mysql';
import keys from './keys';
 './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection().then( connetion =>{
    pool.releaseConnection(connetion);
    console.log('Base de Datos, conectada')
});

export default pool;
