import React from 'react';
import './CommentItem.scss';

const CommentItem = props => {
    return(
        <li className="comment__item">
            <span className="comment__name">Name: {props.oneComment.name}</span>
            <p className="comment__text">Text: {props.oneComment.text}</p>
        </li>
    )
}

export default CommentItem;