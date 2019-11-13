var gameBoard = null;

$(document).ready(initiateApp);

function initiateApp() {
  gameBoard = new MemoryMatch(data, '#cardArea');
  gameBoard.addAllCards();
}
