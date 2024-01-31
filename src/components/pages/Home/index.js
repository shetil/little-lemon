import Hero from '../../Hero';
import WeekSpecials from './WeekSpecials';
import Testimonials from './Testimonials';
import OurStory from './OurStory';
import { pagesMap } from '../../../pages';
import restaurantFoodImage from '../../../assets/restaurant-food.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Hero>
        <div>
        <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
  
          <p>
            Delicious Mediterranean food, 
            serve in a cosy European restaurant.
          </p>
          
          <div>
          <Link className="button-primary dark" to={pagesMap.get('booking').path}>
            Reserve a table
          </Link>
          </div>
          <img 
          className="hero-image" 
          src={restaurantFoodImage} 
          alt="Restaurant food" 
        />
      </Hero>
      <WeekSpecials />
      <Testimonials />
      <OurStory />
    </>
  );
};

export default Home;
