/* 2. Используя модуль request и http - отдать по запросу 
клиента localhost:3000/courses курсы ПриватБанка. */

const request = require("request");
const http = require("http");
const port = 3000;        

let url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3";

request(url, (err, res, data) => {
    http.createServer((req,res) => {
        if (req.url === "/courses"){
                res.write(data);   
                res.end();
        }
    }).listen(port, () => {
        console.log("Server at http://locallhost:3000");
    })
})






/*
// 3. Написать 5 примеров callback функций.

function greet(callback){                         // 1
    callback();
    console.log("Hello! I'm the first function.");
}

greet(sayHi);



function askQuest(helloCallback, askCallback){   // 2
    helloCallback();
    console.log("I'm the second function.")
    askCallback();
}

askQuest(sayHi, ask);



function showMessage(callback){                 // 3
    callback("I'm function number three.");
}

showMessage(sayMessage);


elem.addEventListener("click", sayBye);         // 4


setTimeout(sayBye, 2000);                       // 5



function sayHi(){
    console.log("Hi!");
}

function ask(){
    console.log("How are you?");
}

function sayMessage(message){
    console.log(message);
}

function sayBye(){
    console.log("Bye!")
}

*/
