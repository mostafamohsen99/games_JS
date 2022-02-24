//alert('Hello')
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
    //console.log(yourchoice);
    var humanchoice,botchoice;
    humanchoice=yourchoice.id;
   // console.log(humanchoice);
    botchoice=numberTochoice(randtoRpsInt());
    //console.log('computer choice is'+botchoice);
    results=decidewinner(humanchoice,botchoice);
    //console.log(results);
    message=finalmessage(results);
    //console.log(message);
    rpsfrontend(humanchoice,botchoice,message);

}
function randtoRpsInt()
{
    return Math.floor(Math.random()*3);
}
function numberTochoice(number)
{
    return ['rock','paper','scissors'][number];
}
function decidewinner(humanchoice,botchoice)
{
    var database={'rock':{'scissors':1,'rock':0.5,'paper':0},
'paper':{'rock':1,'paper':0.5,'scissors':0},
'scissors':{'paper':1,'scissors':0.5,'rock':0}
};
var yourscore=database[humanchoice][botchoice];
return yourscore;
}
function finalmessage(yourscore)
{
    if(yourscore===0)
    {
        return {'message':'you lost','color':'red'};
    }
    else if(yourscore===0.5)
    {
        return {'message':'you tied','color':'yellow'};
    }
    else
    {
        return {'message':'you win','color':'blue'};
    }
}
function rpsfrontend(humanchoice,botchoice,messagee)
{
    var images={'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissors':document.getElementById('scissors').src
}
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    var yourchoice=document.createElement('div');
    var computerchoice=document.createElement('div');
    var masseges=document.createElement('div');
    //yourchoice.innerHTML="<img src=" +images[humanchoice]+ ">";
    yourchoice.innerHTML="<img src="+images[humanchoice]+" height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>";
    computerchoice.innerHTML="<img src="+images[botchoice]+" height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>";
    masseges.innerHTML="<h1 style='color: "+messagee['color']+ " font-size:60px; padding:30px;'>"+messagee['message']+"</h1>"; 
    document.getElementById('flex-box-rgs').appendChild(yourchoice);
    document.getElementById('flex-box-rgs').appendChild(masseges);
    document.getElementById('flex-box-rgs').appendChild(computerchoice);
    

}
var allbuttons=document.getElementsByTagName('button');
//console.log(allbuttons);
var copyallbuttons=[];
for(let i=0;i<allbuttons.length;i++)
{
    copyallbuttons.push(allbuttons[i].classList[1]);
}
function buttonchangecolor(thingy)
{
    if(thingy.value==='red')
     buttonred();
    else if(thingy.value==='green')
     buttongreen();
     else if(thingy.value==='reset')
     buttonreset();
     else
     buttonrandom();
}
function buttonred()
{ 
   for(let i=0;i<allbuttons.length;i++)
   {
       allbuttons[i].classList.remove(allbuttons[i].classList[1]);
       allbuttons[i].classList.add('btn-danger');
   }
}
function buttongreen()
{
    for(let i=0;i<allbuttons.length;i++)
    {
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add('btn-success');
    }
}
function buttonreset()
{
    for(let i=0;i<allbuttons.length;i++)
    {
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add(copyallbuttons[i]);
    }
}
function buttonrandom()
{
    let color=['btn-success','btn-primary','btn-danger','btn-warning'];
    for(let i=0;i<allbuttons.length;i++)
    {
    var count=Math.floor(Math.random()*4);
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add(color[count]);
    }
}
//challenge 5:Blackjack
let blackjackgame={
    'you':{'scorespan':'#your-blackjack-result','div':'#yourbox','score':0},
    'dealer':{'scorespan':'#dealer-blackjack-result','div':'#dealerbox','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','J','K','Q','A'],
    'cardsvalue':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'A':[1,11],'Q':10,'J':10,'K':10},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand':false,
    'turnsOver':false
};
const YOU=blackjackgame['you'];
const dealer=blackjackgame['dealer'];
const hitsound=new Audio('blackjackassets/sounds/swish.m4a');
const winsound=new Audio('blackjackassets/sounds/cash.mp3');
const losssound=new Audio('blackjackassets/sounds/aww.mp3');
document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackhit);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackdeal);
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerlogic);
function blackjackhit()
{
    if(blackjackgame['isStand']===false)
    {
    var card=randomcards();
    //console.log(card);
    showcard(YOU,card);
    updatescore(YOU,card);

    showscore(YOU);
    }
}
function showcard(activeplayer,card)
{
    if(activeplayer['score']<21)
    {
    let cardimage=document.createElement('img');
    cardimage.src='blackjackassets/images/'+card+'.png';//$(card).png
    cardimage.width=100;
    cardimage.height=100;
    cardimage.style='padding:10px;';
    document.querySelector(activeplayer['div']).appendChild(cardimage);
    hitsound.play();
    }
}
function blackjackdeal()
{
    if(blackjackgame['turnsOver']===true)
    {
        blackjackgame['isStand']=false;
    let yourimages=document.querySelector('#yourbox').querySelectorAll('img');
    let dealerimages=document.querySelector('#dealerbox').querySelectorAll('img');
    for(let i=0;i<yourimages.length;i++)
    {
    yourimages[i].remove();
    }
    for(let i=0;i<dealerimages.length;i++)
    {
    dealerimages[i].remove();
    }
    YOU['score']=0;
    dealer['score']=0;
    document.querySelector('#your-blackjack-result').textContent=0;
    document.querySelector('#dealer-blackjack-result').textContent=0;
    document.querySelector('#your-blackjack-result').style.color='white';
    document.querySelector('#dealer-blackjack-result').style.color='white';
    document.querySelector('#blackjack').textContent="let's play";
    document.querySelector('#blackjack').style.color='black';
    blackjackgame['turnsOver']=true;
}
}
function randomcards()
{
    var randomcard=Math.floor(Math.random()*13);
    return blackjackgame['cards'][randomcard];
}
function updatescore(activeplayer,card)
{
    if(card==='A')
    {
        if(activeplayer['score']+blackjackgame['cardsvalue'][card][1]<=21)
        {
            activeplayer['score']+=blackjackgame['cardsvalue'][card][1];
        }
        else
        {
            activeplayer['score']+=blackjackgame['cardsvalue'][card][0];
        }
    }
    else
    {
    activeplayer['score']+=blackjackgame['cardsvalue'][card];
    }
}
function showscore(activeplayer)
{
    if(activeplayer['score']>21)
    {
    document.querySelector(activeplayer['scorespan']).textContent='BUSTS!';
    document.querySelector(activeplayer['scorespan']).style.color='red';
}else
    document.querySelector(activeplayer['scorespan']).textContent=activeplayer['score'];
}
function sleep(ms)
{
    return new Promise (resolve =>setTimeout(resolve,ms));
}
async function dealerlogic()
{
    blackjackgame['isStand']=true;
    while(dealer['score']<16&&blackjackgame['isStand']===true)
    {
    var card=randomcards();
    //console.log(card);
    showcard(dealer,card);
    updatescore(dealer,card);

    showscore(dealer);
    await sleep(1000);
    }
    blackjackgame['turnsOver']=true;
        showresult(computewinner());
}
function computewinner()
{
    let winner;
    if(YOU['score']<=21)
    {
        if(YOU['score']>dealer['score']||dealer['score']>21)
        {
            //console.log('you win');
            winner=YOU;
            blackjackgame['wins']++;
        }
        else if(YOU['score']<dealer['score'])
        {
           // console.log('you loss');
            winner=dealer;
            blackjackgame['losses']++;
        }
        else if(YOU['score']==dealer['score'])
        {
         //   console.log('you tie');
            blackjackgame['draws']++;
        }
    }
    else if(YOU['score']>21&&dealer['score']<=21)
    {
       // console.log('you loss');
        winner=dealer;
        blackjackgame['losses']++;
    }
    else if(YOU['score']>21&&dealer['score']>21)
    {
     //   console.log('you tie');
        blackjackgame['draws']++;
    }
    //console.log('winner is',winner);
    console.log(blackjackgame);
    return winner;
}
function showresult(winner)
{
    if(blackjackgame['turnsOver']===true)
    {
    if(winner==YOU)
    {
        document.querySelector('#blackjack').textContent='you won';
        document.querySelector('#blackjack').style.color='green';
        document.querySelector('#wins').textContent=blackjackgame['wins'];
        winsound.play();
    }
    else if(winner==dealer)
    {
        document.querySelector('#blackjack').textContent='you loss';
        document.querySelector('#blackjack').style.color='red';
        document.querySelector('#losses').textContent=blackjackgame['losses'];
        losssound.play();
    }
    else
    {
        document.querySelector('#blackjack').textContent='you tie';
        document.querySelector('#blackjack').style.color='yellow';
        document.querySelector('#ties').textContent=blackjackgame['draws'];
    }
}
}