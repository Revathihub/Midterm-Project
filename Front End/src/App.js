import Home from "./Home";
import Login from "./Users/Login";
import Signup from "./Users/Signup";
import Adminhome from "./Admin/Adminhome";
import Adminlogin from "./Admin/Adminlogin";
import AdminSignup from "./Admin/AdminSignup";
import Error from "./Users/Error";
import Profile from "./Users/Profile";

import UserBiryani from "./Users/UserBiryani";
import UserBurger from "./Users/UserBurger";
import UserPizza from "./Users/UserPizza";
import UserSandwich from "./Users/UserSandwich";
import UserIcecream from "./Users/UserIcecream";
import UserMeals from "./Users/UserMeals";
import UserTiffen from "./Users/UserTiffen";
import UserNoodels from "./Users/UserNoodels";
import UserHome from "./Users/UserHome";
import Cart from "./Users/Cart";




import FoodCategory from "./Admin/BiryaniAdmin";
import PizzaAdmin from "./Admin/PizzaAdmin";
import BurgerAdmin from "./Admin/BurgerAdmin";
import IceCreamAdmin from "./Admin/IceCreamAdmin";
import NoodelsAdmin from "./Admin/NoodelsAdmin";
import TiffenAdmin from "./Admin/TiffenAdmin";
import RiceAdmin from "./Admin/RiceAdmin";
import SandwichAdmin from "./Admin/SandwichAdmin";
import CustomerProfile from "./Admin/CustomerProfile";

import BiryaniEdit from "./AdminEdit/BiryaniEdit";
import PizzaEdit from "./AdminEdit/PizzaEdit";
import IceCreamEdit from "./AdminEdit/IceCreamEdit";
import TiffenEdit from "./AdminEdit/TiffenEdit";
import SandwichEdit from "./AdminEdit/SandwichEdit";
import BurgerEdit from "./AdminEdit/BurgerEdit";
import NoodelsEdit from "./AdminEdit/NoodelsEdit";
import MealsEdit from "./AdminEdit/MealsEdit";

import BiryaniAdd from "./AdminAdd/BiryaniAdd";
import BurgerAdd from "./AdminAdd/BurgerAdd";
import PizzaAdd from "./AdminAdd/PizzaAdd";
import MealsAdd from "./AdminAdd/MealsAdd";
import TiffenAdd from "./AdminAdd/TiffenAdd";
import NoodelsAdd from "./AdminAdd/NoodelsAdd";
import IceCreamAdd from "./AdminAdd/IceCreamAdd";
import SandwichAdd from "./AdminAdd/SandwichAdd";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Routes,Route,BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />}></Route>
          <Route path="adminsignup" element={<AdminSignup />}></Route>
          <Route path="adminlogin" element={<Adminlogin />}></Route>
          <Route path="/adminhome" element={<Adminhome/>}></Route>
          <Route path="/user/profile" element={<CustomerProfile/>}></Route>

          <Route path="/user" element={<UserHome />}></Route>
          <Route path="/user/biryani" element={<UserBiryani />}></Route>
          <Route path="/user/pizza" element={<UserPizza />}></Route>
          <Route path="/user/sandwich" element={<UserSandwich />}></Route>
          <Route path="/user/icecream" element={<UserIcecream />}></Route>
          <Route path="/user/tiffen" element={<UserTiffen />}></Route>
          <Route path="/user/noodels" element={<UserNoodels />}></Route>
          <Route path="/user/meals" element={<UserMeals />}></Route>
          <Route path="/user/burger" element={<UserBurger />}></Route>
          <Route path="/cart/F:" element={<Cart />}></Route>



          <Route path="/biryani" element={<FoodCategory />}></Route>
          <Route path="/pizza" element={<PizzaAdmin />}></Route>
          <Route path="/burger" element={<BurgerAdmin />}></Route>
          <Route path="/icecream" element={<IceCreamAdmin />}></Route>
          <Route path="/noodels" element={<NoodelsAdmin />}></Route>
          <Route path="/tiffen" element={<TiffenAdmin />}></Route>
          <Route path="/meals" element={<RiceAdmin />}></Route>
          <Route path="/sandwich" element={<SandwichAdmin />}></Route>

          <Route path="/editb/:foodId" element={<BiryaniEdit/>}></Route>
          <Route path="/editp/:foodId" element={<PizzaEdit/>}></Route>
          <Route path="/editi/:foodId" element={<IceCreamEdit/>}></Route>
          <Route path="/editt/:foodId" element={<TiffenEdit/>}></Route>
          <Route path="/edits/:foodId" element={<SandwichEdit/>}></Route>
          <Route path="/editbu/:foodId" element={<BurgerEdit/>}></Route>
          <Route path="/editn/:foodId" element={<NoodelsEdit/>}></Route>
          <Route path="/editm/:foodId" element={<MealsEdit/>}></Route>

          <Route path="/addb" element={<BiryaniAdd/>}></Route>
          <Route path="/addbu" element={<BurgerAdd/>}></Route>
          <Route path="/addp" element={<PizzaAdd/>}></Route>
          <Route path="/addm" element={<MealsAdd/>}></Route>
          <Route path="/addt" element={<TiffenAdd/>}></Route>
          <Route path="/addn" element={<NoodelsAdd/>}></Route>
          <Route path="/addi" element={<IceCreamAdd/>}></Route>
          <Route path="/adds" element={<SandwichAdd/>}></Route>

         <Route path="/signup" element={<Signup/>}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/home" element={<Home />}></Route>
         <Route path="/error" element={<Error/>}></Route>
         <Route path="/profile/:id" element={<Profile/>}></Route>


       
      </Routes>
   </BrowserRouter>
   

    </>
  );
}

export default App;
