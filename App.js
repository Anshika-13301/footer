import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    < BrowserRouter>
      <div className="App">
        {/* Other Routes */}
        <Routes>
          <Route path="/jobs" element={<div>Jobs Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
