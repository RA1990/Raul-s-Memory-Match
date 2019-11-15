var gameBoard = null;

$(document).ready(initiateApp);

function initiateApp() {
  gameBoard = new MemoryMatch(data, '#cardArea',"#stats");
  gameBoard.addAllCards();
  gameBoard.renderStats("#stats");
  $("div.reset").on("click", gameBoard.resetGame);
}