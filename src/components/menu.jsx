import './styles/menu.css'
import { useDispatch, useSelector } from 'react-redux';
import { addPatty, removePatty, addCheese, removeCheese, addSalad, removeSalad } from '../redux/bill';
import { useNavigate } from 'react-router';


function Menu() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { total, itemCount } = useSelector(state => state.bill);

    const pattyAdd = () => {
        dispatch(addPatty())
    }
    const pattyRemove = () => {
        dispatch(removePatty())
    }
    const cheeseAdd = () => {
        dispatch(addCheese())
    }
    const cheeseRemove = () => {
        dispatch(removeCheese())
    }
    const saladAdd = () => {
        dispatch(addSalad())
    }
    const saladRemove = () => {
        dispatch(removeSalad())
    }

    const handleButtonClick = () => {
        navigate('/checkout')
    };

    return (
        <div className='menu'>
            <div className='menu-item'><button onClick={pattyAdd}>+</button>Patty x {itemCount.patty}<button onClick={pattyRemove}>-</button></div>
            <div className='menu-item'><button onClick={cheeseAdd}>+</button>Cheese x {itemCount.cheese}<button onClick={cheeseRemove}>-</button></div>
            <div className='menu-item'><button onClick={saladAdd}>+</button>Salad x {itemCount.salad}<button onClick={saladRemove}>-</button></div>
            <h2>Total: ${total}</h2>
            <button onClick={handleButtonClick}>Checkout</button>
            <br />

        </div>
    )
}
export default Menu;