const {greet} = require("../Service/greetService");

const greetProtected = (req, res) =>{
    res.status(200).json(greet());
}

module.exports = {greetProtected};