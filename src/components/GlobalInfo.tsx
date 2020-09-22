import React from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import NumberInput from './NumberInput';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const GlobalInfo = (props: {level?: number, changeLevel: Function}) => {
  return (
    <Container>
      <TextInput label="Nom du personnage" />
      <NumberInput label="Niveau" size={40} defaultValue={props.level} changeDispatcher={props.changeLevel} />
      <TextInput label="Classe" />
      <TextInput label="Voie paragonique" />
      <TextInput label="Déstinée épique" />
      {/* <NumberInput label="Total de px" size={100} /> */}
      <TextInput label="Race" />
      <TextInput label="Catégorie de taille" />
      <TextInput label="Âge" />
      <TextInput label="Sexe" />
      <TextInput label="Taille" />
      <TextInput label="Poids" />
      <TextInput label="Alignement" />
      <TextInput label="Divinité" />
      <TextInput label="Groupe d'aventurier et autres affiliations" />
    </Container>
  )
}

export default GlobalInfo;