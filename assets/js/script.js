$(document).ready(initializeApp);

function initializeApp(){
  new MemoryMatch();
}

class MemoryMatch{

constructor(){
    this.stopBigCheater=null;
    this.stopCheater = null;
    this.firstCardClicked = null;
    this.secondCardClicked = null;
    this.matches = null;
    this.firstCardImage = null;
    this.secondCardImage = null;
    this.checkbox1 = null;
    this.checkbox2 = null;
    this.attempts = null;
    this.accuracy = null;
    this.gamePlayed = null;
    this.arnoldAudio = new Audio("/Users/rauljauregui/lfz/memory_match/sounds/Get to the Choppa.mp3");
    this.eddieAudio = new Audio("/Users/rauljauregui/lfz/memory_match/sounds/Axels famous laugh.mp3")
    this.alPacinoAudio = new Audio("/Users/rauljauregui/lfz/memory_match/sounds/Say Hello To My Little Friend.mp3");
    this.bruceAudio = new Audio("/Users/rauljauregui/lfz/memory_match/sounds/Yippeekiyay.mp3");
    this.ramboAudio = new Audio("/Users/rauljauregui/lfz/memory_match/sounds/Killing is easy as breathing.mp3")
    this.melAudio = new Audio("/Users/rauljauregui/lfz/memory_match/sounds/If you dont have freedom.mp3");
    this.vanAudio = new Audio("/Users/rauljauregui/lfz/memory_match/sounds/Can do splits.mp3");
    this.samuelAudio = new Audio("/Users/rauljauregui/lfz/memory_match/sounds/English do you speak it.mp3");
    this.alienAudio = new Audio("/Users/rauljauregui/lfz/memory_match/sounds/Nobody touch nothing.mp3");
    this.woodAudio = new Audio("/Users/rauljauregui/lfz/memory_match/sounds/Do You Feel Lucky Punk.mp3");
    this.calculateAccuracy = this.calculateAccuracy.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.handleSounds = this.handleSounds.bind(this);
    this.handleCardClkick = this.handleCardClkick.bind(this);
    this.flipCardBack = this.flipCardBack.bind(this);
    this.moveCardsAround = this.moveCardsAround.bind(this);
    this.shuffle = this.shuffle.bind(this);
    $(".card").on("click", this.handleSounds);
    $(".card").on("click", this.handleCardClkick);
    $("span").on("click", this.resetGame);
}

  calculateAccuracy() {
    this.accuracy = this.matches / this.attempts * 100;
    this.newAccuracy = this.accuracy.toFixed(2)
    $("aside div:nth-child(7)").text(this.newAccuracy + "%");
  }

  resetGame() {
    $('input').prop("checked", false);
    this.firstCardClicked = null;
    this.secondCardClicked = null;
    this.matches = null;
    this.firstCardImage = null;
    this.secondCardImage = null;
    this.checkbox1 = null;
    this.checkbox2 = null;
    this.attempts = 0;
    this.accuracy = 0;
    this.gamePlayed += 1
    $("aside div:nth-child(3)").text(this.gamePlayed);
    $("aside div:nth-child(5)").text(this.attempts);
    $("aside div:nth-child(7)").text(this.accuracy + "%");
    $(".modal-content").css("visibility", "hidden");
    $(".modal").css("display", "none");
    $("div").removeClass("mel bruce alPacino arnold rambo eddie alien sam van");
    this.classArray = ["mel", "bruce", "alPacino", "arnold", "rambo", "eddie", "alien", "sam", "van", "mel", "bruce", "alPacino", "arnold", "rambo", "eddie", "alien", "sam", "van"];
    this.shuffle(this.classArray);
    for(var i =0; i<this.classArray.length;i++){
      $("."+i).addClass(this.classArray[i]);
    }
    this.moveCardsAround();
  }
  moveCardsAround(){
    $(".cardContainer.A1").animate({ right: "163" });
    $(".cardContainer.A7").animate({ bottom: "181" });
    $(".cardContainer.A13").animate({ bottom: "181" });
    $(".cardContainer.A14").animate({ right: "170" });
    $(".cardContainer.A15").animate({ right: "170" });
    $(".cardContainer.A9").animate({ top: "180" });
    $(".cardContainer.A3").animate({ top: "180" });
    $(".cardContainer.A1").animate({ left: "0" });
    $(".cardContainer.A2").animate({ left: "170" });
    $(".cardContainer.A7").animate({ left: "165" });
    $(".cardContainer.A4").animate({ bottom: "180" });
    $(".cardContainer.A10").animate({ bottom: "180" });
    $(".cardContainer.A16").animate({ bottom: "180" });
    $(".cardContainer.A17").animate({ right: "170" });
    $(".cardContainer.A18").animate({ right: "0" });
    $(".cardContainer.A11").animate({ top: "185" });
    $(".cardContainer.A5").animate({ top: "185" });
    $(".cardContainer.A10").animate({ left: "166" });
    $(".cardContainer.A2").animate({ left: "332" });
    $(".cardContainer.A4").animate({ right: "500" });
    $(".cardContainer.A7").animate({ left: "333" });
    $(".cardContainer.A1").animate({ left: "170" });
    $(".cardContainer.A4").animate({ top: "10" });
    $(".cardContainer.A6").animate({ right: "850" });
    $(".cardContainer.A12").animate({ right: "850" });
    $(".cardContainer.A18").animate({ right: "850" });
    $(".cardContainer.A1").animate({ left: "340" });
    $(".cardContainer.A2").animate({ left: "350" });
    $(".cardContainer.A3").animate({ left: "184" });
    $(".cardContainer.A4").animate({ left: "360" });
    $(".cardContainer.A5").animate({ left: "200" });
    $(".cardContainer.A7").animate({ left: "160" });
    $(".cardContainer.A8").animate({ left: "172" });
    $(".cardContainer.A9").animate({ left: "185" });
    $(".cardContainer.A10").animate({ left: "190" });
    $(".cardContainer.A11").animate({ left: "25" });
    $(".cardContainer.A13").animate({ left: "160" });
    $(".cardContainer.A14").animate({ right: "3" });
    $(".cardContainer.A15").animate({ right: "0" });
    $(".cardContainer.A16").animate({ left: "190" });
    $(".cardContainer.A17").animate({ left: "200" });
  }
  shuffle(){
    this.randomArray = this.classArray;
    for (var i = this.randomArray.length - 1; i >= 0; i--) {
      this.randomIndex = Math.floor(Math.random() * (i + 1));
      this.itemAtIndex = this.randomArray[this.randomIndex];
      this.randomArray[this.randomIndex] = this.randomArray[i];
      this.randomArray[i] = this.itemAtIndex;
      }
    }

  handleSounds(event) {
    this.currentEvent = event.delegateTarget.lastElementChild;
    this.compareImageToSound = $(this.currentEvent).css("background-image");
    this.arnold = 'url("file:///Users/rauljauregui/lfz/memory_match/assets/images/Arnold.jpg")';
    this.eddie = 'url("file:///Users/rauljauregui/lfz/memory_match/assets/images/beverly_hills_cop_eddie_murphy_with_gun.jpg")';
    this.alPacino = 'url("file:///Users/rauljauregui/lfz/memory_match/assets/images/scarface.jpg")';
    this.bruce = 'url("file:///Users/rauljauregui/lfz/memory_match/assets/images/bruce.jpg")';
    this.rambo = 'url("file:///Users/rauljauregui/lfz/memory_match/assets/images/rambo1.jpeg")';
    this.mel = 'url("file:///Users/rauljauregui/lfz/memory_match/assets/images/mel.jpg")';
    this.van = 'url("file:///Users/rauljauregui/lfz/memory_match/assets/images/van2.jpg")';
    this.samuel = 'url("file:///Users/rauljauregui/lfz/memory_match/assets/images/sam.jpg")';
    this.alien = 'url("file:///Users/rauljauregui/lfz/memory_match/assets/images/alien.jpg")';
    switch (this.compareImageToSound) {
      case this.arnold:
        this.arnoldAudio.play();
        break;
      case this.eddie:
        this.eddieAudio.play();
        break;
      case this.alPacino:
        this.alPacinoAudio.play();
        break;
      case this.bruce:
        this.bruceAudio.play();
        break;
      case this.rambo:
        this.ramboAudio.play();
        break;
      case this.mel:
        this.melAudio.play();
        break;
      case this.van:
        this.vanAudio.play();
        break;
      case this.samuel:
        this.samuelAudio.play();
        break;
      case this.alien:
        this.alienAudio.play();
        break;

    }
  }
  flipCardBack() {
    (this.checkbox1).prop("checked", false);
    (this.checkbox2).prop("checked", false);
    this.firstCardClicked = null;
    this.secondCardClicked = null;
  }

  handleCardClkick(event) {
    //debugger;
    console.log(event);
    console.log(event.target);
    this.stopCheater = event.target;
    this.stopBigCheater = event.delegateTarget.parentElement.control;
    if($(this.stopCheater).hasClass("back")){
      return $(this.stopBigCheater).prop("checked", false);
    }
    this.currentCard = event.delegateTarget.lastElementChild;
    if (this.firstCardClicked === null) {
      this.firstCardClicked = $(event.currentTarget)
      this.checkbox1 = $(event.delegateTarget.parentElement.control);
      this.firstCardImage = $(this.currentCard).css("background-image");
    } else {
      this.secondCardClicked = $(event.currentTarget);
      this.checkbox2 = $(event.delegateTarget.parentElement.control);
      this.secondCardImage = $(this.currentCard).css("background-image");
      this.attempts += 1
      $("aside div:nth-child(5)").text(this.attempts);
      this.calculateAccuracy();

      if (this.firstCardImage === this.secondCardImage) {
        this.matches += 1;
        this.firstCardClicked = null;
        this.secondCardClicked = null;
        this.calculateAccuracy();
      } else {
        setTimeout(this.flipCardBack, 300.000);
      }
      if (this.matches === 9) {
        $(".modal-content").css("visibility", "visible");
        $(".modal").css("display", "block");
        this.woodAudio.play();
      }
    }
  }
}
