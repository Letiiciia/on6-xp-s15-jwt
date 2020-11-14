const jwt = require('jsonwebtoken');

function createToken (){
    payload = {}
    return jwt.sign(payload, 'senha-secreta');
}

module.exports = {
    login: (request, response) =>{
        const token = createToken();
        response.set('Authorization', token)
        response.status(204).send();
    }
}