const {login, createUser} = require("../Service/authService.js");


const loginController = async (req, res) =>{
    const {username, password} = req.body;
    const respuesta = await login(username, password);
    if (respuesta.status ===200){
        res.json({token: respuesta.token});
    }else{
        res.status(respuesta.status).json({messsage:respuesta.message})
    }
}   

const createUsrController = async (req, res)=>{
    const {username, password} = req.body;
    const response = await createUser(username, password);
    if(response.status ===201){
        res.status(201).json({message: response.message});
    }else{
        res.status(response.status).json({message: response.message});
    }
}



module.exports = {loginController, createUsrController
}