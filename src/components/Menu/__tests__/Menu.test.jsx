import fetchMock from 'fetch-mock';
import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from 'components/Menu/Menu';
import mockData from 'mocks/test-mocky.json';

describe('Menu', () => {
  it('should render correctly with like data', () => {
    const props = { notifications: [mockData[0]] };
    const component = shallow(<Menu {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with comment data', () => {
    const props = { notifications: [mockData[1]] };
    const component = shallow(<Menu {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should not render with unknown type', () => {
    const props = {
      notifications: [
        {
          type: 'FAKE',
          post: {}
        }
      ]
    };
    const component = shallow(<Menu {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly without data', () => {
    const props = { notifications: [] };
    const component = shallow(<Menu {...props} />);
    expect(component).toMatchSnapshot();
  });
});
