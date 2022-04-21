import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Meal from './components/Meal/Meal';
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/restaurant' element={<Restaurant></Restaurant>}></Route>
        <Route path='/meal' element={<Meal></Meal>}></Route>
      </Routes>
    </div>
  );
}

export default App;
