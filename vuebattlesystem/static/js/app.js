new Vue({
    delimiters: ['${', '}'],
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
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
            damage = this.calcDamage(5, 12)
            this.playerHealth -= damage
            this.checkWin()
            this.turns.unshift({
                isPlayer: false,
                text: 'The monster hits you for ' + damage
            })
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
            let damage = this.calcDamage(3, 10)
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'You hit the Monster for ' + damage
            })
            
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
            if( this.playerHealth <= 90) {
                this.playerHealth += 10
            } else {this.playerHealth = 100}
            this.monsterAttacks()
        },
        giveUp: function () {
            this.gameIsRunning = false
        },


    }
});


console.log('running')