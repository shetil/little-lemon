
const pages =  [
  {id: 'home',name:"Home",path: "/",nav: true},
  {id: 'menu',name:"Menu",path: "/menu",nav: true},
  {id: 'booking',name:"Booking",path: "/booking",nav: true},
  {id: 'bookingConfirmed',name:"Booking Confirmed",path: "/booking-confirmed"},
  {id: 'about',name:"About",path: "/about",nav: true},
  {id: 'login',name:"Login",path: "/login",nav: false}
];

export const pagesMap = new Map(pages.map((obj)=>[obj.id,obj]));
export const pagesNav =  pages.filter((page)=>page.nav);
export default pages;