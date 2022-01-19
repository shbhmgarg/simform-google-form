import './App.css';
import Header from './components/layout/header/Header';
import Home from './components/pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateForm from './components/pages/create-form/CreateForm';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/'
            exact
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path='/create-form/:id' element={<CreateForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
