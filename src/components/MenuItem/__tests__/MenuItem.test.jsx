import fetchMock from 'fetch-mock';
import React from 'react';
import { shallow } from 'enzyme';
import { MenuItem } from 'components/MenuItem/MenuItem';
import mockData from 'mocks/test-mocky.json';
import { likeType, commentType } from 'consts/notificationTypes';

describe('Menu', () => {
  it('should render correctly with like data', () => {
    const props = {
      title: 'test',
      type: likeType,
      users: mockData[0].likes
    };
    const component = shallow(<MenuItem {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with comment data', () => {
    const props = {
      title: 'test',
      type: commentType,
      users: mockData[1].comments
    };
    const component = shallow(<MenuItem {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should render when length equals 2', () => {
    const props = {
      title: 'test',
      type: likeType,
      users: [
        {
          id: '1',
          name: ''
        },
        {
          id: '2',
          name: 'User 2'
        }
      ]
    };
    const component = shallow(<MenuItem {...props} />);
    expect(component).toMatchSnapshot();
  });
});
