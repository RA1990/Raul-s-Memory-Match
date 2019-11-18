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
    $(".gamesPlayedNumberValue").text(`${statsToUpDate.gamesPlayed}`);
    $(".numberOfAttempts").text(`${statsToUpDate.attempts}`);
    $(".accurracy").text(`${statsToUpDate.accurracy}%`);
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
      class: "gamesPlayedText",
      text: "Games Played"
    });
    this.domElements.gamesPlayedNumberValue = $("<div>", {
      class: "gamesPlayedNumberValue",
      text: `${stats.gamesPlayed}`
    });
    this.domElements.attemptsText = $("<div>", {
      class: "attemptsText",
      text: "Attempts"
    });
    this.domElements.numberOfAttempts = $("<div>", {
      class: "numberOfAttempts",
      text: `${stats.attempts}`
    });
    this.domElements.accurracyText = $("<div>", {
      class: "accurracyText",
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
