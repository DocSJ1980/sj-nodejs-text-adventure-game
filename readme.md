## NodeJS/TypeScript Text-Based Adventure Game

### Cloud Applied Project Generative AI Engineer (Batch 53 Quarter 1)

As per the given video, hereere is a summary of the text-based adventure game concept and requirements:

### Game Concept:

- Text-based adventure game played in the console/terminal
- Player starts in an 'entry' room and can navigate to other rooms
- Each room has a description and a list of exits (other accessible rooms)
- Player can move between rooms using commands like 'go', 'move', etc
- Rooms can contain items that can be picked up into the player's inventory
- Game continues until player completes objective or types 'quit'

### Requirements:

- Create different 'rooms' with descriptions and exits
- Allow player to move between rooms using commands
- Implement an inventory to store collected items
- Add items to rooms that can be picked up
- Print room description, exits, and inventory when player enters
- Accept commands like 'go', 'look', 'get [item]' etc and perform actions
- Handle invalid commands gracefully
- Use Inquirer for prompting user input
- Use Chalk for colored text output
- Game loop continues until a win/lose condition or user quits

So in summary, we need to create the structure of rooms, items, and an inventory system, allow navigation between rooms, item pickup and dropping, and process user input to control the game using Node.js, TypeScript, Inquirer, and Chalk.

## Getting Started

To run this game, you will first need to clone the repository and install the dependencies:

```
git clone https://github.com/<username>/text-adventure-game.git
cd text-adventure-game
npm install
```

Then compile the TypeScript code:

```
tsc
```

Finally, run the game:

```
node index.js 
```

## How to Play

- You will start in the `mainEntry` room
- You will be presented with 6 random magical items
    - Each item can have magical healing power or magical damage
- Choose an item to use
    - Using an item will consume it
    - Items with healing power will increase your health
    - Items with damage will decrease your health
        - If your health reaches 0, you lose the game
- After using an item, choose one of the available exits to move to the next room
- Repeat process of using an item and choosing an exit in each room
- Your goal is to navigate through the rooms until you reach the `mainExit`
- Reaching `mainExit` with health above 0 wins the game!

## Game Code Overview

The game is split into three main files:

### index.ts

This contains the main game loop and controls overall game flow:

- Initializes the `Game` class with generated rooms
- Starts the game, prompting for player name
- Handles player movement between rooms
    - Calls `enterRoom` on each room change
    - Checks win condition on `mainExit`
- Handles player item use and health changes

### rooms.ts

This generates the rooms used in the game:

- `Room` class defines a room with `name`, `description`, `exits`, and `items`
- `fancyRoomNames` and `fancyRoomDescriptions` provide randomized fancy names/descriptions
- `getRandomExits` generates randomized exits for each room, ensuring no duplicates
- `createRooms` generates an array of rooms, including `mainEntry` and `mainExit`
- `checkLastRoom` ensures `mainExit` is only present in one room

### items.ts

This handles item generation:

- `Item` class defines an item with `name`, `description`, `damage`, and `heal`
- `magicalHealingItems` and `magicalDamagingItems` provide randomized item properties
- `getRandomItem` generates an array of random items with healing or damage

Some key points:

- Uses `inquirer` for prompts and chalk for colored console output
- Object-oriented design with `Player`, `Room`, `Item`, and `Game` classes
- Randomized content via functions like `getRandomExits` and `getRandomItem`
- Ensures proper game flow via `checkLastRoom` and win condition check
- Detailed console messages for item use, health changes, etc

Overall, this implements a basic interactive text adventure game with randomized content and turn-based mechanics. The code is split into logical files and makes use of TypeScript classes and features.

