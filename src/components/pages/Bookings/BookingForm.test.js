import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('Booking form', () => {
  const availableTimes = ['17:00', '17:30'];
  const submitData = jest.fn();
  const today = new Date().toISOString().split('T').shift();

  test('check form fields and values', async () => {
    render(
      <BookingForm availableTimes={availableTimes} submitData={submitData} />
    );

    const submitButton = screen.getByRole('button');

    const dateInput = screen.getByLabelText(/Date/);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');

    expect(dateInput).toHaveValue(today);

    const timeSelect = screen.getByLabelText(/Time/);
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveValue();

    const numberGuests = screen.getByLabelText(/Number of guests/);
    expect(numberGuests).toBeInTheDocument();
    expect(numberGuests).toHaveAttribute('type', 'number');
    expect(numberGuests).toHaveValue(1);

    const occasionSelect = screen.getByLabelText(/Occasion/);
    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveValue();

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeEnabled();
  });

  test('Form submit', () => {
    render(
      <BookingForm availableTimes={availableTimes} submitData={submitData} />
    );

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(submitData).toHaveBeenCalledWith({ 
      date: today, 
      time: availableTimes[0], 
      numberOfGuests: 1, 
      occasion: 'Birthday', 
    });
  });

});
