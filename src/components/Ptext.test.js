import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Ptext from './Ptext';

describe('Ptext test', () => {
  test('true === true', () => {
    expect(true).toBe(true);
  });

  test('renders children', () => {
    const renderedComp = render(<Ptext>Barni</Ptext>);

    expect(renderedComp.getByText('Barni')).toBeTruthy();
  });

  test('renders children', () => {
    const renderedComp = render(<Ptext>Almos</Ptext>);

    expect(renderedComp.getByText('Almos')).toBeTruthy();
  });

  test('renders children', () => {
    const renderedComp = render(
      <Ptext>
        <span>Almos</span>
      </Ptext>
    );

    expect(renderedComp.baseElement).toMatchSnapshot();
  });
});
