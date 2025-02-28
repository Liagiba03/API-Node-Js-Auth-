const {login} = require("../Service/authService.js");


const loginController = async (req, res) =>{
    const {username, password} = req.body;
    const respuesta = await login(username, password);
    if (respuesta.status ===200){
        res.json({token: respuesta.token});
    }else{
        res.status(respuesta.status).json({messsage:respuesta.message})
    }

}   



module.exports = {loginController
}