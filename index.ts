/*
Text-Based Adventure-Game in TypeScript and Node.js
This project is not GUI based. It is a console-based game. The video here shows how to develop the game in Java. You will take the requirements of the game from the video and develop the game in TypeScript and Node.js

Create a GitHub repository for the project and submit its URL in the project submission form.
*/

import inquirer from 'inquirer';
import chalk from 'chalk';
import { createRooms, Room } from './rooms.js';
import { Item } from './items.js';
import chalkAnimation from 'chalk-animation';

// Get rooms
let rooms: Room[] = await createRooms();

// Define Item and Room classes here...

class Player {
    name: string;
    health: number;
    constructor(name: string) {
        this.name = name;
        this.health = 100;
    }

    useItem(item: Item) {
        if (item.heal > 0) {
            this.health += item.heal
            console.log(chalk.greenBright(`${this.name} used ${item.name} and gained ${item.heal} health. Current health: ${this.health}`));;
        } else if (item.damage > 0) {
            this.health -= item.damage;
            if (this.health <= 0) {
                console.log(chalk.redBright(`${this.name} died. Better Luck next time.`))
                process.exit();
            }
            console.log(chalk.redBright(`${this.name} used ${item.name} and lost ${item.damage} health. Current health: ${this.health}`));
        }
    }
}

const asciiArt = `

/$$      /$$           /$$                                                     /$$                                                                  
| $$  /$ | $$          | $$                                                    | $$                                                                  
| $$ /$$$| $$  /$$$$$$ | $$  /$$$$$$$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$        /$$$$$$    /$$$$$$                                                     
| $$/$$ $$ $$ /$$__  $$| $$ /$$_____/ /$$__  $$| $$_  $$_  $$ /$$__  $$      |_  $$_/   /$$__  $$                                                    
| $$$$_  $$$$| $$$$$$$$| $$| $$      | $$  \ $$| $$ \ $$ \ $$| $$$$$$$$        | $$    | $$  \ $$                                                    
| $$$/ \  $$$| $$_____/| $$| $$      | $$  | $$| $$ | $$ | $$| $$_____/        | $$ /$$| $$  | $$                                                    
| $$/   \  $$|  $$$$$$$| $$|  $$$$$$$|  $$$$$$/| $$ | $$ | $$|  $$$$$$$        |  $$$$/|  $$$$$$/                                                    
|__/     \__/ \_______/|__/ \_______/ \______/ |__/ |__/ |__/ \_______/         \___/   \______/                                                     
                                                                                                                                                     
                                                                                                                                                     
                                                                                                                                                     
                                                              /$$$$$$     /$$$$$ /$$                                                                 
                                                             /$$__  $$   |__  $$| $/                                                                 
                                                            | $$  \__/      | $$|_//$$$$$$$                                                          
                                                            |  $$$$$$       | $$  /$$_____/                                                          
                                                             \____  $$ /$$  | $$ |  $$$$$$                                                           
                                                             /$$  \ $$| $$  | $$  \____  $$                                                          
                                                            |  $$$$$$/|  $$$$$$/  /$$$$$$$/                                                          
                                                             \______/  \______/  |_______/                                                           
                                                                                                                                                     
                                                                                                                                                     
                                                                                                                                                     
 /$$      /$$                           /$$        /$$$$$$        /$$                                 /$$                                            
| $$  /$ | $$                          | $$       /$$__  $$      | $$                                | $$                                            
| $$ /$$$| $$  /$$$$$$   /$$$$$$   /$$$$$$$      | $$  \ $$  /$$$$$$$ /$$    /$$ /$$$$$$  /$$$$$$$  /$$$$$$   /$$   /$$  /$$$$$$   /$$$$$$   /$$$$$$$
| $$/$$ $$ $$ /$$__  $$ /$$__  $$ /$$__  $$      | $$$$$$$$ /$$__  $$|  $$  /$$//$$__  $$| $$__  $$|_  $$_/  | $$  | $$ /$$__  $$ /$$__  $$ /$$_____/
| $$$$_  $$$$| $$  \ $$| $$  \__/| $$  | $$      | $$__  $$| $$  | $$ \  $$/$$/| $$$$$$$$| $$  \ $$  | $$    | $$  | $$| $$  \__/| $$$$$$$$|  $$$$$$ 
| $$$/ \  $$$| $$  | $$| $$      | $$  | $$      | $$  | $$| $$  | $$  \  $$$/ | $$_____/| $$  | $$  | $$ /$$| $$  | $$| $$      | $$_____/ \____  $$
| $$/   \  $$|  $$$$$$/| $$      |  $$$$$$$      | $$  | $$|  $$$$$$$   \  $/  |  $$$$$$$| $$  | $$  |  $$$$/|  $$$$$$/| $$      |  $$$$$$$ /$$$$$$$/
|__/     \__/ \______/ |__/       \_______/      |__/  |__/ \_______/    \_/    \_______/|__/  |__/   \___/   \______/ |__/       \_______/|_______/ 
                                                                                                                                                     
                                                                                                                                                     
`;

const rules = chalkAnimation.neon("\n \n Rules of the Game: \n\n You will spawn in mainEntry Room \n\n You will be presented with six magical items \n\n Each item can have magical healing power or magical damage \n\n You will have to select any one item of your choice  \n\n The item will be consumed and your health will be changed accordingly \n\n After consumption of the item you will have to choose from the three exits \n\n The exits will lead you to different rooms \n\n where again you will be presented with six items \n\n You will have to choose one item to consume  \n\n You will have to continue this until you find  \n\n mainExit  \n\n Good luck! \n\n")

class Game {
    rooms: Room[];
    player: Player | null;
    constructor(rooms: Room[]) {
        this.rooms = rooms;
        this.player = null;
    }
    async start() {
        // Ascii art for Welcome to SJ's Word Adventures with chalk animation
        console.log(chalk.blueBright(asciiArt))
        // Get player name
        rules.start()
        rules.stop()
        const playerName = await inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'Welcome to the SJ Word Adventures game! Please enter your name:'
        });

        this.player = new Player(playerName.name);
        console.log(chalk.bgBlueBright(`Welcome, ${this.player.name}!\n`));

        await this.enterRoom(0); // Start in mainEntry
    }

    async enterRoom(roomIndex: number) {
        const room = this.rooms[roomIndex];
        console.log(chalk.blueBright(`You are now in ${room.name}. \n ${room.description}\n`))

        // Show items in the room
        console.log(chalk.redBright(`Items in this room:\n `))
        // room.items.forEach((item, index) => {
        //     console.log(`${index + 1}. ${item.name} \n ${item.description}`);
        // });
        console.table(room.items, ['name', 'description']);
        console.log(chalk.redBright(`\n`))
        // Use item
        const { useItemIndex } = await inquirer.prompt({
            type: 'list',
            name: 'useItemIndex',
            message: 'Choose an item to use:',
            choices: room.items.map((item, index) => `${index + 1}. ${item.name}`)
        });

        const selectedItem = room.items[parseInt(useItemIndex) - 1];
        this.player?.useItem(selectedItem);

        // Choose an exit
        const { chosenExit } = await inquirer.prompt({
            type: 'list',
            name: 'chosenExit',
            message: 'Choose an exit:',
            choices: room.exits
        });

        const nextRoomIndex = this.rooms.findIndex(room => room.name === chosenExit);
        if (nextRoomIndex === -1) {
            console.log(`Invalid exit!`);
        } else if (chosenExit === 'mainExit') {
            if (this.player && this.player.health < 1) {
                console.log(`${this.player.name} died. Game over!`);
            } else {
                console.log(`Congratulations, ${this.player?.name}! You won the game!`);
            }
        } else {
            await this.enterRoom(nextRoomIndex);
        }
    }
}

// Assuming you have an array of rooms named `rooms`
const game = new Game(rooms);
game.start();
