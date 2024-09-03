const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

//crear el servidor con el estado 200 y texto en plano
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text-plain')
    res.end('Servidor funcionando en node \n')
});
//mandar a llamar el servidor
server.listen(port, hostname,()=>{
    console.log('el servidor node se esta corriendo en http://127.0.0.1:3000')
})