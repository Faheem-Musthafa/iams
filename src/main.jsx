import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root');
const rootElement = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, rootElement);
} else {
  createRoot(container).render(rootElement);
}
