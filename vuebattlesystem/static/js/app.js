new Vue({
    delimiters: ['${', '}'],
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },

        calcDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },

        monsterAttacks: function(){
            this.playerHealth -= this.calcDamage(5, 12)
            this.checkWin()
        },

        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true;
            }
            return false;
        },

        attack: function () {
            
            this.monsterHealth -= this.calcDamage(3, 10)
            
            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks()

        },
        specialAttack: function () {

            this.monsterHealth -= this.calcDamage(10, 20)
            
            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks()

            

        },
        heal: function () {

        },
        giveUp: function () {

        },


    }
});


console.log('running')