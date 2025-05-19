import React from 'react'
import Background from '../../components/Background'
import { ScrollFeature } from '../../components/ScrollFeature';
import GeneralOnepiece from "../../assets/GeneralImages/One_Piece.png"
import { Form } from '../../components/Form';

export const Login = () => {
    return (
        <Background image={GeneralOnepiece}>
          <main className="flex justify-center items-center h-screen">
          <Form isLogin ={true} />
          </main>
        </Background>
      );
    };
