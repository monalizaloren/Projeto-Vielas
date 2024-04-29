import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ColecaoPage from './Pages/ColecaoPage';
import BuyPage from './Pages/BuyPage';
import DescriptionPage from './Pages/DescriptionPage';
import FinishBuy from './Pages/finishBuy'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/colecaoPage" element={<ColecaoPage/>}/>
          <Route exact path="/compras" element={<BuyPage/>}/>
          <Route exact path="/descriptionPage" element={<DescriptionPage/>}/>
          <Route exact path="/finishBuy" element={<FinishBuy/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;