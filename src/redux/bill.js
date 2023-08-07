import { createSlice } from "@reduxjs/toolkit";
import '../components/styles/burger.css';



export const billSlice = createSlice({
    name: "bill",
    initialState: {
        itemCount: {
            patty:0,
            cheese:0,
            salad:0,
            
        },
        ingredients: {
          patty:[],
          cheese:[],
          salad:[],
        }
        ,
        total: 0,
        hd:'normal',
       
    },

    reducers: {
        addPatty: (state) => {
            state.itemCount.patty += 1;
            state.total += 20;
            state.ingredients.patty.push(<div className={`patty-${state.hd}`}></div>);
          },
          removePatty: (state) => {
            if (state.itemCount.patty > 0) {
              state.itemCount.patty -= 1;
              state.total -= 20;
              state.ingredients.patty.pop();
            }
          },
          addCheese: (state) => {
            state.itemCount.cheese += 1;
            state.total += 10;
            state.ingredients.cheese.push(<div className={`cheese-${state.hd}`}></div>);
          },
          removeCheese: (state) => {
            if (state.itemCount.cheese > 0) {
              state.itemCount.cheese -= 1;
              state.total -= 10;
              state.ingredients.cheese.pop();
            }
          },
          addSalad: (state) => {
            state.itemCount.salad += 1;
            state.total += 5;
            state.ingredients.salad.push(<div className={`salad-${state.hd}`}></div>);
          },
          removeSalad: (state) => {
            if (state.itemCount.salad > 0) {
              state.itemCount.salad -= 1;
              state.total -= 5;
              state.ingredients.salad.pop();
            }
          },
          changeHd: (state, action) => {
            state.hd = action.payload;
            state.ingredients.patty.forEach((_, index) => {
              state.ingredients.patty[index] = <div className={`patty-${action.payload}`}></div>;
            });
            state.ingredients.cheese.forEach((_, index) => {
              state.ingredients.cheese[index] = <div className={`cheese-${action.payload}`}></div>;
            });
            state.ingredients.salad.forEach((_, index) => {
              state.ingredients.salad[index] = <div className={`salad-${action.payload}`}></div>;
            });
          },
    
        },
    });


    export const { addPatty, removePatty, addCheese, removeCheese, addSalad, removeSalad, changeHd } = billSlice.actions;
    export default billSlice.reducer;
  