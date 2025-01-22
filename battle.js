export class Battle {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.battleLog = document.getElementById('battle-log');
        this.player1HealthBar = document.getElementById('player1-health-bar');
        this.player2HealthBar = document.getElementById('player2-health-bar');
        this.player1Name = document.getElementById('player1-name');
        this.player2Name = document.getElementById('player2-name');
        
        this.setupControls();
    }

    setupControls() {
        // Player 1 Controls
        document.getElementById('player1-punch').addEventListener('click', () => this.playerAttack(this.player1, this.player2, 'punch'));
        document.getElementById('player1-kick').addEventListener('click', () => this.playerAttack(this.player1, this.player2, 'kick'));
        document.getElementById('player1-block').addEventListener('click', () => this.playerBlock(this.player1));

        // Player 2 Controls
        document.getElementById('player2-punch').addEventListener('click', () => this.playerAttack(this.player2, this.player1, 'punch'));
        document.getElementById('player2-kick').addEventListener('click', () => this.playerAttack(this.player2, this.player1, 'kick'));
        document.getElementById('player2-block').addEventListener('click', () => this.playerBlock(this.player2));
    }

    start() {
        this.updateUI();
    }

    playerAttack(attacker, defender, attackType) {
        const damage = attacker.attack(attackType);
        const actualDamage = defender.takeDamage(damage, attackType);

        this.logBattleAction(attacker.name, defender.name, actualDamage, attackType);
        this.updateUI();

        if (defender.isDefeated()) {
            this.endBattle();
        }
    }

    playerBlock(player) {
        player.isBlocking = true;
        this.logBattleAction(player.name, '', 0, 'block');
    }

    updateUI() {
        this.player1Name.textContent = this.player1.name;
        this.player2Name.textContent = this.player2.name;
        
        this.player1HealthBar.style.width = `${(this.player1.currentHealth / this.player1.maxHealth) * 100}%`;
        this.player2HealthBar.style.width = `${(this.player2.currentHealth / this.player2.maxHealth) * 100}%`;
    }

    logBattleAction(attackerName, defenderName, damage, attackType) {
        const logEntry = document.createElement('p');
        if (damage > 0) {
            logEntry.textContent = `${attackerName} uses ${attackType} and deals ${damage} damage to ${defenderName}!`;
        } else if (attackType === 'block') {
            logEntry.textContent = `${attackerName} is blocking!`;
        } else {
            logEntry.textContent = `${attackerName}'s attack was blocked!`;
        }
        this.battleLog.appendChild(logEntry);
        this.battleLog.scrollTop = this.battleLog.scrollHeight;
    }

    endBattle() {
        const winner = this.player1.isDefeated() ? this.player2 : this.player1;
        const logEntry = document.createElement('h2');
        logEntry.textContent = `${winner.name} wins the battle!`;
        this.battleLog.appendChild(logEntry);
    }
}