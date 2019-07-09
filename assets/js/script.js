$(document).ready(initializeApp);

function initializeApp(){
  new MemoryMatch();
}

class MemoryMatch{

constructor(){
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
    this.arnoldAudio = new Audio("/Users/rauljauregui/lfz/memory_match/Get to the Choppa.mp3");
    this.eddieAudio = new Audio("/Users/rauljauregui/lfz/memory_match/Axels famous laugh.mp3")
    this.alPacinoAudio = new Audio("/Users/rauljauregui/lfz/memory_match/Say Hello To My Little Friend.mp3");
    this.bruceAudio = new Audio("/Users/rauljauregui/lfz/memory_match/Yippeekiyay.mp3");
    this.ramboAudio = new Audio("/Users/rauljauregui/lfz/memory_match/Killing is easy as breathing.mp3")
    this.melAudio = new Audio("/Users/rauljauregui/lfz/memory_match/If you dont have freedom.mp3");
    this.vanAudio = new Audio("/Users/rauljauregui/lfz/memory_match/Can do splits.mp3");
    this.samuelAudio = new Audio("/Users/rauljauregui/lfz/memory_match/English do you speak it.mp3");
    this.alienAudio = new Audio("/Users/rauljauregui/lfz/memory_match/Nobody touch nothing.mp3");
    this.woodAudio = new Audio("/Users/rauljauregui/lfz/memory_match/Do You Feel Lucky Punk.mp3");
    this.calculateAccuracy = this.calculateAccuracy.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.handleSounds = this.handleSounds.bind(this);
    this.handleCardClkick = this.handleCardClkick.bind(this);
    this.flipCardBack = this.flipCardBack.bind(this);
    //this.setTimeout = this.setTimeout.bind(this);
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
  }


  handleSounds(event) {
    this.currentEvent = event.delegateTarget.lastElementChild;
    this.compareImageToSound = $(this.currentEvent).css("background-image");
    this.arnold = 'url("file:///Users/rauljauregui/lfz/memory_match/Arnold.jpg")';
    this.eddie = 'url("file:///Users/rauljauregui/lfz/memory_match/beverly_hills_cop_eddie_murphy_with_gun.jpg")';
    this.alPacino = 'url("file:///Users/rauljauregui/lfz/memory_match/scarface.jpg")';
    this.bruce = 'url("file:///Users/rauljauregui/lfz/memory_match/bruce.jpg")';
    this.rambo = 'url("file:///Users/rauljauregui/lfz/memory_match/rambo1.jpeg")';
    this.mel = 'url("file:///Users/rauljauregui/lfz/memory_match/mel.jpg")';
    this.van = 'url("file:///Users/rauljauregui/lfz/memory_match/van2.jpg")';
    this.samuel = 'url("file:///Users/rauljauregui/lfz/memory_match/sam.jpg")';
    this.alien = 'url("file:///Users/rauljauregui/lfz/memory_match/alien.jpg")';
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
        setTimeout(this.flipCardBack, 600.000);
      }
      if (this.matches === 9) {
        $(".modal-content").css("visibility", "visible");
        $(".modal").css("display", "block");
        this.woodAudio.play();
      }
    }

  }



}
