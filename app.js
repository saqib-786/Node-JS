const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello World!');
        res.end();
    }else if(req.url === '/form'){
        res.setHeader('Content-Type','text/html');
        res.write('<form> <input name="userName" /> <button>SUBMIT</button> </form>');
        res.end();

    }else{
        res.write('404 - File Not Found');
        res.end();
    }
    

});

server.listen(3000)