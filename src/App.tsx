import HomePage from 'pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
import 'styles/font.css';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
