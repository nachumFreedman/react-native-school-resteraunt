import types from '../Actions/types';

const INITIAL_STATE = {
	cart: [],
	user: '',
	coupon: [],
	grandTotal: 0,
	subTotal: 0,
	taxAmount: 0,
	couponDiscountPercentage: 0,
	deductedAmountByCoupon: 0,
	paymentOption: 'COD',
	createdAt: '',
};

export default (state = INITIAL_STATE, action) => {
	//console.log("cart-reducer->"+JSON.stringify(action));
	switch (action.type) {
		case types.ADD_CART_ITEM: {
			const isExisted = state.cart.some(cartItem => compareCartItem(cartItem, action.product));
			return Object.assign(
				{},
				state,
				isExisted
					? {
							cart: state.cart.map(item => cartItem(item, action)),
					  }
					: {
							cart: [...state.cart, cartItem(undefined, action)],
					  },
				{
					subTotalAmount: calculatePrice(state),
					subTotal: state.subTotal, // state.cart.map( item => calculatePrice( item )).toString(),
					grandTotal: Number(state.subTotal) + state.taxAmount,
				}
			);
		}

		case types.CLEAR_CART_ITEMS: {
			return { cart: [] };
		}

		case types.REMOVE_CART_ITEM: {
			const index = state.cart.findIndex(cartItem => compareCartItem(cartItem, action.product)); // check if existed
			return index == -1
				? state //This should not happen, but catch anyway
				: Object.assign(
						{},
						state,
						state.cart[index].quantity == 0
							? {
									cart: state.cart.filter(cartItem => !compareCartItem(cartItem, action.product)),
							  }
							: {
									cart: state.cart.map(item => cartItem(item, action)),
							  },
						{
							subTotalAmount: calculatePrice1(state),
							subTotal: state.subTotal, // state.cart.map( item => calculatePrice( item )).toString(),
							grandTotal: Number(state.subTotal) + state.taxAmount,

							// state.subTotal -
							// Number(
							//   action.variation === undefined ||
							//   action.variation == null ||
							//   action.variation.price === undefined
							//     ? action.product.price
							//     : action.variation.price
							// )
						}
				  );
			console.log('SubTotal----------->' + subTotal);
		}

		case types.DELETE_CART_ITEM: {
			const index1 = state.cart.findIndex(cartItem => compareCartItem(cartItem, action.product)); // check if existed
			return index1 == -1
				? state //This should not happen, but catch anyway
				: Object.assign({}, state, {
						cart: state.cart.filter(cartItem => !compareCartItem(cartItem, action.product)),
						subTotalAmount: calculatePrice(state),
						subTotal: state.subTotal, // state.cart.map( item => calculatePrice( item )).toString(),
						grandTotal: Number(state.subTotal) + state.taxAmount,
						// state.totalPrice -
						// Number(action.quantity) *
						//   Number(
						//     action.variation === undefined ||
						//     action.variation == null ||
						//     action.variation.price === undefined
						//       ? action.product.price
						//       : action.variation.price
						//   )
				  });
			//calculatePrice1(state);
		}

		case types.FETCH_CART_COUPON:
			return { ...state, coupon: action.payload };

		default:
			return state;
	}
};

const calculatePrice = state => {
	var subTotal = 0;
	var grandTotal = 0;
	console.log('subTotal-' + subTotal);
	state.cart.map(item => {
		subTotal = subTotal + item.itemTotalPrice;
		grandTotal = subTotal + state.taxAmount;
		console.log('subTotal-' + subTotal);
		state.subTotal = subTotal;
		state.grandTotal = grandTotal;
		return subTotal, grandTotal;
	});
};

const calculatePrice1 = state => {
	var subTotal = 0;
	var grandTotal = 0;
	console.log('subTotal-' + subTotal);
	state.cart.map(item => {
		item.itemTotalPrice = item.quantity * item.price;
		subTotal = subTotal + item.itemTotalPrice;
		grandTotal = subTotal + state.taxAmount;
		console.log('subTotal-' + subTotal);
		state.subTotal = subTotal;
		state.grandTotal = grandTotal;
		return subTotal, grandTotal;
	});
};

const compareCartItem = (cartItem, product) => {
	if (cartItem.productId === product.productId) {
		console.log('compare_cartItems is  TRUE!!');
	}
	return cartItem.productId === product.productId;
	// if (cartItem.sizeOption !== undefined && product.sizeOption !== undefined &&
	// cartItem.sizeOption != null && product.sizeOption != null)   return
	// cartItem.productId === product.productId && cartItem.sizeOption.pname ===
	// product.sizeOption.pname else
};

const cartItem = (
	state = {
		productId: undefined,
		itemTotalPrice: 0,
	},
	action
) => {
	console.log(' assign_cartItem--' + JSON.stringify(action));
	console.log(' assign_state--' + JSON.stringify(state));

	switch (action.type) {
		case types.ADD_CART_ITEM: {
			return state.productId === undefined
				? Object.assign({}, state, action.product, {
						itemTotalPrice: (action.product.quantity + 1) * Number(action.product.sizeOption.specialPrice),
						price: Number(action.product.sizeOption.specialPrice),
				  })
				: !compareCartItem(state, action.product)
					? state
					: Object.assign({}, state, {
							itemTotalPrice:
								(action.product.quantity + 1) * Number(action.product.sizeOption.specialPrice),
							quantity: action.product.quantity + 1,
					  });
		}

		case types.REMOVE_CART_ITEM:
			return !compareCartItem(state, action.product)
				? state
				: Object.assign({}, state, {
						quantity: action.product.quantity - 1,
						itemTotalPrice: state.quantity * Number(action.product.price),
				  });

		default:
			return state;
	}
};
