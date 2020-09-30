$(document).ready(function(){
    // constances pour l'instance de target
    const htmlBord = $('#play');
    const htmlTarget = $('#target');

    const boardWidth = htmlBord.css('width');
    const targetWidth = htmlTarget.css('width');
    const boardHeight = htmlBord.css('height');
    const targetHeight = htmlTarget.css('height');
    const spanTarget = $('#span-target');

    const target = new Target(htmlBord,htmlTarget,boardWidth,targetWidth,boardHeight,targetHeight,spanTarget);

    target.moveTarget();

    //constances pour l'instance de score
    const modal = $('#modal');
    const parent = $('#play');
    const scoreNumber = $("#scoreNumber");
    const modalScoreNumber = $('#modalScoreNumber');

    const score = new Score(modal,parent,scoreNumber,modalScoreNumber);

    const timer = new Timer(20);

    // lorsque l'on clique sur la target
    htmlTarget.click(function(){
        target.moveTheClickedTarget()
        score.addOnePoint();
        score.displayScore();
        timer.startOnlyNewTimer(callFunctionContinueOrStopTimer);

        if(score.getPoints() >= 5 && score.getPoints() < 7){

            target.setIconColorRed();

        }else if(score.getPoints() >= 7 && score.getPoints() < 15){
            target.changeTargetIconLvl1();
            target.setIconColorGreen();

            if(score.getPoints() >= 12){
                target.setIconColorRed();
            }

        }else if(score.getPoints() >= 15 && score.getPoints() < 22){
            target.changeTargetIconLvl2();
            target.setIconColorGreen();

            if(score.getPoints() >= 19){
                target.setIconColorRed();
            }

        }else if(score.getPoints() >= 22 && score.getPoints() < 30){
            target.changeTargetIconLvl3();
            target.setIconColorGreen();

            if(score.getPoints() >= 27){
                target.setIconColorRed();
            }

        }else if(score.getPoints() >= 30 ){
            target.changeTargetIconLvl4();
            target.setIconColorGreen();

        }
    })

    //constances pour l'instance de sound
    const htmlSound1 = $("#son-1");
    const htmlSound2 = $("#son-2");

    // boutons dans les options pour le son
    htmlSound1.click(function(){
        sound1 = new Audio('sound/beep-41.mp3');
        target.setSound(sound1);
    })

    htmlSound2.click(function(){
        sound2 = new Audio('sound/beep-07.mp3');
        target.setSound(sound2);
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

            // remise sous la forme initial de la target
            target.setIconColorGreen();
            target.changeTargetIconLvl0();
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

