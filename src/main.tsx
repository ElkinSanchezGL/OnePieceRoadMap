import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'; 
import Home  from './features/Home.tsx';
import { TitlePoster } from './components/TitlePoster.tsx';
import OnePiece from "./assets/OnePieceRoadMap.png";
import App from './App.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
