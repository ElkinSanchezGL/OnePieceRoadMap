import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes.tsx'; 
import { TitlePoster } from './components/TitlePoster.tsx';




function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;