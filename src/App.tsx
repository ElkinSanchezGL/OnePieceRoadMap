import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import './App.css';
import './i18n';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
