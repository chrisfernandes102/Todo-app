import { render } from '@testing-library/react';
import { Todos } from '../Todos';

describe('Todos', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Todos />);
    expect(baseElement).toBeTruthy();
  });
});
