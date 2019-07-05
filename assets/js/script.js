$(document).ready(initializeApp);
var firstCardClicked=null;
var secondCardClicked=null;
var matches=null;
var firstCardImage = null;
var secondCardImage= null;
var checkbox1 = null;
var checkbox2 =null;
var attempts =null;
var accuracy = null;
var gamePlayed =null;
var arnoldAudio = new Audio("/Users/rauljauregui/lfz/memory_match/Get to the Choppa.mp3");
var eddieAudio = new Audio("/Users/rauljauregui/lfz/memory_match/Axels famous laugh.mp3")
var alPacinoAudio = new Audio("/Users/rauljauregui/lfz/memory_match/Say Hello To My Little Friend.mp3");
var bruceAudio = new Audio("/Users/rauljauregui/lfz/memory_match/Yippeekiyay.mp3");
var ramboAudio = new Audio("/Users/rauljauregui/lfz/memory_match/Killing is easy as breathing.mp3")
var melAudio = new Audio("/Users/rauljauregui/lfz/memory_match/If you dont have freedom.mp3");
var vanAudio = new Audio("/Users/rauljauregui/lfz/memory_match/Can do splits.mp3")
var samuelAudio = new Audio("/Users/rauljauregui/lfz/memory_match/English do you speak it.mp3")
var alienAudio = new Audio("/Users/rauljauregui/lfz/memory_match/Nobody touch nothing.mp3")
var woodAudio = new Audio("/Users/rauljauregui/lfz/memory_match/Do You Feel Lucky Punk.mp3")



function initializeApp(){
  $(".card").on("click",handleSounds);
  $(".card").on("click",handleCardClkick);
  $("span").on("click",resetGame);

}
function calculateAccuracy(){
  //debugger;
accuracy = matches/attempts;
var newAccuracy = accuracy.toFixed(2)
$("aside div:nth-child(7)").text(newAccuracy+"%");
}
function resetGame(){
  debugger;
        $('input').prop("checked",false);
        firstCardClicked=null;
        secondCardClicked=null;
        matches=null;
        firstCardImage = null;
        secondCardImage= null;
        checkbox1 = null;
        checkbox2 =null;
        attempts =0;
        accuracy = 0;
        gamePlayed+=1
        $("aside div:nth-child(3)").text(gamePlayed);
        $("aside div:nth-child(5)").text(attempts);
        $("aside div:nth-child(7)").text(accuracy+"%");
        $(".modal-content").css("visibility","hidden");
        $(".modal").css("display","none");
}


function handleSounds(event){
//debugger;
console.log(event);
console.log(event.delegateTarget.lastElementChild);
var currentEvent = event.delegateTarget.lastElementChild;
var compareImageToSound = $(currentEvent).css("background-image");
var arnold ='url("file:///Users/rauljauregui/lfz/memory_match/Arnold.jpg")';
var eddie ='url("file:///Users/rauljauregui/lfz/memory_match/beverly_hills_cop_eddie_murphy_with_gun.jpg")';
var alPacino ='url("file:///Users/rauljauregui/lfz/memory_match/scarface.jpg")';
var bruce = 'url("file:///Users/rauljauregui/lfz/memory_match/bruce.jpg")';
var rambo = 'url("file:///Users/rauljauregui/lfz/memory_match/rambo1.jpeg")';
var mel = 'url("file:///Users/rauljauregui/lfz/memory_match/mel.jpg")';
var van = 'url("file:///Users/rauljauregui/lfz/memory_match/van2.jpg")';
var samuel ='url("file:///Users/rauljauregui/lfz/memory_match/sam.jpg")';
var alien = 'url("file:///Users/rauljauregui/lfz/memory_match/alien.jpg")';
switch(compareImageToSound){
    case arnold:
      console.log("arnold");
      arnoldAudio.play();
      break;
      case eddie:
      eddieAudio.play();
      break;
      case alPacino:
        alPacinoAudio.play();
        break;
        case bruce:
        bruceAudio.play();
        break;
        case rambo:
          ramboAudio.play();
          break;
          case mel:
            melAudio.play();
            break;
            case van:
              vanAudio.play();
              break;
              case samuel:
                samuelAudio.play();
                break;
                case alien:
                  alienAudio.play();
                  break;

  }
}




function handleCardClkick(event){
  //playSound("https://audio.code.org/win3.mp3", true);
  console.log(event)
  console.log(event.delegateTarget.parentElement.control)
  console.log(event.delegateTarget.lastElementChild);
  //debugger;
  //$(event.currentTarget).removeClass("front backCard");
  var currentCard =event.delegateTarget.lastElementChild; //event.delegateTarget.parentElement.childNodes[1];
  if(firstCardClicked === null){
    firstCardClicked = $(event.currentTarget)
    checkbox1 = $(event.delegateTarget.parentElement.control);
    firstCardImage = $(currentCard).css("background-image");
  }else {
    secondCardClicked = $(event.currentTarget);
    checkbox2 = $(event.delegateTarget.parentElement.control);
    secondCardImage = $(currentCard).css("background-image");
    attempts +=1
    $("aside div:nth-child(5)").text(attempts);
    calculateAccuracy();

    console.log('Match?:', firstCardImage === secondCardImage);
    if(firstCardImage === secondCardImage){
      matches +=1;
      firstCardClicked = null;
      secondCardClicked = null;
    } else {
      setTimeout(function(){
        $(checkbox1).prop("checked",false);
        $(checkbox2).prop("checked",false);
        firstCardClicked = null;
        secondCardClicked = null;
      },700.000);
    }
    if(matches === 9){
      //debugger;
      $(".modal-content").css("visibility","visible");
      $(".modal").css("display","block");
      woodAudio.play();
    }
  }

  // console.log(event);
  // console.log(event.delegateTarget.parentElement.childNodes[1]);
  // console.log(event.currentTarget.baseURI);
}
