import './App.css';
import { Header } from './common/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Test } from './pages/Test';

function App() {
  return (
    <div className="App">
      <Header/>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Test />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
