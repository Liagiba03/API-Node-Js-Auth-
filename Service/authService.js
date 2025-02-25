const {users} = require("../data/users.js");
const { User } = require("../models/userModel.js");

//Funcion para la primer ruta

//get --> /get-users
const getAllUsers = async () =>{
    try {
        const users =await User.find();
        return users;
    } catch (error) {
        console.log(error);
        return null;
        
    }
}

//CREATE USERS
const createUser = async (username, password)=>{
    try {
        const newUser = new User({username, password})
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        return null;
    }
}

//get -->login
const login = async (user, pass) =>{
    //COLOCAR BIEN EL TOKEN token-falso-1
    
    const validate= await getUserByNameAndPass(user, pass);
    //console.log(validate);
    // Validar usuario
    if (validate){
    //if (getUserByNameAndPass(user, pass)){
        var token = `token-falso-${validate._id}`;
       //token += getUserByNameAndPass(user, pass).id;
        return {token};
    }else{
        return {message: "usuario o contraseña incorrectos"};
    }
}

const getUserByNameAndPass = async (user, pass) =>{
    //return users.find(usr => usr.username === user && usr.password === pass);
    try {
        const user = User.findOne({user, pass});
        return user;
    } catch (error) {
        return null;
    }
}

module.exports= {getAllUsers, login, createUser}