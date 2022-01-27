const express = require('express')
const cors = require('cors')


class Server{


    constructor(){
        this.app = express()
        this.PORT = process.env.PORT
        this.usuariosPath = '/api/usuarios';


        this.middlewares();

        this.routes();
    }


    middlewares(){
        //Directorio publico
        this.app.use(express.static('public'));

        this.app.use(cors());

        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
          
    }


    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log('listen in port', this.PORT)
        })
    }
}

module.exports = Server;