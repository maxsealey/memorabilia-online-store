import './App.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = "/" component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
