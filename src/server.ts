const log = console.log;
log ('something')
const express = require("express");
const app = express();

// your beautiful code...

if (process.env.NODE_ENV === 'production') {
    app.listen(3000)
}
// app.use(express.json());

export const createViteNodeApp = app;
/*
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const geoKey:string = process.env.GEO_KEY || '';

const app = express();
// app.use(express.static(''));

app.get("/", (req: { body: any; }, _res: any)=>{
    log(req)
 })

app.post("/", (req: { body: any; }, _res: any)=>{
    log(req.body)
})

app.listen(4174, ()=>{
    console.log('node server is running')
})
*/