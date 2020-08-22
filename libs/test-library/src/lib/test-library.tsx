import React from 'react';

import './test-library.scss';

/* eslint-disable-next-line */
export interface TestLibraryProps {}

export const TestLibrary = (props: TestLibraryProps) => {
  return (
    <div>
      <h1>Welcome to test-library!</h1>
    </div>
  );
};

export default TestLibrary;
