import React from 'react';
import { render } from '@testing-library/react';

import Postblock from './postblock';

describe(' Postblock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Postblock />);
    expect(baseElement).toBeTruthy();
  });
});
