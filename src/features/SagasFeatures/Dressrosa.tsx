import React from 'react'
import Background from '../../components/Background'
import DressrosaBG from '../../assets/Sagas/Dressrosa_Background.png'
import { SagaDetail } from '../../components/SagaDetail'
export const Dressrosa = () => {
  return (
  <SagaDetail
      sagaId={8}
      backgroundImage={DressrosaBG}
      arcIds={[39, 41]}
      characterIds= {[1, 4, 54, 365, 662]}
      episodeIds={[579, 629, 663, 697, 733, 746]}
      locationIds={[72, 77, 83]}
    />
  )
}
