$(document).ready(function(){
    //instance target
    const htmlBord = $('#play');
    const htmlTarget = $('#target');
    
    const target = new Target(htmlBord,htmlTarget);
    target.moveTarget();

    //instance score
    const modal = $('#modal');
    const parent = $('#play');
    const scoreNumber = $("#scoreNumber");
    const modalScoreNumber = $('#modalScoreNumber');
    const score = new Score(modal,parent,scoreNumber,modalScoreNumber);

    const timer = new Timer(10);

    htmlTarget.click(function(){
        target.moveTheClickedTarget()
        score.addOnePoint();
        score.displayScore();
        timer.startOnlyNewTimer(callFunctionContinueOrStopTimer);
    })


    // arreter ou continuer le minuteur 
    function callFunctionContinueOrStopTimer(){
        
        if(timer.getSecondes() > 0){
            timer.ContinueOrStopTimer();
        }else{
            console.log("stop timer est appelé")
            timer.stopTimer(); // stop le timer
            target.hideTarget(); // cacher la target

            // affichage de la modal
            score.displayModal()
        }
    
    }


    // restart the game
    const quitButton = $('#modal button');

    quitButton.click(restartGame);

    function restartGame(){
        target.showTarget(); // montrer la target

        score.hideModal(); // faire disparaitre la modal
        
        timer.restartTimer();
    }


});

