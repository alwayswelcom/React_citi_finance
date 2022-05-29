import './App.css';
import {
  BrowserRouter as Router,
  Route,
  useParams,
  Routes
} from "react-router-dom";

import Layout from './Layouts';
import Home from './Layouts/Home';
function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/about' element={<ABOUT />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/login' element={<LOGIN />} /> */}
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
