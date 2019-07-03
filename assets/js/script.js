$(document).ready(initailizeApp);


function initailizeApp(){
  $(".back").on("click",handleCardClkick);
}
function handleCardClkick(event){
  $(event.currentTarget).addClass("hide");
  console.log(event.currentTarget);
}
