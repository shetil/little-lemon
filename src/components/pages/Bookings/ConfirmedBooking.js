import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hero from '../../Hero';

const ConfirmedBooking = () => {
  return (
    <section>
    <Hero>
        <div>
          <h1>Booking</h1>
          <h2>Your reservation is confirmed</h2>
        </div>
      </Hero>
    <div className="container confirmed-booking">
      <h2>Your reservation has been confirmed.</h2>
      <p>You will receive an email with all the details.</p>
    </div>
    </section>
  );
};

export default ConfirmedBooking;
