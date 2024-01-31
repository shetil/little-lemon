import { useEffect, useState } from 'react';
import FormField from './FormField';
import PrimaryButton from '../../PrimaryButton';
import * as Yup from 'yup';

const BookingForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData
}) => {
  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ['Birthday', 'Anniversary','Business'];
  const today = new Date().toISOString().split('T').shift();

  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [errors,setErrors] = useState({date: null, time: null, numberOfGuests: null, occasion: null});

  const [
    numberOfGuests, 
    setNumberGuests
  ] = useState(minimumNumberOfGuests);
  const [occasion, setOccasion] = useState(occasions[0]);

  const reservationSchema = Yup.object().shape({
    date: Yup.date().min(today).required('Date is required'),
    time: Yup.string().matches(/^\d{2}:\d{2}/,'Invalid time').required(),
    numberOfGuests: Yup.number().min(minimumNumberOfGuests,'Needs to be at least 1 guest').max(maximumNumberOfGuests,'Maximum 10 guests').required('Needs to be at least 1 guest'),
    occasion: Yup.string().required()
  });

  const handleDateChange = e => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
    setTime(availableTimes[0]);
  };

  const handleTimeChange = e => setTime(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try{
      const reservation =  await reservationSchema.validate({date,time,numberOfGuests,occasion},{abortEarly: false});
      submitData(reservation);
    }catch(e){
      const newErrors = e.inner.reduce((acc,error)=>{acc[error.path] = error.message; return acc; },{});
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormField 
        label="Date" 
        htmlFor="booking-date" 
        errorMessage={errors.date}
      >
        <input 
          type="date" 
          id="booking-date" 
          name="booking-date" 
          onChange={handleDateChange}
        />
      </FormField>
      <FormField 
        label="Time" 
        htmlFor="booking-time" 
        errorMessage={errors.time}
      >
        <select 
          id="booking-time" 
          name="booking-time" 
          value={time} 
          onChange={handleTimeChange}
        >
          {availableTimes.map(times => 
            <option data-testid="booking-time-option" key={times}>
              {times}
            </option>
          )}
        </select>
      </FormField>
      <FormField 
        label="Number of guests" 
        htmlFor="booking-number-guests" 
        errorMessage={errors.numberOfGuests}
      >
        <input 
          type="number" 
          id="booking-number-guests" 
          name="booking-number-guests" 
          value={numberOfGuests} 
          onChange={e => setNumberGuests(e.target.value)}
        />
      </FormField>
      <FormField 
        label="Occasion" 
        htmlFor="booking-occasion" 
        errorMessage={errors.occasion}
      >
        <select 
          id="booking-occasion" 
          name="booking-occasion" 
          value={occasion} 
          required={true} 
          onChange={e => setOccasion(e.target.value)}
        >
          {occasions.map(occasion => 
            <option data-testid="booking-occasion-option" key={occasion}>
              {occasion}
            </option>
          )}
        </select>
      </FormField>
      <PrimaryButton type="submit">
        Make your reservation
      </PrimaryButton>

    </form>
  );
};

export default BookingForm;
