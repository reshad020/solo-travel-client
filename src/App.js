import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Topbanner from './Components/Home/Topbanner';
import Midsection from './Components/Home/Midsection';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import AddService from './Components/AddService/AddService';
import Service from './Components/Home/Service';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PrivateBooking from './Components/PrivateBooking/PrivateBooking';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import MyOrder from './Components/MyOrder/MyOrder';

function App() {
  return (
    <div>
    <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        
        <Route exact path="/">
          <Topbanner></Topbanner>
          <Midsection></Midsection>
          <Service></Service>
        </Route>
        <Route exact path="/home">
          <Topbanner></Topbanner>
          <Midsection></Midsection>
          <Service></Service>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/addservice">
          <AddService></AddService>
        </Route>
        <Route path="/manageorders">
          <ManageOrders></ManageOrders>
        </Route>
        <Route path="/myorders">
          <MyOrder></MyOrder>
        </Route>
        <PrivateRoute path="/details/:id">
          <PrivateBooking></PrivateBooking>
        </PrivateRoute>
        
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
