$(document).ready(function(){
    //instance target
    const htmlBord = $('#play');
    const htmlTarget = $('#target');
    
    const target = new Target(htmlBord,htmlTarget);
    target.moveTarget();

    //instance score
    const score = new Score();

    const timer = new Timer(20);

    $('#target').click(function(){
        target.moveTheClickedTarget()
        score.addOnePoint();
        score.displayScore();
        timer.startOnlyNewTimer(callFunctionContinueOrStopTimer);
    })


    // arreter ou continuer le minuteur 
    function callFunctionContinueOrStopTimer(){
        timer.ContinueOrStopTimer();
    }



});

