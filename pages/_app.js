import '../styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/home/home-page.scss";
import "../components/about/about.scss";
import "../components/contact/contact.scss";
import '../components/common/common.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
