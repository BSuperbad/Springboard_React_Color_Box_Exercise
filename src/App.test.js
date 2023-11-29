import { render } from '@testing-library/react';
import App from './App';

it("renders App without crashing", function () {
    render(<App />);
});

it("matches App snapshot", function() {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});
