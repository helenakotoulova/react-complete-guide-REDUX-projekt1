import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
// pouzijeme hook useSelector, ktery nam umozni vybrat cast naseho storu
// existuje i useStore, kterym primo ziskame cely nas store. ale je vic convenient pouzit useSelector,
// a vybrat si jen cast storu, ktera nas zajima
// useDispatch je dalsi hook. ten pouzijeme pro dispatchovani akci.

import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  // tady si vybereme to, co chceme selectovat.
  // const counter = useSelector((state) => state.counter); // takhle to bylo predtim nez jsme meli vice Slicu. nyni to musi byt takhle:
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter); // tohle bylo pouvodne state.showCounter

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    // dame payload do increase metody. bud jen jako increase(5) nebo to muze byt i nejaky objekt increase({})
    dispatch(counterActions.increase(5)); // toolkit nam vytvori takovyhle objekt: {type: SOME_UNIQUE_IDENTIFIER, payload: 5}. jsou to automaticky vytvorene nazvy properties tohoto objektu.
    // => tzn. pak v indexu musime approchnout tuto hodnotu jako action.payload
  };

  // toggleCOunterHandler nam bude schovavat a zobrazovat nas counter.
  // stejne jako meneni hodnoty counteru, tak i tahle fíčura, by sly delat jen zde v teto komponente.
  // jde o local State. a taky by se to spravne melo delat jen v tehle komponennte. pomoci useState. ale tady se to ucime...
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/*
BEZ TOOLKITU:
import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';
// pouzijeme hook useSelector, ktery nam umozni vybrat cast naseho storu
// existuje i useStore, kterym primo ziskame cely nas store. ale je vic convenient pouzit useSelector,
// a vybrat si jen cast storu, ktera nas zajima
// useDispatch je dalsi hook. ten pouzijeme pro dispatchovani akci.

import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter); // tady si vybereme to, co chceme selectovat.
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({type: 'increment'})
  }

  const decrementHandler = () => {
    dispatch({type:'decrement'})
  }

  const increaseHandler = () => {
    dispatch({type: 'increase', value: 5})
  }

  // toggleCOunterHandler nam bude schovavat a zobrazovat nas counter.
  // stejne jako meneni hodnoty counteru, tak i tahle fíčura, by sly delat jen zde v teto komponente.
  // jde o local State. a taky by se to spravne melo delat jen v tehle komponennte. pomoci useState. ale tady se to ucime...
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };
*/
