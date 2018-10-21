import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from '../Icon';

describe('Icon', () => {
  const defaultProps = {
    iconId: 'iconId',
    iconClass: 'iconClass',
    iconSize: ''
  };

  const generateProps = ({ iconId, iconClass, iconSize }) => ({
    iconId,
    iconClass,
    iconSize
  });

  let component, props;

  beforeEach(() => {
    props = generateProps(defaultProps);
    component = shallow(<Icon {...props} />);
  });

  test('Renders', () => {
    expect(component).toMatchSnapshot();
  });

  test('Class is correct', () => {
    expect(component.find('svg').hasClass(defaultProps.iconClass));
  });
});
