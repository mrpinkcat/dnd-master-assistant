import { Class } from './classes'

interface CreatureCreationInfo {
  /**
   * **Nom**
   */
  name: string;
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
  private _id: number;
  /**
   * Nom de la créature
   */
  private _name: string;
  /**
   * Niveau
   */
  private _level: number;
  /**
   * Foce
   */
  private _strength: number;
  /**
   * Constitution
   */
  private _constitution: number;
  /**
   * Dexterité
   */
  private _dexterity: number;
  /**
   * Inteligence
   */
  private _inteligence: number;
  /**
   * Sagesse
   */
  private _wisdom: number;
  /**
   * Charisme
   */
  private _charisma: number;
  /**
   * Liste de la formation des capacités (+5)
   */
  private _skillsTrainingList: SkillsTrainingList;
  /**
   * **Points d'action**
   */
  private _actionPoints: number;
  /**
   * **Alignement**
   * 
   * L'alignement du personnage, ou son absence d'alignement, détermine ses prises de position morales
   */
  private _alignment: "Bon" | "Loyal bon" | "Mauvais" | "Chaotique mauvais" | "Non aligné";
  private _class: Class;

  constructor(creationInfo: CreatureCreationInfo) {
    this._id = 1;
    this._name = creationInfo.name;
    this._level = creationInfo.level;
    this._strength = creationInfo.strength;
    this._constitution = creationInfo.constitution;
    this._dexterity = creationInfo.dexterity;
    this._inteligence = creationInfo.inteligence;
    this._wisdom = creationInfo.wisdom;
    this._charisma = creationInfo.charisma;
    this._skillsTrainingList = creationInfo.skillsTraining;
    this._actionPoints = creationInfo.actionPoints;
    this._alignment = creationInfo.alignment
    this._class = creationInfo.class;
  }

  // GETTERS

  // -- GLOBAL INFO

  /**
   * Nom
   */
  get name():string {
    return this._name;
  }

  /**
   * Niveau
   */
  get level():number {
    return this._level;
  }

  get halfLevel():number {
    return Math.floor(this.level / 2);
  }

  // --- ABILITIES

  /**
   * Force
   */
  get strength(): number {
    return this._strength;
  }

  /**
   * Modificateur de force
   */
  get strengthModifier():number {
    return Math.floor((this.strength - 10) / 2);
  }

  /**
   * Modificateur de force + 1/2 niveau
   */
  get strengthModifierAndHalfLevel():number {
    return this.strengthModifier + Math.floor(this.level / 2);
  }

  /**
   * Constitution
   */
  get constitution():number {
    return this._constitution;
  }

  /**
   * Modificateur de _constitution
   */
  get constitutionModifier():number {
    return Math.floor((this.constitution - 10) / 2);
  }

  /**
   * Modificateur de _constitution + 1/2 niveau
   */
  get constitutionModifierAndHalfLevel():number {
    return this.constitutionModifier + Math.floor(this.level / 2);
  }

  /**
   * Dexterité
   */
  get dexterity():number {
    return this._dexterity;
  }

  /**
   * Modificateur de dexterité
   */
  get dexterityModifier():number {
    return Math.floor((this.dexterity - 10) / 2);
  }

  /**
   * Modificateur de dexterité + 1/2 niveau
   */
  get dexterityModifierAndHalfLevel():number {
    return this.dexterityModifier + Math.floor(this.level / 2);
  }

  /**
   * Inteligence
   */
  get inteligence():number {
    return this._inteligence;
  }

  /**
   * Modificateur d'_inteligence
   */
  get inteligenceModifier():number {
    return Math.floor((this.inteligence - 10) / 2);
  }

  /**
   * Modificateur d'_inteligence + 1/2 niveau
   */
  get inteligenceModifierAndHalfLevel():number {
    return this.inteligenceModifier + Math.floor(this.level / 2);
  }

  /**
   * Sagesse
   */
  get wisdom():number {
    return this._wisdom;
  }

  /**
   * Modificateur de sagesse
   */
  get wisdomModifier():number {
    return Math.floor((this.wisdom - 10) / 2);
  }

  /**
   * Modificateur de sagesse + 1/2 niveau
   */
  get wisdomModifierAndHalfLevel():number {
    return this.wisdomModifier + Math.floor(this.level / 2);
  }

  /**
   * Charisme
   */
  get charisma():number {
    return this._charisma;
  }

  /**
   * Modificateur de charisme
   */
  get charismaModifier():number {
    return Math.floor((this.charisma - 10) / 2);
  }

  /**
   * Modificateur de charisme + 1/2 niveau
   */
  get charismaModifierAndHalfLevel():number {
    return this.charismaModifier + Math.floor(this.level / 2);
  }

  // --- SKILLS

  get acrobatics():number {
    if (this._skillsTrainingList.acrobatics) {
      return this.dexterityModifierAndHalfLevel + 5
    } else {
      return this.dexterityModifierAndHalfLevel
    }
  }

  get acrobaticsTraining():boolean {
    if (this._skillsTrainingList.acrobatics) {
      return true;
    } else {
      return false;
    }
  }

  get arcana():number {
    if (this._skillsTrainingList.arcana) {
      return this.inteligenceModifierAndHalfLevel + 5
    } else {
      return this.inteligenceModifierAndHalfLevel
    }
  }

  get arcanaTraining():boolean {
    if (this._skillsTrainingList.arcana) {
      return true;
    } else {
      return false;
    }
  }

  get athletics():number {
    if (this._skillsTrainingList.athletics) {
      return this.strengthModifierAndHalfLevel + 5
    } else {
      return this.strengthModifierAndHalfLevel
    }
  }

  get athleticsTraining():boolean {
    if (this._skillsTrainingList.athletics) {
      return true;
    } else {
      return false;
    }
  }

  get bluff():number {
    if (this._skillsTrainingList.bluff) {
      return this.charismaModifierAndHalfLevel + 5
    } else {
      return this.charismaModifierAndHalfLevel
    }
  }

  get bluffTraining():boolean {
    if (this._skillsTrainingList.bluff) {
      return true;
    } else {
      return false;
    }
  }

  get diplomacy():number {
    if (this._skillsTrainingList.diplomacy) {
      return this.charismaModifierAndHalfLevel + 5
    } else {
      return this.charismaModifierAndHalfLevel
    }
  }

  get diplomacyTraining():boolean {
    if (this._skillsTrainingList.diplomacy) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Exploration
   */
  get dungeoneering():number {
    if (this._skillsTrainingList.dungeoneering) {
      return this.wisdomModifierAndHalfLevel + 5
    } else {
      return this.wisdomModifierAndHalfLevel
    }
  }

  get dungeoneeringTraining():boolean {
    if (this._skillsTrainingList.dungeoneering) {
      return true;
    } else {
      return false;
    }
  }

  get endurance():number {
    if (this._skillsTrainingList.endurance) {
      return this.constitutionModifierAndHalfLevel + 5
    } else {
      return this.constitutionModifierAndHalfLevel
    }
  }

  get enduranceTraining():boolean {
    if (this._skillsTrainingList.endurance) {
      return true;
    } else {
      return false;
    }
  }

  get heal():number {
    if (this._skillsTrainingList.heal) {
      return this.wisdomModifierAndHalfLevel + 5
    } else {
      return this.wisdomModifierAndHalfLevel
    }
  }

  get healTraining():boolean {
    if (this._skillsTrainingList.heal) {
      return true;
    } else {
      return false;
    }
  }

  get history():number {
    if (this._skillsTrainingList.history) {
      return this.inteligenceModifierAndHalfLevel + 5
    } else {
      return this.inteligenceModifierAndHalfLevel
    }
  }

  get historyTraining():boolean {
    if (this._skillsTrainingList.history) {
      return true;
    } else {
      return false;
    }
  }

  get insight():number {
    if (this._skillsTrainingList.insight) {
      return this.wisdomModifierAndHalfLevel + 5
    } else {
      return this.wisdomModifierAndHalfLevel
    }
  }

  get insightTraining():boolean {
    if (this._skillsTrainingList.insight) {
      return true;
    } else {
      return false;
    }
  }

  get intimidate():number {
    console.log(`intimidate form ${this._skillsTrainingList.intimidate}`);
    if (this._skillsTrainingList.intimidate) {
      return this.charismaModifierAndHalfLevel + 5
    } else {
      return this.charismaModifierAndHalfLevel
    }
  }

  get intimidateTraining():boolean {
    if (this._skillsTrainingList.intimidate) {
      return true;
    } else {
      return false;
    }
  }

  get nature():number {
    if (this._skillsTrainingList.nature) {
      return this.wisdomModifierAndHalfLevel + 5
    } else {
      return this.wisdomModifierAndHalfLevel
    }
  }

  get natureTraining():boolean {
    if (this._skillsTrainingList.nature) {
      return true;
    } else {
      return false;
    }
  }

  get perception():number {
    if (this._skillsTrainingList.perception) {
      return this.inteligenceModifierAndHalfLevel + 5
    } else {
      return this.inteligenceModifierAndHalfLevel
    }
  }

  get perceptionTraining():boolean {
    if (this._skillsTrainingList.perception) {
      return true;
    } else {
      return false;
    }
  }

  get religion():number {
    if (this._skillsTrainingList.religion) {
      return this.inteligenceModifierAndHalfLevel + 5;
    } else {
      return this.inteligenceModifierAndHalfLevel;
    }
  }

  get religionTraining():boolean {
    if (this._skillsTrainingList.religion) {
      return true;
    } else {
      return false;
    }
  }

  get stealth():number {
    if (this._skillsTrainingList.stealth) {
      return this.dexterityModifierAndHalfLevel + 5;
    } else {
      return this.dexterityModifierAndHalfLevel;
    }
  }

  get stealthTraining():boolean {
    if (this._skillsTrainingList.stealth) {
      return true;
    } else {
      return false;
    }
  }

  get streetwise():number {
    if (this._skillsTrainingList.streetwise) {
      return this.charismaModifierAndHalfLevel + 5
    } else {
      return this.charismaModifierAndHalfLevel
    }
  }

  get streetwiseTraining():boolean {
    if (this._skillsTrainingList.streetwise) {
      return true;
    } else {
      return false;
    }
  }

  get thievery():number {
    if (this._skillsTrainingList.thievery) {
      return this.dexterityModifierAndHalfLevel + 5;
    } else {
      return this.dexterityModifierAndHalfLevel;
    }
  }

  get thieveryTraining():boolean {
    if (this._skillsTrainingList.thievery) {
      return true;
    } else {
      return false;
    }
  }

  // -- INITIATIVE

  /**
   * **Initiative**
   */
  get initative():number {
    return this.dexterityModifierAndHalfLevel;
    // TODO rajouter les miscs
  }

  // -- DEFENSES

  // TODO rajouter les modificateur de défences par races et classes

  /**
   * **CA**
   * 
   * Classe d'armure
   */
  get armorClass():number {
    if (this.dexterityModifier > this.inteligenceModifier) {
      return 10 + Math.floor(this.level / 2) + this.dexterityModifier;
    } else {
      return 10 + Math.floor(this.level / 2) + this.inteligenceModifier;
    }
  }

  /**
   * **Vigueur**
   */
  get fortitude():number {
    if (this.strengthModifier > this.constitutionModifier) {
      return 10 + Math.floor(this.level / 2) + this.strengthModifier;
    } else {
      return 10 + Math.floor(this.level / 2) + this.constitutionModifier;
    }
  }

  /**
   * **Réflexe**
   */
  get reflex():number {
    if (this.dexterityModifier > this.inteligenceModifier) {
      return 10 + Math.floor(this.level / 2) + this.dexterityModifier;
    } else {
      return 10 + Math.floor(this.level / 2) + this.inteligenceModifier;
    }
  }

  /**
   * **Volonté**
   */
  get will():number {
    if (this.wisdomModifier > this.charismaModifier) {
      return 10 + Math.floor(this.level / 2) + this.wisdomModifier;
    } else {
      return 10 + Math.floor(this.level / 2) + this.charismaModifier;
    }
  }

  // -- HIT POINTS --

  get maxHeathPoints():number {
    let ability: number;
    if (this._class.healthPoints.abilityName === 'CHA') {
      ability = this.charisma;
    } else if (this._class.healthPoints.abilityName === 'DEX') {
      ability = this.dexterity;
    } else if (this._class.healthPoints.abilityName === 'CON') {
      ability = this.constitution;
    } else if (this._class.healthPoints.abilityName === 'INT') {
      ability = this.inteligence;
    } else if (this._class.healthPoints.abilityName === 'STR') {
      ability = this.strength;
    } else { // 'WIS'
      ability = this.wisdom;
    }

    return this._class.healthPoints.base + ability + (this._class.healthGainPerLevel * this.level);
  }

  /**
   * Péril
   */
  get bloodied():number {
    return Math.floor(this.maxHeathPoints / 2);
  }

  get srugeValue():number {
    return Math.floor(this.maxHeathPoints / 4);
  }

  get surgePerDay():number {
    let abilityModifier: number;
    if (this._class.healthPoints.abilityName === 'CHA') {
      abilityModifier = this.charismaModifier;
    } else if (this._class.healthPoints.abilityName === 'DEX') {
      abilityModifier = this.dexterityModifier;
    } else if (this._class.healthPoints.abilityName === 'CON') {
      abilityModifier = this.constitutionModifier;
    } else if (this._class.healthPoints.abilityName === 'INT') {
      abilityModifier = this.inteligenceModifier;
    } else if (this._class.healthPoints.abilityName === 'STR') {
      abilityModifier = this.strengthModifier;
    } else { // 'WIS'
      abilityModifier = this.wisdomModifier;
    }

    return this._class.surgePerDay.base + abilityModifier;
  }

  // SETTERS ---------------------------

  set name(value: string) {
    this._name = value;
  }

}