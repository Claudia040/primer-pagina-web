//Este index es para las rutas
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{ //cambia de app.get a router.get
    /*res.send('Hello word'); --> para enviar una respuesta
    console.log(path.join(__dirname + 'views/index.html')); --> es para saber la direccion del archivo que lo ejecuta*/
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index.html', { title: 'Primera Pagina Web' });
});

router.get('/Contact', (req, res)=>{
    res.render('contact.html', { title: 'Contact Page' });
});

module.exports = router;