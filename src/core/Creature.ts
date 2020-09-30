import { Class } from './classes'
import { Race } from './races';

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
   * **Classe**
   */
  class: Class;
  /**
   * **Race**
   */
  race: Race;
  /**
   * **Alté**
   */
  misc?: Misc;
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

interface Misc {
  initative?: number;
  defences?: {
    armorClass?: number;
    fortitude?: number;
    refelex?: number;
    will?: number;
  };
  skills?: {
    acrobatics?: number;
    arcana?: number;
    athletics?: number;
    bluff?: number;
    diplomacy?: number;
    /**
     * Exploration
     */
    dungeoneering?: number;
    endurance?: number;
    heal?: number;
    history?: number;
    /**
     * intution
     */
    insight?: number;
    intimidate?: number;
    nature?: number;
    perception?: number;
    religion?: number;
    stealth?: number;
    /**
     * Connaissance de la rue
     */
    streetwise?: number;
    thievery?: number;
  };
  senses?: {
    passiveInsight?: number;
    passivePerception?: number;
  }
  speed?: number;
}

export default class Creature {
  /**
   * Creature unique ID
   */
  private _id: number;
  /**
   * Nom de la créature
   */
  name: string;
  /**
   * Nom de la classe
   */
  className: string;
  /**
   * Nom de la race
   */
  raceName: string;
  /**
   * Niveau
   */
  private _level: number;
  /**
   * Foce
   * 
   * **\/!\ ATTENTION \/!\**
   * Ne pas anticiper le bonus de race dans cette variable,
   * il sera caculer automatiquement
   */
  private _strength: number;
  /**
   * Constitution
   * 
   * **\/!\ ATTENTION \/!\**
   * Ne pas anticiper le bonus de race dans cette variable,
   * il sera caculer automatiquement
   */
  private _constitution: number;
  /**
   * Dexterité
   * 
   * **\/!\ ATTENTION \/!\**
   * Ne pas anticiper le bonus de race dans cette variable,
   * il sera caculer automatiquement
   */
  private _dexterity: number;
  /**
   * Inteligence
   * 
   * **\/!\ ATTENTION \/!\** 
   * Ne pas anticiper le bonus de race dans cette variable,
   * il sera caculer automatiquement
   */
  private _inteligence: number;
  /**
   * Sagesse
   * 
   * **\/!\ ATTENTION \/!\** 
   * Ne pas anticiper le bonus de race dans cette variable,
   * il sera caculer automatiquement
   */
  private _wisdom: number;
  /**
   * Charisme
   * 
   * **\/!\ ATTENTION \/!\** 
   * Ne pas anticiper le bonus de race dans cette variable,
   * il sera caculer automatiquement
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
  private _race: Race;
  private _misc?: Misc;

  constructor(creationInfo: CreatureCreationInfo) {
    this._id = 1;
    this.name = creationInfo.name;
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
    this.className = this._class.name;
    this._race = creationInfo.race;
    this.raceName = this._race.name;
    if (creationInfo.misc)
      this._misc = creationInfo.misc;
  }

  // GETTERS

  // -- GLOBAL INFO

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
    let bonus = 0;
    const strengthBonus = this._race.abilityBonuses.find(abilityBonus => abilityBonus.abilityName === 'STR');
    if (strengthBonus) {
      bonus = strengthBonus.bonus;
    }
    return this._strength + bonus;
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
    let bonus = 0;
    const constitutionBonus = this._race.abilityBonuses.find(abilityBonus => abilityBonus.abilityName === 'CON');
    if (constitutionBonus) {
      bonus = constitutionBonus.bonus;
    }
    return this._constitution + bonus;
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
    let bonus = 0;
    const dexterityBonus = this._race.abilityBonuses.find(abilityBonus => abilityBonus.abilityName === 'DEX');
    if (dexterityBonus) {
      bonus = dexterityBonus.bonus;
    }
    return this._dexterity + bonus;
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
    let bonus = 0;
    const inteligenceBonus = this._race.abilityBonuses.find(abilityBonus => abilityBonus.abilityName === 'INT');
    if (inteligenceBonus) {
      bonus = inteligenceBonus.bonus;
    }
    return this._inteligence + bonus;
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
    let bonus = 0;
    const wisdomBonus = this._race.abilityBonuses.find(abilityBonus => abilityBonus.abilityName === 'WIS');
    if (wisdomBonus) {
      bonus = wisdomBonus.bonus;
    }
    return this._wisdom + bonus;
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
    let bonus = 0;
    const charismaBonus = this._race.abilityBonuses.find(abilityBonus => abilityBonus.abilityName === 'CHA');
    if (charismaBonus) {
      bonus = charismaBonus.bonus;
    }
    return this._charisma + bonus;
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
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.acrobatics) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const acrobaticsBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'acrobatics');
    if (acrobaticsBonus) {
      bonus = bonus + acrobaticsBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.acrobatics;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.dexterityModifierAndHalfLevel + bonus + misc;
  }

  get acrobaticsTraining():boolean {
    if (this._skillsTrainingList.acrobatics) {
      return true;
    } else {
      return false;
    }
  }

  get arcana():number {
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.arcana) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const arcanaBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'arcana');
    if (arcanaBonus) {
      bonus = bonus + arcanaBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.arcana;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.inteligenceModifierAndHalfLevel + bonus + misc;
  }

  get arcanaTraining():boolean {
    if (this._skillsTrainingList.arcana) {
      return true;
    } else {
      return false;
    }
  }

  get athletics():number {
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.athletics) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const athleticsBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'athletics');
    if (athleticsBonus) {
      bonus = bonus + athleticsBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.athletics;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.strengthModifierAndHalfLevel + bonus + misc;
  }

  get athleticsTraining():boolean {
    if (this._skillsTrainingList.athletics) {
      return true;
    } else {
      return false;
    }
  }

  get bluff():number {
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.bluff) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const bluffBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'bluff');
    if (bluffBonus) {
      bonus = bonus + bluffBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.bluff;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.charismaModifierAndHalfLevel + bonus + misc;
  }

  get bluffTraining():boolean {
    if (this._skillsTrainingList.bluff) {
      return true;
    } else {
      return false;
    }
  }

  get diplomacy():number {
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.diplomacy) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const diplomacyBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'diplomacy');
    if (diplomacyBonus) {
      bonus = bonus + diplomacyBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.diplomacy;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.charismaModifierAndHalfLevel + bonus + misc;
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
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.dungeoneering) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const dungeoneeringBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'dungeoneering');
    if (dungeoneeringBonus) {
      bonus = bonus + dungeoneeringBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.dungeoneering;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.wisdomModifierAndHalfLevel + bonus + misc;
  }

  get dungeoneeringTraining():boolean {
    if (this._skillsTrainingList.dungeoneering) {
      return true;
    } else {
      return false;
    }
  }

  get endurance():number {
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.endurance) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const enduranceBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'endurance');
    if (enduranceBonus) {
      bonus = bonus + enduranceBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.endurance;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.constitutionModifierAndHalfLevel + bonus + misc;
  }

  get enduranceTraining():boolean {
    if (this._skillsTrainingList.endurance) {
      return true;
    } else {
      return false;
    }
  }

  get heal():number {
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.heal) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const healBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'heal');
    if (healBonus) {
      bonus = bonus + healBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.insight;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.wisdomModifierAndHalfLevel + bonus + misc;
  }

  get healTraining():boolean {
    if (this._skillsTrainingList.heal) {
      return true;
    } else {
      return false;
    }
  }

  get history():number {
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.history) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const historyBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'history');
    if (historyBonus) {
      bonus = bonus + historyBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.history;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.inteligenceModifierAndHalfLevel + bonus + misc;
  }

  get historyTraining():boolean {
    if (this._skillsTrainingList.history) {
      return true;
    } else {
      return false;
    }
  }

  get insight():number {
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.insight) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const insightBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'insight');
    if (insightBonus) {
      bonus = bonus + insightBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.insight;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.wisdomModifierAndHalfLevel + bonus + misc;
  }

  get insightTraining():boolean {
    if (this._skillsTrainingList.insight) {
      return true;
    } else {
      return false;
    }
  }

  get intimidate():number {
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.intimidate) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const intimidateBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'intimidate');
    if (intimidateBonus) {
      bonus = bonus + intimidateBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.intimidate;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.charismaModifierAndHalfLevel + bonus + misc;
  }

  get intimidateTraining():boolean {
    if (this._skillsTrainingList.intimidate) {
      return true;
    } else {
      return false;
    }
  }

  get nature():number {
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.nature) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const natureBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'nature');
    if (natureBonus) {
      bonus = bonus + natureBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.perception;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.wisdomModifierAndHalfLevel + bonus + misc;
  }

  get natureTraining():boolean {
    if (this._skillsTrainingList.nature) {
      return true;
    } else {
      return false;
    }
  }

  get perception():number {
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.perception) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const perceptionBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'perception');
    if (perceptionBonus) {
      bonus = bonus + perceptionBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.perception;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.wisdomModifierAndHalfLevel + bonus + misc;
  }

  get perceptionTraining():boolean {
    if (this._skillsTrainingList.perception) {
      return true;
    } else {
      return false;
    }
  }

  get religion():number {
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.religion) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const religionBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'religion');
    if (religionBonus) {
      bonus = bonus + religionBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.religion;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.inteligenceModifierAndHalfLevel + bonus + misc;
  }

  get religionTraining():boolean {
    if (this._skillsTrainingList.religion) {
      return true;
    } else {
      return false;
    }
  }

  get stealth():number {
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.stealth) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const stealthBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'stealth');
    if (stealthBonus) {
      bonus = bonus + stealthBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.stealth;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.dexterityModifierAndHalfLevel + bonus + misc;
  }

  get stealthTraining():boolean {
    if (this._skillsTrainingList.stealth) {
      return true;
    } else {
      return false;
    }
  }

  get streetwise():number {
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.streetwise) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const streetwiseBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'streetwise');
    if (streetwiseBonus) {
      bonus = bonus + streetwiseBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.streetwise;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.charismaModifierAndHalfLevel + bonus + misc;
  }

  get streetwiseTraining():boolean {
    if (this._skillsTrainingList.streetwise) {
      return true;
    } else {
      return false;
    }
  }

  get thievery():number {
    let bonus = 0;
    // Bonus de formation
    if (this._skillsTrainingList.thievery) {
      bonus = bonus + 5;
    }
    // Bonus de race
    const thieveryBonus = this._race.skillBonuses.find(skillBonus => skillBonus.skillName === 'thievery');
    if (thieveryBonus) {
      bonus = bonus + thieveryBonus.bonus;
    }
    // Bonus d'alté
    let misc = 0;
    const miscBonus = this._misc?.skills?.thievery;
    if (miscBonus) {
      misc = misc + miscBonus;
    }
    return this.dexterityModifierAndHalfLevel + bonus + misc;
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
    // Recherche d'alté
    let misc = 0;
    const miscBonus = this._misc?.defences?.armorClass;
    if (miscBonus) {
      misc = misc + miscBonus;
    }

    if (this.dexterityModifier > this.inteligenceModifier) {
      return 10 + Math.floor(this.level / 2) + this.dexterityModifier + misc;
    } else {
      return 10 + Math.floor(this.level / 2) + this.inteligenceModifier + misc;
    }
  }

  /**
   * **Vigueur**
   */
  get fortitude():number {
    // Recherche de bonus à la défence de classe
    let classBonus = 0;
    const fortitudeBonus = this._class.defenceBonus.find(defenceBonus => defenceBonus.defenceName === 'FORT');
    if (fortitudeBonus) {
      classBonus = fortitudeBonus.bonus;
    }

    // Recherche d'alté
    let misc = 0;
    const miscBonus = this._misc?.defences?.fortitude;
    if (miscBonus) {
      misc = misc + miscBonus;
    }

    if (this.strengthModifier > this.constitutionModifier) {
      return 10 + Math.floor(this.level / 2) + this.strengthModifier + classBonus + misc;
    } else {
      return 10 + Math.floor(this.level / 2) + this.constitutionModifier + classBonus + misc;
    }
  }

  /**
   * **Réflexe**
   */
  get reflex():number {
    // Recherche de bonus à la défence de classe
    let classBonus = 0;
    const reflexBonus = this._class.defenceBonus.find(defenceBonus => defenceBonus.defenceName === 'REF');
    if (reflexBonus) {
      classBonus = reflexBonus.bonus;
    }

    // Recherche d'alté
    let misc = 0;
    const miscBonus = this._misc?.defences?.refelex;
    if (miscBonus) {
      misc = misc + miscBonus;
    }

    if (this.dexterityModifier > this.inteligenceModifier) {
      return 10 + Math.floor(this.level / 2) + this.dexterityModifier + classBonus + misc;
    } else {
      return 10 + Math.floor(this.level / 2) + this.inteligenceModifier + classBonus + misc;
    }
  }

  /**
   * **Volonté**
   */
  get will():number {
    // Recherche de bonus à la défence de classe
    let classBonus = 0;
    const willBonus = this._class.defenceBonus.find(defenceBonus => defenceBonus.defenceName === 'WILL');
    if (willBonus) {
      classBonus = willBonus.bonus;
    }

    // Recherche d'alté
    let misc = 0;
    const miscBonus = this._misc?.defences?.will;
    if (miscBonus) {
      misc = misc + miscBonus;
    }

    if (this.wisdomModifier > this.charismaModifier) {
      return 10 + Math.floor(this.level / 2) + this.wisdomModifier + classBonus + misc;
    } else {
      return 10 + Math.floor(this.level / 2) + this.charismaModifier + classBonus + misc;
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

    return this._class.healthPoints.base + ability + (this._class.healthGainPerLevel * (this.level - 1));
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

  // MOVEMENT

  /**
   * **VD**
   * 
   * Vitesse de déplacement
   */
  get speed():number {
    let bonus = 0;
    const miscBonus = this._misc?.speed;
    if (miscBonus) {
      bonus = bonus + miscBonus;
    }

    return this._race.movementSpeed + bonus;
  }

  // SENSES

  get passiveInsight() {
    return 10 + this.insight;
  }

  get passivePerception() {
    return 10 + this.perception;
  }

  // -- ACTION POINTS --
  get actionPoints():number {
    return this._actionPoints;
  }

  // SETTERS ---------------------------

}
