var sobr = require('./sobrenomes.json');
var nom = require('./nomes.json');
var fs = require('fs');
const { Observable, Subject, ReplaySubject, from, of, range, interval } = require('rxjs');
const { map, filter, switchMap, takeUntil, take } = require('rxjs/operators');

   var int =  interval(500);
   const example = int.pipe(take(1900));
   example.subscribe(res=>{
       console.log(res);
       generate2k();
   })

console.log(sobr.length)
var emailProvider = '@gmail.com';


function generate2k(){
    var name = getANome();
    var sobrenome = getASobrenome();
    var ultimoNome = getUltimoNome();
generateEmail(name,sobrenome,ultimoNome)
    
}

function saveEmailToArray(email){
    var arr = require('./newMails.json');
    arr.push(email);
    fs.writeFile("newMails.json",JSON.stringify(arr), function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    }); 
}

function generateEmail(name, sobrenome, ultimoNome){
    var newMail;
    var randomWhich=getRandom(1,2);
    if(randomWhich===1){
        newMail = name+getCharAt(sobrenome)+ultimoNome;
        newMail=newMail.toLowerCase()+emailProvider;
        newMail=newMail.replace(/\s/g, '');
    }else{
        newMail = name+sobrenome+ultimoNome;
        newMail=newMail.toLowerCase()+emailProvider;
        newMail=newMail.replace(/\s/g, '');
    }

    saveEmailToArray(newMail);
    console.log(newMail)
}
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

function getASobrenome(){

    var random = getRandom(0, sobr.length);
    var sobrenome = sobr[random];
    sobrenome = sobrenome.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    return sobrenome;
    
}
function getANome(){

    var random = getRandom(0, nom.length);
    var nome = nom[random];
    nome = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    return nome;
    
}
function getUltimoNome(){
    var random;
    var ultimoNome;
    var randomWhich = getRandom(1,2);
    console.log('which',randomWhich)
    if(randomWhich===2){
        random = getRandom(0, sobr.length);
        ultimoNome = sobr[random];
    }else{
        random = getRandom(0, nom.length);
        ultimoNome = nom[random];
    }
    ultimoNome=ultimoNome.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    
    return ultimoNome;
    
}

function getCharAt(string){
    var chars = string.charAt(0);
    chars = chars.toLowerCase();
    return chars;
    
}