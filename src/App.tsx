import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes.tsx'; 
import { TitlePoster } from './components/TitlePoster.tsx';
import "./App.css"




function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;