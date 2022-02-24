function ageindays()
{
 var age=prompt("Enter your birthyear");
 var ageindayss=(2020-age)*365;
 var h1=document.createElement('h1');
 var text=document.createTextNode('you are '+ageindayss+'days old');
 h1.setAttribute('id','ageindays');
 h1.appendChild(text);
 document.getElementById('flex-box-result').appendChild(h1);

}
function reset()
{
    document.getElementById('ageindays').remove();
}
//challenge 2
function generatecat()
{
    var img=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    img.src="tenor.gif";
    div.appendChild(img);
}
//challenge 3
function rpsgame(yourchoice)
{
    console.log(yourchoice);
    var humanchoice,botchoice;
    humanchoice=yourchoice.id;
    botchoice=numberTochoice(randtorpsInt());
    var results=winner(humanchoice,botchoice);
    message=finalmessage(results);
    rpsfrontend(yourchoice,botchoice,message);
}
funtion randtorpsInt()
{
    return Math.floor(Math.random()*3);
}
function numberTochoice(number)
{
   return ['rock','paper','scissors'][number];
}
function winner(humanchoice,botchoice)
{
    var database={'rock':{'scissors':1,'rock':0.5,'paper':0},
    'paper':{'rock':1,'paper':0.5,'scissors':0},
    'scissors':{'paper':1,'scissors':0.5,'rock':0}
}
var human=database[humanchoice][botchoice];
var bot=database[humanchoice][botchoice];
return [human,bot];
}
function finalmessage(humanchoice,botchoice)
{
    if(human===0)
    return{'message':'youlost','color':'red'};
    else if(human===0.5)
    return{'message':'tie','color':'yellow'}
    else 
    return {'message':'you win','color':'green'};

}
function rpsfrontend(humanchoice,botchoice,message)
{
    var database={'rock':document.getElementById('rock').src,
'paper':document.getElementById('paper').src,
'scissors':document.getElementById('scissors').src
}
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();
var humandiv=document.createElement('div');
var botdiv=document.createElement('div');
var messagediv=document.createElement('div');
humandiv.innerHTML="<img src=" +database[humanchoice]+"height=150 width=150 style:'box-shadow:0 10 50px rgba(37,50,233,1);'>"
botdiv.innerHTML="<img src="+database[botchoice]+"height=150 width=150 style:'box-shadow:0 10 50px rgba(37,50,233,1);'>"
}
