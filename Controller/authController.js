const {getAllUsers,login} = require("../Service/authService.js");

const getUsers = (req, res) =>{
    const users = getAllUsers();
    res.json(users)
}

const loginController = (req, res) =>{
    const {username, password} = req.body;
    const respuesta = login(username, password);
    const {token} = respuesta;
    const {message} = respuesta;

    if(token){
        return res.json({token: token});
    }
    res.status(401).json({message: message}); 

}   

module.exports = {getUsers, loginController}