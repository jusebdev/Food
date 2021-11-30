import axios from "axios";
 export const GET_RECIPES = "GET_RECIPES";
//  export const SELECTED_RECIPE = "SELECTED_RECIPE";
//  export const REMOVE_SELECTED_RECIPE = "REMOVE_SELECTED_RECIPE";
 export const GET_DIETS = "GET_DIETS";
 export const GET_BY_ID = "GET_BY_ID";
 export const GET_BY_NAME = "GET_BY_NAME";
 export const CREATE_RECIPES = "CREATE_RECIPE";


//shortcuts enf / edf / rfce
export const getRecipes = () => {
  return async function (dispatch) {
    let get = await axios.get("http://localhost:3001/recipes/"); console.log(get.data)
    return dispatch({
      type: GET_RECIPES,
      payload: get.data,
    });
  };
};


export const getByName = (name) => {
  return async function (dispatch) {
    let get = await axios.get("http://localhost:3001/recipes?name="+ name);
    return dispatch({
      type: "GET_BY_NAME",
      payload: get.data,
    });
  };
};
export const getById = (id) => {
  return async function (dispatch) {
    let get = await axios.get("http://localhost:3001/recipes/"+ id);
    return dispatch({
      type: "GET_BY_ID",
      payload: get.data,
    });
  };
};
