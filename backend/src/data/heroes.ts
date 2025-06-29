import { Attribute } from "../shared/enums/attribute.enum";
import type { Hero } from "../shared/models/hero.model";

export const heroes : Hero[]=[
    {
        "names":["Abaddon"],
        "attribute":Attribute.Universal,
        "strengths":["REGENERATION","SLOW"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Alchemist"],
        "attribute":Attribute.Strength,
        "strengths":["REGENERATION"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Axe","Mogul Khan"],
        "attribute":Attribute.Strength,
        "strengths":["AOE","CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Bristleback"],
        "attribute":Attribute.Strength,
        "strengths":["AOE","PASSIVE","FAST"],
        "weaknesses":["BREAK","CATCH","SLOW","ROOT"]
    },
    {
        "names":["Centaur_Warrunner","Bradwarden"],
        "attribute":Attribute.Strength,
        "strengths":["CATCH","FAST"],
        "weaknesses":["SLOW","CATCH","ROOT"]
    },
    {
        "names":["Chaos_Knight","CK"],
        "attribute":Attribute.Strength,
        "strengths":["SWARM","CATCH","REGENERATION"],
        "weaknesses":["AOE","ANTI HEAL"]
    },
    {
        "names":["Clockwerk","Rattletrap"],
        "attribute":Attribute.Strength,
        "strengths":["CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Dawnbreaker","DB"],
        "attribute":Attribute.Strength,
        "strengths":["AOE","CATCH","REGENERATION"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Doom"],
        "attribute":Attribute.Strength,
        "strengths":["ANTI HEAL"],
        "weaknesses":[]
    },
    {
        "names":["Dragon_Knight","DK","Davion"],
        "attribute":Attribute.Strength,
        "strengths":["PASSIVE"],
        "weaknesses":["BREAK"]
    },
    {
        "names":["Earth_Spirit"],
        "attribute":Attribute.Strength,
        "strengths":["CATCH","SLOW"],
        "weaknesses":["CATCH"]
    },
    {
        "names":["Earthshaker","ES"],
        "attribute":Attribute.Strength,
        "strengths":["AOE","CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Elder_Titan","ET"],
        "attribute":Attribute.Strength,
        "strengths":["AOE"],
        "weaknesses":[]
    },
    {
        "names":["Huskar"],
        "attribute":Attribute.Strength,
        "strengths":["REGENERATION","PASSIVE"],
        "weaknesses":["ANTI HEAL","BREAK"]
    },
    {
        "names":["Kunkka"],
        "attribute":Attribute.Strength,
        "strengths":["AOE","CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Legion_Commander","LC"],
        "attribute":Attribute.Strength,
        "strengths":["CATCH"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Lifestealer","LS"],
        "attribute":Attribute.Strength,
        "strengths":["REGENERATION"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Lycan"],
        "attribute":Attribute.Strength,
        "strengths":["FAST"],
        "weaknesses":["CATCH","SWARM","ROOT"]
    },
    {
        "names":["Mars"],
        "attribute":Attribute.Strength,
        "strengths":["CATCH","PASSIVE"],
        "weaknesses":["BREAK"]
    },
    {
        "names":["Night_Stalker","NS"],
        "attribute":Attribute.Strength,
        "strengths":["FAST","SLOW","PASSIVE"],
        "weaknesses":["BREAK","SLOW","ROOT"]
    },
    {
        "names":["Ogre_Magi"],
        "attribute":Attribute.Strength,
        "strengths":["CATCH","SLOW"],
        "weaknesses":[]
    },
    {
        "names":["Omniknight"],
        "attribute":Attribute.Strength,
        "strengths":["SLOW"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Phoenix"],
        "attribute":Attribute.Strength,
        "strengths":["REGENERATION","BLINKING"],
        "weaknesses":["ANTI HEAL","ROOT"]
    },
    {
        "names":["Primal_Beast","PB"],
        "attribute":Attribute.Strength,
        "strengths":["CATCH","FAST","AOE"],
        "weaknesses":["SLOW","ROOT"]
    },
    {
        "names":["Pudge"],
        "attribute":Attribute.Strength,
        "strengths":["CATCH","AOE"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Slardar"],
        "attribute":Attribute.Strength,
        "strengths":["CATCH","TRUE SIGHT","FAST"],
        "weaknesses":["SLOW","ROOT"]
    },
    {
        "names":["Spirit_Breaker","SB"],
        "attribute":Attribute.Strength,
        "strengths":["CATCH","FAST"],
        "weaknesses":["CATCH","SLOW","ROOT"]
    },
    {
        "names":["Sven"],
        "attribute":Attribute.Strength,
        "strengths":["CATCH","AOE"],
        "weaknesses":[]
    },
    {
        "names":["Tidehunter"],
        "attribute":Attribute.Strength,
        "strengths":["AOE","SLOW","CATCH","ROOT"],
        "weaknesses":[]
    },
    {
        "names":["Timbersaw"],
        "attribute":Attribute.Strength,
        "strengths":["BLINKING","PASSIVE","AOE"],
        "weaknesses":["BREAK","CATCH"]
    },
    {
        "names":["Tiny"],
        "attribute":Attribute.Strength,
        "strengths":["CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Treant_Protector"],
        "attribute":Attribute.Strength,
        "strengths":["SLOW","ROOT","INVISIBILITY"],
        "weaknesses":["TRUE SIGHT"]
    },
    {
        "names":["Tusk"],
        "attribute":Attribute.Strength,
        "strengths":["CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Underlord"],
        "attribute":Attribute.Strength,
        "strengths":["ROOT","AOE"],
        "weaknesses":[]
    },
    {
        "names":["Undying"],
        "attribute":Attribute.Strength,
        "strengths":["AOE","SWARM","SLOW"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Wraith_King","Skeleton_King","WK"],
        "attribute":Attribute.Strength,
        "strengths":["CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Anti-Mage","AM","Magina"],
        "attribute":Attribute.Agility,
        "strengths":["BLINKING","PASSIVE"],
        "weaknesses":["CATCH","ROOT"]
    },
    {
        "names":["Bloodseeker","BS"],
        "attribute":Attribute.Agility,
        "strengths":["FAST","REGENERATION","SLOW"],
        "weaknesses":["SLOW","ANTI HEAL","TRUE SIGHT","CATCH","ROOT"]
    },
    {
        "names":["Bounty_Hunter","BH","Gondar"],
        "attribute":Attribute.Agility,
        "strengths":["INVISIBILITY","TRUE SIGHT","FAST"],
        "weaknesses":["TRUE SIGHT","SLOW","CATCH","ROOT"]
    },
    {
        "names":["Broodmother"],
        "attribute":Attribute.Agility,
        "strengths":["SLOW","SWARM","FAST"],
        "weaknesses":["AOE","SLOW","CATCH","ROOT"]
    },
    {
        "names":["Clinkz"],
        "attribute":Attribute.Agility,
        "strengths":["INVISIBILITY","FAST"],
        "weaknesses":["TRUE SIGHT","SLOW","CATCH","ROOT"]
    },
    {
        "names":["Drow_Ranger"],
        "attribute":Attribute.Agility,
        "strengths":["PASSIVE","SLOW","ANTI HEAL"],
        "weaknesses":["BREAK","BLINKING"]
    },
    {
        "names":["Ember_Spirit"],
        "attribute":Attribute.Agility,
        "strengths":["BLINKING"],
        "weaknesses":["ROOT","CATCH"]
    },
    {
        "names":["Faceless_Void"],
        "attribute":Attribute.Agility,
        "strengths":["CATCH","BLINKING"],
        "weaknesses":["ROOT","CATCH"]
    },
    {
        "names":["Gyrocopter"],
        "attribute":Attribute.Agility,
        "strengths":["AOE","FAST"],
        "weaknesses":["SLOW","CATCH","ROOT"]
    },
    {
        "names":["Hoodwink"],
        "attribute":Attribute.Agility,
        "strengths":["FAST","BREAK"],
        "weaknesses":["CATCH","SLOW","ROOT"]
    },
    {
        "names":["Juggernaut"],
        "attribute":Attribute.Agility,
        "strengths":["REGENERATION"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Kez"],
        "attribute":Attribute.Agility,
        "strengths":["INVISIBILITY","BLINKING"],
        "weaknesses":["TRUE SIGHT","ROOT","CATCH"]
    },
    {
        "names":["Lone_Druid"],
        "attribute":Attribute.Agility,
        "strengths":["ROOT"],
        "weaknesses":[]
    },
    {
        "names":["Luna"],
        "attribute":Attribute.Agility,
        "strengths":["AOE"],
        "weaknesses":[]
    },
    {
        "names":["Medusa"],
        "attribute":Attribute.Agility,
        "strengths":["AOE","ROOT"],
        "weaknesses":[]
    },
    {
        "names":["Meepo"],
        "attribute":Attribute.Agility,
        "strengths":["SWARM","ROOT","REGENERATION"],
        "weaknesses":["AOE","ANTI HEAL"]
    },
    {
        "names":["Mirana"],
        "attribute":Attribute.Agility,
        "strengths":["BLINKING","CATCH"],
        "weaknesses":["ROOT","CATCH"]
    },
    {
        "names":["Monkey_King","MK"],
        "attribute":Attribute.Agility,
        "strengths":["BLINKING","REGENERATION","CATCH"],
        "weaknesses":["ANTI HEAL","ROOT","CATCH"]
    },
    {
        "names":["Morphling"],
        "attribute":Attribute.Agility,
        "strengths":["BLINKING","REGENERATION","CATCH"],
        "weaknesses":["ROOT","CATCH","ANTI HEAL"]
    },
    {
        "names":["Naga_Siren"],
        "attribute":Attribute.Agility,
        "strengths":["ROOT","SWARM"],
        "weaknesses":["AOE"]
    },
    {
        "names":["Nyx_Assassin"],
        "attribute":Attribute.Universal,
        "strengths":["INVISIBILITY","CATCH"],
        "weaknesses":["TRUE SIGHT"]
    },
    {
        "names":["Phantom_Assassin"],
        "attribute":Attribute.Agility,
        "strengths":["BLINKING","PASSIVE"],
        "weaknesses":["ROOT","CATCH","BREAK"]
    },
    {
        "names":["Phantom_Lancer","PL"],
        "attribute":Attribute.Agility,
        "strengths":["SWARM","FAST","BLINKING"],
        "weaknesses":["AOE","CATCH","ROOT"]
    },
    {
        "names":["Razor"],
        "attribute":Attribute.Agility,
        "strengths":["SLOW"],
        "weaknesses":[]
    },
    {
        "names":["Riki"],
        "attribute":Attribute.Agility,
        "strengths":["INVISIBILITY","BLINKING"],
        "weaknesses":["ROOT","CATCH","TRUE SIGHT"]
    },
    {
        "names":["Shadow_Fiend","SF","Nevermore"],
        "attribute":Attribute.Agility,
        "strengths":[],
        "weaknesses":[]
    },
    {
        "names":["Slark"],
        "attribute":Attribute.Agility,
        "strengths":["BLINKING","REGENERATION","ROOT"],
        "weaknesses":["ROOT","ANTI HEAL","CATCH"]
    },
    {
        "names":["Sniper","Kardel"],
        "attribute":Attribute.Agility,
        "strengths":["SLOW"],
        "weaknesses":[]
    },
    {
        "names":["Spectre"],
        "attribute":Attribute.Universal,
        "strengths":["SLOW","PASSIVE"],
        "weaknesses":["BREAK"]
    },
    {
        "names":["Templar_Assassin","TA"],
        "attribute":Attribute.Agility,
        "strengths":["INVISIBILITY","SLOW"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Terrorblade","TB"],
        "attribute":Attribute.Agility,
        "strengths":["SWARM"],
        "weaknesses":["AOE","ANTI HEAL"]
    },
    {
        "names":["Troll_Warlord"],
        "attribute":Attribute.Agility,
        "strengths":["SLOW","REGENERATION","FAST"],
        "weaknesses":["ANTI HEAL","SLOW","ROOT","CATCH"]
    },
    {
        "names":["Ursa"],
        "attribute":Attribute.Agility,
        "strengths":["SLOW","FAST"],
        "weaknesses":["ROOT","SLOW","CATCH"]
    },
    {
        "names":["Vengeful_Spirit","VS"],
        "attribute":Attribute.Agility,
        "strengths":["CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Viper"],
        "attribute":Attribute.Agility,
        "strengths":["BREAK","SLOW"],
        "weaknesses":[]
    },
    {
        "names":["Weaver"],
        "attribute":Attribute.Agility,
        "strengths":["INVISIBILITY","FAST"],
        "weaknesses":["ROOT","CATCH"]
    },
    {
        "names":["Ancient_Apparition","AA"],
        "attribute":Attribute.Intelligence,
        "strengths":["SLOW","ANTI HEAL"],
        "weaknesses":[]
    },
    {
        "names":["Chen"],
        "attribute":Attribute.Intelligence,
        "strengths":["REGENERATION"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Crystal_Maiden","CM"],
        "attribute":Attribute.Intelligence,
        "strengths":["ROOT"],
        "weaknesses":[]
    },
    {
        "names":["Dark_Seer","DS"],
        "attribute":Attribute.Intelligence,
        "strengths":["FAST"],
        "weaknesses":["ROOT","CATCH"]
    },
    {
        "names":["Dark_Willow"],
        "attribute":Attribute.Intelligence,
        "strengths":["CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Disruptor"],
        "attribute":Attribute.Intelligence,
        "strengths":["CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Enchantress"],
        "attribute":Attribute.Intelligence,
        "strengths":["SLOW","REGENERATION","PASSIVE"],
        "weaknesses":["ANTI HEAL","BREAK"]
    },
    {
        "names":["Grimstroke"],
        "attribute":Attribute.Intelligence,
        "strengths":["ROOT"],
        "weaknesses":[]
    },
    {
        "names":["Invoker","Carl"],
        "attribute":Attribute.Intelligence,
        "strengths":["CATCH","INVISIBILITY","FAST","AOE"],
        "weaknesses":["TRUE SIGHT","SLOW","CATCH"]
    },
    {
        "names":["Jakiro"],
        "attribute":Attribute.Intelligence,
        "strengths":["CATCH","AOE"],
        "weaknesses":[]
    },
    {
        "names":["Keeper_of_the_Light","KOTL"],
        "attribute":Attribute.Intelligence,
        "strengths":["SLOW"],
        "weaknesses":[]
    },
    {
        "names":["Leshrac"],
        "attribute":Attribute.Intelligence,
        "strengths":["CATCH","SLOW","AOE"],
        "weaknesses":[]
    },
    {
        "names":["Lich"],
        "attribute":Attribute.Intelligence,
        "strengths":["CATCH","SLOW"],
        "weaknesses":[]
    },
    {
        "names":["Lina"],
        "attribute":Attribute.Intelligence,
        "strengths":["CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Lion"],
        "attribute":Attribute.Intelligence,
        "strengths":["CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Muerta"],
        "attribute":Attribute.Intelligence,
        "strengths":["SLOW"],
        "weaknesses":[]
    },
    {
        "names":["Necrophos"],
        "attribute":Attribute.Intelligence,
        "strengths":["REGENERATION"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Oracle"],
        "attribute":Attribute.Intelligence,
        "strengths":["REGENERATION","ROOT"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Outworld_Destroyer","OD"],
        "attribute":Attribute.Intelligence,
        "strengths":["CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Puck"],
        "attribute":Attribute.Intelligence,
        "strengths":["ROOT","BLINKING"],
        "weaknesses":["ROOT","CATCH"]
    },
    {
        "names":["Pugna"],
        "attribute":Attribute.Intelligence,
        "strengths":["SLOW","REGENERATION"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Queen_of_Pain","QOP"],
        "attribute":Attribute.Intelligence,
        "strengths":["BLINKING"],
        "weaknesses":["ROOT","CATCH"]
    },
    {
        "names":["Ringmaster"],
        "attribute":Attribute.Intelligence,
        "strengths":[],
        "weaknesses":[]
    },
    {
        "names":["Rubick"],
        "attribute":Attribute.Intelligence,
        "strengths":["CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Shadow_Demon","SD"],
        "attribute":Attribute.Intelligence,
        "strengths":["SLOW","ROOT"],
        "weaknesses":[]
    },
    {
        "names":["Shadow_Shaman","SS"],
        "attribute":Attribute.Intelligence,
        "strengths":["CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Silencer"],
        "attribute":Attribute.Intelligence,
        "strengths":["SLOW"],
        "weaknesses":[]
    },
    {
        "names":["Skywrath_Mage"],
        "attribute":Attribute.Intelligence,
        "strengths":["SLOW"],
        "weaknesses":[]
    },
    {
        "names":["Storm_Spirit"],
        "attribute":Attribute.Intelligence,
        "strengths":["BLINKING"],
        "weaknesses":["ROOT","CATCH"]
    },
    {
        "names":["Tinker"],
        "attribute":Attribute.Intelligence,
        "strengths":["ROOT"],
        "weaknesses":[]
    },
    {
        "names":["Warlock"],
        "attribute":Attribute.Intelligence,
        "strengths":["SLOW"],
        "weaknesses":[]
    },
    {
        "names":["Winter_Wyvern","WW"],
        "attribute":Attribute.Intelligence,
        "strengths":["REGENERATION","SLOW"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Witch_Doctor","WD"],
        "attribute":Attribute.Intelligence,
        "strengths":["CATCH","REGENERATION"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Zeus"],
        "attribute":Attribute.Intelligence,
        "strengths":["BLINKING"],
        "weaknesses":["ROOT"]
    },
    {
        "names":["Arc_Warden"],
        "attribute":Attribute.Universal,
        "strengths":["SLOW"],
        "weaknesses":[]
    },
    {
        "names":["Bane"],
        "attribute":Attribute.Universal,
        "strengths":["CATCH","REGENERATION"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Batrider"],
        "attribute":Attribute.Universal,
        "strengths":["SLOW","CATCH","BLINKING"],
        "weaknesses":["ROOT","CATCH"]
    },
    {
        "names":["Beastmaster"],
        "attribute":Attribute.Universal,
        "strengths":[],
        "weaknesses":[]
    },
    {
        "names":["Brewmaster"],
        "attribute":Attribute.Universal,
        "strengths":[],
        "weaknesses":[]
    },
    {
        "names":["Dazzle"],
        "attribute":Attribute.Universal,
        "strengths":["REGENERATION","SLOW"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Death_Prophet","DP"],
        "attribute":Attribute.Universal,
        "strengths":["REGENERATION","SLOW","AOE"],
        "weaknesses":["ANTI HEAL"]
    },
    {
        "names":["Enigma"],
        "attribute":Attribute.Universal,
        "strengths":["CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Io"],
        "attribute":Attribute.Universal,
        "strengths":["REGENERATION","BLINKING"],
        "weaknesses":["ANTI HEAL","ROOT"]
    },
    {
        "names":["Magnus"],
        "attribute":Attribute.Universal,
        "strengths":["BLINKING"],
        "weaknesses":["ROOT"]
    },
    {
        "names":["Marci"],
        "attribute":Attribute.Universal,
        "strengths":["BLINKING"],
        "weaknesses":["ROOT"]
    },
    {
        "names":["Nature's_Prophet","NP"],
        "attribute":Attribute.Universal,
        "strengths":[],
        "weaknesses":[]
    },
    {
        "names":["Pangolier"],
        "attribute":Attribute.Universal,
        "strengths":[],
        "weaknesses":[]
    },
    {
        "names":["Sand_King","SK"],
        "attribute":Attribute.Universal,
        "strengths":["CATCH"],
        "weaknesses":[]
    },
    {
        "names":["Snapfire"],
        "attribute":Attribute.Universal,
        "strengths":[],
        "weaknesses":[]
    },
    {
        "names":["Techies"],
        "attribute":Attribute.Universal,
        "strengths":[],
        "weaknesses":[]
    },
    {
        "names":["Venomancer"],
        "attribute":Attribute.Universal,
        "strengths":["SLOW"],
        "weaknesses":[]
    },
    {
        "names":["Visage"],
        "attribute":Attribute.Universal,
        "strengths":[],
        "weaknesses":[]
    },
    {
        "names":["Void_Spirit"],
        "attribute":Attribute.Universal,
        "strengths":["BLINKING"],
        "weaknesses":["ROOT","CATCH"]
    },
    {
        "names":["Windranger","WR"],
        "attribute":Attribute.Universal,
        "strengths":["CATCH","FAST"],
        "weaknesses":["ROOT","CATCH"]
    }
]