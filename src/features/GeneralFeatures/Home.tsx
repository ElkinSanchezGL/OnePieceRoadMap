import React from 'react';
import Background from '../../components/Background';
import ButtonRedirect from '../../components/Button';
import { ScrollFeature } from '../../components/ScrollFeature';
import { TitlePoster } from '../../components/TitlePoster';
import OnePiece from '../../assets/GeneralImages/OnePieceRoadMap.png'
import Mugis from '../../assets/GeneralImages/Mugis.png'
import GeneralOnepiece from "../../assets/GeneralImages/One_Piece.png"


const Home = () => {
  return (
    <Background image={GeneralOnepiece}>
      <main className="flex justify-center items-center h-screen">
        <ScrollFeature title="Bienvenido!!!" text="En esta sección, podrás comenzar una nueva aventura o reanudar tu progreso desde una saga específica."
        imageUrl= {OnePiece}
        bottomImageUrl={Mugis}
        > 
        <div className='flex space-x-4'>
        <ButtonRedirect text='Inciar Aventura' route='/'  />
        <ButtonRedirect text='Elegir Saga' route='/Sagas' />
        </div>
        
        </ScrollFeature>
      </main>
    </Background>
  );
};

export default Home;