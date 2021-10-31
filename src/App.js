import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Topbanner from './Components/Home/Topbanner';
import Midsection from './Components/Home/Midsection';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header></Header>
    <Switch>
      
      <Route exact path="/home">
        <Topbanner></Topbanner>
        <Midsection></Midsection>
      </Route>
    </Switch>

    </BrowserRouter>
    </div>
  );
}

export default App;
