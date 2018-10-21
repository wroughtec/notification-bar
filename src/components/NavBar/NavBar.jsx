// @flow
import React, { Component } from 'react';
import { Icon } from 'components/Icon/Icon';
import { user } from 'consts/iconIds';
import { asyncFetch } from 'utils/asyncFetch';
import { Menu } from 'components/Menu/Menu';
import { Badge } from 'components/Badge/Badge';
import './_c-navbar.scss';

type State = {
  notifications: NotificationType[],
  unreadNotifications: number,
  loading: boolean,
  isMenuOpen: boolean,
  clearNotifications: boolean
};

export class NavBar extends Component<void, State> {
  state = {
    notifications: [],
    unreadNotifications: 0,
    loading: true,
    isMenuOpen: false,
    clearNotifications: false
  };

  async componentDidMount() {
    const getNotificaTions = await asyncFetch();

    this.addNotifcation(getNotificaTions);
  }

  addNotifcation: Function = (notifications: NotificationType[]) => {
    this.setState({
      notifications,
      unreadNotifications: notifications.length,
      loading: false
    });
  };

  onClick: Function = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { isMenuOpen, clearNotifications } = this.state;

    if (!clearNotifications) {
      this.setState({
        clearNotifications: true
      });
    } else {
      this.setState({ unreadNotifications: 0 });
    }

    if (!isMenuOpen) {
      this.setState(
        {
          isMenuOpen: true
        },
        () => {
          document.addEventListener('click', this.closeMenu);
        }
      );
    }
  };

  closeMenu: Function = () => {
    this.setState({ isMenuOpen: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  };

  render() {
    const { notifications, unreadNotifications, loading, isMenuOpen } = this.state;

    return (
      <nav className="c-navbar">
        <div className="c-navbar__container">
          <h2 className="c-navbar__title">Notification Bar</h2>
          {!loading && (
            <button type="button" className="c-navbar__btn" onClick={this.onClick}>
              <Icon iconId={user} iconClass="c-navbar__icon" />
              <Badge unreadNotifications={unreadNotifications} />
            </button>
          )}
        </div>
        {isMenuOpen && <Menu notifications={notifications} />}
      </nav>
    );
  }
}
