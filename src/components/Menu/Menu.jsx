// @flow
import React from 'react';
import { likeType, commentType } from 'consts/notificationTypes';
import { MenuItem } from 'components/MenuItem/MenuItem';
import './_c-menu.scss';

type Props = {
  notifications: NotificationType[]
};

export const Menu = ({ notifications }: Props) => {
  let list = <li className="c-menu__item">No new notifications</li>;

  if (notifications && notifications.length) {
    list = notifications.map(notification => {
      const {
          type,
          post: { title, id },
          likes,
          comments
        } = notification,
        key = `${type}${id}`;
      let item = null;

      switch (type) {
        case likeType:
          item = <MenuItem users={likes} title={title} type={type} />;
          break;
        case commentType:
          item = <MenuItem users={comments} title={title} type={type} />;
          break;
        default:
          item = null;
      }

      return (
        <li key={key} className="c-menu__item">
          {item}
        </li>
      );
    });
  }

  return (
    <aside className="c-menu">
      <ul className="c-menu__list">{list}</ul>
    </aside>
  );
};
