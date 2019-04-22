/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

let props;
beforeEach(() => {
  props = {
    list: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
  };
});

describe('#Suite test App', () => {
  it('Should find test inside App component', () => {
    const app = shallow(<App />);
    const text = app.find("[testID='Text1']").dive().text();
    expect(text).toEqual('Welcome to React Native!');
  });
  it('Should access a function', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().prueba()).toEqual(false);
  });
  // it('Should validate a mock snapshot', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper).toMatchSnapshot();
  // });
  it('Should simulate a event', () => {
    const wrapper = shallow(<App />);
    // const text = wrapper.find("[testID='button']").simulate('touch');
    wrapper.find("[testID='button']").first().props().onPress();
    expect(wrapper.instance().prueba()).toEqual(true);
  });
  // it('Should simulate input user', () => {
  //   const wrapper = shallow(<App />);
  //   const input = wrapper.find("[testID='inputUser']").dive().text();
  //   expect(input).toHaveLength(0);
  // });
  it('Should simulate  input user', () => {
    const wrapper = shallow(<App />);
    wrapper.find("[testID='inputUser']").first().props().onChangeText('Hola Mundo');
    expect(wrapper.instance().getText()).toEqual('Hola Mundo');
  });
  it('Should show a list of days', () => {
    const wrapper = shallow(<App {...props} />);
    wrapper.find("[testID='inputUser']").props().onChangeText('es');
    expect(wrapper.find(Text)).toHaveLength(7);
  });
});

it('renders correctly', () => {
  renderer.create(<App />);
});
