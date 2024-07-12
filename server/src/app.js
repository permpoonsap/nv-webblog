let express = require('express');
const app = express()

app.get('/status', function (req, res){
console.log('=====================');
console.log(req);
console.log('=====================');
res.send('Hello nodejs server');
})
app.get('/showmyname/:person', function (req, res){
    console.log('hello - ' + req.params.person)
    res.send('hello' + "   " + req.params.person);
    })
    app.get('/pow2/:person', function (req, res){
        console.log('hello - ' + req.params.person)
        res.send(req.params.person + "   " + 'power' + "   " + 2 + ' = ' + (req.params.person*req.params.person));
        })
    // app.get('/pow2/:person', function (req, res){
        
    //     let person = parseInt(req.params.person);
    
    //     let result = Math.pow(person, 2);
    
    //     res.send(person + " power 2 = " + result);
    // });
    


let port = 8081

app.listen(port, function () {
    console.log('server running on http://localhost:' + port)
});