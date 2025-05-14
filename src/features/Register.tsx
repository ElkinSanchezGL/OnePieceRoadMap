import React from 'react'
import Background from '../components/Background'
import { ScrollFeature } from '../components/ScrollFeature';
import { Form } from '../components/Form';

export const Register = () => {
    return (
        <Background>
          <main className="flex justify-center items-center h-screen">
          <Form isLogin ={false} />
          </main>
        </Background>
      );
    };
