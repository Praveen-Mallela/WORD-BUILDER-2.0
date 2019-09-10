var gc=0;
const getMeaning = () => {
   var word= document.getElementById("txt1").value;
  fetch("https://googledictionaryapi.eu-gb.mybluemix.net/?define="+word+"&lang=en").then(res => res.json()).then(data => {
  console.log(data);
  var count=0;
  
  var mes=data["0"].meaning.noun["0"].definition;
  var mes1=data["0"].meaning.adjective;
  var mes2=data["0"].meaning.pronoun;
  var mes3=data["0"].meaning.verb;
  var mes4=data["0"].meaning.auxiliaryverb;
  var mes5=data["0"].meaning.conjunction;
  var mes6=data["0"].meaning.abbreviation;
  var mes9=data["0"].meaning.modalverb;
  var mes8=data["0"].meaning[pluralnoun];
  var mes7=data["0"].origin;
  var mes10=data["0"].meaning[modalverb];
  try{
  if(mes){
    count=count+1;
  } 
  if(mes10){
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
  console.log(mes);
  
  if(data){
      document.getElementById("def").innerHTML="CORRECT!!";
  }
  else{
    document.getElementById("def").innerHTML="INVALID"; 
  }
  }
  catch(err){
    document.getElementById("exe1").innerHTML=err.message;
  }
  
  }).catch(error => {
    document.getElementById("exe3").innerHTML="INVALID"; 
  })
  document.getElementById("txt1").value="";
  str="";
}
