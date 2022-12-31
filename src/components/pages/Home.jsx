//import { useSelector } from 'react-redux';
import { useGetAllproductsQuery } from '../../api/productAPI';
import './_pages.scss';

const Home = () => {
  //const { items, status } = useSelector(state => state.products);
  const {data, err, isLoading} = useGetAllproductsQuery();
  return (
    <div className='home'>
      { isLoading ? <p>Loading</p> : err ? <p>error</p> : (
        <>
          <h3>Products</h3>
          <div className='products'>
            {data?.map( product => <div key={product.id} className="product">
              <h5>{product.name + " " + product.item}</h5>
              <img src={product.image} alt={product.desc} />
              <div className='desc'>
                <span className='price'>${product.price}</span>
              </div>
              <button>Add to Cart</button>
            </div>)}
          </div>
        </>
      ) }
    </div>
  );
}

export default Home;
