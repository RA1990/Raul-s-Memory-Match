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
  }else {
    secondCardClicked = $(event.currentTarget);
    secondCardImage = $(currentCard).css("background-image");

    console.log('Match?:', firstCardImage === secondCardImage);
    if(firstCardImage === secondCardImage){
      matches +=1;

      firstCardClicked = null;
      secondCardClicked = null;
    } else {
      setTimeout(function(){
        $(firstCardClicked).removeClass("hide");
        $(secondCardClicked).removeClass("hide");
        firstCardClicked = null;
        secondCardClicked = null;
      },2000);
    }
    if(matches === 2){
      $(".modal-content").css("visibility","visible");
       $(".modal").css("display","block");
    }
  }

  console.log(event);
  console.log(event.delegateTarget.parentElement.childNodes[1]);
  console.log(event.currentTarget.baseURI);
}
