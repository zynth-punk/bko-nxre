import React from 'react';

import BKNavBar from './nav-bar/nav-bar';

import './ui.scss';

/* eslint-disable-next-line */
export interface UiProps {}

export const Ui = (props: UiProps) => {
  return (
    <div>
      <h1>Welcome to ui!</h1>
      <BKNavBar />
    </div>
  );
};

export default Ui;
