const {getAllUsers,login, createUser} = require("../Service/authService.js");

const getUsers = async (req, res) =>{
    //const users = getAllUsers();
    const users = await getAllUsers();
    res.json(users)
}

const loginController = async (req, res) =>{
    const {username, password} = req.body;
    const respuesta = await login(username, password);
    const {token} = respuesta;
    const {message} = respuesta;

    if(token){
        return res.json({token: token});
    }
    res.status(401).json({message: message}); 

}   


//ENdpoint CreateUser

const createUserController = async (req, res) =>{
    const {username, password} = req.body;
    const newUser = await createUser(username, password);
    if(newUser){
        return res.status(201).json(newUser);
    }else{
        return res.status(500).json({message:`DB not connected`})
    }
}

module.exports = {getUsers, loginController, createUserController
}