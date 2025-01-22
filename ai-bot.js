export class AIBot {
    constructor(botData) {
        this.name = botData.name;
        this.weight = botData.weight || Math.random() * 10;
        this.power = botData.power || Math.random() * 10;
        this.health = 100;
        this.position = { x: 0, y: 0 };
    }

    move(direction) {
        const moveSpeed = 10 * (1 - this.weight / 10);
        this.position.x += direction * moveSpeed;
        return this.position.x;
    }

    jump() {
        const jumpHeight = 50 * (1 - this.weight / 10);
        this.position.y += jumpHeight;
        return this.position.y;
    }

    attack() {
        const baseDamage = this.power * 10;
        const criticalHit = Math.random() < 0.2;
        
        return {
            damage: criticalHit ? baseDamage * 2 : baseDamage,
            knockback: baseDamage * (1 + Math.random())
        };
    }

    takeDamage(attackPower) {
        const damageReduction = this.weight / 10;
        const actualDamage = attackPower * (1 - damageReduction);
        
        this.health -= actualDamage;
        return actualDamage;
    }

    isDefeated() {
        return this.health <= 0;
    }
}