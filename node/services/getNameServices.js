const { config } = require ('../config/database')
const mysql = require('mysql')


class getNameService{
    async execute(callback){
    const connection =  mysql.createConnection(config)
    const sql = `select name from people`
    connection.query(sql,(error, results)=>{
        if(error) console.log(error);
        const res = results.map(r=>r.name)
        return callback(res)
    })
    connection.end()
    }
}

module.exports = getNameService