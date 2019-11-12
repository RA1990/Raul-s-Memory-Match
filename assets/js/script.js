$(document).ready(initializeApp);

function initializeApp(){
  new MemoryMatch();
}

class MemoryMatch {

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
    this.shuffle = this.shuffle.bind(this);
    $(".card").on("click", this.handleSounds);
    $(".card").on("click", this.handleCardClkick);
    $("span").on("click", this.resetGame);
    $(".reset").on("click", this.resetGameButton);
}

  calculateAccuracy() {
    this.accuracy = this.matches / this.attempts * 100;
    this.newAccuracy = this.accuracy.toFixed(2)
    $("aside div:nth-child(7)").text(this.newAccuracy + "%");
  }
  resetGameButton(){
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
    this.gamePlayed= 0;
    $("aside div:nth-child(3)").text(this.gamePlayed);
    $("aside div:nth-child(5)").text(this.attempts);
    $("aside div:nth-child(7)").text(this.accuracy + "%");
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
    for (var classArrayIndex = 0; classArrayIndex < this.classArray.length; classArrayIndex++){
      $("." + classArrayIndex).addClass(this.classArray[classArrayIndex]);
    }

  }

  shuffle(){
    this.randomArray = this.classArray;
    for (var classArrayIndex = this.randomArray.length - 1; i >= 0; classArrayIndex--) {
      this.randomIndex = Math.floor(Math.random() * (classArrayIndex + 1));
      this.itemAtIndex = this.randomArray[this.randomIndex];
      this.randomArray[this.randomIndex] = this.randomArray[classArrayIndex];
      this.randomArray[classArrayIndex] = this.itemAtIndex;
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
      if (this.matches === 9) {
        $(".modal-content").css("visibility", "visible");
        $(".modal").css("display", "block");
        this.woodAudio.play();
      }
    }
  }
}
