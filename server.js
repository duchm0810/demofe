var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var fs = require("fs");
console.log("Going to get file info!");

var BTC = 80;
var BCH = 100;
var ETH = 110;
var ETC = 140;
var XRP = 90;
var BNB = 88;

var listMatch = [];

function createRoom(userID) {
    const room = {};
    obj.id = Math.random().toString(36).substring(7);
    obj.users = [];
    return obj;
}
app.get('/', function (req, res) {
    res.send('<h1>Server is running...</h1>');
});
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
fs.stat('user.json', function (err, stats) {
   if (err) {
      return console.error(err);
   }
   //console.log(stats);
   console.log("Got file info successfully!");
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());
});

app.get('/listUsers', function (req, res) {
	fs.readFile("user.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.post('/findMatch', function (req, res)
{
    if (listMatch.length == 0) {

    }
})
app.post('/warriorData', function (req, res)
{
    console.log(req.body);
    res.end("{\"m_matchId\":\"21342\",\"m_playerData\":[{\"m_userID\":\"id01\",\"m_warriorName\":[\"BCH\",\"BTC\",\"XRP\",\"ETC\",\"ETH\"],\"m_isWin\":true,\"m_profit\":2.0},{\"m_userID\":\"id02\",\"m_warriorName\":[\"ETH\",\"ETC\",\"BTC\",\"BCH\",\"XRP\"],\"m_isWin\":false,\"m_profit\":0.20000000298023225}],\"m_matchType\":0}");
})
app.post('/getPrice', function (req, res) {
    
    if (getRandomInt(2) == 1)
    {
        BTC += Math.random(0.02);
    }
    else
    {
        BTC -= Math.random(0.02);
    }
    if (getRandomInt(2) == 1) {
        BCH += Math.random(0.02);
    }
    else {
        BCH -= Math.random(0.2);
    }
    if (getRandomInt(2) == 1) {
        ETC += Math.random(0.02);
    }
    else {
        ETC -= Math.random(0.2);
    }
    if (getRandomInt(2) == 1) {
        ETH += Math.random(0.02);
    }
    else {
        ETH -= Math.random(0.2);
    }
    if (getRandomInt(2) == 1) {
        XRP += Math.random(0.02);
    }
    else {
        XRP -= Math.random(0.2);
    }
    if (getRandomInt(2) == 1) {
        BNB += Math.random(0.02);
    }
    else {
        BNB -= Math.random(0.2);
    }
    console.log("{\"m_roundInfor\": [{ \"m_name\": \"BCH\", \"m_price\": " + BTC + " }, { \"m_name\": \"BTC\", \"m_price\": " + BCH + " }, { \"m_name\": \"ETC\", \"m_price\": " + ETC + " }, { \"m_name\": \"ETH\", \"m_price\": " + ETH + " }, { \"m_name\": \"XRP\", \"m_price\": " + XRP + " }, { \"m_name\": \"BNB\", \"m_price\": " + BNB + " }]}");
    res.end("{\"m_roundInfor\": [{ \"m_name\": \"BCH\", \"m_price\": " + BTC + " }, { \"m_name\": \"BTC\", \"m_price\": " + BCH + " }, { \"m_name\": \"ETC\", \"m_price\": " + ETC + " }, { \"m_name\": \"ETH\", \"m_price\": " + ETH + " }, { \"m_name\": \"XRP\", \"m_price\": " + XRP + " }, { \"m_name\": \"BNB\", \"m_price\": " + BNB + " }]}");
})
app.post('/getUser', function (req, res) {
    // First read existing users.
    fs.readFile("user.json", 'utf8', function (err, data) {
        var users = JSON.parse(data);
        for (var user of users.m_listUser) {
            //console.log("user : " + JSON.stringify(user));
            if (user.m_userID == req.body.m_userID) {
                console.log("req.body.m_userId : " + req.body.m_userId + "?" +JSON.stringify(user));
                res.end(JSON.stringify(user));
            }
        }
    });
})

app.post('/addUser', function (req, res) {
   // First read existing users.
   console.log(req.body);
   res.end(JSON.stringify(req.body));
   // fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
   //    data = JSON.parse( data );
   //    data["user4"] = user["user4"];
   //    console.log( data );
   //    res.end( JSON.stringify(data));
   // });
})
app.get('/user21', function (req, res) {
    fs.readFile("user.json", 'utf8', function (err, data) {
        var users = JSON.parse(data);
        console.log(users);
        for (var user in users) {
                console.log(user["m_userId"]);
        }
    });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Running at http://%s:%s", host, port)
})
