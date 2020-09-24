type Languages = 'common' | 'draconian' | 'elfic' | 'dwarf';

export interface Race {
  name: string,
  abilityBonuses: {
    /**
     * La caracteristique bonus
     */
    abilityName: 'STR' | 'CON' | 'DEX' | 'INT' | 'WIS' | 'CHA',
    /**
     * Le bonus appliqué
     */
    bonus: number,
  }[],
  skillBonuses: {
    /**
     * La valeur sur la quelle le bonus va etre appliqué
     */
    skillName: 'acrobatics' | 'arcana' | 'athletics' | 'bluff' | 'diplomacy' | 'dungeoneering' | 'endurance' | 'heal' | 'history' | 'insight' | 'intimidate' | 'nature' | 'perception' | 'religion' | 'stealth' | 'streetwise' | 'thievery',
    /**
     * Bonus
     */
    bonus: number,
  }[],
  /**
   * Catégorie de taille
   */
  sizeCategory: 'medium' | 'small',
  /**
   * Vitesse de déplacement
   */
  movementSpeed: number;
  /**
   * Vision
   */
  vision: 'normal' | 'night',
  /**
   * Langues
   */
  languages: Languages[],
  /**
   * Possibilité de choisir une langue supplémentaire
   */
  bonusLanguage?: number,
}

const deva: Race = {
  name: 'Deva',
  abilityBonuses: [
    {
      abilityName: 'INT',
      bonus: 2,
    },
    {
      abilityName: 'WIS',
      bonus: 2,
    },
  ],
  skillBonuses: [
    {
      skillName: 'history',
      bonus: 2,
    },
    {
      skillName: 'religion',
      bonus: 2,
    },
  ],
  sizeCategory: 'medium',
  movementSpeed: 6,
  vision: 'normal',
  languages: ['common'],
  bonusLanguage: 2,
}

const drakeide: Race = {
  name: 'Drakéide',
  abilityBonuses: [
    {
      abilityName: 'STR',
      bonus: 2,
    },
    {
      abilityName: 'CHA',
      bonus: 2,
    },
  ],
  skillBonuses: [
    {
      skillName: 'history',
      bonus: 2,
    },
    {
      skillName: 'intimidate',
      bonus: 2,
    },
  ],
  sizeCategory: 'medium',
  movementSpeed: 6,
  vision: 'normal',
  languages: ['common', 'draconian'],
}

export default { deva, drakeide };