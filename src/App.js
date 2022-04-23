import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Restaurant from './components/Restaurant/Restaurant';
import Blogs from './components/Blogs/Blogs';
import Recharts from './components/Recharts/Recharts';
import NotFound from './components/NotFound/NotFound';
import MealDetail from './components/MealDetail/MealDetail';

function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/:about' element={<About></About>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/restaurant' element={<Restaurant></Restaurant>}></Route>
        <Route path='/meal/:mealDetail' element={<MealDetail></MealDetail>}></Route>
        <Route path='/recharts' element={<Recharts></Recharts>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
