class MemoryMatch {
  constructor(cardList, cardArea,stats) {
    this.handleCardClick = this.handleCardClick.bind(this);
    this.resetClickedCards = this.resetClickedCards.bind(this);
    this.updateStats = this.updateStats.bind(this);
    this.newGame = this.newGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.cardList = cardList.slice();
    this.cardObjects = [];
    this.domElements = {
      cardArea: $(cardArea),
      stats: $(stats)
    }
    this.stats = {
      gamesPlayed:0,
      attempts:0,
      accurracy:0,
      matches:0
    }
    this.statsObject = null;
    this.revealTime = 1000;
    this.selectedCards = [];
    $(".close").on("click",this.newGame);
  }

  resetGame(){
    for (var key in this.stats) {
        this.stats[key] = 0;
      }
    this.updateStats();
    this.addAllCards();
  }

  newGame(){
    this.stats.gamesPlayed += 1;
    $(".modal-content").css("visibility", "hidden");
    $(".modal").css("display", "none");
    for(var key in this.stats){
      if(key === "gamesPlayed"){
        this.stats[key] = this.stats[key];
      }else{
      this.stats[key] = 0;
      }
    }
    $(".back").css("display","block");
    this.updateStats();
  }

  addAllCards() {
    this.domElements.cardArea.empty();
    this.randomArray = this.cardList;
    for (var classArrayIndex = this.randomArray.length - 1; classArrayIndex >= 0; classArrayIndex--) {
      this.randomIndex = Math.floor(Math.random() * (classArrayIndex + 1));
      this.itemAtIndex = this.randomArray[this.randomIndex];
      this.randomArray[this.randomIndex] = this.randomArray[classArrayIndex];
      this.randomArray[classArrayIndex] = this.itemAtIndex;
    }
    for (var cardIndex = 0; cardIndex < this.cardList.length; cardIndex++) {
      this.makeCard(this.randomArray[cardIndex]);
    }
  }

  renderStats(){
    var statsToSend = this.stats
    this.statsObject = new Stats(statsToSend);
    var upDatedStats = this.statsObject.render();
    this.domElements.stats.append(upDatedStats);

  }

  makeCard(cardData) {
    var card = new Card(cardData, this.handleCardClick);
    this.cardObjects.push(card);
    var cardDom = card.render();
    this.domElements.cardArea.append(cardDom);
  }

  updateStats(){
    $(".gamesPlayedNumberValue").text(`${this.stats.gamesPlayed}`);
    $(".numberOfAttempts").text(`${this.stats.attempts}`);
    $(".accurracy").text(`${this.stats.accurracy}%`);
  }

  handleCardClick(clickedCardObject) {
    if (this.selectedCards.length >= 2) {
      return;
    }
    clickedCardObject.revealFront();

    this.selectedCards.push(clickedCardObject);
    if (this.selectedCards.length === 2) {
      var card1ID = this.selectedCards[0].getID();
      var card2ID = this.selectedCards[1].getID();
      if (card1ID === card2ID) {
        this.stats.attempts += 1;
        this.stats.matches += 1;
        this.selectedCards = [];
      } else {
        this.stats.attempts += 1;
        setTimeout(this.resetClickedCards, this.revealTime);
      }
      var accurracy = this.stats.matches / this.stats.attempts * 100;
      this.stats.accurracy = accurracy.toFixed(2);
      if (this.stats.matches === 9) {
        $(".modal-content").css("visibility", "visible");
        $(".modal").css("display", "block");
      }
      this.updateStats();
    } else {
      clickedCardObject.playSound('click');
    }
  }

  resetClickedCards() {
    debugger;
    for (var cardI = 0; cardI < this.selectedCards.length; cardI++) {
      this.selectedCards[cardI].coverFront();
    }
    this.selectedCards = [];
  }

}
