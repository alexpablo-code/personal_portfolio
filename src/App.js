import logo from './logo.svg';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
