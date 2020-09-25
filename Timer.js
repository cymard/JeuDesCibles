class Timer{

    initialSecondes;
    secondes;
    displayTimer;
    interval;
    authorisationToSetInterval;

    constructor(secondes, authorisationToSetInterval = true, displayTimer = $("#timerNumber")){
        this.secondes = secondes;
        this.initialSecondes = secondes;
        this.displayTimer = displayTimer;
        this.authorisationToSetInterval = authorisationToSetInterval;
    }

    getSecondes(){
        return this.secondes;
    }

    startOnlyNewTimer(theFunction){
        if(this.authorisationToSetInterval === true){
            this.interval = setInterval(theFunction, 1000); //lancer le minuteur
            this.authorisationToSetInterval = false;
        }
        
    }


    ContinueOrStopTimer() {

        if(this.secondes > 0){
            this.secondes -=1; //moins 1 secondes sur la valeur 
            this.displayTimer.html(this.secondes); // on affiche la valeur du minuteur
            console.log(this.secondes);
        }else{
            this.displayTimer.html(this.secondes); // la valeur de fin = 0
            this.stopTimer()
        }

        
    }
      
    stopTimer() {
        clearInterval(this.interval);
        this.authorisationToSetInterval = true;
        console.log('STOP');
    } 

}


