class Target{
    board;
    target;
    boardWidth;
    targetWidth;
    boardHeight;
    targetHeight;
    spanTarget;
    spanActualClass;
    sound;

    constructor(board,target,boardWidth,targetWidth,boardHeight,targetHeight,spanTarget, sound = new Audio('sound/beep-41.mp3')){
        this.setTarget(target);
        this.setBoard(board);
        this.boardWidth = boardWidth;
        this.targetWidth = targetWidth;
        this.boardHeight = boardHeight;
        this.targetHeight = targetHeight;
        this.spanTarget = spanTarget;
        this.sound = sound;
    }

    // getteurs
    getTarget(){
        return this.target;
    }

    getBoard(){
        return this.board;
    }

    getSpanActualClass(){
        return this.spanActualClass;
    }

    // setteurs
    setTarget(target){
        this.target = target;
    }

    setBoard(board){
        this.board = board;
    }

    setSound(sound){
        this.sound = sound
    }


    // autres méthodes

    /* Afficher une cible(div) aléatoire sur le board */
    moveTarget(){

        this.setActualValues();// mise à jour des valeurs height/width du margin de la target en fonction de la taille de la fenêtre

        //mise en place des valeurs des margin
        this.putRandomMarginLeft(this.boardWidth,this.targetWidth);
        this.putRandomMarginTop(this.boardHeight,this.targetHeight);
    
    }

    setActualValues(){
        this.boardWidth = $('#play').css('width');
        this.targetWidth = $('#target').css('width');
        this.boardHeight = $('#play').css('height');
        this.targetHeight = $('#target').css('height');
    }

    /*mettre le margin-left et margin-top à 0 */
    setNoMargin(){
        this.target.css({
            'margin-left':'0px',
            'margin-top':'0px'
        });
    }

    transformPixelValueIntoNumber(value){
        const theValue = value.split("p");
        return theValue[0];
    }

    calculateMaxTargetMarginWidth(boardWidth,targetWidth){

        // probleme @param sont sous forme intpx donc pas de calculs
        const numberBoardWidth = this.transformPixelValueIntoNumber(boardWidth);
        const numberTargetWidth = this.transformPixelValueIntoNumber(targetWidth);

        // suite
        const maxTargetMarginWidth = (numberBoardWidth - numberTargetWidth);
        console.log('maxWidth :' + maxTargetMarginWidth );
        return maxTargetMarginWidth;
    }

    calculateMaxTargetMarginHeight(boardHeight,targetHeight){
        // probleme @param sont sous forme intpx donc pas de calculs

        const numberBoardHeight = this.transformPixelValueIntoNumber(boardHeight);
        const numberTargetHeight = this.transformPixelValueIntoNumber(targetHeight)

        // suite
        const maxTargetMarginHeight = (numberBoardHeight- numberTargetHeight);
        console.log('maxHeight :' + maxTargetMarginHeight );
        return maxTargetMarginHeight;
    }

    /*Affecte une valeur(min-max) au margin-left d'une div*/
    putRandomMarginLeft(boardWidth,targetWidth){
        const maxTargetMarginWidth = this.calculateMaxTargetMarginWidth(boardWidth,targetWidth);

        const randomNumber = this.getRandomInt(0, maxTargetMarginWidth); // valeur max = 717px (pour ne pas sortir du board)

        this.target.css('margin-left',randomNumber);
    }

    /*Affecte une valeur(min-max) au margin-top d'une div*/
    putRandomMarginTop(boardHeight,targetHeight){
        const maxTargetMarginHeight = this.calculateMaxTargetMarginHeight(boardHeight,targetHeight);

        const randomNumber = this.getRandomInt(0, maxTargetMarginHeight); // valeur max = 758px (pour ne pas sortir du board)

        this.target.css('margin-top',randomNumber);
    }

    /* return un nombre aléatoire en le min et le max */
    getRandomInt(min, max){

        min = Math.ceil(min);
        max = Math.floor(max);
        const number = Math.floor(Math.random() * (max - min)) + min;
        return number;

    }

    /*Supprimer la cible quand on clique dessus */
    moveTheClickedTarget(){

        $(this).remove(); //pas remove mais juste la cacher

        // const audio = new Audio('sound/beep-41.mp3');
        this.sound.play();


        //reapparaitre
        this.moveTarget();//bouger 

    }

    hideTarget(){
        this.target.hide();
    }

    showTarget(){
        this.target.show();
    }

    
    changeTargetIconLvl0(){
        this.target.removeClass(this.spanActualClass);
        this.target.addClass("fa-frown");
        this.spanActualClass = "fa-frown";
    }

    changeTargetIconLvl1(){
        this.target.removeClass('fa-frown');
        this.target.addClass("fa-meh-rolling-eyes");
        this.spanActualClass = "fa-meh-rolling-eyes";

    }

    changeTargetIconLvl2(){
        this.target.removeClass('fa-meh-rolling-eyes');
        this.target.addClass("fa-smile-beam");
        this.spanActualClass = "fa-smile-beam";

    }

    changeTargetIconLvl3(){
        this.target.removeClass('fa-smile-beam');
        this.target.addClass("fa-laugh");
        this.spanActualClass = "fa-laugh";

    }

    changeTargetIconLvl4(){
        this.target.removeClass('fa-laugh');
        this.target.addClass("fa-surprise");
        this.spanActualClass = "fa-surprise";

    }

    setIconColorGreen(){
        this.spanTarget.css('color','green');
    }

    setIconColorRed(){
        this.spanTarget.css('color','red');
    }

    setIconColorYellow(){
        this.spanTarget.css('color','yellow');
    }
    
}
