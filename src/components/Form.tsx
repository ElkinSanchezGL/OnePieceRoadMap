import { useState } from 'react';
import ButtonRedirect from '../components/Button';

type FormProps = {
  isLogin: boolean; 
};

export const Form: React.FC<FormProps> = ({ isLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-96 mx-auto">
      <h2 className="text-2xl mb-4 text-center">
        {isLogin ? 'Iniciar Sesión' : 'Registro'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">
            Nombre de Usuario
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>

        {!isLogin && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
              Repite la Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded"
              required
            />
          </div>
        )}

        <ButtonRedirect text={isLogin ? 'Iniciar Sesión' : 'Registrar'} route="/login" />
      </form>
    </div>
  );
};
