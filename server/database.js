const { Client } = require('pg');



module.exports.getComments = async function() {
    // let res =null;
    // ;(async () => {
        const client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'appdata',
            password: 'postgres',
            port: 5432,
        });
        await client.connect()
        const res = await client.query('SELECT * from comments');
        //console.log(res.rows)
        await client.end()
        return res;
    // })()
}

module.exports.insertComment = async function(name, email, comment) {
    //let res = null;
   // ;(async () => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'appdata',
        password: 'postgres',
        port: 5432,
    });
        await client.connect()
        const res = await client.query('INSERT INTO comments(name,email,comment) values($1,$2,$3)',[name,email,comment]);
        await client.end()
    //})()
    return res

}
