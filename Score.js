class Score{
    score = $("#scoreNumber");
    points = 0;

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
}

