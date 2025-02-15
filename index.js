const express = require("express");
const cors = require("cors");
const PORT = 3000;  // nuestra constante PORT o puerto 
const {users} = require("./data")

// Crear la instacia del servidor
const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({msj: "Hola desde express usando json"})
});

app.get('/usr',(req,res)=>{

    res.json(users)
})

app.post("/login",(req, res)=>{
    const {username, password} = req.body;
    const user = user.find((usr)=>{
        usr.username === username &&
        usr.password === password
    });

    if(user){
        res.status(200).json({toker: `token-falso ${user.id}`});
    }else{
        res.status(401).json({error:"Usuario no válido"})
    }

})

const validarToken= (req, res, next)=>{
    const token = req.headers.authorization;
    if(token){
        if(token.startsWith("token-falso-"))
            next();
        res.status(403).json({message:"Acceso denegado por token falso"})
    }else{
        res.status(403).json({
            message: "Acceso denegado. No hay token"
        })
    }
}

//Saludo protegido
app.get("/saludo-protegido", validarToken, (req,res)=>{
    res.json({
        message:"Saludo Protegido"
    });
})


//definir nuestra escucha
app.listen(PORT,()=>{
    console.log("Server running in http://localhost:"+PORT)
});