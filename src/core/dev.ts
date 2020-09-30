import Creature from './Creature';
import classes from './classes';
import races from './races';

// const Player = new Creature({
//   name: 'Opposax',
//   level: 13,
//   strength: 12,
//   constitution: 20,
//   dexterity: 13,
//   inteligence: 15,
//   wisdom: 20,
//   charisma: 13,
//   skillsTraining: {
//     endurance: true,
//     history: true,
//     nature: true,
//     perception: true
//   }, 
//   actionPoints: 1,
//   alignment: "Non aligné",
//   class: classes.shaman,
//   race: races.deva,
// });

const Player = new Creature({
  name: 'Khel',
  level: 13,
  strength: 20,
  constitution: 19,
  dexterity: 13,
  inteligence: 12,
  wisdom: 14,
  charisma: 18,
  skillsTraining: {
    diplomacy: true,
    endurance: true,
    intimidate: true,
    religion: true,
  }, 
  actionPoints: 1,
  alignment: "Non aligné",
  class: classes.paladin,
  race: races.drakeide,
  misc: {
    defences: {
      armorClass: 4,
      fortitude: 3,
      refelex: 3,
      will: 3,
    },
    skills: {
      acrobatics: 5,
      athletics: 5,
      bluff: 1,
      diplomacy: 1,
      perception: 1,
    }
  }
});

console.log(`Nom: ${Player.name}`);
console.log(`Niveau: ${Player.level}`);
console.log(`---INITIATIVE---`);
console.log(`Initiative: ${Player.initative}`);
console.log(`DEX: ${Player.dexterityModifier}`);
console.log(`1/2niv.: ${Player.halfLevel}`);
console.log(`---CARACTERISTIQUES---`);
console.log(`FOR: ${Player.strength} (mod: ${Player.strengthModifier} | mod + 1/2niv.: ${Player.strengthModifierAndHalfLevel})`);
console.log(`CON: ${Player.constitution} (mod: ${Player.constitutionModifier} | mod + 1/2niv.: ${Player.constitutionModifierAndHalfLevel})`);
console.log(`DEX: ${Player.dexterity} (mod: ${Player.dexterityModifier} | mod + 1/2niv.: ${Player.dexterityModifierAndHalfLevel})`);
console.log(`INT: ${Player.inteligence} (mod: ${Player.inteligenceModifier} | mod + 1/2niv.: ${Player.inteligenceModifierAndHalfLevel})`);
console.log(`SAG: ${Player.wisdom} (mod: ${Player.wisdomModifier} | mod + 1/2niv.: ${Player.wisdomModifierAndHalfLevel})`);
console.log(`CHA: ${Player.charisma} (mod: ${Player.charismaModifier} | mod + 1/2niv.: ${Player.charismaModifierAndHalfLevel})`);
console.log(`---DÉFENCES---`);
console.log(`CA: ${Player.armorClass} (10 + 1/2niv.: ${10 + Player.halfLevel} | carac: ${Player.dexterityModifier > Player.inteligenceModifier ? Player.dexterityModifier : Player.inteligenceModifier })`);
console.log(`VIG: ${Player.fortitude} (10 + 1/2niv.: ${10 + Player.halfLevel} | carac: ${Player.strengthModifier > Player.constitutionModifier ? Player.strengthModifier : Player.constitutionModifier })`);
console.log(`RÉF: ${Player.reflex} (10 + 1/2niv.: ${10 + Player.halfLevel} | carac: ${Player.dexterityModifier > Player.inteligenceModifier ? Player.dexterityModifier : Player.inteligenceModifier })`);
console.log(`VOL: ${Player.will} (10 + 1/2niv.: ${10 + Player.halfLevel} | carac: ${Player.wisdomModifier > Player.charismaModifier ? Player.wisdomModifier : Player.charismaModifier })`);
console.log(`---COMPÉTENCES---`);
console.log(`Acrobaties: ${Player.acrobatics} (mod carac + 1/2niv.: ${Player.dexterityModifierAndHalfLevel} | form : ${Player.acrobaticsTraining ? '[x]' : '[ ]'})`);
console.log(`Arcanes: ${Player.arcana} (mod carac + 1/2niv.: ${Player.inteligenceModifierAndHalfLevel} | form : ${Player.arcanaTraining ? '[x]' : '[ ]'})`);
console.log(`Athlétisme: ${Player.athletics} (mod carac + 1/2niv.: ${Player.strengthModifierAndHalfLevel} | form : ${Player.athleticsTraining ? '[x]' : '[ ]'})`);
console.log(`Bluff: ${Player.bluff} (mod carac + 1/2niv.: ${Player.charismaModifierAndHalfLevel} | form : ${Player.bluffTraining ? '[x]' : '[ ]'})`);
console.log(`Connais. de la rue: ${Player.streetwise} (mod carac + 1/2niv.: ${Player.charismaModifierAndHalfLevel} | form : ${Player.streetwiseTraining ? '[x]' : '[ ]'})`);
console.log(`Diplomatie: ${Player.diplomacy} (mod carac + 1/2niv.: ${Player.charismaModifierAndHalfLevel} | form : ${Player.diplomacyTraining ? '[x]' : '[ ]'})`);
console.log(`Discretion: ${Player.stealth} (mod carac + 1/2niv.: ${Player.dexterityModifierAndHalfLevel} | form : ${Player.stealthTraining ? '[x]' : '[ ]'})`);
console.log(`Endurance: ${Player.endurance} (mod carac + 1/2niv.: ${Player.constitutionModifierAndHalfLevel} | form : ${Player.enduranceTraining ? '[x]' : '[ ]'})`);
console.log(`Exploration: ${Player.dungeoneering} (mod carac + 1/2niv.: ${Player.wisdomModifierAndHalfLevel} | form : ${Player.dungeoneeringTraining ? '[x]' : '[ ]'})`);
console.log(`Histoire: ${Player.history} (mod carac + 1/2niv.: ${Player.inteligenceModifierAndHalfLevel} | form : ${Player.historyTraining ? '[x]' : '[ ]'})`);
console.log(`Intuition: ${Player.insight} (mod carac + 1/2niv.: ${Player.wisdomModifierAndHalfLevel} | form : ${Player.insightTraining ? '[x]' : '[ ]'})`);
console.log(`Intimidation: ${Player.intimidate} (mod carac + 1/2niv.: ${Player.charismaModifierAndHalfLevel} | form : ${Player.intimidateTraining ? '[x]' : '[ ]'})`);
console.log(`Larcin: ${Player.thievery} (mod carac + 1/2niv.: ${Player.dexterityModifierAndHalfLevel} | form : ${Player.thieveryTraining ? '[x]' : '[ ]'})`);
console.log(`Nature: ${Player.nature} (mod carac + 1/2niv.: ${Player.wisdomModifierAndHalfLevel} | form : ${Player.natureTraining ? '[x]' : '[ ]'})`);
console.log(`Perception: ${Player.perception} (mod carac + 1/2niv.: ${Player.wisdomModifierAndHalfLevel} | form : ${Player.perceptionTraining ? '[x]' : '[ ]'})`);
console.log(`Religion: ${Player.religion} (mod carac + 1/2niv.: ${Player.inteligenceModifierAndHalfLevel} | form : ${Player.religionTraining ? '[x]' : '[ ]'})`);
console.log(`Soins: ${Player.heal} (mod carac + 1/2niv.: ${Player.wisdomModifierAndHalfLevel} | form : ${Player.healTraining ? '[x]' : '[ ]'})`);
console.log(`---POINTS DE VIE---`);
console.log(`PV MAX: ${Player.maxHeathPoints}`);
console.log(`PÉRIL: ${Player.bloodied}`);
console.log(`VALEUR DE RÉCUP: ${Player.srugeValue}`);
console.log(`RÉCUP/JOUR: ${Player.surgePerDay}`);
console.log(`---POINT D'ACTION---`);
console.log(`Points d'action: ${Player.actionPoints}`);
console.log(`--DÉPLACEMENT--`);
console.log(`VD: ${Player.speed}`);
console.log(`--SENS--`);
console.log(`Intuition passive: ${Player.passiveInsight} (10 + ${Player.insight})`);
console.log(`Perception passive: ${Player.passivePerception} (10 + ${Player.perception})`);
