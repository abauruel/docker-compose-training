const express =  require('express')
require ('dotenv').config()

const GetNameServices = require('./services/getNameServices')
const InsertNameServices = require('./services/insertNameService')


const app = express()
const insertName = new InsertNameServices()
const getName = new GetNameServices()

insertName.execute()


app.get('/', async (request, response )=>{
        getName.execute(callback=>{
        const htmlResponse = []
        htmlResponse.push("<h1>Full Cycle Rocks!</h1>")
        htmlResponse.push("<ul>")
         callback.forEach(name => 
            htmlResponse.push(`<li>${name}</li>`)
            )
        htmlResponse.push("</ul>")
        response.send(htmlResponse.join(''))
    
})
})

const PORT = 3000





app.listen(PORT, ()=> console.log(`server is running in ${PORT}`))