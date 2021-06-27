import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Form = props => {
    
    const [inputNameValue, setInputNameValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');

    const getInputValue = e => {
        setInputNameValue(e.target.value);
    }
    
    const getTextAreaValue = e => {
        setTextAreaValue(e.target.value);
    }
    
    const sendNewComment = e => {
        e.preventDefault();

        if(inputNameValue.length === 0 || (!/[^\s]/.test(inputNameValue) || /^\s*$/.test(inputNameValue) || inputNameValue.replace(/\s/g,"") === "") &&
        textAreaValue.length === 0 || (!/[^\s]/.test(textAreaValue) || /^\s*$/.test(textAreaValue) || textAreaValue.replace(/\s/g,"") === "")) {
            return false;
        }

        axios.post('https://jordan.ashton.fashion/api/goods/30/comments', {
            id: props.comments.data[props.comments.data.length - 1].id + 1,
            name: inputNameValue,
            text: textAreaValue
        });

        setInputNameValue('');
        setTextAreaValue('');
    }


    return(
        <form className="form" action="">
            <input className="form__name" type="text" placeholder="Name" value={inputNameValue} onChange={getInputValue}/>
            <textarea className="form__textarea" placeholder="Text" value={textAreaValue} onChange={getTextAreaValue}/>
            <button className="form__btn" type="button" onClick={sendNewComment}>Send</button>
        </form>
    )
}

export default Form;