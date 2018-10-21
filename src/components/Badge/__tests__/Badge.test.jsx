import fetchMock from 'fetch-mock';
import React from 'react';
import { shallow } from 'enzyme';
import { Badge } from 'components/Badge/Badge';

describe('Badge', () => {
  it('should render correctly with data', () => {
    const props = { unreadNotifications: 6 };
    const component = shallow(<Badge {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should not render without data', () => {
    const props = { unreadNotifications: 0 };
    const component = shallow(<Badge {...props} />);
    expect(component).toMatchSnapshot();
  });
});
