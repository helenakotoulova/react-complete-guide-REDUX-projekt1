import {createSlice} from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// pomoci createSlice delame slice naseho global state.
// kazdy slice musi mit svuj name, initialState a reducers (metody), ktere tento slice potrebuje.
// PRI POUZITI TOOLKITU UZ NEPOTREBUJEME IF CHECKS. VYLOZENE JEN PISEME METODY.
// NAVIC MUZEME MUTOVAT STATE!!!!!!!!! ALE NE PRIMO. napiseme napr. state.counter++, coz je vlastne spatne. Ale redux Toolkit ma dalsi
// package, pomoci ktereho si naclonuje stav a nedojde k mutovani stavu, nasledne prepise jen to, co my menime in immutable way. takhle se nam zjednodusi prace. nemusime pokazde opisovat stavovy objekt.
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState, 
  // puvodne jsme meli jen jeden slice a tim padem jeden initial state, ktery jsme nazvali initialState. pak jsme to pomoci moderniho JS mohli zapsat jen jako initialState. pomoci stareho zpusobu: initialState: initialState,
  // ted mame vice slice a vice initialStatu, tzn musime to zapsat takhle. nejde jen initialCounterState.
  reducers: {
    // vsechny reducers muzou mit v inputu state a action. u incremenetu a decrementu jsme ale action nepotrebovali.
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // zde to nezapisujeme jako cast objektu (tzn. state.counter: state.counter+1), ale vylozene prepisujeme state.counter = ...
      // bereme payload (automaticky vytvorene v tom objektu). ne value.
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer; // muzeme exportovat jen ten reducer. to je jedine o co nam vlastne jde.