const {request, response} = require('express')

const usuariosGet = (req = request, res = response) =>{
    const {q, nombre, apikey} = req.query;

    res.status(403).json({
        ok: true,
        msg: 'get Api - Controlador',
        q,
        nombre,
        apikey
    })
  }

const usuariosPut = (req, res) =>{
   const id = req.params.id;
    res.status(403).json({
        ok: true,
        msg: 'put Api - controlador',
        id
    })
  }


const usuariosPost = (req, res) =>{
    const {nombre, edad} = req.body;
    res.status(403).json({
        ok: true,
        msg: 'post Api- controlador',
        nombre,
        edad
    })
  }


const usuariosDelete = (req, res) =>{
    res.status(403).json({
        ok: true,
        msg: 'delete Api- controlador'
    })
  }

const usuariosPatch = (req, res) =>{
    res.status(403).json({
        ok: true,
        msg: 'patch Api- controlador'
    })
  }
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost, 
    usuariosDelete,
    usuariosPatch
}