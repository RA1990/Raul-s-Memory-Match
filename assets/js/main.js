
$(document).ready(initiateApp);

function initiateApp() {
  var gameBoard = new MemoryMatch(data, '#card-area', "#stats");
  gameBoard.addAllCards();
  gameBoard.renderStats();
  $("div.reset").on("click", gameBoard.resetGame);
}
