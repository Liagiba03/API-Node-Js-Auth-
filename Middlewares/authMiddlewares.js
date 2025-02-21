//Middleware
const validarToken= (req, res, next)=>{
    const token = req.headers.authorization;
    if(token){
        if(token.startsWith("token-falso-")){
            next();
        }else{
            res.status(403).json({message:"Acceso denegado por token falso"});
        }
    }else{
        res.status(403).json({
            message: "Acceso denegado. No hay token"
        })
    }
}

module.exports = {validarToken};