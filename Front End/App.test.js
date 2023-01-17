import { render, screen } from '@testing-library/react';
import App from './App';
import Login from '.Users/Login';
import Signup from '.Users/Signup';
import Profile from '.Users/Profile';
import Adminlogin from '.Admin/Adminlogin';
import AdminSignup from '.Admin/Adminsignup';
import Home from '.Users/UserHome';
import { shallow,configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {BrowserRouter as Router} from 'react-router-dom';

configure({adapter:new Adapter()});
describe("rendering User components",()=>{
  test("renders app components without crash",()=>{
    shallow(<App/>)
  });

it("render App components header without crash",()=>{
  const wrapper=shallow(<App/>);
  const header=(<h1 className="has-text-centeres title is-1">Welcome to the Food Order App!</h1>)
  expect(wrapper.contains(header)).toEqual(true);

});


  it("renders Login page without crash",()=>{
    shallow(<Router>
        <Login/>
      </Router>)
  });

  it("renders Signup page without crash",()=>{
    shallow(<Router>
        <Signup/>
      </Router>)
  });
  it("renders Home page without crash",()=>{
    shallow(<Router>
        <Home/>
      </Router>)
  });

}); 
describe("rendering Admin components",()=>{
  
   it("renders Leaves page without crash",()=>{
    shallow(<Router>
        <Adminlogin/>
      </Router>)
  });
  it("renders Revoke Leave page without crash",()=>{
    shallow(<Router>
        <AdminSignup/>
      </Router>)
  });
  it("renders Profile page without crash",()=>{
    shallow(<Router>
        <Profile/>
      </Router>)
  });
  
 
});


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
