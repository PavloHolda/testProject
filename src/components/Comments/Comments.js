import React from 'react';
import CommentItem from './CommentItem/CommentItem'

const Comments = props => {
    return(
        <ul className="comment">
            {
                props.comments.data.filter((item, index) => index < props.countOfComments).map((item,index) => {
                    return(
                        <CommentItem
                            key={index}
                            oneComment={item}
                        />
                    )
                })
            }
        </ul>
    )
}

export default Comments;