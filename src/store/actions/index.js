import axios from "axios";

export const getCatalog = (url, name) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(url);

      if (response.data) {
        dispatch({
          type: "SET_CATALOG",
          payload: {
            name: name,
            value: response.data,
          },
        });
      }
    } catch (error) {
      return error;
    }
  };
};

export const setCatalog = (url, data, onClose) => {
  return async (dispatch) => {
    try {
      let response = await axios.post(url, data);
      if (response.data) {
        dispatch({
          type: "SET_REGISTER_CATALOG",
          payload: response.data,
        });
        onClose();
      }
    } catch (error) {
      return error;
    }
  };
};

export const setFavorite = (url, data) => {
  return async (dispatch) => {
    try {
      let response = await axios.put(url, data);
      if (response.data) {
        dispatch({
          type: "SET_FAVORITE",
          payload: response.data,
        });
      }
    } catch (error) {
      return error;
    }
  };
};
