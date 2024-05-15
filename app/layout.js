import Footer from './component/Footer';
import Navbar_com from './component/Navbar_com';
import './globals.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar_com/>
        {children}
        <Footer/>
      </body>
      
  
   
    </html>
  );
}
