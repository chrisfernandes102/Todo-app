import { render } from '@testing-library/react';

import { DisplayTodos } from './DisplayTodos';

describe('DisplayTodos', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DisplayTodos />);
    expect(baseElement).toBeTruthy();
  });
});
