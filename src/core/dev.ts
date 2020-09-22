import Creature from './Creature';
import classes from './classes';

const Opposax = new Creature({
  name: 'Opposax',
  level: 13,
  strength: 12,
  constitution: 20,
  dexterity: 13,
  inteligence: 15,
  wisdom: 20,
  charisma: 13,
  skillsTraining: {
    endurance: true,
    history: true,
    nature: true,
    perception: true
  }, 
  actionPoints: 1,
  alignment: "Non aligné",
  class: classes.shaman,
});

console.log(`Nom: ${Opposax.name}`);
console.log(`Niveau: ${Opposax.level}`);
console.log(`---INITIATIVE---`);
console.log(`Initiative: ${Opposax.initative}`);
console.log(`DEX: ${Opposax.dexterityModifier}`);
console.log(`1/2niv.: ${Opposax.halfLevel}`);
console.log(`---CARACTERISTIQUES---`);
console.log(`FOR: ${Opposax.strength} (mod: ${Opposax.strengthModifier} | mod + 1/2niv.: ${Opposax.strengthModifierAndHalfLevel})`);
console.log(`CON: ${Opposax.constitution} (mod: ${Opposax.constitutionModifier} | mod + 1/2niv.: ${Opposax.constitutionModifierAndHalfLevel})`);
console.log(`DEX: ${Opposax.dexterity} (mod: ${Opposax.dexterityModifier} | mod + 1/2niv.: ${Opposax.dexterityModifierAndHalfLevel})`);
console.log(`INT: ${Opposax.inteligence} (mod: ${Opposax.inteligenceModifier} | mod + 1/2niv.: ${Opposax.inteligenceModifierAndHalfLevel})`);
console.log(`SAG: ${Opposax.wisdom} (mod: ${Opposax.wisdomModifier} | mod + 1/2niv.: ${Opposax.wisdomModifierAndHalfLevel})`);
console.log(`CHA: ${Opposax.charisma} (mod: ${Opposax.charismaModifier} | mod + 1/2niv.: ${Opposax.charismaModifierAndHalfLevel})`);
console.log(`---DÉFENCES---`);
console.log(`CA: ${Opposax.armorClass} (10 + 1/2niv.: ${10 + Opposax.halfLevel} | carac: ${Opposax.dexterityModifier > Opposax.inteligenceModifier ? Opposax.dexterityModifier : Opposax.inteligenceModifier })`);
console.log(`VIG: ${Opposax.fortitude} (10 + 1/2niv.: ${10 + Opposax.halfLevel} | carac: ${Opposax.strengthModifier > Opposax.constitutionModifier ? Opposax.strengthModifier : Opposax.constitutionModifier })`);
console.log(`RÉF: ${Opposax.reflex} (10 + 1/2niv.: ${10 + Opposax.halfLevel} | carac: ${Opposax.dexterityModifier > Opposax.inteligenceModifier ? Opposax.dexterityModifier : Opposax.inteligenceModifier })`);
console.log(`VOL: ${Opposax.will} (10 + 1/2niv.: ${10 + Opposax.halfLevel} | carac: ${Opposax.wisdomModifier > Opposax.charismaModifier ? Opposax.wisdomModifier : Opposax.charismaModifier })`);
console.log(`---COMPÉTENCES---`);
console.log(`Acrobaties: ${Opposax.acrobatics} (mod carac + 1/2niv.: ${Opposax.dexterityModifierAndHalfLevel} | form : ${Opposax.acrobaticsTraining ? '[x]' : '[ ]'})`);
console.log(`Arcanes: ${Opposax.arcana} (mod carac + 1/2niv.: ${Opposax.inteligenceModifierAndHalfLevel} | form : ${Opposax.arcanaTraining ? '[x]' : '[ ]'})`);
console.log(`Athlétisme: ${Opposax.athletics} (mod carac + 1/2niv.: ${Opposax.strengthModifierAndHalfLevel} | form : ${Opposax.athleticsTraining ? '[x]' : '[ ]'})`);
console.log(`Bluff: ${Opposax.bluff} (mod carac + 1/2niv.: ${Opposax.charismaModifierAndHalfLevel} | form : ${Opposax.bluffTraining ? '[x]' : '[ ]'})`);
console.log(`Connais. de la rue: ${Opposax.streetwise} (mod carac + 1/2niv.: ${Opposax.charismaModifierAndHalfLevel} | form : ${Opposax.streetwiseTraining ? '[x]' : '[ ]'})`);
console.log(`Diplomatie: ${Opposax.diplomacy} (mod carac + 1/2niv.: ${Opposax.charismaModifierAndHalfLevel} | form : ${Opposax.diplomacyTraining ? '[x]' : '[ ]'})`);
console.log(`Discretion: ${Opposax.stealth} (mod carac + 1/2niv.: ${Opposax.dexterityModifierAndHalfLevel} | form : ${Opposax.stealthTraining ? '[x]' : '[ ]'})`);
console.log(`Endurance: ${Opposax.endurance} (mod carac + 1/2niv.: ${Opposax.constitutionModifierAndHalfLevel} | form : ${Opposax.enduranceTraining ? '[x]' : '[ ]'})`);
console.log(`Exploration: ${Opposax.dungeoneering} (mod carac + 1/2niv.: ${Opposax.wisdomModifierAndHalfLevel} | form : ${Opposax.dungeoneeringTraining ? '[x]' : '[ ]'})`);
console.log(`Histoire: ${Opposax.history} (mod carac + 1/2niv.: ${Opposax.inteligenceModifierAndHalfLevel} | form : ${Opposax.historyTraining ? '[x]' : '[ ]'})`);
console.log(`Intuition: ${Opposax.insight} (mod carac + 1/2niv.: ${Opposax.wisdomModifierAndHalfLevel} | form : ${Opposax.insightTraining ? '[x]' : '[ ]'})`);
console.log(`Intimidation: ${Opposax.intimidate} (mod carac + 1/2niv.: ${Opposax.charismaModifierAndHalfLevel} | form : ${Opposax.intimidateTraining ? '[x]' : '[ ]'})`);
console.log(`Larcin: ${Opposax.thievery} (mod carac + 1/2niv.: ${Opposax.dexterityModifierAndHalfLevel} | form : ${Opposax.thieveryTraining ? '[x]' : '[ ]'})`);
console.log(`Nature: ${Opposax.nature} (mod carac + 1/2niv.: ${Opposax.wisdomModifierAndHalfLevel} | form : ${Opposax.natureTraining ? '[x]' : '[ ]'})`);
console.log(`Perception: ${Opposax.perception} (mod carac + 1/2niv.: ${Opposax.wisdomModifierAndHalfLevel} | form : ${Opposax.perceptionTraining ? '[x]' : '[ ]'})`);
console.log(`Religion: ${Opposax.religion} (mod carac + 1/2niv.: ${Opposax.inteligenceModifierAndHalfLevel} | form : ${Opposax.religionTraining ? '[x]' : '[ ]'})`);
console.log(`Soins: ${Opposax.heal} (mod carac + 1/2niv.: ${Opposax.wisdomModifierAndHalfLevel} | form : ${Opposax.healTraining ? '[x]' : '[ ]'})`);
console.log(`---HIT POINTS---`);
console.log(`PV MAX: ${Opposax.maxHeathPoints}`);
console.log(`PÉRIL: ${Opposax.bloodied}`);
console.log(`VALEUR DE RÉCUP: ${Opposax.srugeValue}`);
console.log(`RÉCUP/JOUR: ${Opposax.surgePerDay}`);
