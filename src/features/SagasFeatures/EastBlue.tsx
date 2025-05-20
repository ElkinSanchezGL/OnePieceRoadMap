import React from 'react'
import Background from '../../components/Background'
import EastBlueBg from "../../assets/Sagas/East_Blue_Background.png"
import { SagaDetail } from '../../components/SagaDetail';

export const EastBlue = () => {
  return <SagaDetail sagaId={1} backgroundImage={EastBlueBg} />;
};
