import React from 'react'
import ThrillerBarkBG from '../../assets/Sagas/thriller-bark_Background.jpg'
import Background from '../../components/GeneralComponents/Background'
import { SagaDetail } from '../../components/SagasComponents/SagaDetail/SagaDetail';

export const ThrillerBark = () => {
  return (
  <SagaDetail
      sagaId={5}
      backgroundImage={ThrillerBarkBG}
      arcIds={[28]}
      characterIds={[1, 3, 4,9, 49,690]}
      episodeIds={[337, 341, 359, 377, 379, 380, 382]}
      locationIds={[58]}
    />
  )
}
