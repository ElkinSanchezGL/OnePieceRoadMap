import React from 'react'
import Background from '../../components/Background'
import WholeCakeBG from '../../assets/Sagas/whole_Cake.png'
import { SagaDetail } from '../../components/SagaDetail'
export const Whole_Cake = () => {
  return (
  <SagaDetail
      sagaId={9}
      backgroundImage={WholeCakeBG}
      arcIds={[43, 45]}
      characterIds= {[1, 5, 10, 96, 97]}
      episodeIds={[751, 783, 830, 849, 871, 877]}
      locationIds={[71, 78]}
    />
  )
}
