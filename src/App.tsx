import './App.css';
import {
  BrowserRouter as Router,
  Route,
  useParams,
  Routes,
} from "react-router-dom";
import { useState } from 'react';

import Layout from './Layouts';
import Home from './Layouts/Home';
import About from './Layouts/About';
import FAQ from './Layouts/Faq';
import LOGIN from './Layouts/Login';
import REGISTER from './Layouts/Register';
function App() {

  return (
    <div className="App">
      <Layout>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/login' element={<LOGIN />} />
            <Route path='/register' element={<REGISTER />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
