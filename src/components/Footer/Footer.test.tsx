import { render } from '@testing-library/react';
import Footer from './index';

describe('components/Footer', () => {
  const mockComponent = (
    props = {}
  ) => {
    return (
      <Footer {...props} />
    );
  };

  it('renders authorship information', () => {
    const { getByRole } = render(mockComponent());
    expect(getByRole('contentinfo').textContent).toContain('C. Squire');
  })
})
