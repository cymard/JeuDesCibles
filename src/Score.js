class Score{
    modal;
    parent;
    score;
    points;
    modalScoreNumber;

    constructor(modal,parent,score,modalScoreNumber,points = 0){
        this.modal = modal;
        this.parent = parent;
        this.score = score;
        this.modalScoreNumber = modalScoreNumber;
        this.points = points;
    }

    getPoints(){
        return this.points;
    }

    addOnePoint(){
        this.points +=1;
    }

    displayScore(){
        this.score.html(this.points);
    }

    replay(){
        this.score.html(" ");
        this.points = 0;
    }

    // modal

    displayModal(){
        this.modal.css('display', 'block');  
        this.parent.css('display','flex');
        this.modalScoreNumber.html(this.getPoints()); // affiche le score de la modal
    }

    hideModal(){
        // faire disparaître la modal
        this.modal.css('display', 'none');  
        this.parent.css('display','block');

        // score a 0
        this.replay();
    }
}

