export interface Class {
  name: string,
  /**
   * **Bonus en défence**
   */
  defenceBonus: {
    /**
     * La valeur sur la quelle le bonus va etre appliqué
     */
    defenceName: 'FORT' | 'REF' | 'WILL',
    /**
     * Bonus
     */
    bonus: number,
  },
  /**
   * **Points de vie**
   */
  healthPoint: {
    /**
     * Points de vie de base
     */
    base: number,
    /**
     * La valeur de la caracteristique à ajouter aux points de vie de base
     */
    abilityName: 'STR' | 'CON' | 'DEX' | 'INT' | 'WIS' | 'CHA',
  },
  /**
   * **Points de vie gagné par niveau**
   */
  healthGainPerLevel: number,
  /**
   * **Récupération par jour**
   */
  surgePerDay: {
    /**
     * Récupération de base
     */
    base: number,
    /**
     * La valeur du modificateur de caracteristique à ajouter à la valeur de récupération de base
     */
    abilityModifierName: 'STR' | 'CON' | 'DEX' | 'INT' | 'WIS' | 'CHA',
  },
  /**
   * **Maniement des armes**
   */
  authorizedWeaponType: Array<'simple melee weapon' | 'simple distance weapon' | 'war melee weapon' | 'war distance weapon' | 'wand' | 'stick' | 'orb'>,
  /**
   * **Port des armures**
   */
  authorizedArmorType: Array<'fabric' | 'leather' | 'skin' | 'meshes' | 'scales' | 'light shield' | 'heavy shield'>,
}

const guerrier: Class = {
  name: 'Guerrier',
  defenceBonus: {
    defenceName: 'FORT',
    bonus: 2,
  },
  healthPoint: {
    base: 15,
    abilityName: 'CON'
  },
  healthGainPerLevel: 5,
  surgePerDay: {
    base: 9,
    abilityModifierName: 'CON'
  },
  authorizedWeaponType: ['simple melee weapon', 'simple distance weapon', 'war melee weapon', 'war distance weapon'],
  authorizedArmorType: ['fabric', 'leather', 'skin', 'meshes', 'scales', 'light shield', 'heavy shield'],
};

const magicien: Class = {
  name: 'Magicien',
  defenceBonus: {
    defenceName: 'WILL',
    bonus: 2,
  },
  healthPoint: {
    base: 10,
    abilityName: 'CON',
  },
  healthGainPerLevel: 4,
  surgePerDay: {
    base: 6,
    abilityModifierName: 'CON',
  },
  authorizedWeaponType: ['wand', 'stick', 'orb'],
  authorizedArmorType: ['fabric'],
};

export default { guerrier, magicien };
