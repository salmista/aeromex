const reducer = (state, action) => {
	switch (action.type) {
		case "SET_CATALOG":
			return {
				...state,
				[action.payload.name]: action.payload.value,
			};

		case "SET_REGISTER_CATALOG":
			return {
				...state,
				personajes: [...state.personajes, action.payload],
			};

		case "SET_FAVORITE":

			let value = action.payload;
			let rest = state.personajes;
			let indexItem = rest.findIndex((row) => row.id === value.id);
			rest.splice(indexItem, 1, value);

			return {
				...state,
				personajes: [...rest],
			};

		default:
			return state;
	}
};

export default reducer;
