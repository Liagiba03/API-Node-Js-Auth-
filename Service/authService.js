

//POST -->login
const login = async (user, pass) =>{
    const URL_USER_SERVICE = "http://localhost:4000/usr/show-user-name/";

    try {
        const response = await fetch(URL_USER_SERVICE+user);
        //console.log(response);
        if(response.status ==200){
            const userInfo = await response.json();
            //console.log(user);
            if(userInfo.username === user && userInfo.password === pass){
                return {
                    status:200,
                    token:"token-falso-"+userInfo._id}
            }else{
                return {
                    status: 403,
                    message: "Usuario no autorizado, credenciales inválidas"
                }
            }
        }else{
            return {
                status: 404,
                message: "Usuario no encontrado"
            }
        }
    } catch (error) {
        return{
            status: 500,
            message: error.message
        }
    }
    
}

//CREAR USUARIOS
const createUser = async (user, pass)=>{
    const URL_USER_SERVICE = "http://localhost:4000/usr/create-user"
    try {
        const response = await fetch(URL_USER_SERVICE,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name: user,
                password: pass
            })
        });

        if(response.status ===201){
            return {
                status: 201,
                message: "Usuario creado"
            }
        }else{
            const errorData = await response.json();
            return {
                status: response.status,
                message: errorData.message || "Error al crear el usuario"
            };
        }

    } catch (error) {
        return{
            status: 500,
            message: error.message
        }
    }
}



module.exports= {login,createUser,}