const http = require('http');

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`)

})

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});

