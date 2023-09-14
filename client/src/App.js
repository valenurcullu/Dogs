import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Home from './components/Home.jsx'
import DogCreate from './components/DogCreate.jsx'
import Detail from './components/Detail';
import axios from 'axios';
axios.defaults.baseURL = 'https://dogs-production-7043.up.railway.app'


function App() {
  return (
    <BrowserRouter>
    {/* <div className="App"> */}
     <Switch>
      <Route exact path='/' component={LandingPage}></Route>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/create' component={DogCreate}></Route>
      <Route exact path='/home/:id' component={Detail}></Route>
     </Switch>
    {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
