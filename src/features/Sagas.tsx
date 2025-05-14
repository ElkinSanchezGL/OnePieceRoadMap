import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SagaBox } from '../components/SagaBox'; 
import Background from '../components/Background';
import ButtonRedirect from '../components/Button';
import EastBlue from "../assets/Sagas/Saga_East_Blue.png"
import Alabasta from "../assets/Sagas/Arco_de_Arabasta.png"
import Skypiea from "../assets/Sagas/Arco_de_Skypiea.png"
import WaterSeven from "../assets/Sagas/Arco_de_Water_Seven.png"
import ThrillerBark from "../assets/Sagas/Saga_de_Thriller_Bark.png"

export const Sagas = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <div className="min-h-screen p-8 text-white">
        <h1 className="text-3xl font-bold mb-8 text-center drop-shadow-lg">
          Sagas destacadas
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <SagaBox
            title='Saga del East Blue'
            image={EastBlue}
            description=" Aquí empieza toda la historia y vemos los inicios de lo que será la tripulación de los Sombrero de Paja, empezando con la primera aventura de Luffy y cuando comienza a formarse el grupo antes de partir al Grand Line."
            buttonText="Explorar"
            route="/sagas/East-Blue"
          />
          <SagaBox
            title='Saga de Arabasta'
            image={Alabasta}
            description="Ya hemos entrado en el Grand Line y la banda sigue creciendo. Antes de continuar la búsqueda del One Piece, el grupo decide ayudar a la princesa Nefertari Vivi a detener la guerra civil que asola su país y detener a la banda de mercenarios conocida como Baroque Works."
            buttonText="Explorar"
            route="/sagas/Arabasta"
          />
          <SagaBox
            title='Saga de Skypiea'
            image={Skypiea}
            description="Tras dejar atrás Arabasta, el Log Pose de Nami comienza a apuntar en una dirección muy extraña: hacia arriba. Hay una isla en el cielo y los piratas del Going Merry no van a dejar pasar la oportunidad de visitarla, así que terminan en una tierra misteriosa con un conflicto que lleva varios años a punto de explotar."
            buttonText="Explorar"
            route="/sagas/Skypiea"
          />
          <SagaBox
            title='Saga de Water Seven'
            image={WaterSeven}
            description="Tras dejar atrás la isla del Cielo, el Merry necesita reparaciones urgentemente, así que el siguiente paso en el viaje es encontrar un carpintero que se una a la tripulación... Aunque por el camino los Sombreros de Paja se ven envueltos en una feroz competición contra otra tripulación pirata y en la búsqueda de un antiguo tesoro perdido."
            buttonText="Explorar"
            route="/sagas/Water-Seven"
          />
          <SagaBox
            title='Saga de Thriller Bark'
            image={ThrillerBark}
            description="Antes de llegar al Nuevo Mundo, la tripulación deben navegar por un extraño mar donde es muy fácil perderse para siempre. Terminan siendo capturados en la isla de Thriller Bark, que está plagada de zombies y un nuevo villano quiere arrebatarles sus sombras."
            buttonText="Explorar"
            route="/sagas/Thriller-Bark"
          />
        </div>

        <div className="mt-10 flex justify-end">
          <ButtonRedirect text="Ver más sagas" route="/sagas/more" />
        </div>
      </div>
    </Background>
  );
};

