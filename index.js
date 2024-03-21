
  // Write your code here!
  function scuberGreetingForFeet(SOMEVALUE){
  let greeting;

  if(SOMEVALUE <= 400){
      greeting = 'This one is on me!';

  } else if (SOMEVALUE> 400 && SOMEVALUE <= 2000) {
    greeting = 'That will be twenty bucks.';

  }else if (SOMEVALUE > 2000 && SOMEVALUE <= 2500) {

  greeting = 'I will gladly take your thirty bucks.';
}
else if (SOMEVALUE > 2500) {
  greeting = 'No can do.'; }

return greeting;}


 // Write your code here!
function ternaryCheckCity(DESTINATION){
  return DESTINATION === 'NYC'? 'Ok, sounds good.': 'No go.';


}



// Write your code here!
function switchOnCharmFromTip(TIP){
  let feedback;

  switch (TIP){
      case 'generous' :

  feedback = 'Thank you so much.';
   
  break;
      case 'not as generous' :

  feedback = 'Thank you.';
  
  break;
     default:
      feedback = 'Bye.';

  break;


  }
return feedback;
  
}