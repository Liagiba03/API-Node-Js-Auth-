const {users} = require("../data/users.js");

//Funcion para la primer ruta

//get --> /get-users
const getAllUsers =() =>{
    return users;
}

//get -->login
const login =(user, pass) =>{
    //COLOCAR BIEN EL TOKEN token-falso-1
    var token = "token-falso-";
    //const validate= getUserByNameAndPass(user, pass)
    //console.log(validate);
    // Validar usuario
    //if (validate){
    if (getUserByNameAndPass(user, pass)){
       token += getUserByNameAndPass(user, pass).id;
        return {token};
    }
    return {message: "usuario o contraseña incorrectos"};
}

const getUserByNameAndPass = (user, pass) =>{
    return users.find(usr => usr.username === user && usr.password === pass);
}

module.exports= {getAllUsers, login}