import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InvestmentSurvey from './components/InvestmentSurvey';
import StockRecommendation from './components/StockRecommendation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<InvestmentSurvey />} />
          <Route path="/recommendation" element={<StockRecommendation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
