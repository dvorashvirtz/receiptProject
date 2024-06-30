require('dotenv').config()
const http=require('http')
const app=require('./app')
const { openConnection } = require('./services/mongo/mongo-connection')

const {HOST,PORT,MONGO_DB_URL}=process.env


openConnection(MONGO_DB_URL).then(_=>{
    app.listen(PORT,HOST,()=>{
        console.log(`http://${HOST}:${PORT}`);
    })
}).catch(error=>{
    console.log(error);
    console.log('can not connect to mongo server');
})
    

const server=http.createServer(app)
