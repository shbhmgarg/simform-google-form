import './App.css';
import Header from './components/layout/header/Header';
import Home from './components/pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateForm from './components/pages/create-form/CreateForm';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
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
            <Route path='/update-form/:id' element={<CreateForm />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
