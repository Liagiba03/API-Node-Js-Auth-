const express = require("express");
const cors = require("cors");
const PORT = 3000;  // nuestra constante PORT o puerto 
//const {users} = require("./data")

const authRouter = require("./routes/authRoutes");
const greetRouter = require("./routes/greetRoutes");
const { connectDB } = require("./data/config");

// Crear la instacia del servidor
const app = express();
app.use(cors());
app.use(express.json());

//Exportar conexión con la BD
connectDB();

//
app.use("/auth", authRouter);
app.use("/greet", greetRouter);

app.get('/',(req,res)=>{
    res.json({msj: "Hola desde express usando json"})
});

/*app.get('/usr',(req,res)=>{

    res.json(users)
})*/

/*app.post("/login",(req, res)=>{
    const {username, password} = req.body;
    const user = users.find((usr)=>{
        usr.username === username &&
        usr.password === password
    });

    if(user){
        res.status(200).json({toker: `token-falso ${user.id}`});
    }else{
        res.status(401).json({error:"Usuario no válido"})
    }

})*/


//Saludo protegido
/*app.get("/saludo-protegido", validarToken, (req,res)=>{
    res.json({
        message:"Saludo Protegido"
    });
})*/


//definir nuestra escucha
app.listen(PORT,()=>{
    console.log("Server running in http://localhost:"+PORT)
});

//ARREGLAR EL TOKEN PARA QUE LANCE EL TOKEN VÁLIDO
//Token debe de regresar con token-falso-id