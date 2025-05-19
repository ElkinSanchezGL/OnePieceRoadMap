import React from 'react'
import Background from '../../components/Background'
import { ScrollFeature } from '../../components/ScrollFeature';
import { Form } from '../../components/Form';
import GeneralOnepiece from "../../assets/GeneralImages/One_Piece.png"

export const Register = () => {
    return (
        <Background image={GeneralOnepiece}>
          <main className="flex justify-center items-center h-screen">
          <Form isLogin ={false} />
          </main>
        </Background>
      );
    };
