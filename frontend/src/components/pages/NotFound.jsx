import './_pages.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <h3>Page not found</h3>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default NotFound;
