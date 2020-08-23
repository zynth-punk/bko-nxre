import React from 'react';

import BKNavBar from './nav-bar/nav-bar';

import './ui.scss';

/* eslint-disable-next-line */
export interface UiProps {}

export const Ui = (props: UiProps) => {
  return (
    <div>
      <BKNavBar />
    </div>
  );
};

export default Ui;
