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
    this.arnoldAudio = new Audio("assets/sounds/Get to the Choppa.mp3");
    this.eddieAudio = new Audio("assets/sounds/Axels famous laugh.mp3")
    this.alPacinoAudio = new Audio("assets/sounds/Say Hello To My Little Friend.mp3");
    this.bruceAudio = new Audio("assets/sounds/Yippeekiyay.mp3");
    this.ramboAudio = new Audio("assets/sounds/Killing is easy as breathing.mp3")
    this.melAudio = new Audio("assets/sounds/If you dont have freedom.mp3");
    this.vanAudio = new Audio("assets/sounds/Can do splits.mp3");
    this.samuelAudio = new Audio("assets/sounds/English do you speak it.mp3");
    this.alienAudio = new Audio("assets/sounds/Nobody touch nothing.mp3");
    this.woodAudio = new Audio("assets/sounds/Do You Feel Lucky Punk.mp3");
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
    this.woodAudio.pause();
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
    $(".cardContainer.A1").animate({ right: "15%"});
    $(".cardContainer.A7").animate({ bottom: "31%" });
    $(".cardContainer.A13").animate({ bottom: "30%" });
    $(".cardContainer.A14").animate({ right: "15%" });
    $(".cardContainer.A15").animate({ right: "15%" });
    $(".cardContainer.A9").animate({ top: "30%" });
    $(".cardContainer.A3").animate({ top: "30%" });
    $(".cardContainer.A1").animate({ left: "15%" });
    $(".cardContainer.A2").animate({ left: "15%" });
    $(".cardContainer.A7").animate({ left: "15%" });
    $(".cardContainer.A4").animate({ bottom: "40%" });
    $(".cardContainer.A10").animate({ bottom: "30%" });
    $(".cardContainer.A16").animate({ bottom: "30%" });
    $(".cardContainer.A17").animate({ right: "15%" });
    $(".cardContainer.A18").animate({ right: "0%" });
    $(".cardContainer.A11").animate({ top: "30%" });
    $(".cardContainer.A5").animate({ top: "30%" });
    $(".cardContainer.A10").animate({ left: "15%" });
    $(".cardContainer.A2").animate({ left: "15%" });
    $(".cardContainer.A4").animate({ right: "46%" });
    $(".cardContainer.A7").animate({ left: "15%" });
    $(".cardContainer.A1").animate({ left: "15%" });
    $(".cardContainer.A4").animate({ top: "0%" });
    $(".cardContainer.A6").animate({ right: "31%" });
     $(".cardContainer.A1").animate({ left: "77%" });
    // $(".cardContainer.A12").animate({ right: "850" });
    // $(".cardContainer.A18").animate({ right: "850" });

    // $(".cardContainer.A2").animate({ left: "350" });
    // $(".cardContainer.A3").animate({ left: "184" });
    // $(".cardContainer.A4").animate({ left: "360" });
    // $(".cardContainer.A5").animate({ left: "200" });
    // $(".cardContainer.A7").animate({ left: "160" });
    // $(".cardContainer.A8").animate({ left: "172" });
    // $(".cardContainer.A9").animate({ left: "185" });
    // $(".cardContainer.A10").animate({ left: "190" });
    // $(".cardContainer.A11").animate({ left: "25" });
    // $(".cardContainer.A13").animate({ left: "160" });
    // $(".cardContainer.A14").animate({ right: "3" });
    // $(".cardContainer.A15").animate({ right: "0" });
    // $(".cardContainer.A16").animate({ left: "190" });
    // $(".cardContainer.A17").animate({ left: "200" });
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
    if (this.compareImageToSound.includes("Arnold.jpg")){
      this.arnoldAudio.play();
    } else if (this.compareImageToSound.includes("beverly_hills_cop_eddie_murphy_with_gun.jpg")){
      this.eddieAudio.play();
    } else if (this.compareImageToSound.includes("scarface.jpg")){
      this.alPacinoAudio.play();
    } else if (this.compareImageToSound.includes("bruce.jpg")){
      this.bruceAudio.play();
    } else if (this.compareImageToSound.includes("rambo1.jpeg")){
      this.ramboAudio.play();
    } else if (this.compareImageToSound.includes("mel.jpg")){
      this.melAudio.play()
    } else if (this.compareImageToSound.includes("van2.jpg")){
      this.vanAudio.play();
    } else if (this.compareImageToSound.includes("sam.jpg")){
      this.samuelAudio.play();
    } else if (this.compareImageToSound.includes("alien.jpg")){
      this.alienAudio.play();
    }else{
      return false;
    }
  }

  flipCardBack() {
    (this.checkbox1).prop("checked", false);
    (this.checkbox2).prop("checked", false);
    this.firstCardClicked = null;
    this.secondCardClicked = null;
  }

  handleCardClkick(event) {
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
      if (this.matches === 1) {
        $(".modal-content").css("visibility", "visible");
        $(".modal").css("display", "block");
        this.woodAudio.play();
      }
    }
  }
}
