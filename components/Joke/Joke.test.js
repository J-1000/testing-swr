import {render, screen, waitFor} from '@testing-library/react'
import Joke from './index'
import useSWR from "swr";

jest.mock('swr', () => jest.fn());

test("renders a joke", () => {
	useSWR.mockImplementation(() => ({
        data: { joke: "This is a joke" }
    }));

	render(<Joke />);
	waitFor(() => {
		const jokeText = screen.getByText("This is a joke");
		expect(jokeText).toBeInTheDocument();
    });
  });