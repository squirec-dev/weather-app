import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchHero from './index';

describe('modules/SearchHero', () => {
  const mockComponent = (
    props = {},
  ) => {
    return (
      <SearchHero isExpanded={true} {...props} />
    );
  };

  it('renders a page title', async () => {
    const { getByRole } = render(mockComponent());
    const input = getByRole('searchbox');

    expect(input).toBeInTheDocument();

    userEvent.type(input, 'london');
  });

  it('renders an error', () => {
    const { getByText } = render(mockComponent({
      error: 'oops something went wrong',
    }));

    expect(
      getByText('oops something went wrong')
    ).toBeInTheDocument();
  });
})
