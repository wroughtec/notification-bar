import fetchMock from 'fetch-mock';
import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from 'components/NavBar/NavBar';
import mockData from 'mocks/test-mocky.json';

fetchMock.get('*', JSON.stringify([...mockData]));

describe('NavBar', () => {
  let component;

  beforeEach(async () => {
    component = await shallow(<NavBar />);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('loading has complete', () => {
    expect(component.state().loading).toEqual(false);
  });

  it('notification data should be in local state', () => {
    expect(component.state().notifications).toMatchObject([...mockData]);
  });

  it('notification length should equal 6', () => {
    expect(component.state().unreadNotifications).toEqual(6);
  });

  it('menu state is open when button clicked', async () => {
    await component.find('button').simulate('click', { preventDefault() {} });

    expect(component.state().isMenuOpen).toEqual(true);
    expect(component.state().clearNotifications).toEqual(true);
  });

  it('unreadNotifications are cleared when button clicked twice', async () => {
    await component.find('button').simulate('click', { preventDefault() {} });
    await component.find('button').simulate('click', { preventDefault() {} });

    expect(component.state().unreadNotifications).toEqual(0);
  });
});
