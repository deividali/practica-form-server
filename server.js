const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3000

let filedEmail='123@123.com'
let filedPass='123456123'

app.use(cors())
app.use(bodyParser.json())

app.post('/form',(req,res)=>{
    const {email,password,idElement}=req.body; // todo request que venga del body lo manda a esos tres

    if(idElement=='boton_login'){
        if(filedEmail==email && filedPass==password){
            res.status(200).json("Datos correctos, Bienvenido")    
        }
        else{
            res.status(200).json("Datos incorrectos")
        }
    }
    if(idElement=='boton_registro'){
        // console.log("datos recibidos",{email,password,mod}) 
        console.log(idElement)
        filedEmail=email;
        filedPass=password;
        console.log("(Servidor) registro: ",{filedEmail,filedPass}) 
        res.status(200).json("Datos actualizados")

    }
    if(idElement=='boton_recovery'){
        console.log("Se ingresa a recovery")
        if(filedEmail==email){
            res.status(200).json({message: 'true', redirect: '/register.html', email: email});
        }
        else{
            res.status(200).json({message: "El correo es incorrecto", email: email})
        }
    }
});

app.listen(port)
console.log(`Servidor se creo en el puerto ${port}`)