
import "./index.css";
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../../../utils/fakeAPI';
import {pagesMap} from '../../../pages';
import BookingForm from './BookingForm';
import Hero from '../../Hero';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes; 
};

const initializeTimes = initialAvailableTimes =>
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const Bookings = () => {
  const [
    availableTimes,
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);

  const navigate = useNavigate();

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate(pagesMap.get('bookingConfirmed').path);
  };

  return (
    <div className="bookings">
      <Hero>
        <div>
          <h1>Booking</h1>
          <h2>Reserve a table at our restaurant</h2>
        </div>
      </Hero>
      <BookingForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    </div>
  );
};

export default Bookings;
