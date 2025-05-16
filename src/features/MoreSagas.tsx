import React from 'react'
import Background from '../components/Background'
import { SagaBox } from '../components/SagaBox'
import ButtonRedirect from '../components/Button'
import Marineford from "../assets/Sagas/Saga_Marineford.png"
import GyojinIsland from "../assets/Sagas/Saga_IslaGyojin..jpg"
import Dressrosa from "../assets/Sagas/Saga_Dressrosa.png"
import WholeCake from "../assets/Sagas/Saga_WholeCake.png"
import Wano from "../assets/Sagas/Saga_Wano.png"
import { useEffect, useState } from 'react';
import { getSagaById } from '../services/getSagasById';

export const MoreSagas = () => {
      const [titles, setTitles] = useState<{ [key: string]: string }>({});
    
      useEffect(() => {
        const ids = [6, 7, 8, 9, 10];
    
        const fetchTitlesIndividually = async () => {
          for (const id of ids) {
            try {
              const data = await getSagaById(id);
              console.log(`Saga ${id}:`, data);
    const title = data?.tittle || data?.title;
    if (title) {
      setTitles(prev => ({ ...prev, [id]: title }));
    } else {
      console.warn(`Saga ${id} no tiene título válido`, data);
    }
            } catch (error) {
              console.error(`Error al cargar saga ${id}:`, error);
            }
          }
        };
    
        fetchTitlesIndividually();
      }, []);
    return (
        <Background>
            <div>
                <div className="flex justify-between items-center mb-4">
                    <div></div>
                    <ButtonRedirect text="Inicio" route="/" />
                </div>
                <h1 className="text-3xl font-bold mb-8 text-center drop-shadow-lg">
                    Sagas destacadas
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    <SagaBox
                        title={titles["6"] || 'Cargando...'}
                        image={Marineford}
                        description="Esta saga marca el final de la primera parte del anime antes del salto temporal. Si ya las cosas se habían ido poniendo cada vez más difíciles, la tripulación se separa en medio de un conflicto que escala muy rápido."
                        buttonText="Explorar"
                        route="/sagas/Marineford"
                    />
                    <SagaBox
                        title={titles["7"] || 'Cargando...'}
                        image={GyojinIsland}
                        description="Tras un salto temporal de dos años, la tripulación de Luffy vuelve por fin a reunirse en el Archipiélago Sabaody para continuar su camino hacia el Nuevo Mundo... aunque antes deberán pasar por la isla de los hombres peces."
                        buttonText="Explorar"
                        route="/sagas/Isla-Gyojin"
                    />
                    <SagaBox
                        title={titles["8"] || 'Cargando...'}
                        image={Dressrosa}
                        description="Una de las sagas más largas de toda la historia y marca la entrada de lleno de los Piratas de Sombrero de Paja en el Nuevo Mundo. Es una región muy peligrosa donde nos encontramos con algunos de los piratas más feroces del Grand Line."
                        buttonText="Explorar"
                        route="/sagas/lotr"
                    />
                    <SagaBox
                        title={titles["9"] || 'Cargando...'}
                        image={WholeCake}
                        description="Los Sombrero de Paja consiguen reunirse en Zou y empiezan a hacer los planes necesarios para enfrentarse a Kaidou. Sin embargo, Sanji cae en las garras de Big Mom, una peligrosa pirata y una de los Cuatro Emperadores, por lo que la tripulación tendrá que meterse de lleno en su territorio para rescatar al cocinero."
                        buttonText="Explorar"
                        route="/sagas/Whole-Cake"
                    />
                    <SagaBox
                        title={titles["10"] || 'Cargando...'}
                        image={Wano}
                        description="La saga más larga de toda la serie y que arrancó en 2019 para llevarnos a la tierra de los samurais. También conocida como la Saga de los Cuatro Emperadores, con una alianza masiva para derrotar a Kaido y el equilibrio de poderes en el mundo estando más frágil que nunca."
                        buttonText="Explorar"
                        route="/sagas/Wano"
                    />
                </div>
            </div>
        </Background>
    )
}
