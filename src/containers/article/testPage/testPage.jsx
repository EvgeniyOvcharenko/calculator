import React from 'react';
import './testPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../../../../src/redux/modules/test.reducer.js';

function TestPage() {
  const count = useSelector(state => state.testReducer.value);
  const dispatch = useDispatch();

  return (
    <div className="test-page">
      <h1>Test</h1>
      <button onClick={() => dispatch(increment())} type="button">
        +
      </button>
      <p>value: {count}</p>
      <button onClick={() => dispatch(decrement())} type="button">
        -
      </button>
      <p>----</p>
      <button onClick={() => dispatch(incrementByAmount(5))} type="button">
        change to 5
      </button>
    </div>
  );
}

export default TestPage;
