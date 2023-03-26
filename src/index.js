const express=require("express")
const {createServer}=require("http")
const realTimeServer=require("./realTimeServer")
const path=require("path")
const cookieParser=require("cookie-parser")

const app=express()
const httpServer=createServer(app)

//setting
app.set("port",process.env.PORT||6000)
app.set("views",path.join(__dirname,"views"))
app.use(cookieParser())
//routes

app.use(require("./routes"))

//public
app.use(express.static(path.join(__dirname,"public")))

//levanto el servidor
httpServer.listen(app.get("port"),()=>{
  console.log("el servidor esta corriendo en el puerto",app.get("port"))

  console.log(path.join(__dirname,"public"))
  
})
//llamo al servidor de socket.io

realTimeServer(httpServer)