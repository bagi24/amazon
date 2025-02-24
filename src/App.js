import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path='/checkout'
            element={
              <>
                <Header />
                <h1>I am a ChekOut page </h1>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
