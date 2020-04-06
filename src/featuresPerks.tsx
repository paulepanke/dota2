export const species = [
  'Dragon',
  'Elf',
  'Undead',
  'Orc',
  'Goblin',
  'Element',
  'Human',
  'Naga',
  'Satyr',
  'Troll',
  'Beast',
  'God',
  'Demon',
];

export const featuresPerks = {
  Dragon: {
    3: 'All friendly dragons have 100 mana when battle starts.',
    5: 'All allied pieces with no actice class perks start the battle with 100 mana.',
  },
  Elf: {
    3: 'Evasion increased by 20% for all friendly elfs.',
    6: 'Evasion increased by 20% for all allies.',
    9: 'Evasion increased by 45% for all allies.',
  },
  Undead: {
    2: 'Armor decreased by 4 for all enemies.',
    4: 'Armor decreased by 4 for all enemies.',
    6: 'Armor decreased by 6 for all enemies.',
  },
  Orc: {
    2: 'Max HP increased by 100 for all allies.',
    4: 'Max HP increased by 300 for all allies.',
    6: 'Max HP increased by 7xof your lost HP.',
  },
  Goblin: {
    3: 'increases Armor by 15 and hp regeneration by 20 for a random ally.',
    6: 'increases Armor by 15 and hp regeneration by 20 for all allies.',
  },
  Element: {
    2: 'All friendly elements have 30% chance to turn attacker into stone for 3s when attacked by melee chesses.',
    4: 'All allies have 30% chance to turn attacker into stone for 4s when attacked by melee chesses.',
  },
  Human: {
    3: 'Grants a Tome of Knowledge that can add 2 XP to your courier when winning a home battle with at least one Human surviving',
    3: 'Grants 3 Tome of Knowledge that can add 2 XP to your courier when winning a home battle with at least one Human surviving',
  },
  Naga: {
    2: 'Magic resistance increased by 35 for all allies.',
    4: 'Magic resistance increased by 45 for all allies.',
  },
  //Satyr: {
  //  1: "Hides your bench from other players' vision when there are Satyrs in your waiting bench. Hides your pieces on the chess board until the battle begins if you have a Satyr on the board.",
  //},
  Troll: {
    2: 'Attack speed increased by 35 for all friendly trolls.',
    4: 'Attack speed increased by 30 for all allies.',
    6: 'All allies gain 10 attack speed for each successful attack - up to 20 stacks.',
  },
  Beast: {
    2: 'Attack damage increased by 15% for all allies.',
    4: 'Attack damage increased by 25% for all allies.',
     6: 'Attack damage increased by 40% for all allies.',
  },
  God: {
    2: 'All allies with no active species traits have -50% ability cooldown.',
    4: 'All allies with no active species traits have an additional -50% ability cooldown.',
  },
  Demon: {
    1: 'Deal 50% extra pure damage to the target.',
  },
  Assassin: {
    3: 'All friendly assasins have 15% chance to deal 3x damage.',
    6: 'All friendly assasins have 15% chance to deal 4.5x damage.',
    9: 'All friendly assasins have an additional 15% chance to deal 6x damage.',
  },
  Druid: {
    2: 'two ★druids can upgrade to a ★★druid.',
    4: 'two ★★druids can upgrade to a ★★★druid.',
  },
  Hunter: {
    3: 'All friendly hunters have +25 base attack damage, and have +40% chance to pierce through evasion.',
    6: 'All friendly hunters have +35 base attack damage and +60% chance to pierce through evasion.',
    9: 'All friendly hunters have +55 base attack damage and +100% chance to pierce through evasion.',
  },
  Knight: {
    2: 'All friedly knights have 30% chance to proc a shield and 50 instant heal every 3 seconds, granting 30 armor and 70% magic resist for 3 seconds.',
    4: 'All friedly knights have 25% chance to proc a shield and 100 instant heal every 3 seconds, granting 30 armor and 70% magic resist for 3 seconds.',
    6: 'All allies have 15% chance to proc a shield and 200 instant heal every 3 seconds, granting 30 armor and 70% magic resist for 3 seconds.',
  },
  Mage: {
    3: 'Magic resistance decreased by 33% for all enemies.',
    6: 'Magic resistance decreased by an additional 33% for all enemies.',
    9: 'Magic resistance decreased by an additional 45% for all enemies.',
  },
  Mech: {
    2: 'If at least one friendly Mech survived the home battle, summon an AWESOME invention',
    4: 'Heart of the machine summons a golden AWESOME invention.',
  },
  Priest: {
    1: 'When losing home battle, grants royal jelly shield.',
    2: 'When losing 6 or more HP in a home battle, grants Tango.',
    3: 'When losing 16 or more HP in a home battle, grants Delicious Apple.',
  },
  Shaman: {
    2: 'Hex an enemy for 6s when battle starts.',
    4: 'When friendly shaman dies, transform the killer into a random piece with the same cost and rank.',
  },
  Warlock: {
    2: 'All allies have +15% lifesteal and +15% spell lifesteal.',
    4: 'All allies have an additional +15% lifesteal and +15% spell lifesteal.',
    6: 'All allies have an additional +30% lifesteal and +30% spell lifesteal.',
  },
  Warrior: {
    3: 'Armor increased by 6 for all friendly warriors.',
    6: 'Armor increased by an additional 6 for all friendly warriors.',
    9: 'Armor increased by an additional 6 for all friendly warriors. And reflect pure damage equivalent  to current armor when taking physical and magical damage',
  },
  'Demon Hunter': {
    1: 'Negate enemy demon power.',
    2: 'All friendly demons retain their Fel Power.',
  },
  'Aqir': {
    2: 'Upon the death of any non-Aqir ally, if there is any friendly piece of the same name on the chessboard, summons an Aqir at the same or 1 level higher of the highest level piece.',
    4: 'Upon the death of any Aqir ally, if there is any friendly piece of the same name on the chessboard, summons an Aqir at the same, 1, or 2 levels higher of the highest level piece.',
  },
  'Wizard': {
    2: 'Reduce the number of chess pieces required by 1 for any synergy requiring 4 units or more to be active.',
  },
};
