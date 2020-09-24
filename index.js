$(document).ready(function(){
    //instance target
    const htmlBord = $('#play');
    const htmlTarget = $('#target');
    
    const target = new Target(htmlBord,htmlTarget);
    target.moveTarget();
    target.moveTheClickedTarget();

    //instance score
    const score = new Score();


    $('#target').click(function(){
        score.addOnePoint();
        score.displayScore();
    })

});

