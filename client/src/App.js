import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Register,Landing,Error} from './pages/index'
function App() {
  return (
    <BrowserRouter className="App">
      
      <Routes>
        <Route path="/" element={<div>DashBoard</div>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
  

    </BrowserRouter>
  );
}

export default App;
