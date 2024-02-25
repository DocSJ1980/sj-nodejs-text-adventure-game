import { Item, getRandomItem } from "./items.js";

export class Room {
    name: string;
    description: string;
    exits: string[];
    items: Item[];
    constructor(name: string, description: string, exits: string[], items: Item[]) {
        this.name = name;
        this.description = description;
        this.exits = exits;
        this.items = items;
    }
}

// Hardcoded fancy room names and descriptions
const fancyRoomNames: string[] = [
    "mainEntry", // mainEntry as the first room
    "Enchanted Garden",
    "Crystal Cavern",
    "Celestial Observatory",
    "Mystic Library",
    "Eternal Hallway",
    "Whispering Woods",
    "Sapphire Sanctum",
    "Fireside Retreat",
    "Starlight Chamber",
    "Gilded Gallery",
    "mainExit" // mainExit as the last room
];

const fancyRoomDescriptions: string[] = [
    "The grand entrance to an enchanting realm, where adventures await.",
    "A lush garden filled with magical flora and fauna, bathed in ethereal light.",
    "A cavern adorned with shimmering crystals, reflecting rainbow hues in every direction.",
    "An observatory perched atop a celestial tower, offering views of distant galaxies.",
    "A library filled with ancient tomes and mystical manuscripts, whispering secrets of the universe.",
    "A hallway that seems to stretch on infinitely, adorned with intricate tapestries and mysterious symbols.",
    "A dense forest where the trees seem to whisper secrets of ages past, their leaves glowing softly.",
    "A sanctum crafted from sapphires, emanating a soothing blue light that calms the soul.",
    "A cozy retreat with a crackling fireplace, inviting travelers to rest and recuperate.",
    "A chamber illuminated by starlight, with constellations twinkling overhead in a vast, endless sky.",
    "A gallery adorned with gilded frames containing otherworldly portraits, each telling a story of its own.",
    "The grand exit from a magical realm, where adventures come to an end."
];

// Function to select random room names as exits
function getRandomExits(roomIndex: number, totalRooms: number): string[] {
    const exits: string[] = [];
    while (exits.length < 3) {
        const randomIndex = Math.floor(Math.random() * totalRooms);
        if (randomIndex !== 0 && randomIndex !== roomIndex && !exits.includes(fancyRoomNames[randomIndex])) {
            exits.push(fancyRoomNames[randomIndex]);
        }
    }
    return exits;
}

// Function to create rooms
export async function createRooms(): Promise<Room[]> {
    let rooms: Room[] = [];
    const totalRooms = fancyRoomNames.length;
    // Create first room
    const firstRoom = new Room(fancyRoomNames[0], fancyRoomDescriptions[0], getRandomExits(0, totalRooms), await getRandomItem(3, 3));
    // console.log("firstRoom: ", firstRoom.name)
    rooms.push(firstRoom);
    for (let i = 1; i < totalRooms - 1; i++) {
        const roomName = fancyRoomNames[i];
        const roomDescription = fancyRoomDescriptions[i];
        const exits = getRandomExits(i, totalRooms); // Get 3 random exits for each room
        const items = await getRandomItem(3, 3); // Example: 3 healing items and 3 damaging items per room
        const newRoom = new Room(roomName, roomDescription, exits, items);
        // console.log(`Room ${i}: ${roomName}`)
        rooms.push(newRoom);
    }
    // Create last room
    const lastRoom = new Room(fancyRoomNames[totalRooms - 1], fancyRoomDescriptions[totalRooms - 1], getRandomExits(0, totalRooms), await getRandomItem(3, 3));
    // console.log("lastRoom: ", lastRoom.name)
    rooms.push(lastRoom);
    rooms = checkLastRoom(rooms);
    // console.log("rooms: ", rooms.map(room => room.exits));
    return rooms;
}

function checkLastRoom(rooms: Room[]): Room[] {
    const roomsWithMainExit = rooms.filter(room => room.exits.includes("mainExit"));
    if (roomsWithMainExit.length === 1) {
        // If "mainExit" is present in only one room, return the rooms array
        return rooms;
    } else if (roomsWithMainExit.length > 1) {
        // If "mainExit" is present in more than one room, remove it from all but one
        roomsWithMainExit.forEach(room => {
            if (room.exits.includes("mainExit")) {
                const index = room.exits.indexOf("mainExit");
                room.exits.splice(index, 1);
            }
        });
        // Leave "mainExit" in one random room
        const randomRoom = roomsWithMainExit[Math.floor(Math.random() * roomsWithMainExit.length)];
        // If "mainExit" is present in more than one room, rerun getRandomExits for the rest
        roomsWithMainExit.forEach(room => {
            if (room !== randomRoom) {
                room.exits = getRandomExits(rooms.indexOf(room), rooms.length);
            }
        });
        return rooms;
    } else {
        // If "mainExit" is not present in any room, randomly select one room and add "mainExit"
        const randomRoom = rooms[Math.floor(Math.random() * rooms.length)];
        const randomExitIndex = Math.floor(Math.random() * randomRoom.exits.length);
        randomRoom.exits.splice(randomExitIndex, 1, "mainExit");
        return rooms;
    }
}
