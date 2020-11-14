const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy //instancia de uma classe

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha',
        session: false
    },(email,senha, done) =>{
        //buscar usuario no banco de dados -> 
        //const usuario = buscar no banco de dados
           // se o usuario não exisitir, ou estiver vazio (error)
           //se o usuario existir, compara a senha enviada na requsição com a senha do objeto usuario (usuario.senha)
           // se a senha for igual, done(null, usuario)
           //se a senha for diferente - mensagem "usuario ou senha errado"
           
           done(null, {})
    })
);