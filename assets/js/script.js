$(document).ready(initializeApp);
var firstCardClicked=null;
var secondCardClicked=null;
var matches=null;

function initializeApp(){
  $(".back").on("click",handleCardClkick);
}
function handleCardClkick(event){
  $(event.currentTarget).addClass("hide");
  console.log($this).find('background-image')
  var currentCard = event.delegateTarget.parentElement.childNodes[1];
  if(firstCardClicked === null){
    firstCardClicked = $(currentCard);
  }
  if(firstCardClicked !== null){
    secondCardClicked = $(currentCard);
  }

  console.log(event);
  console.log(event.delegateTarget.parentElement.childNodes[1]);
  console.log(event.currentTarget.baseURI);
}
