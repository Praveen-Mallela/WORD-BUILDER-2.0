var dw;
var life=3;
var score=0;
var sou=new Audio();
var sou4=new Audio();
sou.src="bell.mp3";
sou4.src="go.mp3";
var sou2=new Audio();
var sou3=new Audio();
sou2.src="beep.mp3";
sou3.src="err.mp3";
function wordgive(){
  sou.play();
   /* function random_item(items)
    {
        return Math.floor((Math.random() * 20) + 1);   
    }*/
    document.getElementById("scr").setAttribute("style","visibility:hidden");
    document.getElementById("in").setAttribute("style","visibility:visible");
    document.getElementById("txt").setAttribute("style","visibility:visible");
    document.getElementById("but").setAttribute("style","visibility:visible");
    document.getElementById("score").innerHTML=score;
    document.getElementById("lif").innerHTML=life;
    var tx=makeid();
    scrambler(tx);
}
function scrambler(num){
    
    $('#praveen').find('label').remove();
    permute(num);
}
function permute(stri){
    var shuffled=stri;
    for(var i=0;i<shuffled.length;i++)
    {
            var board = document.createElement('label');
            board.id="sp";
            board.innerText=shuffled[i];
            $('#praveen').append(board);
            $('label').css({"width":"50px" , "height":"50px","background-color":"yellow","border":"3px groove blue","font-size":"150%"})
    }
}
function search(){
    var ew=document.getElementById("txt").value;
    document.getElementById("but").setAttribute("style","visibility:hidden");
    getMeaning(ew);
}
const getMeaning = (str3) => {
    var word= str3;
    for(var i=0;i<word.length;i++)
    {
      if(text1.indexOf(word.charAt(i))==-1){word="";break;}
    }
    if(score>=100){
        alert("YOU WON");
    }
    fetch("https://googledictionaryapi.eu-gb.mybluemix.net/?define="+word+"&lang=en").then(res => res.json()).then(data => {
   console.log(data);
   var count=0;
   var mes=data["0"].meaning.noun;
   var mes0=data["0"].meaning;
   var mes1=data["0"].meaning.adjective;
   var mes2=data["0"].meaning.pronoun;
   var mes3=data["0"].meaning.verb;
   var mes4=data["0"].meaning.auxiliaryverb;
   var mes5=data["0"].meaning.conjunction;
   var mes6=data["0"].meaning.abbreviation;
   var mes8=data["0"].meaning.modalverb;
   var mes9=data["0"].meaning.adverb;
   var mes10=data["0"].meaning.preposition;
   var mes7=data["0"].origin;
  
   try{

    if(mes){
     count=count+1;
   } 
   if(mes0){
    count=count+1;
  } 
   if(mes1){
       count=count+1;
   } 
   if(mes2){
       count=count+1;
   } 
   if(mes3){
       count=count+1;
   } 
   if(mes4){
       count=count+1
   } 
   if(mes5){
       count=count+1;
   } 
   if(mes6){
      count=count+1;
   }
   if(mes7){
     count=count+1;
   }
   if(mes8){
     count=count+1;
   }
   if(mes9){
    count=count+1;
  }
  if(mes10){
    count=count+1;
  }
   if(count>0 && count<11 && mes7){
       document.getElementById("imgdiv").innerHTML = '<img width="50" height="50" left="100" top="100" src="valid.png" />';
       document.getElementById("w3").innerHTML="CORRECT"; 
       document.getElementById("but").setAttribute("style","visibility:visible");
       document.getElementById("txt").value="";
       document.getElementById("w2").innerHTML="";
       score+=20;
       document.getElementById("score").innerHTML=score;
       if(score>=100){
         alert("you won");
         window.location.href="index.html";
       }
       wordgive();
   }
   else{
     if(life>=1){
       life=life-1;
       document.getElementById("lif").innerHTML=life;
     }
     if(life==0){
      sou4.play();
      alert("game over");
      window.location.href="index.html";
     }
     document.getElementById("imgdiv").innerHTML = '<img width="50" height="50" left="100px" top="100px" src="sad.png" />';
     document.getElementById("w2").innerHTML="WRONG";
     sou3.play();
     document.getElementById("but").setAttribute("style","visibility:visible");
     document.getElementById("txt").value="";
     document.getElementById("w3").innerHTML="";
     document.getElementById("score").innerHTML=score;
     
   }
   }
   catch(err){
     console.log(err);
   }
   }).catch(error => {
      console.log(error);
      if(life>=1){
        life=life-1;
        document.getElementById("lif").innerHTML=life;
      }
      if(life==0){
        sou4.play();
        alert("game over");
        window.location.href="index.html";
      }
      sou3.play();
      document.getElementById("imgdiv").innerHTML = '<img width="50" height="50" left="100px" top="100px" src="ang.jpg" />';
     document.getElementById("w2").innerHTML="WRONG";
     document.getElementById("w3").innerHTML="";
     document.getElementById("but").setAttribute("style","visibility:visible");
     document.getElementById("txt").value="";
     
  })
}
var text1="";
function makeid() {
  var d = 10;
  var z=d;
  var text = "";
  var flag=0;
  var possible = "abcdefghijklmnopqrstuvwxyz";
  while(z!=0)
  {
    var y=possible.charAt(Math.floor(Math.random() * possible.length));
    var x=checkford(y,text)
    if(x=="false")
    {
      text+=y;
      z=z-1;
    }
  }
  text1=text;
  return text;
}
function checkford(y,text2)
{
  for(var i=0;i<text2.length;i++)
    {
      if(y==text2.charAt(i)) {return "true";}
    }
    return "false";
}