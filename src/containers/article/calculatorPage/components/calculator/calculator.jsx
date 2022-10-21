import React from 'react';
import './calculator.scss';
import NumButton from './numButton/numButton';
import { useSelector, useDispatch } from 'react-redux';
import OperationButton from './operationButton/operationButton';
import { saveResult } from '../../../../../redux/modules/calculator.reducer.js';
import {
  resultPlus,
  resultMinus,
  resultMultiply,
  resultDivide
} from './resultFunctions.js';

function Calculator() {
  const storeValue = useSelector(state => state.calculator.value);
  const dispatch = useDispatch();

  const handlerAction = key => {
    const val = getValueByAction(key);
    dispatch(saveResult(val));
  };

  const handlerInput = newNum => {
    const val = getValue(newNum);
    dispatch(saveResult(val));
  };

  const getValue = newNum => {
    if (storeValue.includes('.') && newNum === '.') {
      return storeValue;
    } else if (newNum === '.' && storeValue === '0') {
      return '0.';
    } else if (newNum === '0' && storeValue === '0') {
      return '0';
    } else {
      if (storeValue === '0') {
        return newNum;
      } else {
        return storeValue + newNum;
      }
    }
  };

  const getValueByAction = key => {
    if (key === 'C') {
      return '0';
    } else if (storeValue.length < 15) {
      if (
        (key === '+' || key === '-' || key === '/' || key === '*') &&
        (storeValue.includes('+') ||
          (storeValue.includes('-') && storeValue[0] !== '-') ||
          storeValue.includes('/') ||
          storeValue.includes('*'))
      ) {
        return storeValue;
      } else if (key === '=' && storeValue.includes('+')) {
        return resultPlus(storeValue);
      } else if (
        key === '=' &&
        storeValue.includes('-') &&
        storeValue.split('-').length - 1 == 2
      ) {
        return resultMinus(storeValue);
      } else if (key === '=' && storeValue.includes('*')) {
        return resultMultiply(storeValue);
      } else if (key === '=' && storeValue.includes('/')) {
        return resultDivide(storeValue);
      } else if (key === '=' && storeValue.includes('-')) {
        return resultMinus(storeValue);
      } else if (
        key === '=' &&
        (!storeValue.includes('+') ||
          !storeValue.includes('-') ||
          !storeValue.includes('/') ||
          !storeValue.includes('*'))
      ) {
        return storeValue;
      } else {
        return storeValue + key;
      }
    }
  };

  return (
    <div className="calculator">
      <input
        readOnly="readonly"
        className="calculator__display"
        type="text"
        onChange={() => {}}
        value={storeValue}
      />
      <div className="calculator__button-box">
        <div className="calculator__operand-box">
          <NumButton handlerInput={handlerInput} />
        </div>
        <div className="calculator__operator-box">
          <OperationButton handlerAction={handlerAction} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
