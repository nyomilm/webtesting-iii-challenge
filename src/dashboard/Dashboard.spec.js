import React from 'react';
import Dashboard from './Dashboard';
import { render } from '@testing-library/react';


test("component renders", () => {
    render(<Dashboard />);
  });

  test('Dashboard renders with gate', () => {
      const { getByText } = render(<Dashboard />);

      //dahsboard renders with gate
      getByText(/unlocked/i);
      getByText(/lock gate/i);
      getByText(/open/i);
      getByText(/closed gate/i);

      
  });
// Test away