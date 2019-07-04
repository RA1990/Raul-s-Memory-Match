$(document).ready(initializeApp);
var firstCardClicked=null;
var secondCardClicked=null;
var matches=null;
var firstCardImage = null;
var secondCardImage= null;

function initializeApp(){
  $(".back").on("click",handleCardClkick);
}
function handleCardClkick(event){
  $(event.currentTarget).addClass("hide");
  var currentCard = event.delegateTarget.parentElement.childNodes[1];
  if(firstCardClicked === null){
    firstCardClicked = $(event.currentTarget)
    firstCardImage = $(currentCard).css("background-image");
  }
  if(firstCardClicked !== null){
    secondCardClicked = $(event.currentTarget);
    secondCardImage = $(currentCard).css("background-image");
  }
  if(firstCardImage === secondCardImage){
    matches +=1
  }
  if(firstCardImage !== secondCardImage){
    setTimeout(function(){$(firstCardClicked).removeClass("hide")},2000);
    setTimeout(function(){$(secondCardClicked).removeClass("hide")},2000);
  }

  console.log(event);
  console.log(event.delegateTarget.parentElement.childNodes[1]);
  console.log(event.currentTarget.baseURI);
}
