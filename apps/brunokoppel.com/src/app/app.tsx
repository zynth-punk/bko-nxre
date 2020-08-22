import React, { useEffect, useState } from 'react';

import { Message } from '@brunokoppel.com/api-interfaces';
import { TestLibrary } from '@brunokoppel.com/test-library';
import { Ui } from '@brunokoppel.com/ui';

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
        <Ui />
        <TestLibrary />
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
