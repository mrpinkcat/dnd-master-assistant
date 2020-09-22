import React, {useState} from 'react';
import GlobalInfo from './GlobalInfo';

const CharacterSheet = () => {

  const [level, changeLevel] = useState<number>();

  return (
    <div>
      level:6
      {level}
      <GlobalInfo level={level} changeLevel={changeLevel} />
    </div>
  )
}

export default CharacterSheet;
