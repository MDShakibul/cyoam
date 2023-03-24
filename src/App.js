import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div>
    <Routes>
    {/* Nav Link */}
    <Route path="/" element={<Home></Home>}></Route>
    

    
    {/* course purchase */}
    
    {/* not found page */}
    {/* <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route> */}
  </Routes>
    </div>
  );
}

export default App;
