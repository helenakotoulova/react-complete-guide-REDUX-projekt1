// import { createStore } from "redux"; // tohle jme pouzivali kdyz jsme nemeli toolkit. ted pouzivame configureStore.
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// takhle to jde zapsat: const store = createStore(counterSlice.reducer); // ten nas reducer je vlastne vice reduceru v jednom.
// ale problem by byl, kdybychom meli vice slicu. protoze do createStore jde zapsat jen jeden reducer.
// proto pouzijeme configureStore
// do configure objektu zapiseme reducer. opet to musi byt ve vysledku jen jeden reducer. ale muzeme to zapsat nasledovne, aby vznikla mapa reduceru.
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
  //takhle to bylo predtim nez jsme to splittli do vice slozek: reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, // ty reducery se pak mergnou do jednoho velkeho reduceru.
  // reducer: counterSlice.reducer, //kdyz jsme meli jen counter, tak to sl ozapsat takhle, protoze mame jen jeden slice.
});

// dispatching actions - puvodne to bylo zde, pred splittnutim do vice slozek.
//counterSlice.actions.toggleCounter() // it will create an action obejct with unique identifiers.
//export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;

//---------------------------------------------------------------------------------------------------------
// postupne tento soubor zacinal nabobtnavat a je slozitejsi handlovat ty states. proto pouzivame redux Toolkit.
// instalace redux toolkitu: npm install @reduxjs/toolkit

/*
Takhle to bylo pomoci if checks a reducers, tzn. bez REDUX TOOLKIT.
const counterReducer = (state = initialState, action) => {
  // default state je InitialState

  // pomoci reduxu vzdycky overwritujeme stary stav nejakym novym stavem.
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter, // tohle nechame stejnee (tedy state). kdyz bychom to tady nenapsali,
      // tak by to bylo undefined, coz se bere jako false, takze by ten counter zmizel.
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);
*/

/*
DULEZITA POZNAMKA:
NIKDY NESMIME MUTOVAT STATE:
Tohle je spatne:
if (action.type === 'increment') {
    state.counter++; // NEMUZEME MUTOVAT STAV. JEN VYTVARET NOVE OBJEKTY.
    return state;
}

I tohle je spatne: 
if (action.type === 'increment') {
    state.counter++;
    return {
        counter: state.counter,
        showCounter: state.showCounter,
    };
}
*/
