// setup enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

// import App from './App';
import Avatar from "./Avatar";

// Component test case
describe('<Avatar />', ()=> {
  it('renders without error!', () => {
    const avatar = shallow(<Avatar />);
  });

  it('renders two children!', () => {
    const avatar = shallow(<Avatar />);
    expect(avatar.props().children.length).toEqual(2);
  });
  
  it('has only one thumbnail', () => {
    const avatar = shallow(<Avatar />);
    expect(avatar.find('div.thumbnail').length).toEqual(1);
  });

    
  it('has details', () => {
    const avatar = shallow(<Avatar />);
    expect(avatar.find('div.details').length).toEqual(1);
  });

})

