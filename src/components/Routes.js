import {
    Route, 
    Routes
  } from 'react-router-dom';
  import {pagesMap} from '../pages';
  import Home from './pages/Home';
  import Bookings from './pages/Bookings';
  import ConfirmedBooking from './pages/Bookings/ConfirmedBooking';
  import NotFound from './pages/NotFound';

const routes = ()=>{
    return (
        <Routes>
          <Route 
          path={pagesMap.get('home').path} 
          element={<Home />} 
        />
        <Route 
          path={pagesMap.get('about').path} 
          element={<NotFound />} 
        />
        <Route 
          path={pagesMap.get('menu').path} 
          element={<NotFound />} 
        />
        <Route path={pagesMap.get('booking').path} element={<Bookings />} />
        <Route path={pagesMap.get('bookingConfirmed').path} element={<ConfirmedBooking />} />
        <Route 
          path={pagesMap.get('login').path} 
          element={<NotFound />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
}

export default routes;