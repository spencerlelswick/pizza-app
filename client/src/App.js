import { Route, Routes } from 'react-router-dom';
import './App.css';
import Deals from './components/Deals/Deals';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Menu from './components/Menu/Menu';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="deals" element={<Deals />} />
          <Route path="menu" element={<Menu />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
