import { fighters, CharacterSelect, characterSelect } from './character-select.js';

// Punch sound files with a variety of punch sounds
const punchSounds = [
    '/36. Punch.mp3',
    '/punch-(sound-effect)-made-with-Voicemod-technology (1).mp3',
    '/punch-2-37333.mp3',
    '/punch-41105 (1).mp3',
    '/punchsound1.mp3',
    '/Boxing Punches-SoundBible.wav'
];

// Punch effect types
const punchEffects = [
    { 
        name: 'spark', 
        svg: `
            <svg viewBox="0 0 100 100" class="punch-spark">
                <line x1="10" y1="10" x2="90" y2="90" stroke="yellow" stroke-width="5"/>
                <line x1="90" y1="10" x2="10" y2="90" stroke="orange" stroke-width="5"/>
            </svg>
        `
    },
    {
        name: 'impact', 
        svg: `
            <svg viewBox="0 0 100 100" class="punch-impact">
                <circle cx="50" cy="50" r="40" fill="red" opacity="0.7"/>
                <circle cx="50" cy="50" r="30" fill="orange" opacity="0.5"/>
            </svg>
        `
    },
    {
        name: 'explosion', 
        svg: `
            <svg viewBox="0 0 100 100" class="punch-explosion">
                <polygon points="50,10 70,40 90,50 70,60 50,90 30,60 10,50 30,40" fill="yellow" />
                <circle cx="50" cy="50" r="20" fill="orange" opacity="0.6"/>
            </svg>
        `
    }
];

function playRandomPunchSound() {
    const randomSound = punchSounds[Math.floor(Math.random() * punchSounds.length)];
    const audio = new Audio(randomSound);
    audio.volume = 0.3; // Reduce volume to prevent overwhelming sound
    audio.play().catch(error => {
        console.warn('Could not play punch sound:', error);
    });
}

function createPunchEffect(targetElement, effectType = null) {
    const arena = document.querySelector('.arena');
    const effect = document.createElement('div');
    effect.className = 'punch-effect';
    
    // Get random effect if not specified
    const chosenEffect = effectType || punchEffects[Math.floor(Math.random() * punchEffects.length)];
    
    // Position the effect over the target
    const targetRect = targetElement.getBoundingClientRect();
    const arenaRect = arena.getBoundingClientRect();
    
    effect.innerHTML = chosenEffect.svg;
    effect.style.position = 'absolute';
    effect.style.left = `${targetRect.left - arenaRect.left + targetRect.width / 2}px`;
    effect.style.top = `${targetRect.top - arenaRect.top + targetRect.height / 2}px`;
    effect.style.pointerEvents = 'none';
    effect.style.zIndex = '10';
    
    arena.appendChild(effect);
    
    // Remove effect after animation
    setTimeout(() => {
        effect.remove();
    }, 500);
}

class Robot {
  constructor(name, imagePath, x, teamSide) {
    this.name = name;
    this.health = 100;
    this.maxHealth = 100;
    this.x = x;
    this.comboCount = 0;
    this.teamSide = teamSide;
    this.isBlocking = false;
    this.blockCooldown = 0;
    
    this.element = this.createRobotElement(imagePath);
    
    const fighter = fighters.find(f => f.path === imagePath);
    this.quote = fighter ? fighter.quote : "Ready to fight!";
    this.battleQuotes = this.generateBattleQuotes();
  }

  generateBattleQuotes() {
    const defaultQuotes = [
      "Let's go!",
      "Come at me!",
      "I'm ready!",
      "Bring it on!",
      "You can't defeat me!"
    ];

    // Character-specific quotes
    const characterQuotes = {
      'Normal Smiley': [":) Fight!", "Smiling through battle!", "Smile and fight!"],
      'Dancing Banana': ["Dance fight!", "Shake it off!", "Banana power!"],
      'Trollface': ["Problem?", "U mad?", "Trolling in progress!"],
      'Cursor': ["Point and click!", "Cursor attack!", "Click to destroy!"],
      'Windows XP': ["System online!", "Windows battle mode!", "Loading destruction!"]
    };

    return characterQuotes[this.name] || defaultQuotes;
  }

  speakRandomQuote() {
    const speechBubble = this.element.querySelector('.speech-bubble');
    const randomQuote = this.battleQuotes[Math.floor(Math.random() * this.battleQuotes.length)];
    speechBubble.textContent = randomQuote;
    speechBubble.style.color = 'yellow';

    // Reset to original quote after 2 seconds
    setTimeout(() => {
      speechBubble.textContent = this.quote;
    }, 2000);
  }

  createRobotElement(imagePath) {
    const robotEl = document.createElement('div');
    robotEl.className = 'robot';
    robotEl.style.left = `${this.x}px`;
    
    const healthBar = document.createElement('div');
    healthBar.className = 'health-bar';
    const healthRemaining = document.createElement('div');
    healthRemaining.className = 'health-remaining';
    healthRemaining.style.width = '100%';
    healthBar.appendChild(healthRemaining);
    
    const speechBubble = document.createElement('div');
    speechBubble.className = 'speech-bubble';
    speechBubble.textContent = this.quote;
    
    const img = document.createElement('img');
    img.src = imagePath;
    
    robotEl.appendChild(healthBar);
    robotEl.appendChild(speechBubble);
    robotEl.appendChild(img);
    
    return robotEl;
  }

  showCombo() {
    const combo = document.createElement('div');
    combo.className = 'combo-text';
    combo.textContent = 'COMBO!';
    combo.style.left = (this.x + 50) + 'px';
    combo.style.bottom = '150px';
    document.querySelector('.arena').appendChild(combo);
    setTimeout(() => combo.remove(), 1000);
  }

  block() {
    if (this.blockCooldown > 0) return false;
    
    this.isBlocking = true;
    this.blockCooldown = 5; // 5 seconds cooldown
    
    // Show blocking visual indicator
    const speechBubble = this.element.querySelector('.speech-bubble');
    speechBubble.textContent = 'BLOCK!';
    speechBubble.style.color = 'cyan';
    
    // Reset after 3 seconds
    setTimeout(() => {
      this.isBlocking = false;
      speechBubble.textContent = this.quote;
      speechBubble.style.color = 'yellow';
    }, 3000);
    
    return true;
  }

  updateBlockCooldown() {
    if (this.blockCooldown > 0) {
      this.blockCooldown--;
    }
  }

  takeDamage(amount) {
    if (this.isBlocking) {
      amount *= 0.2; // Reduce damage while blocking
    }
    
    this.health -= amount;
    const healthBar = this.element.querySelector('.health-remaining');
    healthBar.style.width = `${Math.max(0, this.health)}%`;
    
    // If health is 0 or below, trigger disappearance
    if (this.health <= 0) {
      this.disappear();
      return true;
    }
    return false;
  }

  disappear() {
    // Add a disappearing animation
    this.element.style.transition = 'opacity 0.5s, transform 0.5s';
    this.element.style.opacity = '0';
    this.element.style.transform = 'scale(0.5)';
    
    // Remove the element from the DOM after animation
    setTimeout(() => {
      this.element.remove();
    }, 500);
  }

  jump() {
    this.element.classList.add('jumping');
    setTimeout(() => {
      this.element.classList.remove('jumping');
    }, 500);
  }

  move(targetX) {
    const distance = targetX - this.x;
    if (Math.abs(distance) > 150) {
      this.x += distance > 0 ? 50 : -50;
      this.element.style.left = `${this.x}px`;
    } else if (Math.random() < 0.3) {
      const circleOffset = (Math.random() - 0.5) * 100;
      this.x += circleOffset;
      this.x = Math.max(50, Math.min(700, this.x));
      this.element.style.left = `${this.x}px`;
      this.element.style.transform = `rotate(${circleOffset > 0 ? '20deg' : '-20deg'})`;
    } else if (Math.random() < 0.2) {
      this.jump();
    }
  }

  attack(opponents) {
    // Find closest opponent within attack range
    const aliveOpponents = opponents.filter(r => r.health > 0);
    const closestOpponent = aliveOpponents.reduce((closest, opponent) => {
      const distance = Math.abs(this.x - opponent.x);
      return (!closest || distance < Math.abs(this.x - closest.x)) ? opponent : closest;
    }, null);

    if (!closestOpponent) return { damage: 0, target: null };

    // Check if opponent is within attack range (close proximity)
    const isCloseEnough = Math.abs(this.x - closestOpponent.x) <= 150;
    
    if (!isCloseEnough) return { damage: 0, target: null };

    const isJumpAttack = this.element.classList.contains('jumping');
    const isCritical = Math.random() < 0.2;
    let damage = isCritical ? Math.random() * 40 : Math.random() * 15;
    
    if (isJumpAttack) {
      damage *= 2;
    }

    // Combo system with knockback
    let knockback = 0;
    if (Math.random() < 0.3) {
      this.comboCount++;
      if (this.comboCount > 1) {
        damage *= 1.15; // 15% extra damage
        this.showCombo();
        
        // Add knockback for combo
        knockback = 50 * this.comboCount; // Increase knockback with combo count
      }
    } else {
      this.comboCount = 0;
    }
    
    // Play punch sound when hitting an opponent
    playRandomPunchSound();

    // Add punch effect on the target
    createPunchEffect(closestOpponent.element);

    return { 
      damage, 
      target: closestOpponent, 
      knockback 
    };
  }

  applyKnockback(knockbackAmount, direction) {
    // Direction: 1 for right, -1 for left
    this.x += knockbackAmount * direction;
    
    // Ensure robot stays within arena bounds
    this.x = Math.max(50, Math.min(700, this.x));
    
    // Update element position with transition
    this.element.style.transition = 'left 0.3s';
    this.element.style.left = `${this.x}px`;
    
    // Add visual knockback effect
    this.element.style.transform = `rotate(${direction * 15}deg)`;
    
    // Reset transform after knockback
    setTimeout(() => {
      this.element.style.transform = 'rotate(0deg)';
    }, 300);
  }

  getName() {
    return this.name;
  }
}

class BattleSimulator {
  constructor(team1, team2, selectedMap) {
    this.team1 = [];
    this.team2 = [];
    this.team1Wins = 0;
    this.team2Wins = 0;
    
    // Calculate team positions based on team size
    const teamPositions = this.calculateTeamPositions(team1.length);
    
    team1.forEach((fighter, index) => {
      this.team1.push(new Robot(
        fighter.name, 
        fighter.path, 
        teamPositions.team1[index], 
        1
      ));
    });
    
    team2.forEach((fighter, index) => {
      this.team2.push(new Robot(
        fighter.name, 
        fighter.path, 
        teamPositions.team2[index], 
        2
      ));
    });
    
    // Append robots to the arena
    const arenaEl = document.querySelector('.arena');
    
    // Clear previous battle elements
    const existingStats = arenaEl.querySelector('.stats');
    arenaEl.innerHTML = '';
    arenaEl.appendChild(existingStats);
    
    [...this.team1, ...this.team2].forEach(robot => {
      arenaEl.appendChild(robot.element);
    });
    
    // Set background based on selected map
    if (selectedMap.path) {
      arenaEl.style.backgroundImage = `url('${selectedMap.path}')`;
      arenaEl.style.backgroundSize = 'cover';
      arenaEl.style.backgroundPosition = 'center';
    } else {
      // Reset to default gradient
      arenaEl.style.backgroundImage = 'linear-gradient(45deg, #2c3e50, #34495e)';
    }
    
    // Start periodic quotes
    this.startPeriodicQuotes();
    
    this.battleLoop();
  }

  calculateTeamPositions(teamSize) {
    const arenaWidth = 800;
    const robotWidth = 100;
    const spacing = 120;

    const team1Positions = [];
    const team2Positions = [];

    switch(teamSize) {
      case 1: 
        team1Positions.push(200);
        team2Positions.push(600);
        break;
      case 2:
        team1Positions.push(150, 250);
        team2Positions.push(550, 650);
        break;
      case 3:
        team1Positions.push(100, 200, 300);
        team2Positions.push(500, 600, 700);
        break;
      case 4:
        team1Positions.push(50, 150, 250, 350);
        team2Positions.push(450, 550, 650, 750);
        break;
      case 5:
        team1Positions.push(50, 125, 200, 275, 350);
        team2Positions.push(450, 525, 600, 675, 750);
        break;
    }

    return { team1: team1Positions, team2: team2Positions };
  }

  startPeriodicQuotes() {
    this.quoteIntervals = [];
    [...this.team1, ...this.team2].forEach(robot => {
      const interval = setInterval(() => {
        robot.speakRandomQuote();
      }, 3000);
      this.quoteIntervals.push(interval);
    });
  }
  
  async battleLoop() {
    while (true) {
      // Remove any defeated robots from the teams
      this.team1 = this.team1.filter(robot => robot.health > 0);
      this.team2 = this.team2.filter(robot => robot.health > 0);

      // Check if entire team is defeated
      const team1Defeated = this.team1.length === 0;
      const team2Defeated = this.team2.length === 0;
      
      if (team1Defeated || team2Defeated) {
        // Clear quote intervals
        this.quoteIntervals.forEach(clearInterval);
        
        // Increment wins for the winning team
        if (team1Defeated) {
          this.team2Wins++;
        } else {
          this.team1Wins++;
        }
        
        await this.resetBattle(team1Defeated ? this.team2 : this.team1);
        break;
      }
      
      // Process block cooldowns
      [...this.team1, ...this.team2].forEach(robot => {
        robot.updateBlockCooldown();
      });
      
      // Random chance to block
      [...this.team1, ...this.team2].forEach(robot => {
        if (Math.random() < 0.2) {
          robot.block();
        }
      });
      
      // Move robots
      this.team1.forEach(robot => {
        if (robot.health > 0) {
          const target = this.findBestTarget(robot, this.team2);
          robot.move(target.x);
        }
      });
      
      this.team2.forEach(robot => {
        if (robot.health > 0) {
          const target = this.findBestTarget(robot, this.team1);
          robot.move(target.x);
        }
      });
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Attack logic for Team 1
      this.team1.forEach(attacker => {
        if (attacker.health > 0) {
          const attackResult = attacker.attack(this.team2.filter(r => r.health > 0));
          if (attackResult.target && attackResult.damage > 0) {
            const targetTakesDamage = attackResult.target.takeDamage(attackResult.damage);
            
            // Apply knockback if combo occurred
            if (attackResult.knockback > 0) {
              const knockbackDirection = attacker.x < attackResult.target.x ? 1 : -1;
              attackResult.target.applyKnockback(attackResult.knockback, knockbackDirection);
            }
          }
        }
      });
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Attack logic for Team 2
      this.team2.forEach(attacker => {
        if (attacker.health > 0) {
          const attackResult = attacker.attack(this.team1.filter(r => r.health > 0));
          if (attackResult.target && attackResult.damage > 0) {
            const targetTakesDamage = attackResult.target.takeDamage(attackResult.damage);
            
            // Apply knockback if combo occurred
            if (attackResult.knockback > 0) {
              const knockbackDirection = attacker.x < attackResult.target.x ? 1 : -1;
              attackResult.target.applyKnockback(attackResult.knockback, knockbackDirection);
            }
          }
        }
      });
      
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  
  findBestTarget(robot, opponents) {
    const aliveOpponents = opponents.filter(r => r.health > 0);
    return aliveOpponents.reduce((closest, opponent) => {
      const distance = Math.abs(robot.x - opponent.x);
      return (!closest || distance < Math.abs(robot.x - closest.x)) ? opponent : closest;
    }, null);
  }
  
  async resetBattle(winningTeam) {
    const arena = document.querySelector('.arena');
    
    // Create explosion effect
    const explosion = document.createElement('div');
    explosion.className = 'explosion';
    explosion.innerHTML = `
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="yellow" />
        <circle cx="50" cy="50" r="30" fill="orange" />
        <circle cx="50" cy="50" r="20" fill="red" />
      </svg>
    `;
    
    // Position explosion near the center
    explosion.style.left = '400px';
    explosion.style.bottom = '20px';
    arena.appendChild(explosion);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Remove current robots
    [...this.team1, ...this.team2].forEach(robot => {
      robot.element.remove();
    });
    
    // Determine winning team 
    const winningTeamNumber = winningTeam === this.team1 ? 1 : 2;
    
    // Display winner in the winner display area
    const winnerDisplay = document.getElementById('winner-display');
    winnerDisplay.textContent = `Team ${winningTeamNumber} Wins!`;
    
    // Immediately reset selection and switch back to character select
    characterSelect.resetSelection();
    characterSelect.switchToScreen('character-select');
  }
}

export function startBattle(team1, team2, selectedMap) {
  new BattleSimulator(team1, team2, selectedMap);
}

export { playRandomPunchSound, createPunchEffect };