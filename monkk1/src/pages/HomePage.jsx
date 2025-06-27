
import {useNavigate} from 'react-router-dom'
import ProductList  from '../componets/products/ProductList'

const HomePage =()=>{
    const navigate = useNavigate();

    const handleViewDatail = (product)=>{
    navigate(`/product/${product}`)
    }

    return (
        <div className='home-page'>
            <ProductList onViewDetail={handleViewDatail}/>
        </div>
    )
}
export default HomePage;