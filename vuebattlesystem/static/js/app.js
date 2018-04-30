new Vue({
    delimiters: ['${', '}'],
    el: '#app',
    data: {
            playerHealth: 100,
            monsterHealth: 100,
            gameIsRunning: false
        }, 
        methods: {
            startGame: function() {
                this.gameIsRunning = true;
                this.playerHealth = 100;
                this.monsterHealth = 100;
            },
            attack: function() {
                let max = 10
                let min = 3
                let damage = Math.max(Math.floor(Math.random() * max) +1, min)
                this.monsterHealth -= damage

                max = 12
                min = 5
                damage = Math.max(Math.floor(Math.random() * max) +1, min)
                this.playerHealth -= damage

            },
            specialAttack: function () {

            },
            heal: function() {

            },
            giveUp: function() {

            }
        }
});


    console.log('running')