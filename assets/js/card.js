
class Card{
    constructor(dataObj, clickCallback){
        this.name = dataObj.name;
        this.data = {
            frontImage: dataObj.front,
            sound: dataObj.sound
        }
        this.domElements = {
            container: null,
            card: null,
            front: null,
            back: null
        }
    }
    handleClick(){
        //call the callback from the constructor, pass in this
    }
    render(){
        /* create the dom elements for this card
        <div class="cardContainer A12">
            <div class="card">
                <div class="front backCard"></div>
                <div class="11 rambo back"></div>
            </div>
        </div>
        */
       //create all the dom elements for this card
       //add appropriate classes
       //place elements inside each other as needed
       //add click handler onto container, that calls this.handleClick
       //return the container
    }
}
