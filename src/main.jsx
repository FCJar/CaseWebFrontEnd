import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from".routes.jsx";
import GlobalStyles from './styles/GlobalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Routes />
      <GlobalStyles/>

  </React.StrictMode>
);