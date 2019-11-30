class Stats {
  constructor(stats) {
    this.updateStats = this.updateStats.bind(this);
    this.render = this.render.bind(this);
    this.stats = {
      gamesPlayed: stats.gamesPlayed,
      attempts: stats.attempts,
      accurracy: stats.accurracy
    }
    this.domElements = {
      statsContainer: null,
      head: null,
      reset: null,
      aside: null,
      h1: null,
      gamesPlayedText: null,
      gamesPlayedNumberValue: null,
      attemptsText: null,
      numberOfAttempts: null,
      accurracyText: null,
      accurracy: null
    }
  }
  updateStats(statsToUpDate) {
    this.domElements.gamesPlayedNumberValue.text(statsToUpDate.gamesPlayed);
    this.domElements.numberOfAttempts.text(statsToUpDate.attempts);
    this.domElements.accurracy.text(statsToUpDate.accurracy);
  }
  reset() {
    this.domElements.gamesPlayedNumberValue.text(0);
    this.domElements.numberOfAttempts.text(0);
    this.domElements.accurracy.text(0);
  }

  render(stats = this.stats) {
    this.domElements.statsContainer = $("<div>", {
      class: "statsContainer"
    })
    this.domElements.head = $("<header>", {
      class: "head",
      text: "Raul's Memory Match"
    });
    this.domElements.reset = $("<div>", {
      class: "reset",
      text: "Reset Game"
    });
    this.domElements.aside = $("<aside>");
    this.domElements.h1 = $("<h1>", {
      class: "stats",
      text: "Stats"
    });
    this.domElements.gamesPlayedText = $("<div>", {
      class: "games-played-text",
      text: "Games Played"
    });
    this.domElements.gamesPlayedNumberValue = $("<div>", {
      class: "games-played-number-value",
      text: `${stats.gamesPlayed}`
    });
    this.domElements.attemptsText = $("<div>", {
      class: "attempts-text",
      text: "Attempts"
    });
    this.domElements.numberOfAttempts = $("<div>", {
      class: "number-of-attempts",
      text: `${stats.attempts}`
    });
    this.domElements.accurracyText = $("<div>", {
      class: "accurracy-text",
      text: "Accurracy"
    });
    this.domElements.accurracy = $("<div>", {
      class: "accurracy",
      text: `${stats.accurracy}%`
    });
    this.domElements.aside.append(this.domElements.h1, this.domElements.gamesPlayedText, this.domElements.gamesPlayedNumberValue);
    this.domElements.aside.append(this.domElements.attemptsText, this.domElements.numberOfAttempts, this.domElements.accurracyText);
    this.domElements.aside.append(this.domElements.accurracy);
    this.domElements.statsContainer.append(this.domElements.head, this.domElements.reset, this.domElements.aside);
    return this.domElements.statsContainer;
  }
}
