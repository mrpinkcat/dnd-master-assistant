import { Class } from './classes'

interface CreatureCreationInfo {
  /**
   * **Nom**
   */
  name: string;
  /**
   * **PV max**
   */
  maxHeath: number;
  /**
   * **Niveau**
   */
  level: number;
  /**
   * **Foce**
   */
  strength: number;
  /**
   * **Constitution**
   */
  constitution: number;
  /**
   * **Dexterité**
   */
  dexterity: number;
  /**
   * **Inteligence**
   */
  inteligence: number;
  /**
   * **Sagesse**
   */
  wisdom: number;
  /**
   * **Charisme**
   */
  charisma: number;
  /**
   * **Formation aux compétences**
   * 
   * Détemine si la créature a été formé pour certaines compétences 
   */
  skillsTraining: SkillsTrainingList;
  /**
   * **Points d'action**
   */
  actionPoints: number;
  /**
   * **Alignement**
   * 
   * L'alignement du personnage, ou son absence d'alignement, détermine ses prises de position morales
   */
  alignment: "Bon" | "Loyal bon" | "Mauvais" | "Chaotique mauvais" | "Non aligné";
  /**
   * **Race**
   */
  class: Class;
}

interface SkillsTrainingList {
  acrobatics?: boolean;
  arcana?: boolean;
  athletics?: boolean;
  bluff?: boolean;
  diplomacy?: boolean;
  /**
   * Exploration
   */
  dungeoneering?: boolean;
  endurance?: boolean;
  heal?: boolean;
  history?: boolean;
  /**
   * intution
   */
  insight?: boolean;
  intimidate?: boolean;
  nature?: boolean;
  perception?: boolean;
  religion?: boolean;
  stealth?: boolean;
  /**
   * Connaissance de la rue
   */
  streetwise?: boolean;
  thievery?: boolean;
}

export default class Creature {
  /**
   * Creature unique ID
   */
  private id: number;
  /**
   * Nom de la créature
   */
  private name: string;
  /**
   * PV max
   */
  private maxHeath: number;
  /**
   * Niveau
   */
  private level: number;
  /**
   * Foce
   */
  private strength: number;
  /**
   * Constitution
   */
  private constitution: number;
  /**
   * Dexterité
   */
  private dexterity: number;
  /**
   * Inteligence
   */
  private inteligence: number;
  /**
   * Sagesse
   */
  private wisdom: number;
  /**
   * Charisme
   */
  private charisma: number;
  /**
   * Liste de la formation des capacités (+5)
   */
  private skillsTrainingList: SkillsTrainingList;
  /**
   * **Points d'action**
   */
  actionPoints: number;
  /**
   * **Alignement**
   * 
   * L'alignement du personnage, ou son absence d'alignement, détermine ses prises de position morales
   */
  alignment: "Bon" | "Loyal bon" | "Mauvais" | "Chaotique mauvais" | "Non aligné";

  constructor(creationInfo: CreatureCreationInfo) {
    this.id = 1;
    this.name = creationInfo.name;
    this.maxHeath = creationInfo.maxHeath;
    this.level = creationInfo.level;
    this.strength = creationInfo.strength;
    this.constitution = creationInfo.constitution;
    this.dexterity = creationInfo.dexterity;
    this.inteligence = creationInfo.inteligence;
    this.wisdom = creationInfo.wisdom;
    this.charisma = creationInfo.charisma;
    this.skillsTrainingList = creationInfo.skillsTraining;
    this.actionPoints = creationInfo.actionPoints;
    this.alignment = creationInfo.alignment
  }

  // GETTERS

  // -- GLOBAL INFO

  /**
   * Nom
   */
  getName():string {
    return this.name;
  }

  /**
   * Niveau
   */
  getLevel():number {
    return this.level;
  }

  getHalfLevel():number {
    return Math.floor(this.getLevel() / 2);
  }

  // --- ABILITIES

  /**
   * Force
   */
  getStrenth(): number {
    return this.strength;
  }

  /**
   * Modificateur de force
   */
  getStrenthModifier():number {
    return Math.floor((this.strength - 10) / 2);
  }

  /**
   * Modificateur de force + 1/2 niveau
   */
  getStrenthModifierAndHalfLevel():number {
    return this.getStrenthModifier() + Math.floor(this.getLevel() / 2);
  }

  /**
   * Constitution
   */
  getConstitution():number {
    return this.constitution;
  }

  /**
   * Modificateur de constitution
   */
  getConstitutionModifier():number {
    return Math.floor((this.constitution - 10) / 2);
  }

  /**
   * Modificateur de constitution + 1/2 niveau
   */
  getConstitutionModifierAndHalfLevel():number {
    return this.getConstitutionModifier() + Math.floor(this.getLevel() / 2);
  }

  /**
   * Dexterité
   */
  getDexterity():number {
    return this.dexterity;
  }

  /**
   * Modificateur de dexterité
   */
  getDexterityModifier():number {
    return Math.floor((this.dexterity - 10) / 2);
  }

  /**
   * Modificateur de dexterité + 1/2 niveau
   */
  getDexterityModifierAndHalfLevel():number {
    return this.getDexterityModifier() + Math.floor(this.getLevel() / 2);
  }

  /**
   * Inteligence
   */
  getInteligence():number {
    return this.inteligence;
  }

  /**
   * Modificateur d'inteligence
   */
  getInteligenceModifier():number {
    return Math.floor((this.inteligence - 10) / 2);
  }

  /**
   * Modificateur d'inteligence + 1/2 niveau
   */
  getInteligenceModifierAndHalfLevel():number {
    return this.getInteligenceModifier() + Math.floor(this.getLevel() / 2);
  }

  /**
   * Sagesse
   */
  getWisdom():number {
    return this.wisdom;
  }

  /**
   * Modificateur de sagesse
   */
  getWisdomModifier():number {
    return Math.floor((this.wisdom - 10) / 2);
  }

  /**
   * Modificateur de sagesse + 1/2 niveau
   */
  getWisdomModifierAndHalfLevel():number {
    return this.getWisdomModifier() + Math.floor(this.getLevel() / 2);
  }

  /**
   * Charisme
   */
  getCharisma():number {
    return this.charisma;
  }

  /**
   * Modificateur de charisme
   */
  getCharismaModifier():number {
    return Math.floor((this.charisma - 10) / 2);
  }

  /**
   * Modificateur de charisme + 1/2 niveau
   */
  getCharismaModifierAndHalfLevel():number {
    return this.getCharismaModifier() + Math.floor(this.getLevel() / 2);
  }

  // --- SKILLS

  getAcrobatics():number {
    if (this.skillsTrainingList.acrobatics) {
      return this.getDexterityModifierAndHalfLevel() + 5
    } else {
      return this.getDexterityModifierAndHalfLevel()
    }
  }

  getArcana():number {
    if (this.skillsTrainingList.arcana) {
      return this.getInteligenceModifierAndHalfLevel() + 5
    } else {
      return this.getInteligenceModifierAndHalfLevel()
    }
  }

  getAthletics():number {
    if (this.skillsTrainingList.athletics) {
      return this.getStrenthModifierAndHalfLevel() + 5
    } else {
      return this.getStrenthModifierAndHalfLevel()
    }
  }

  getBluff():number {
    if (this.skillsTrainingList.bluff) {
      return this.getCharismaModifierAndHalfLevel() + 5
    } else {
      return this.getCharismaModifierAndHalfLevel()
    }
  }

  getDiplomacy():number {
    if (this.skillsTrainingList.diplomacy) {
      return this.getCharismaModifierAndHalfLevel() + 5
    } else {
      return this.getCharismaModifierAndHalfLevel()
    }
  }

  /**
   * Exploration
   */
  getDungeoneering():number {
    if (this.skillsTrainingList.dungeoneering) {
      return this.getWisdomModifierAndHalfLevel() + 5
    } else {
      return this.getWisdomModifierAndHalfLevel()
    }
  }

  getEndurance():number {
    if (this.skillsTrainingList.endurance) {
      return this.getConstitutionModifierAndHalfLevel() + 5
    } else {
      return this.getConstitutionModifierAndHalfLevel()
    }
  }

  getHeal():number {
    if (this.skillsTrainingList.heal) {
      return this.getWisdomModifierAndHalfLevel() + 5
    } else {
      return this.getWisdomModifierAndHalfLevel()
    }
  }

  getHistory():number {
    if (this.skillsTrainingList.history) {
      return this.getInteligenceModifierAndHalfLevel() + 5
    } else {
      return this.getInteligenceModifierAndHalfLevel()
    }
  }

  getInsight():number {
    if (this.skillsTrainingList.insight) {
      return this.getWisdomModifierAndHalfLevel() + 5
    } else {
      return this.getWisdomModifierAndHalfLevel()
    }
  }

  getIntimidate():number {
    console.log(`intimidate form ${this.skillsTrainingList.intimidate}`);
    if (this.skillsTrainingList.intimidate) {
      return this.getCharismaModifierAndHalfLevel() + 5
    } else {
      return this.getCharismaModifierAndHalfLevel()
    }
  }

  getNature():number {
    console.log(`nature form ${this.skillsTrainingList.nature}`);
    if (this.skillsTrainingList.nature) {
      return this.getWisdomModifierAndHalfLevel() + 5
    } else {
      return this.getWisdomModifierAndHalfLevel()
    }
  }

  getPerception():number {
    if (this.skillsTrainingList.perception) {
      return this.getInteligenceModifierAndHalfLevel() + 5
    } else {
      return this.getInteligenceModifierAndHalfLevel()
    }
  }

  getReligion():number {
    if (this.skillsTrainingList.religion) {
      return this.getInteligenceModifierAndHalfLevel() + 5
    } else {
      return this.getInteligenceModifierAndHalfLevel()
    }
  }

  getStealth():number {
    if (this.skillsTrainingList.stealth) {
      return this.getDexterityModifierAndHalfLevel() + 5
    } else {
      return this.getDexterityModifierAndHalfLevel()
    }
  }

  getStreetwise():number {
    if (this.skillsTrainingList.streetwise) {
      return this.getCharismaModifierAndHalfLevel() + 5
    } else {
      return this.getCharismaModifierAndHalfLevel()
    }
  }

  getThievery():number {
    if (this.skillsTrainingList.thievery) {
      return this.getDexterityModifierAndHalfLevel() + 5
    } else {
      return this.getDexterityModifierAndHalfLevel()
    }
  }

  // -- INITIATIVE

  /**
   * **Initiative**
   */
  getInitative():number {
    return this.getDexterityModifierAndHalfLevel();
    // TODO rajouter les miscs
  }

  // -- DEFENSES

  // TODO rajouter les modificateur de défences par races et classes

  /**
   * **CA**
   * 
   * Classe d'armure
   */
  getArmorClass():number {
    if (this.getDexterityModifier() > this.getInteligenceModifier()) {
      return 10 + Math.floor(this.getLevel() / 2) + this.getDexterityModifier();
    } else {
      return 10 + Math.floor(this.getLevel() / 2) + this.getInteligenceModifier();
    }
  }

  /**
   * **Vigueur**
   */
  getFortitude():number {
    if (this.getStrenthModifier() > this.getConstitutionModifier()) {
      return 10 + Math.floor(this.getLevel() / 2) + this.getStrenthModifier();
    } else {
      return 10 + Math.floor(this.getLevel() / 2) + this.getConstitutionModifier();
    }
  }

  /**
   * **Réflexe**
   */
  getReflex():number {
    if (this.getDexterityModifier() > this.getInteligenceModifier()) {
      return 10 + Math.floor(this.getLevel() / 2) + this.getDexterityModifier();
    } else {
      return 10 + Math.floor(this.getLevel() / 2) + this.getInteligenceModifier();
    }
  }

  /**
   * **Volonté**
   */
  getWill():number {
    if (this.getWisdomModifier() > this.getCharismaModifier()) {
      return 10 + Math.floor(this.getLevel() / 2) + this.getWisdomModifier();
    } else {
      return 10 + Math.floor(this.getLevel() / 2) + this.getCharismaModifier();
    }
  }

}