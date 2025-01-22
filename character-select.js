const fighters = [
    { name: 'Fire in the Hole', path: '/Normal.png', quote: "Simple smile!" },
    { name: 'Dancing Banana', path: '/dance-banana.gif', quote: "Dance time!" },
    { name: 'Trollface', path: '/trollface (2).png', quote: "Problem?" },
    { name: 'Cursor', path: '/cursor.png', quote: "Point and click!" },
    { name: 'Windows XP', path: '/dfom9ho-0e411c0f-e367-480b-8c90-77ea71f64628.png', quote: "Classic OS!" },
    { name: 'Internet Explorer', path: '/Internet_Explorer_logo_2007.png', quote: "Browsing battle!" },
    { name: 'Spinning Chicken', path: '/chicken spin.gif', quote: "Bawk bawk!" },
    { name: 'Floppa', path: '/floppa_png-removebg-preview.png', quote: "Big cat energy!" },
    { name: 'Kitten Headphones', path: '/flat_750x_075_f-pad_750x1000_f8f8f8-removebg-preview.png', quote: "Meow beats!" },
    { name: 'Bloxy Cola', path: '/BloxyCola.png', quote: "Refreshing battle!" },
    { name: 'Scratch Cat', path: '/IMG_0894-removebg-preview.png', quote: "Code and fight!" },
    { name: 'Happy Cat', path: '/happy-cat-cat.gif', quote: "Happy fighting!" },
    { name: 'Goomba', path: '/Goomba.gif', quote: "Squish!" },
    { name: 'Bowser', path: '/BowserSM64.webp', quote: "Koopa power!" },
    { name: 'Angry Red Bird', path: '/INGAME_RED.png', quote: "Angry attack!" },
    { name: 'Nyan Cat', path: '/NYAN.gif', quote: "Nyan nyan!" },
    { name: 'Nerd', path: '/nerd.gif', quote: "Actually..." },
    { name: 'Upload', path: '/Up[1].png', quote: "Uploading power!" },
    { name: 'Pixel Smiley', path: '/smile.png', quote: "Pixelated smile!" },
    
    // New characters from assets
    { name: 'Peter Griffin', path: '/Peter_Griffin.png', quote: "Hehehe!" },
    { name: 'Roblox Noob', path: '/OIP (1).jfif', quote: "OOF!" },
    { name: 'Suit Cat', path: '/suit-cat-semga.gif', quote: "Classy fight!" },
    { name: 'Miau Cat', path: '/miao.jpeg', quote: "Miau battle!" },
    { name: 'Sad Spongebob', path: '/Captura de pantalla_14-12-2024_22935_www.bing.com.jpeg', quote: "Sad tears!" },
    { name: 'Knee Surgery', path: '/ab67616d00001e020ecfdd745c46d2180687cb09.jpg', quote: "Grinchy fight!" },
    { name: 'Patrick Star', path: '/Patrick_Star.svg.png', quote: "I'm ready!" },
    { name: 'KSI', path: '/ksi.jpg', quote: "Let's go!" },
    { name: 'Flappy Bird', path: '/FlappyBird.png', quote: "Flap attack!" },
    { name: 'Rickroll', path: '/rickroll.gif', quote: "Never gonna give up!" },
    { name: 'Robux Gold', path: '/Robux_Gold.png', quote: "Paying to win!" },
    { name: 'Squidward', path: '/bluesquid.jpeg', quote: "Whatever..." },
    { name: 'Smirking Nugget', path: '/download (11).jpeg', quote: "Crispy fight!" },
    { name: 'Discord', path: '/discord.png', quote: "Chat attack!" },
    { name: 'Epic Face', path: '/epic.png', quote: "Epic battle!" },
    { name: 'Bald Cartoon', path: '/RoblozM.jpg', quote: "Baldness is power!" },
    { name: 'Sun', path: '/sun.png', quote: "Burning bright!" },
    { name: 'Moon', path: '/moon.png', quote: "Night fighter!" },
    { name: 'Normal Smiley', path: '/smiley.png', quote: "Smile!" },
    { name: 'Epic Mario', path: '/dot2025_0113_1200_59.gif', quote: "Epic jump!" },
    
    // Griffin Family characters
    { name: 'Brian Griffin', path: '/Brian_Griffin.png', quote: "Actually..." },
    { name: 'Stewie Griffin', path: '/StewiesGeneric_2010_R3F-56a00c1f5f9b58eba4aea7e4.webp', quote: "Victory shall be mine!" },
    { name: 'Lois Griffin', path: '/Lois_Griffin.png', quote: "Family, behave!" },
    { name: 'Meg Griffin', path: '/Meg_Griffin.png', quote: "Shut up!" },
    { name: 'Super Peter', path: '/super peter.png', quote: "Super Saiyan Peter!" },
    
    // YouTube Logo
    { name: 'YouTube', path: '/IMG_0027.png', quote: "Video battle!" },
    
    // New additions
    { name: 'SpongeBob', path: '/bob_esponja.png', quote: "I'm ready!" },
    { name: 'Freakbob', path: '/Freakbob.jpeg', quote: "Who tf callin me?" },
    { name: 'Piano Cat', path: '/cat-piano.gif', quote: "Musical battle!" },
    { name: 'Clippy', path: '/Clippy.png', quote: "Need help fighting?" },
    { name: 'Sou Frisk', path: '/shimmy ah.gif', quote: "Shimmy shake!" },
    { name: 'Silly Cat', path: '/silly-cat.png', quote: "Meow!" },
    { name: 'Notepad', path: '/vistanotepad.webp', quote: "Taking notes!" },
    { name: 'Uno Reverse', path: '/uno.webp', quote: "No, U!" },
    { name: 'Roblox Logo', path: '/Roblox_logo_(2006).png', quote: "OOF!" },
    { name: 'Peashooter', path: '/Peashooter.png', quote: "Pea power!" },
    { name: 'Henry Stickmin', path: '/distraction-dance-henry-stickmin.gif', quote: "Distraction dance!" },
    { name: 'Doge', path: '/doge-meme-template-full-9527f398.png', quote: "Much fight!" },
    
    // Minecraft and new assets
    { name: 'Dirt Block', path: '/s189772745713394276_p3856_i147_w640.jpeg', quote: "Blocky ground!" },
    { name: 'Wood Block', path: '/log.jpg', quote: "Wooden strength!" },
    { name: 'Minecraft Apple', path: '/Apple.png', quote: "Tasty health!" },
    { name: 'Stone Block', path: '/Minecraft-Stone-Block.jpg', quote: "Solid defense!" },
    { name: 'Cobblestone', path: '/cobblestone.jpg', quote: "Rough surface!" },
    { name: 'Cat Thumbs Up', path: '/Screenshot_2024-12-19-14-37-12-416_com.google.android.googlequicksearchbox-edit.jpg', quote: "Paws up!" },
    
    // New Sonic-related and meme characters
    { name: 'Sanic', path: '/Sanic.png', quote: "Gotta go fast!" },
    { name: 'Shedew', path: '/Shedew Idle.png', quote: "Chaos Control!" },
    { name: 'Tails', path: '/Taels.webp', quote: "Let's go!" },
    { name: 'Malleo', path: '/MalleoReuploadPopgamer06 Walk.gif', quote: "Wahoo!" },
    { name: 'Weegee', path: '/WeegeeReuploadPopgamer06 walk.gif', quote: "I'm gonna win!" },
    { name: 'Walleo', path: '/Walleo_Remastered.webp', quote: "Wah!" },
    { name: 'Watermelon Cat', path: '/Watermelon Cat.png', quote: "Meow and slice!" },
    { name: 'Tac Nayn', path: '/Tac nayn.webp', quote: "Reverse nyan!" },
    { name: 'Repeater', path: '/RePeaTer DS version sprite.webp', quote: "Double fire!" },
    { name: 'Wall-nut', path: '/wallnut.png', quote: "Defensive wall!" },
    { name: 'Wega', path: '/wega-sticker.gif', quote: "Wega power!" },
    { name: 'Mr. Beast', path: '/MrBeastBoss.png', quote: "Challenge time!" },
    // New additions
    { name: 'DanTDM', path: '/DanTDM-1427147073.jpg', quote: "Let's play!" },
    { name: 'Enchanted Diamond Sword', path: '/Diamon-Sword.gif', quote: "Sharp battle!" },
    { name: 'Folder', path: '/FolderView[1].png', quote: "File system fight!" },
    
    // New tech/logo characters
    { name: 'Google Chrome', path: '/Google_chrome.png', quote: "Search for victory!" },
    { name: 'Google Play Store', path: '/google-play-store-logo-A9F117BED5-seeklogo.com.png', quote: "App battle!" },
    { name: 'Websim', path: '/Screenshot 2024-12-31 1436247 (1).png', quote: "Simulating victory!" },
    
    // New Goku characters
    { name: 'Goku', path: '/Goku.webp', quote: "Let's fight!" },
    { name: 'Super Saiyan Goku', path: '/Super_Saiyan_Goku.webp', quote: "Power unleashed!" },
    { name: 'Supreme Goku', path: '/drip goku.jpg', quote: "Street Fighter!" },
    { name: 'Among Us', path: '/an871k4o1sn51 (1).png', quote: "Sus!" },
].filter(fighter => fighter.path);

const fightersNew = [
  { name: 'Glock', path: '/Item_Glock-sharedassets4.assets-616.webp', quote: "Lock and load!" },
  { name: 'Cheeseburger', path: '/pngtree-3d-illustration-cheese-burger-png-image_10245728.png', quote: "Bite me!" },
  { name: 'Chocolate Chip Cookie', path: '/pngwing.com.png', quote: "Crumbly fight!" },
  { name: 'My Computer', path: '/My Computer.ico', quote: "System ready!" },
  { name: 'Firefox', path: '/firefoxuser.png', quote: "Browse and battle!" },
  { name: 'Recycle Bin', path: '/recyclebin.webp', quote: "Recycling fighters!" },
  { name: 'Start Button', path: '/start.png', quote: "Let's begin!" },
  { name: 'Grass Block', path: '/grassblock.jpg', quote: "Minecraft ground!" },
  { name: 'Joobi', path: '/Joobi.png', quote: "Blue scream!" },
  
  // New Tamagotchi characters
  { name: 'Mametchi', path: '/stand-0.png', quote: "Tamagotchi power!" },
  { name: 'Kuchipatchi', path: '/Kuchipatchi.webp', quote: "Hungry for battle!" },
  { name: 'Memetchi', path: '/Memetchi.webp', quote: "Emotional fight!" },
  { name: 'Lovelitchi', path: '/Lovelitchi.webp', quote: "Love and battle!" },
  { name: 'Chamametchi', path: '/Chamametchi.webp', quote: "Cute battle!" },
  { name: 'Mamametchi', path: '/Mamametchi.webp', quote: "Motherly power!" },
  { name: 'Papamametchi', path: '/Papamametchi.webp', quote: "Father knows best!" },
  { name: 'Pingu', path: '/Pingu.webp', quote: "Pingu fight!" },
  { name: 'Amir', path: '/images (12).jpeg', quote: "Come on sir, is that all you got sir?" },
  { name: 'Diamond Block', path: '/Diamond ore block.jpeg', quote: "Minecraft treasure!" },
  { name: 'Firey', path: '/firey.png', quote: "Burning bright!" },
  { name: 'Thonk', path: '/thonk.png', quote: "Hmm..." },
  { name: 'PRIME Blue Raspberry', path: '/PRIME.jpeg', quote: "Hydration battle!" },
  
  // New additions
  { name: 'Yahi Mice', path: '/yahi.png', quote: "Minimal mouse power!" },
  
  // New addition: Epic Luigi
  { name: 'Epic Luigi', path: '/dot2025_0115_0710_08.gif', quote: "Let's-a go!" },
  { name: 'Income Tax Return Document', path: '/ITRD.webp', quote: "Taxes are my battle!" },
  { name: 'Donald Duck', path: '/Donald Duck.webp', quote: "Quack attack!" },
  { name: 'Makiko', path: '/Makiko.webp', quote: "Dance battle!" },
  { name: 'Violetchi', path: '/Violetchi.webp', quote: "Flower power!" },
  // New national flag characters
  { name: 'Canada Flag', path: '/Canada.webp', quote: "True North strong and free!" },
  { name: 'USA Flag', path: '/usa.webp', quote: "Stars and stripes forever!" },
  { name: 'Ukraine Flag', path: '/Ukraine.png', quote: "Slava Ukraini!" },
  { name: 'Zambia Flag', path: '/Zambia.png', quote: "Unity and freedom!" },
  { name: 'Seong Gi-hun', path: '/Seong Gi-hun.webp', quote: "I PLAYED THESE GAMES BEFORE!" },
  { name: 'Mii', path: '/Mii.webp', quote: "Custom fighter incoming!" },
  { name: 'Chris Griffin', path: '/Chris.webp', quote: "Oh boy!" },
  { 
    name: 'Pingas', 
    path: '/5624529e0ef6453076b4ffcc65b1e6b3-removebg-preview.png', 
    quote: "Oh my gawsh, PINGAS!" 
  },
  { 
    name: 'Mac OS X Finder', 
    path: '/Mac OS X 10.4 finder icon.jpeg', 
    quote: "Classic Mac power!" 
  },
  {
    name: 'Safari', 
    path: '/OIP__3_-removebg-preview.png', 
    quote: "Surf the web!" 
  },
  {
    name: 'Microsoft Edge', 
    path: '/Microsoft_Edge.png', 
    quote: "Edgy battle!" 
  }
].filter(fighter => fighter.path);

fightersNew.push(
    {
        name: 'Polandball Indonesia', 
        path: '/Polandball.png', 
        quote: "Clay representation!" 
    },
    {
        name: 'Windows 1', 
        path: '/Windows 1.png', 
        quote: "First of its kind!" 
    },
    {
        name: 'Windows Vista', 
        path: '/win vista.jpg', 
        quote: "I'm a bit complicated..." 
    },
    {
        name: 'Nintendo Switch 2', 
        path: '/nintendo switch 2.png', 
        quote: "Next-gen gaming!" 
    },
    {
        name: 'iOS 12', 
        path: '/ios 12.png', 
        quote: "Notification ready!" 
    },
    {
        name: 'Weak iPhone 5c', 
        path: '/Iphone 5c.png', 
        quote: "Small but spirited!",
        powerLevel: 2, // Deliberately weaker
        specialAbility: "Low Battery Mode"
    },
    {
        name: 'Samsung Galaxy Star', 
        path: '/samsung galaxy star.jpg', 
        quote: "Budget battler!" 
    },
    {
        name: 'Elon Musk', 
        path: '/Elon Musk.jpg', 
        quote: "Let's disrupt this battle!" 
    },
    {
        name: 'Netherite Hoe', 
        path: '/Netherite Hoe.webp', 
        quote: "Minecraft farming power!" 
    },
    {
        name: 'Explosive Samsung Note 7', 
        path: '/samsung note 7.gif', 
        quote: "I'm a real blast!" 
    },
    {
        name: 'Cantaloupe', 
        path: '/cantaloupe.png', 
        quote: "Fruity fighter!" 
    },
    {
        name: 'Arabic Nokia', 
        path: '/arabic nokia.jpg', 
        quote: "Indestructible!" 
    },
    {
        name: 'Bringus Studios', 
        path: '/bringus studios.jpg', 
        quote: "Studio battle!" 
    },
    {
        name: 'Opera GX', 
        path: '/Opera GX.webp', 
        quote: "Gaming browser power!" 
    },
    {
        name: 'ChatGPT', 
        path: '/ChatGPT.png', 
        quote: "Let me generate a victory!" 
    },
    {
        name: 'Unity Bean', 
        path: '/unity bean.webp', 
        quote: "Game development energy!" 
    },
    {
        name: 'Facebook', 
        path: '/facebook.png', 
        quote: "Social media smash!" 
    },
    {
        name: 'PlayStation 3', 
        path: '/playstation 3.png', 
        quote: "Console warrior!" 
    },
    {
        name: 'IamSteve', 
        path: '/IamSteve.jpg', 
        quote: "Steve mode activated!" 
    },
    {
        name: 'Nintendo Switch', 
        path: '/nintendo switch.png', 
        quote: "Portable battle!" 
    },
    {
        name: 'Dani', 
        path: '/Dani.webp', 
        quote: "Milk gang!" 
    },
    {
        name: 'iPhone 4S', 
        path: '/IPhone4S.webp', 
        quote: "Siri, fight!" 
    },
    {
        name: 'Indian Guy', 
        path: '/Indian guy.jpeg', 
        quote: "Come on sir, fight!" 
    }
);

fightersNew.push(
    { 
        name: 'Pin', 
        path: '/IMG_9083.webp', 
        quote: "Sharp attack!" 
    },
    { 
        name: 'Jeffy', 
        path: '/Jeffy_-_Character_-_SML.webp', 
        quote: "Jeffy wants to fight!" 
    },
    { 
        name: 'Bubble', 
        path: '/Bubble.png', 
        quote: "Bubble battle!" 
    },
    { 
        name: 'Leafy', 
        path: '/Leafyyy.png', 
        quote: "Nature's fight!" 
    }
);

fightersNew.push(
    {
        name: 'CopperCab', 
        path: '/CopperCab.webp', 
        quote: "I WANT MY RED VIDEOGAME!" 
    },
    { 
        name: 'Android Robot', 
        path: '/Android_robot.svg.webp', 
        quote: "Robotically awesome!" 
    }
);

fightersNew.push({
    name: 'Newgrounds Tank', 
    path: '/newgrounds.png', 
    quote: "Blam! Battle time!" 
});

fightersNew.push(
    { 
        name: 'Samsung Fun Club', 
        path: '/Samsung Fun Club.webp', 
        quote: "Fun is our club!" 
    },
    { 
        name: 'Muzsika TV', 
        path: '/Muzsika TV.webp', 
        quote: "Music battle!" 
    },
    { 
        name: 'Ajyal TV', 
        path: '/ajyal tv.webp', 
        quote: "Broadcast fighting!" 
    }
);

fightersNew.push(
    {
        name: 'Pingu\'s Mother', 
        path: '/pingu\'s mother.webp', 
        quote: "Clean up your room!" 
    },
    {
        name: 'Pingu\'s Father', 
        path: '/pingu\'s father.webp', 
        quote: "Back in my day..." 
    },
    {
        name: 'Pinga', 
        path: '/Pinga.webp', 
        quote: "Playful penguin power!" 
    },
    {
        name: 'Robby', 
        path: '/robby.webp', 
        quote: "Seal of approval!" 
    },
    {
        name: 'Pingg', 
        path: '/pingg.png', 
        quote: "Clay battle!" 
    },
    {
        name: 'Pongi', 
        path: '/Pongi.webp', 
        quote: "Glasses on, fight on!" 
    },
    {
        name: 'Pingi', 
        path: '/Pingi.webp', 
        quote: "Ready to waddle!" 
    },
    {
        name: 'Pengy', 
        path: '/Pengy.webp', 
        quote: "Close-up combat!" 
    }
);

fightersNew.push(
    {
        name: 'IShowSpeed', 
        path: '/Ishowspeed.jpg', 
        quote: "AYO!" 
    }
);

fightersNew.push(
    {
        name: 'Telefe', 
        path: '/telefe.jpeg', 
        quote: "Argentine television power!" 
    },
    {
        name: 'Galavisión', 
        path: '/Galavision.png', 
        quote: "Latino entertainment!" 
    },
    {
        name: 'Rede Globo', 
        path: '/Rede Globo.webp', 
        quote: "Brazilian broadcast champion!" 
    },
    {
        name: 'SBT', 
        path: '/sbt.png', 
        quote: "Brazil's favorite network!" 
    },
    {
        name: 'Rede Record', 
        path: '/Rede record.jpg', 
        quote: "Record-breaking broadcast!" 
    },
    {
        name: 'Cultura', 
        path: '/cultura.png', 
        quote: "Cultural broadcasting!" 
    },
    {
        name: 'Bandeirantes', 
        path: '/bandeirantes.jpeg', 
        quote: "Brazilian media power!" 
    },
    {
        name: 'TV Tupi', 
        path: '/tv tupi.webp', 
        quote: "Pioneering Brazilian TV!" 
    },
    {
        name: 'Televisa', 
        path: '/televisa.png', 
        quote: "Mexican media giant!" 
    },
    {
        name: 'RedeTV!', 
        path: '/redetv!.jpeg', 
        quote: "Alternative broadcasting!" 
    },
    {
        name: 'Cultura', 
        path: '/cultura.png', 
        quote: "Cultural broadcasting!" 
    },
    {
        name: 'Bandeirantes', 
        path: '/bandeirantes.jpeg', 
        quote: "Brazilian media power!" 
    }
);

const fightersUpdated = fighters
    .filter(fighter => fighter.path !== '/Internet_Explorer_logo_2007.png')
    .concat(fightersNew)
    .concat({
        name: 'Gangster SpongeBob', 
        path: '/Gangsterbob.webp', 
        quote: "Yo, this is my turf!" 
    });

fightersUpdated.push(
    {
        name: 'Fat Sonic', 
        path: '/fat sonic.jpeg', 
        quote: "Gotta go... slow..." 
    }
);

fightersUpdated.push(
    {
        name: 'Maltigi', 
        path: '/Maltigi.jpeg', 
        quote: "Horror intensifies!" 
    }
);

fightersUpdated.push(
    {
        name: 'Freaky Gojo', 
        path: '/freaky gojo.jpg', 
        quote: "Cursed energy intensifies!" 
    },
    {
        name: 'N Plush', 
        path: '/n plush (1).png', 
        quote: "Plush power!" 
    }
);

fightersUpdated.push(
    {
        name: 'Emoji Typing', 
        path: '/emoji typing on computer.gif', 
        quote: "Typing intensifies!" 
    }
);

fightersUpdated.push(
    {
        name: 'SpeedMcQueen', 
        path: '/SpeedMcQueen_1.jpeg', 
        quote: "Race to victory!" 
    }
);

fightersUpdated.push(
    {
        name: 'Square', 
        path: '/square.png', 
        quote: "Perfectly geometric!" 
    }
);

// Remove the square entry
const squareIndex = fightersUpdated.findIndex(fighter => fighter.name === 'Square');
if (squareIndex !== -1) {
    fightersUpdated.splice(squareIndex, 1);
}

fightersUpdated.push(
    {
        name: 'Riggy', 
        path: '/Riggy.webp', 
        quote: "Hop into battle!" 
    }
);

fightersUpdated.push(
    {
        name: 'Sad Red Ball', 
        path: '/download (2).jpeg', 
        quote: "So sad..." 
    }
);

fightersUpdated.push(
    {
        name: 'Apple App Store', 
        path: '/apple app store.png', 
        quote: "Download and battle!" 
    }
);

fightersUpdated.push(
    { 
        name: 'Kasane Pearto', 
        path: '/kasane pearto.webp', 
        quote: "Pear-fect fight!" 
    }
);

fightersUpdated.push(
    { 
        name: 'Nestle Pure Life Water', 
        path: '/water.webp', 
        quote: "Pure hydration challenger!" 
    }
);

fightersUpdated.push(
    {
        name: 'CJ', 
        path: '/CJ.webp', 
        quote: "All we had to do was follow the damn train!" 
    },
    {
        name: 'Kj', 
        path: '/Kj.jpg', 
        quote: "Why so sad?" 
    }
);

fightersUpdated.push({
    name: 'AI Bird with Nuts', 
    path: '/ai bird with large nuts.jpeg', 
    quote: "Nutty innovation!" 
});

fightersUpdated.push(
    {
        name: 'iOS', 
        path: '/IOS.png', 
        quote: "Smoothly battling!" 
    }
);

fightersUpdated.push(
    {
        name: 'Marvin', 
        path: '/Marvin.png', 
        quote: "I'm a puppet!" 
    }
);

fightersUpdated.push(
    {
        name: 'Minecraft Steve', 
        path: '/the REAL REAL STEVE.jpg', 
        quote: "Block and fight!" 
    }
);

fightersUpdated.push(
    {
        name: 'Dorkly Sonic', 
        path: '/DorklySonic.gif', 
        quote: "Parody speed!" 
    },
    {
        name: 'Dorkly Mario', 
        path: '/DorklyMario.webp', 
        quote: "Meme plumber mode!" 
    }
);

fightersUpdated.push(
    {
        name: 'Green Alien Cat', 
        path: '/gnarp.jpg', 
        quote: "Meow from another planet!" 
    }
);

// Remove Internet Explorer entry if it exists
const ieIndex = fightersUpdated.findIndex(fighter => fighter.path === '/Internet_Explorer_logo_2007.png');
if (ieIndex !== -1) {
    fightersUpdated.splice(ieIndex, 1);
}

fightersUpdated.push(
    {
        name: 'Cameron Boyer Weathers', 
        path: '/cameron boyer weathers.jpeg', 
        quote: "Alternative energy!" 
    }
);

fightersUpdated.push(
    {
        name: 'Still Water', 
        path: '/still water.jpeg', 
        quote: "Mysterious depths..." 
    },
    {
        name: 'Those Who Know', 
        path: '/those who know.jpeg', 
        quote: "Cryptic confrontation!" 
    },
    {
        name: 'TikTok', 
        path: '/tiktok.png', 
        quote: "Viral battle!" 
    }
);

fightersUpdated.push(
    {
        name: 'Bluezao', 
        path: '/Bluezao.jpeg', 
        quote: "Rap battle incoming!" 
    }
);

fightersUpdated.push(
    {
        name: 'Pepe', 
        path: '/pepe.gif', 
        quote: "Rare pepe battle!" 
    },
    {
        name: 'Giga Chad', 
        path: '/giga chad.gif', 
        quote: "Ultimate sigma energy!" 
    },
    {
        name: 'Shrek', 
        path: '/shrek.gif', 
        quote: "Get out of my swamp!" 
    },
    {
        name: 'Floppa', 
        path: '/floppa.webp', 
        quote: "Big cat dominance!" 
    },
    {
        name: 'Kid Doge', 
        path: '/kid doge.jpg', 
        quote: "Such battle, much wow!" 
    },
    {
        name: 'Buff Doge', 
        path: '/Buff doge.webp', 
        quote: "Ultimate doge power!" 
    },
    {
        name: 'Cheems', 
        path: '/Cheems.webp', 
        quote: "Bonk!" 
    }
);

fightersUpdated.push(
    {
        name: 'Baller', 
        path: '/baller.jpg', 
        quote: "Roblox throw down!" 
    },
    {
        name: 'Laughing Cat', 
        path: '/IMG_0637.jpeg', 
        quote: "Meow-ha-ha!" 
    },
    {
        name: 'Pog', 
        path: '/pog.webp', 
        quote: "Epic reaction!" 
    }
);

fightersUpdated.push(
    {
        name: 'Crazy Dave', 
        path: '/Crazy Dave.webp', 
        quote: "WABBY WABBO!" 
    },
    {
        name: 'Zombie', 
        path: '/ZombiePVZ.webp', 
        quote: "Brains..." 
    },
    {
        name: 'Dr. Zomboss', 
        path: '/Dr.Zomboss.webp', 
        quote: "Time to defeat the plants!" 
    }
);

// Replace the statesOfAmerica array with a single character
fightersUpdated.push({
    name: 'All 50 States of America', 
    path: '/all 50 states of america.gif', 
    quote: "50 states, one battle!" 
});

fightersUpdated.push(
    {
        name: 'Android Oreo', 
        path: '/android oreo.png', 
        quote: "Sweet and delicious OS!" 
    }
);

fightersUpdated.push(
    {
        name: 'Gatis Kandis', 
        path: '/Gatis kandis.jpg', 
        quote: "Let's go viral!" 
    }
);

fightersUpdated.push(
    {
        name: 'Big Smoke', 
        path: '/Big Smoke.webp', 
        quote: "Two number 9s, a number 9 large..." 
    },
    {
        name: 'Caseoh', 
        path: '/Caseoh.webp', 
        quote: "Waffle House vibes!" 
    }
);

fightersUpdated.push(
    {
        name: 'Megamind', 
        path: '/megamind.webp', 
        quote: "Presentation!" 
    },
    {
        name: 'Loser Dancing Meme', 
        path: '/loser dancing meme.gif', 
        quote: "Dance of defeat!" 
    },
    {
        name: 'Blue Nissan Altima', 
        path: '/car.png', 
        quote: "Cruising into battle!" 
    },
    {
        name: 'Fortnite', 
        path: '/Fortnite.png', 
        quote: "Victory Royale!" 
    },
    {
        name: 'Google Translate', 
        path: '/Google Translate.png', 
        quote: "Translating destruction!" 
    }
);

// Remove Internet Explorer logo
const ieIndex2 = fightersUpdated.findIndex(fighter => fighter.path === '/Internet_Explorer_logo_2007.png');
if (ieIndex2 !== -1) {
    fightersUpdated.splice(ieIndex2, 1);
}

fightersUpdated.push(
    {
        name: 'Bill Jensen', 
        path: '/bill jenson.jpeg', 
        quote: "Surprise!" 
    }
);

fightersUpdated.push(
    {
        name: 'Thanos (Squid Game)', 
        path: '/thanos (squid game).webp', 
        quote: "Game time!" 
    },
    {
        name: 'Thanos (Infinity War)', 
        path: '/thanos (infinity war).jpeg', 
        quote: "I am inevitable!" 
    },
    {
        name: 'Gingerbrave', 
        path: '/Gingerbrave.webp', 
        quote: "Cookie Kingdom battle!" 
    },
    {
        name: 'Ronald McDonald', 
        path: '/Ronald McDonald.webp', 
        quote: "I'm lovin' this fight!" 
    },
    {
        name: 'Crash Bandicoot', 
        path: '/Crash Bandicoot.png', 
        quote: "Woah!" 
    },
    {
        name: 'Steam', 
        path: '/Steam.png', 
        quote: "Gaming platform power!" 
    },
    {
        name: 'Twomad', 
        path: '/twomad.jpeg', 
        quote: "Meme battle incoming!" 
    },
    {
        name: 'Dorkly Luigi', 
        path: '/Dorkly Luigi.webp', 
        quote: "Pixel plumber mode!" 
    }
);

fightersUpdated.push(
    {
        name: 'Jevil', 
        path: '/Jevil.webp', 
        quote: "I CAN DO ANYTHING!" 
    }
);

fightersUpdated.push(
    {
        name: 'Gobo', 
        path: '/Gobo.webp', 
        quote: "Cheerful adventure!" 
    },
    {
        name: 'Pico', 
        path: '/Pico.webp', 
        quote: "Music battle!" 
    },
    {
        name: 'Tera', 
        path: '/Tera.webp', 
        quote: "Blue power!" 
    },
    {
        name: 'Giga', 
        path: '/Giga.webp', 
        quote: "Fiery spirit!" 
    },
    {
        name: 'Nano', 
        path: '/Nano.webp', 
        quote: "Tiny but mighty!" 
    }
);

fightersUpdated.push(
    {
        name: 'Gnarpane Teto', 
        path: '/gnarpane teto.webp', 
        quote: "Vocaloid vibes!" 
    }
);

fightersUpdated.push(
    {
        name: 'Alex Minecraft', 
        path: '/alex minecraft.webp', 
        quote: "Blocky battle!" 
    },
    {
        name: 'Geometry Dash Cube', 
        path: '/GD Cube.webp', 
        quote: "Geometric precision!" 
    },
    {
        name: 'Lunchables', 
        path: '/Lunchables.png', 
        quote: "Snack time fight!" 
    },
    {
        name: 'Sonic Movie Tails', 
        path: '/Sonic Movie Tails.webp', 
        quote: "Flying into battle!" 
    },
    {
        name: 'Sonic Movie Shadow', 
        path: '/Sonic Movie Shadow.webp', 
        quote: "Ultimate life form!" 
    },
    {
        name: 'Sonic Movie Knuckles', 
        path: '/Sonic Movie Knuckles.webp', 
        quote: "Punch first, ask later!" 
    }
);

fightersUpdated.push(
    {
        name: 'Cineplex', 
        path: '/Cineplex.png', 
        quote: "Movie battle time!" 
    },
    {
        name: 'Sonic Movie', 
        path: '/Sonic Movie Sonic.webp', 
        quote: "Gotta go fast in battle!" 
    },
    {
        name: 'Announcer (BFDI)', 
        path: '/Announcer Bfdi.gif', 
        quote: "Looks like a battle!" 
    },
    {
        name: 'Feastables', 
        path: '/Feastables.webp', 
        quote: "MrBeast snack attack!" 
    },
    {
        name: 'Lunchly', 
        path: '/Lunchables.png', 
        quote: "Packed for battle!" 
    },
    {
        name: 'Dancing Noob', 
        path: '/noob dancing.gif', 
        quote: "OOF Dance!" 
    },
    {
        name: 'Mickey Mouse', 
        path: '/Mickey Mouse.webp', 
        quote: "Disney battle magic!" 
    }
);

fightersUpdated.push(
    {
        name: 'Big Epic Mario', 
        path: '/Big Epic Mario.gif', 
        quote: "Wahoo, epic style!" 
    }
);

fightersUpdated.push({
    name: 'Super Peashooter', 
    path: '/Peashooter.png', 
    quote: "Mega plant power!" 
});

const maps = [
    { name: 'Blank Arena', path: '', description: 'Default battle arena' },
    { name: 'The Void', path: '/1eprhbtmvoo51.png', description: 'Ethereal space backdrop' },
    { name: 'Krusty Krab', path: '/crustycrab.webp', description: 'SpongeBob\'s workplace' },
    { name: 'Cart Ride', path: '/good day 3.png', description: 'Quirky mine cart scene' },
    { name: 'Moon Base', path: '/IsThisTheMoon.jpg', description: 'Lunar desolate landscape' },
    { name: 'Minecraft World', path: '/mc.jpg', description: 'Blocky landscape' },
    { name: 'Minecraft Overworld', path: '/Overworld.jpg', description: 'Forest and mountains' },
    { name: 'Windows Bliss', path: '/Windows.webp', description: 'Iconic rolling hills' },
    { name: 'Windows 7 Wallpaper', path: '/img0.jpg', description: 'Classic Windows 7 desktop backdrop' },
    { name: 'Green Hill Zone', path: '/images (5).jpeg', description: 'Classic Sonic landscape' },
    { name: 'Windows XP', path: '/windows-xp.gif', description: 'Nostalgic Windows XP animation' },
    { name: 'Static', path: '/static.gif', description: 'Old TV static effect' },
    { name: 'World Map', path: '/image_search_1736287079656.jpg', description: 'Global satellite view' },
    { name: 'Light Wood Texture', path: '/IMG_6622.jpeg', description: 'Smooth wooden surface' },
    
    // New Roblox maps
    { name: 'Roblox City Street', path: '/good day 6.png', description: 'Urban Roblox scene' },
    { name: 'Roblox Checkpoint', path: '/good day 7.png', description: 'Game checkpoint area' },
    { name: 'Roblox Avatar Plaza', path: '/good day 8.png', description: 'Avatar selection area' },
    
    // New SpongeBob map
    { name: 'SpongeBob House', path: '/Spongebob house.webp', description: 'SpongeBob\'s pineapple home' },
    { name: 'SpongeBob Living Room', path: '/spongebob living room.jpeg', description: 'SpongeBob\'s cozy living room' },
    { name: 'SpongeBob Watching TV', path: '/spongebob watching show.jpg', description: 'SpongeBob\'s television room' },
    
    // New map
    { name: 'Squid Game Arena', path: '/squid game.webp', description: 'Intense battle arena from Squid Game' },
    // New SML map
    { name: 'SML Living Room', path: '/SML Living Room.webp', description: 'Living room from SML' },

    // New African Country Maps
    { name: 'Central African Republic Street', path: '/central african republic.jpg', description: 'Bustling street scene in Central African Republic' },
    { name: 'Moroccan Blue City', path: '/morocco.jpeg', description: 'Vibrant blue fountains and architecture' },
    { name: 'Cameroonian Valley', path: '/cameroon.webp', description: 'Lush green valley landscape' },
    { name: 'Algerian Martyrs Memorial', path: '/algeria.webp', description: 'Historic monument in Algiers' },
    { name: 'South African Drakensberg Mountains', path: '/south africa.jpeg', description: 'Majestic mountain range' },
    { name: 'Egyptian Giza Pyramids', path: '/egypt.jpeg', description: 'Ancient wonder at sunset' },
    { name: 'McDonald\'s Drive-Thru', path: '/mcdonalds drive thru (1).jpg', description: 'Fast food battlefield' },
    { name: 'Lunar Surface', path: '/the moon (1).jpg', description: 'Desolate moon landscape' }
];

maps.push(
    {
        name: 'Pl_Rocket Ravine', 
        path: '/Pl_RocketRavine (1).webp', 
        description: 'Team Fortress 2 cargo facility map' 
    },
    {
        name: 'Disneyland Sleeping Beauty Castle', 
        path: '/Disney Land (1).jpg', 
        description: 'Magical Disney castle backdrop' 
    },
    {
        name: 'Cineplex Place', 
        path: '/Cineplex Place (1).jpeg', 
        description: 'Nighttime movie theater scene' 
    }
);

export class CharacterSelect {
    constructor() {
        this.team1Selected = [];
        this.team2Selected = [];
        this.selectedMap = null;
        this.characterSelectScreen = document.getElementById('character-select');
        this.battleScreen = document.getElementById('battle-screen');
        this.teamSizeInput = document.getElementById('team-size');
        this.winnerDisplay = document.getElementById('winner-display');
        this.mapSelectScreen = document.getElementById('map-select');
        this.mapGridInitialized = false;
        
        this.initializeCharacterGrid();
        this.setupCharacterSelectEvents();
        this.setupMapSelectEvents();
        this.setupTeamSizeScrolling();
        
        this.teamSizeInput.max = 5;
        
        this.setupRandomSelectionButton();
        this.setupSearchBar();
    }

    initializeCharacterGrid() {
        const grid = document.getElementById('character-grid');
        grid.innerHTML = ''; // Clear existing grid
        fightersUpdated.forEach((fighter, index) => {
            const card = document.createElement('div');
            card.className = 'character-card';
            card.dataset.index = index;
            
            const img = document.createElement('img');
            img.src = fighter.path;
            img.alt = fighter.name;
            
            const name = document.createElement('div');
            name.textContent = fighter.name;
            
            card.appendChild(img);
            card.appendChild(name);
            grid.appendChild(card);
        });
    }

    initializeMapGrid() {
        const mapGrid = document.getElementById('map-select-grid');
        mapGrid.innerHTML = ''; // Clear existing grid
        maps.forEach((map, index) => {
            const card = document.createElement('div');
            card.className = 'map-card';
            card.dataset.index = index;
            
            const img = document.createElement('img');
            img.src = map.path || 'placeholder.png'; // Use placeholder if no path
            img.alt = map.name;
            
            const name = document.createElement('div');
            name.textContent = map.name;
            
            const description = document.createElement('div');
            description.textContent = map.description;
            description.className = 'map-description';
            
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(description);
            mapGrid.appendChild(card);
        });
    }

    setupCharacterSelectEvents() {
        const grid = document.getElementById('character-grid');
        const proceedToMapButton = document.getElementById('proceed-to-map');
        
        grid.addEventListener('click', (e) => {
            const card = e.target.closest('.character-card');
            if (!card) return;
            
            const index = parseInt(card.dataset.index);
            const teamSize = parseInt(this.teamSizeInput.value);
            
            // Determine which team to add to
            const currentTeam = this.team1Selected.length < teamSize ? 1 : 
                              this.team2Selected.length < teamSize ? 2 : null;
            
            if (currentTeam === 1) {
                this.selectTeamMember(1, index, card);
            } else if (currentTeam === 2) {
                this.selectTeamMember(2, index, card);
            }
            
            // Enable proceed to map button when both teams are full
            proceedToMapButton.disabled = !(this.team1Selected.length === teamSize && 
                                            this.team2Selected.length === teamSize);
        });
        
        // Proceed to Map Select
        proceedToMapButton.addEventListener('click', () => {
            if (this.team1Selected.length > 0 && this.team2Selected.length > 0) {
                this.switchToScreen('map-select');
                
                // Initialize map grid if not already done
                if (!this.mapGridInitialized) {
                    this.initializeMapGrid();
                    this.mapGridInitialized = true;
                }
            }
        });
    }

    setupMapSelectEvents() {
        const mapGrid = document.getElementById('map-select-grid');
        const startButton = document.getElementById('start-battle');
        const backButton = document.getElementById('back-to-character-select');
        const randomMapButton = document.createElement('button');
        randomMapButton.id = 'random-map-selector';
        randomMapButton.textContent = 'Random Map';
        randomMapButton.style.marginLeft = '10px';

        // Insert random map button next to start battle button
        const mapSelectActions = document.querySelector('.map-select-actions');
        mapSelectActions.insertBefore(randomMapButton, startButton.nextSibling);

        mapGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.map-card');
            if (!card) return;
            
            // Remove previous selection
            mapGrid.querySelectorAll('.map-card').forEach(c => c.classList.remove('selected'));
            
            // Select current map
            card.classList.add('selected');
            
            const index = parseInt(card.dataset.index);
            this.selectedMap = maps[index];
            
            // Enable start button
            startButton.disabled = false;
        });

        // Random Map Selector
        randomMapButton.addEventListener('click', () => {
            // Deselect all current maps
            mapGrid.querySelectorAll('.map-card').forEach(c => c.classList.remove('selected'));

            // Select a random map
            const mapCards = mapGrid.querySelectorAll('.map-card');
            const randomMapCard = mapCards[Math.floor(Math.random() * mapCards.length)];
            
            randomMapCard.classList.add('selected');
            
            const index = parseInt(randomMapCard.dataset.index);
            this.selectedMap = maps[index];
            
            // Enable start button
            startButton.disabled = false;
        });

        // Back to Character Select
        backButton.addEventListener('click', () => {
            this.switchToScreen('character-select');
        });

        // Start Battle 
        startButton.addEventListener('click', () => {
            if (this.selectedMap) {
                this.switchToScreen('battle');
                this.winnerDisplay.textContent = ''; // Clear any previous winner display
                
                // Trigger game start with selected teams and map
                import('./game.js').then(module => {
                    module.startBattle(
                        this.team1Selected.map(t => fightersUpdated[t.index]), 
                        this.team2Selected.map(t => fightersUpdated[t.index]),
                        this.selectedMap
                    );
                });
            }
        });
    }

    setupTeamSizeScrolling() {
        this.teamSizeInput.addEventListener('wheel', (e) => {
            e.preventDefault(); // Prevent default scroll behavior
            
            const currentValue = parseInt(this.teamSizeInput.value);
            const maxValue = parseInt(this.teamSizeInput.max);
            const minValue = parseInt(this.teamSizeInput.min);
            
            // Determine scroll direction
            const delta = e.deltaY;
            
            if (delta < 0 && currentValue > minValue) {
                // Scrolling up, decrease value
                this.teamSizeInput.value = currentValue - 1;
            } else if (delta > 0 && currentValue < maxValue) {
                // Scrolling down, increase value
                this.teamSizeInput.value = currentValue + 1;
            }
            
            // Trigger change event to reset selection
            this.teamSizeInput.dispatchEvent(new Event('change'));
        });
    }

    setupRandomSelectionButton() {
        // Create random selection button
        const randomButton = document.createElement('button');
        randomButton.id = 'random-character-selector';
        randomButton.textContent = 'Random Team Selection';
        randomButton.style.marginLeft = '10px';
        
        // Insert the button next to the team size input
        const teamSizeInput = document.getElementById('team-size');
        teamSizeInput.parentNode.insertBefore(randomButton, teamSizeInput.nextSibling);
        
        // Add click event listener
        randomButton.addEventListener('click', () => {
            // Reset current selection
            this.resetSelection();
            
            // Get team size from input
            const teamSize = parseInt(this.teamSizeInput.value);
            const grid = document.getElementById('character-grid');
            const characterCards = grid.querySelectorAll('.character-card');
            
            // Shuffle characters
            const shuffledCharacters = Array.from(characterCards).sort(() => 0.5 - Math.random());
            
            // Select first team
            for (let i = 0; i < teamSize; i++) {
                this.selectTeamMember(1, parseInt(shuffledCharacters[i].dataset.index), shuffledCharacters[i]);
            }
            
            // Select second team
            for (let i = teamSize; i < teamSize * 2; i++) {
                this.selectTeamMember(2, parseInt(shuffledCharacters[i].dataset.index), shuffledCharacters[i]);
            }
            
            // Enable proceed to map button
            document.getElementById('proceed-to-map').disabled = false;
        });
    }

    setupSearchBar() {
        const searchBar = document.createElement('input');
        searchBar.type = 'text';
        searchBar.id = 'character-search';
        searchBar.placeholder = 'Search characters...';
        searchBar.classList.add('character-search');

        // Insert the search bar before the character grid
        const characterGrid = document.getElementById('character-grid');
        characterGrid.parentNode.insertBefore(searchBar, characterGrid);

        searchBar.addEventListener('input', () => {
            const searchTerm = searchBar.value.toLowerCase().trim();
            const characterCards = characterGrid.querySelectorAll('.character-card');

            characterCards.forEach(card => {
                const characterName = card.querySelector('div').textContent.toLowerCase();
                
                if (characterName.includes(searchTerm)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    selectTeamMember(teamNum, index, card) {
        const teamSelectedEl = document.getElementById(`team${teamNum}-selected`);
        const teamSelected = teamNum === 1 ? this.team1Selected : this.team2Selected;
        
        // Clone the card to avoid reference issues
        const cardClone = card.cloneNode(true);
        
        teamSelected.push({ index, card: cardClone });
        cardClone.classList.add('selected');
        
        // Update team selection text
        const teamMembers = teamSelected.map(f => fightersUpdated[f.index].name).join(', ');
        teamSelectedEl.textContent = `Team ${teamNum}: ${teamMembers}`;
    }

    resetSelection() {
        // Reset team selections
        [this.team1Selected, this.team2Selected].forEach((team, index) => {
            team.forEach(f => f.card.classList.remove('selected'));
            team.length = 0; // Clear the array
            
            const teamSelectedEl = document.getElementById(`team${index + 1}-selected`);
            teamSelectedEl.textContent = `Team ${index + 1}: No Bots Selected`;
        });

        // Reset map selection
        const mapGrid = document.getElementById('map-select-grid');
        mapGrid.querySelectorAll('.map-card').forEach(c => c.classList.remove('selected'));
        this.selectedMap = null;

        // Disable buttons
        document.getElementById('proceed-to-map').disabled = true;
        document.getElementById('start-battle').disabled = true;
    }

    switchToScreen(screenName) {
        const screens = {
            'character-select': document.getElementById('character-select'),
            'map-select': document.getElementById('map-select'),
            'battle': document.getElementById('battle-screen')
        };

        console.log('Switching to screen:', screenName);
        console.log('Available screens:', Object.keys(screens));

        const targetScreen = screens[screenName];
        
        if (!targetScreen) {
            console.error(`Screen '${screenName}' not found!`);
            return;
        }

        // Hide all screens
        Object.values(screens).forEach(screen => {
            if (screen) {
                screen.classList.remove('active');
            } else {
                console.warn('Undefined screen found during deactivation');
            }
        });
        
        // Show selected screen
        targetScreen.classList.add('active');
    }

    teamSizeInputEventListener() {
        this.teamSizeInput.addEventListener('change', () => {
            this.resetSelection();
        });
    }

    calculateTeamPositions(teamSize) {
        const arenaWidth = 800;
        const teamSpacing = {
            1: { team1: [200], team2: [600] },
            2: { team1: [100, 300], team2: [500, 700] },
            3: { team1: [50, 200, 350], team2: [450, 600, 750] },
            4: { team1: [25, 125, 225, 325], team2: [475, 575, 675, 775] },
            5: { team1: [25, 100, 175, 250, 325], team2: [475, 550, 625, 700, 775] }
        };

        return teamSpacing[teamSize] || { team1: [200], team2: [600] };
    }
}

const characterSelect = new CharacterSelect();
characterSelect.teamSizeInputEventListener();
export { fightersUpdated as fighters, maps, characterSelect };