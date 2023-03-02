class Game{
    constructor() {
        this.player1= new Player(Ramona, "https://ih1.redbubble.net/image.175180605.1876/st,small,507x507-pad,600x600,f8f8f8.u2.jpg")
        this.player2= new Player(Scott, "https://ih1.redbubble.net/image.175180605.1876/st,small,507x507-pad,600x600,f8f8f8.u2.jpg")
        this.turn= player1;//default player1
        this.winnerCombos= [
            {combo: [1,2,3]},
            {combo: [4,5,6]},
            {combo: [7,8,9]},
            {combo: [1,4,7]},
            {combo: [2,5,8]},
            {combo: [3,6,9]},
            {combo: [1,5,9]},
            {combo: [3,5,7]}
        ]
        this.draw= false
    }
    
}