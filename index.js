function scuberGreetingForFeet(depth){
  // Write your code here!
  if(depth<=400){
    return ('This one is on me!');
  } else if (depth>399 && depth<=2000){
    return ('That will be twenty bucks.');
  } else if (depth>2000 && depth<=2500){
    return ('I will gladly take your thirty bucks.');
  } else {
    return ('No can do.');
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';

}

function switchOnCharmFromTip(tipStatus){
  // Write your code here!
  switch (tipStatus) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.'
  }
}