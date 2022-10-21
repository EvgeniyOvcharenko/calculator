import { configureStore } from '@reduxjs/toolkit';
import testReducer from './modules/test.reducer';
import calculator from './modules/calculator.reducer';

export default configureStore({
  reducer: { testReducer, calculator }
});
