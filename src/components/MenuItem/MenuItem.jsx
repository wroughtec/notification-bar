// @flow
import React from 'react';
import { usersToDisplay } from 'consts/usersToDisplay';
import { Icon } from 'components/Icon/Icon';
import { user } from 'consts/iconIds';
import Truncate from 'react-truncate';
import { likeType, commentType } from 'consts/notificationTypes';
import './_c-menu-item.scss';

type Props = {
  title: string,
  type: string,
  users: LikeType | CommentType
};

export const MenuItem = ({ title, type, users }: Props) => {
  let remainingUsers = 0,
    namedUsers = '',
    text = '',
    post = '';

  if (type === likeType) {
    text = 'liked ';
    post = 'your post ';
  }

  if (type === commentType) {
    text = 'commented ';
    post = 'on your post ';
  }

  const username = 'User',
    userList = (item, i) => {
      let { name } = item;

      if (!name) {
        name = username;
      }

      let separator = ' ';

      if (i === 0 && users.length > usersToDisplay) {
        separator = ', ';
      } else if (i === 0 && users.length === usersToDisplay) {
        separator = ' and ';
      }

      namedUsers += `${name}${separator}`;

      return namedUsers;
    };

  if (users.length > usersToDisplay) {
    remainingUsers = users.slice(usersToDisplay).length;

    users.slice(0, usersToDisplay).map(userList);

    namedUsers += `and ${remainingUsers} others `;
  } else {
    users.map(userList);
  }

  return (
    <div className="c-menu-item">
      <div className="c-menu-item__obj">
        <Icon iconId={user} iconClass="c-menu-item__icon" />
      </div>
      <div className="c-menu-item__body">
        <span className="c-menu-item__users">{namedUsers}</span>
        {text}
        <strong className="c-menu-item__post">{post}</strong>
        <span className="c-menu-item__title">
          <Truncate lines={1}>{title}</Truncate>
        </span>
      </div>
    </div>
  );
};
