// @flow

import React from 'react';
import './_c-badge.scss';

type Props = {
  unreadNotifications: number
};

export const Badge = ({ unreadNotifications }: Props) => {
  if (!unreadNotifications) return null;

  return <span className="c-badge">{unreadNotifications}</span>;
};
