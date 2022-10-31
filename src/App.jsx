import React from 'react';
import Home from './components/Home';
import Footer from './components/footer/footer';
import ProjectDetials from './components/portfolio/ProjectDetials/ProjectDetials';
import { Route, Routes ,BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/project/:id" element={<ProjectDetials />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </>
  );
};

export default App;
