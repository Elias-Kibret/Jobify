import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Register,Landing,Error} from './pages/index'
import {
  AddJob,
  Profile,
  SharedLayout,
  AllJobs,
  Stats
} from "./pages/DashBoard/index.js"  
function App() {
  return (
    <BrowserRouter className="App">  
      <Routes>
        <Route path="/" element={<SharedLayout/>} >
          <Route indexli element={<Stats/>}/>
          <Route path="all-jobs" element={<AllJobs/>}/>
          <Route path="add-jobs" element={<AddJob/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
