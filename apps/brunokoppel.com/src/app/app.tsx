import React, { useEffect, useState } from 'react';

import { Message } from '@brunokoppel.com/api-interfaces';

import BKNavBar from './components/NavBar'

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <BKNavBar/>
        <h1>Welcome to brunokoppel.com!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
        />
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
