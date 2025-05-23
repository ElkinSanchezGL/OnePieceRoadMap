import React from 'react'
import Background from '../../components/Background'
import SkypeiaBG from '../../assets/Sagas/Skypiea_background.jpg'
import { SagaDetail } from '../../components/SagaDetail';
export const Skypiea = () => {
  return  <SagaDetail
      sagaId={3}
      backgroundImage={SkypeiaBG}
      arcIds={[15, 16, 17, 18,19]} 
      characterIds={[660, 624, 637]} 
      episodeIds={[167, 182 , 184, 192,195]} 
      locationIds={[89,92,96,95]} 
    />
};

