import Creature from './Creature';

const Opposax = new Creature({
  name: 'Opposax',
  maxHeath: 60,
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
});

console.log(`Nom: ${Opposax.getName()}`);
console.log(`Niveau: ${Opposax.getLevel()}`);
console.log(`---INITIATIVE---`);
console.log(`Initiative: ${Opposax.getInitative()}`);
console.log(`DEX: ${Opposax.getDexterityModifier()}`);
console.log(`1/2niv.: ${Opposax.getHalfLevel()}`);
console.log(`---CARACTERISTIQUES---`);
console.log(`FOR: ${Opposax.getStrenth()} (mod: ${Opposax.getStrenthModifier()} | mod + 1/2niv.: ${Opposax.getStrenthModifierAndHalfLevel()})`);
console.log(`CON: ${Opposax.getConstitution()} (mod: ${Opposax.getConstitutionModifier()} | mod + 1/2niv.: ${Opposax.getConstitutionModifierAndHalfLevel()})`);
console.log(`DEX: ${Opposax.getDexterity()} (mod: ${Opposax.getDexterityModifier()} | mod + 1/2niv.: ${Opposax.getDexterityModifierAndHalfLevel()})`);
console.log(`INT: ${Opposax.getInteligence()} (mod: ${Opposax.getInteligenceModifier()} | mod + 1/2niv.: ${Opposax.getInteligenceModifierAndHalfLevel()})`);
console.log(`SAG: ${Opposax.getWisdom()} (mod: ${Opposax.getWisdomModifier()} | mod + 1/2niv.: ${Opposax.getWisdomModifierAndHalfLevel()})`);
console.log(`CHA: ${Opposax.getCharisma()} (mod: ${Opposax.getCharismaModifier()} | mod + 1/2niv.: ${Opposax.getCharismaModifierAndHalfLevel()})`);
console.log(`---DÉFENCES---`);
console.log(`CA: ${Opposax.getArmorClass()} (10 + 1/2niv.: ${10 + Opposax.getHalfLevel()} | carac: ${Opposax.getDexterityModifier() > Opposax.getInteligenceModifier() ? Opposax.getDexterityModifier() : Opposax.getInteligenceModifier() })`);
console.log(`VIG: ${Opposax.getFortitude()} (10 + 1/2niv.: ${10 + Opposax.getHalfLevel()} | carac: ${Opposax.getStrenthModifier() > Opposax.getConstitutionModifier() ? Opposax.getStrenthModifier() : Opposax.getConstitutionModifier() })`);
console.log(`RÉF: ${Opposax.getReflex()} (10 + 1/2niv.: ${10 + Opposax.getHalfLevel()} | carac: ${Opposax.getDexterityModifier() > Opposax.getInteligenceModifier() ? Opposax.getDexterityModifier() : Opposax.getInteligenceModifier() })`);
console.log(`VOL: ${Opposax.getWill()} (10 + 1/2niv.: ${10 + Opposax.getHalfLevel()} | carac: ${Opposax.getWisdomModifier() > Opposax.getCharismaModifier() ? Opposax.getWisdomModifier() : Opposax.getCharismaModifier() })`);
console.log(`---COMPÉTENCES---`);
console.log(`Acrobaties: ${Opposax.getAcrobatics()} (mod carac + 1/2niv.: ${Opposax.getDexterityModifierAndHalfLevel()} | form : )`);
console.log(`Arcanes: ${Opposax.getArcana()} (mod carac + 1/2niv.: ${Opposax.getInteligenceModifierAndHalfLevel()} | form : )`);
console.log(`Athlétisme: ${Opposax.getAthletics()} (mod carac + 1/2niv.: ${Opposax.getStrenthModifierAndHalfLevel()} | form : )`);
console.log(`Bluff: ${Opposax.getBluff()} (mod carac + 1/2niv.: ${Opposax.getCharismaModifierAndHalfLevel()} | form : )`);
console.log(`Connais. de la rue: ${Opposax.getStreetwise()} (mod carac + 1/2niv.: ${Opposax.getCharismaModifierAndHalfLevel()} | form : )`);
console.log(`Diplomatie: ${Opposax.getDiplomacy()} (mod carac + 1/2niv.: ${Opposax.getCharismaModifierAndHalfLevel()} | form : )`);
console.log(`Discretion: ${Opposax.getStealth()} (mod carac + 1/2niv.: ${Opposax.getDexterityModifierAndHalfLevel()} | form : )`);
console.log(`Endurance: ${Opposax.getEndurance()} (mod carac + 1/2niv.: ${Opposax.getConstitutionModifierAndHalfLevel()} | form : )`);
console.log(`Exploration: ${Opposax.getDungeoneering()} (mod carac + 1/2niv.: ${Opposax.getWisdomModifierAndHalfLevel()} | form : )`);
console.log(`Histoire: ${Opposax.getHistory()} (mod carac + 1/2niv.: ${Opposax.getInteligenceModifierAndHalfLevel()} | form : )`);
console.log(`Intuition: ${Opposax.getInsight()} (mod carac + 1/2niv.: ${Opposax.getWisdomModifierAndHalfLevel()} | form : )`);
console.log(`Intimidation: ${Opposax.getIntimidate()} (mod carac + 1/2niv.: ${Opposax.getCharismaModifierAndHalfLevel()} | form : )`);
console.log(`Larcin: ${Opposax.getThievery()} (mod carac + 1/2niv.: ${Opposax.getDexterityModifierAndHalfLevel()} | form : )`);
console.log(`Nature: ${Opposax.getNature()} (mod carac + 1/2niv.: ${Opposax.getWisdomModifierAndHalfLevel()} | form : )`);
console.log(`Perception: ${Opposax.getPerception()} (mod carac + 1/2niv.: ${Opposax.getWisdomModifierAndHalfLevel()} | form : )`);
console.log(`Religion: ${Opposax.getReligion()} (mod carac + 1/2niv.: ${Opposax.getInteligenceModifierAndHalfLevel()} | form : )`);
console.log(`Soins: ${Opposax.getHeal()} (mod carac + 1/2niv.: ${Opposax.getWisdomModifierAndHalfLevel()} | form : )`);
