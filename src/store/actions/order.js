import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurgerStart = (order) => {
  return dispatch => {
    axios.post('/orders.json', order)
      .then((res) => {
        dispatch(purchaseBurgerSuccess(res.data, order));
      })
      .catch((err) => {
        dispatch(purchaseBurgerFail(err));
      });
  }
};