import React from 'react';
import dateFormat from 'dateformat';
import Loading from './Loading';
const LoadComments = (props) => {
    return (

        props.comments.map(comment => {
            if (props.CommentsIsLoading) {
                return <Loading />
            }
            else {
                return (
                    <div key={comment.id}>
                        <h5>{comment.author}</h5>
                        <p>{comment.comment}</p>
                        <p>Ratting: {comment.rating}</p>
                        <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                    </div>
                );
            }


        })

    );
};

export default LoadComments;