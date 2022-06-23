import * as actionTypes from './actionTypes';
import axios from 'axios';
import { baseUrl } from './baseUrl';

export const addComment = (dishId, author, rating, comment) => dispatch => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    axios.post(baseUrl + 'comments', newComment)
        .then(res => res.data)
        .then(comment => dispatch(commentConcat(comment)))
}
export const commentConcat = (comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: comment
})


export const loadDishes = dishes => ({

    type: actionTypes.LOAD_DISHES,
    payload: dishes
})
export const commentLoading = () => ({

    type: actionTypes.COMMENTS_LOADING,
})
export const loadComments = comments => ({

    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})
export const dishesLoading = () => ({

    type: actionTypes.DISHES_LOADING,
})
export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());

        axios.get(baseUrl + "dishes")
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)))

    }
}
export const fetchComments = () => {
    return dispatch => {
        dispatch(commentLoading());

        axios.get(baseUrl + "comments")
            .then(response => response.data)
            .then(comments => dispatch(loadComments(comments)))

    }
}