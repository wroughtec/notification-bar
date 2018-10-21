import React from 'react';
import { render } from 'react-dom';
import { shallow } from 'enzyme';
import { App } from 'app/App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    render(<App />, div);
  });

  it('should render correctly', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
