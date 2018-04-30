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

        // These are game logic functions

        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = []
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


        // This is where various button functions live.
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
            let damage = this.calcDamage(10, 20)
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'You swing harder and hit the Monster for ' + damage
            })
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks()

            

        },
        heal: function () {
            if( this.playerHealth <= 90) {
                this.playerHealth += 10
            } else {this.playerHealth = 100}
            this.turns.unshift({
                isPlayer: true,
                text: 'You focus on defence to regain 10 health'
            })
            this.monsterAttacks()
        },
        giveUp: function () {
            this.gameIsRunning = false
        },


    }
});


console.log('running')