class Tarot extends HTMLElement {   
    constructor() {
    super();
    this.element = this;
    this.delegateElement = new Delegate(this.element);
    this.cards = this.element.querySelector('.tarot-starsCardsWrapper');

    this.descriptions = this.element.querySelectorAll('.tarotDescription-cardWrapper');
    
    this.pickAnotherCards = this.element.querySelectorAll('.tarotDescription-pickAnother');
    
    this.bindEvents();
    }

    bindEvents() {
        this.delegateElement.on(
            "click",
            "[data-action='pick-random-card']",
            this.toggleTarot.bind(this)
        );

        this.delegateElement.on(
            "click",
            "[data-action='pick-another-card']",
            this.pickAnotherCard.bind(this)
        );
    }

    toggleTarot() {
        var randomnumber = Math.floor(Math.random() * this.descriptions.length);
        this.description = this.descriptions[randomnumber];
        this.cards.classList.add('tarot-hidden');
        this.description.classList.remove('tarot-hidden');
        
    }

    pickAnotherCard() {
        this.cards.classList.remove('tarot-hidden');
        this.description.classList.add('tarot-hidden');
    }

}
customElements.define("tarot-cards", Tarot);