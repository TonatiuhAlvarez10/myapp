const express = require ('express');
const ruta = require ('ruta');

aplicación constante = express ();

// Sirve solo los archivos estáticos del directorio dist
app.use (express.static (__ dirname + '/ dist / <my-app>'));

app.get ('/ *', function (req, res) {
    
res.sendFile (path.join (__ dirname + '/ dist / <my-app> /index.html'));
});

// Inicie la aplicación escuchando en el puerto Heroku predeterminado
app.listen(port, () => console.log(`Example app listening on port ${port}!`))