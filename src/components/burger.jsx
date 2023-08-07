import React from 'react';
import Menu from './menu';
import { useSelector, useDispatch } from "react-redux";
import { changeHd } from '../redux/bill';

function Burger() {

  const { ingredients, hd } = useSelector(state => state.bill);
  const dispatch = useDispatch();
  const handleHd = () => { dispatch(changeHd(hd === 'hd' ? 'normal' : 'hd')) }

  return (


    <div >
      <button onClick={handleHd}>HD</button>
      <div className='burger'>
        <div className={`burger-top-${hd}`}></div>
        {ingredients.cheese.length + ingredients.salad.length + ingredients.patty.length === 0 ? <h3>Make Your Burger</h3> : <></>}
        {ingredients.cheese}
        {ingredients.patty}
        {ingredients.salad}
        <div className={`burger-bottom-${hd}`}></div>
      </div>
      <Menu />
    </div>

  )
}

export default Burger;