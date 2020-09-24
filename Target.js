class Target {
    bord;
    target;

    constructor(bord,target){
        this.setTarget(target);
        this.setBord(bord);

    }

    // getteurs
    getTarget(){
        return this.target;
    }

    getBord(){
        return this.bord;
    }

    // setteurs
    setTarget(target){
        this.target = target;
    }

    setBord(bord){
        this.bord = bord;
    }


    // autres méthodes

    /* Afficher une cible(div) aléatoire sur le bord */
    moveTarget(){

        //mise des valeurs des margin
        this.putRandomMarginLeft(this.target);
        this.putRandomMarginTop(this.target);
    
    }

    /*mettre le margin-left et margin-top à 0 */
    setNoMargin(){
        this.target.css({
            'margin-left':'0px',
            'margin-top':'0px'
        });
    }

    /*Affecte une valeur(min-max) au margin-left d'une div*/
    putRandomMarginLeft(){

        const randomNumber = this.getRandomInt(0, 717); // valeur max = 717px (pour ne pas sortir du bord)

        this.target.css('margin-left',randomNumber);
    }

    /*Affecte une valeur(min-max) au margin-top d'une div*/
    putRandomMarginTop(){

        const randomNumber = this.getRandomInt(0, 758); // valeur max = 758px (pour ne pas sortir du bord)

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

        this.target.click((event) => {
            $(this).remove(); //pas remove mais juste la cacher
            //sound effect
            const audio = new Audio('sound/beep-41.mp3');
            audio.play()
            //reapparaitre
            this.moveTarget();//bouger 
        })

    }
      
}
