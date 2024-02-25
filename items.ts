export class Item {
    name: string;
    description: string;
    damage: number;
    heal: number;
    constructor(name: string, description: string, damage: number, heal: number) {
        this.name = name;
        this.description = description;
        this.damage = damage;
        this.heal = heal;
    }
}

const magicalHealingItems = [
    { name: "Elixir of Euphoria", description: "Mystical concoction that brings euphoric sensations." },
    { name: "Soothing Serenade Potion", description: "Enchanting potion that calms the spirit with its melodious essence." },
    { name: "Whispering Winds Elixir", description: "Ethereal elixir that carries the whispers of distant realms." },
    { name: "Glimmering Dewdrop Draft", description: "Shimmering draft infused with the essence of morning dew." },
    { name: "Arcane Revitalization Elixir", description: "Potent elixir imbued with revitalizing arcane energies." },
    { name: "Celestial Harmony Essence", description: "Divine essence that harmonizes the soul with celestial melodies." },
    { name: "Mystic Moonlight Elixir", description: "Elixir infused with the mystic energies of moonlight." },
    { name: "Dreamweaver's Delight", description: "Delightful concoction that enhances dreams with vivid imagery." },
    { name: "Radiant Sunbeam Solution", description: "Solution that captures the radiance of sunbeams, imbuing vitality." },
    { name: "Feyfire Elixir", description: "Elixir ignited with the mystical flames of the fey." },
    { name: "Astral Embrace Potion", description: "Potion that facilitates an ethereal embrace with the astral plane." },
    { name: "Sylvan Symphony Serum", description: "Serum that resonates with the harmonies of the sylvan realm." },
    { name: "Phoenix Feather Elixir", description: "Elixir infused with the regenerative properties of phoenix feathers." },
    { name: "Echoes of Eden Elixir", description: "Elixir that echoes the serene tranquility of the Garden of Eden." },
    { name: "Enigmatic Enchantment Elixir", description: "Enigmatic elixir that enchants with its mysterious allure." },
    { name: "Luminous Life Essence", description: "Essence that radiates with the vibrant energy of life." },
    { name: "Harmonic Healing Haze", description: "Mystical haze that harmonizes and heals the spirit." },
    { name: "Aurora's Kiss Elixir", description: "Elixir kissed by the aurora, imbued with revitalizing energy." },
    { name: "Ethereal Embrace Elixir", description: "Elixir that facilitates an ethereal embrace with the unseen." },
    { name: "Crescent Cascade Concoction", description: "Concoction that cascades with the gentle energy of crescent moons." },
    { name: "Wisp of Wellness Elixir", description: "Elixir that carries a wisp of wellness, bringing vitality." },
    { name: "Quicksilver Quencher", description: "Quencher infused with the swiftsilver energies of quicksilver." },
    { name: "Zephyr Zephyr Zephyr", description: "Zephyr that dances with the winds, imbuing vigor and vitality." },
    { name: "Nebula's Nectar Elixir", description: "Elixir distilled from the nectar of distant nebulae." },
    { name: "Radiant Rhapsody Remedy", description: "Remedy that orchestrates a radiant rhapsody within the soul." },
    { name: "Soothing Songbird Serum", description: "Serum that soothes the spirit with the melodic tunes of songbirds." },
    { name: "Serpentine Serenity Solution", description: "Solution that bestows serenity, flowing like a serpentine river." },
    { name: "Wandering Willow Elixir", description: "Elixir that wanders through the depths of nature's embrace." },
    { name: "Moonlit Mirage Mixture", description: "Mixture that conjures mirages under the enchanting glow of moonlight." },
    { name: "Eclipse Elixir", description: "Elixir shrouded in the mystique of eclipses, invoking transformation." }
];
const magicalDamagingItems = [
    { name: "Chaos Bolt", description: "Bolt of chaotic energy that disrupts the fabric of reality." },
    { name: "Shadowstrike Shard", description: "Shard imbued with the darkness of the abyss, piercing through shadows." },
    { name: "Crimson Curse Elixir", description: "Elixir infused with a crimson curse, spreading malevolent affliction." },
    { name: "Venomous Vortex Vial", description: "Vial containing a swirling vortex of venomous energies." },
    { name: "Doomfire Draught", description: "Draught that ignites with doomfire, consuming all in its path." },
    { name: "Searing Storm Solution", description: "Solution that conjures a searing storm of destruction." },
    { name: "Nightmare Nova Elixir", description: "Elixir that unleashes a nova of nightmarish visions." },
    { name: "Thunderclap Tincture", description: "Tincture that resonates with thunderous claps, unleashing havoc." },
    { name: "Frostbite Flask", description: "Flask filled with frostbite, freezing the very soul." },
    { name: "Viper's Venom Vial", description: "Vial containing venom brewed from the fangs of vipers." },
    { name: "Blazing Blizzard Brew", description: "Brew that summons a blazing blizzard, engulfing all in flames." },
    { name: "Abyssal Affliction Ampoule", description: "Ampoule filled with an affliction from the abyss, corrupting all it touches." },
    { name: "Plaguebearer's Potion", description: "Potion that carries the pestilence of the plaguebearer, spreading disease." },
    { name: "Scorching Sorrow Serum", description: "Serum that inflicts scorching sorrow upon its unfortunate victims." },
    { name: "Necrotic Nectar", description: "Nectar infused with necrotic energies, decaying all it touches." },
    { name: "Raging Inferno Elixir", description: "Elixir that erupts into a raging inferno, consuming everything in flames." },
    { name: "Toxic Tempest Tonic", description: "Tonic that brews a toxic tempest, poisoning the air." },
    { name: "Arcane Agony Elixir", description: "Elixir that induces arcane agony, twisting reality with pain." },
    { name: "Dire Drought", description: "Drought that brings about a dire thirst, draining vitality." },
    { name: "Wicked Whirlwind Water", description: "Water infused with a wicked whirlwind, tearing through all in its path." },
    { name: "Spectral Suffering Solution", description: "Solution that inflicts spectral suffering, haunting its victims." },
    { name: "Malevolent Maelstrom Mixture", description: "Mixture that brews a malevolent maelstrom, engulfing the world in chaos." },
    { name: "Dreadfire Draught", description: "Draught that burns with dreadfire, instilling fear in all who witness it." },
    { name: "Cursed Catalyst", description: "Catalyst imbued with a cursed energy, bringing misfortune to those who use it." },
    { name: "Blistering Bane Brew", description: "Brew that festers with blistering bane, causing agony to its victims." },
    { name: "Suffocating Shadow Serum", description: "Serum that suffocates with shadows, enveloping its victims in darkness." },
    { name: "Soulfire Solution", description: "Solution that burns with soulfire, consuming the essence of its victims." },
    { name: "Frostburn Flask", description: "Flask that inflicts frostburn, freezing and burning simultaneously." },
    { name: "Eternal Ember Elixir", description: "Elixir that carries an eternal ember, burning with everlasting flames." },
    { name: "Blade of Betrayal", description: "Blade that embodies betrayal, cutting deep with treacherous intent." }
];


const getRandomPower = () => Math.floor(Math.random() * 60) + 1;
const getRandomItemNumber = () => Math.floor(Math.random() * 30);

export async function getRandomItem(healingItems: number, damaginngItems: number) {
    let items: Item[] = []
    let h = 0
    let d = 0
    while (h < healingItems) {
        const randomItemNumber = getRandomItemNumber()
        const randomPower = getRandomPower()
        const newItem = new Item(magicalHealingItems[randomItemNumber].name, magicalHealingItems[randomItemNumber].description, randomPower, 0);
        items.push(newItem)
        h++
    }
    while (d < damaginngItems) {
        const randomItemNumber = getRandomItemNumber()
        const randomPower = getRandomPower()
        const newItem = new Item(magicalDamagingItems[randomItemNumber].name, magicalDamagingItems[randomItemNumber].description, 0, randomPower);
        items.push(newItem)
        d++
    }
    return items
}

