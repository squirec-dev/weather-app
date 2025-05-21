import { render } from '@testing-library/react';
import * as data from '@/mocks/WeatherApiSuccess.json';
import ForecastDisplay from './index';

describe('components/ForecastDisplay', () => {
  const mockComponent = (
    props = {},
  ) => {
    return (
      <ForecastDisplay data={data} {...props} />
    );
  };

  it('renders a page title', () => {
    const { getByRole } = render(mockComponent());
    expect(getByRole('heading', { level: 2 }).textContent).toBe(
      'The weather is overcast in London, United KingdomLast updated 04/08/2023'
    );
  });

  it('renders an easter egg', () => {
    const { getByText } = render(mockComponent({
      data: {
        ...data,
        current: {
          ...data.current,
          condition: {
            ...data.current.condition,
            text: 'mostly rainy',
          },
        },
      },
    }));
    expect(getByText('Perfect weather for ducks!')).toBeInTheDocument();
  });
})
