const db  = require("../utils/database")


const add_bus  = (req,res)=>{
const{name,id,seat} = req.body
const query = `insert into buses (name,id,seat) values (?,?,?)`
db.query(query,[name,id,seat],(err,result)=>{
    if(err){
        console.log(err)
    }
    res.send(`Bus with name ${name} added to database`)
    console.log(`Bus with name ${name} added to database`)
})
}
const show_seats = (req,res)=> {
const seats = req.params.seats
const query = `select * from buses having seat>${seats}`
db.query(query,(err,result)=>{
    if(err){console.log(err)}
        console.log("These are users")
    res.json(result)
    
})
}
module.exports = {show_seats,add_bus}
