import React from 'react';
import ReactDom from 'react-dom';
import { Router, BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import {createMemoryHistory} from 'history'
import Login from "./Homepage";
import Dashboard from "./DashboardComponent";
import SignUpComponent from "./SignUpComponent";
import Signin from "./SignInComponent";
import BusinessIdea from "./BusinessIdea";
import Navbar from "./Navbar";

import "@testing-library/jest-dom/extend-expect";
// import { shallow, mount, configure } from "enzyme";
// import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

test('Signin Page rendered right', () => {  
    const TextInputComponent = renderer.create(<BrowserRouter>
        <Signin />
      </BrowserRouter>).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});

test('Navbar rendered right', () => {  
    const TextInputComponent = renderer.create(<BrowserRouter>
        <Navbar />
      </BrowserRouter>).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});

test('Signup Page rendered right', () => {  
    const TextInputComponent = renderer.create(<BrowserRouter>
        <SignUpComponent />
      </BrowserRouter>).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});


test('Login to Investor Dashboard', () => {
  const history = createMemoryHistory()
  const route = '/home'
  history.push(route)
  render(
    <BrowserRouter history={history}>
      <Signin />
    </BrowserRouter>)
});

test('Signup to Signin', () => {
    const history = createMemoryHistory()
    const route = '/signin'
    history.push(route)
    render(
      <BrowserRouter history={history}>
        <SignUpComponent />
      </BrowserRouter>)
  });

  test('Login to Founder Page', () => {
    const history = createMemoryHistory()
    const route = '/businessidea'
    history.push(route)
    render(
      <BrowserRouter history={history}>
        <Signin />
      </BrowserRouter>)
  });





