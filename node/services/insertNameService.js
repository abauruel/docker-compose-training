const { config } = require ('../config/database')
const mysql = require('mysql')



class insertNameService {
    async execute(){
        const connection = mysql.createConnection(config)
        const sql = `insert into people(NAME) VALUES('Alex')`
        connection.query(sql)
        connection.end()
    }

}

module.exports = insertNameService