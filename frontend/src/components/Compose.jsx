import React, { useState, useRef } from 'react';
import axios from 'axios';
import {StyleCompose} from './styles/Compose.styles';
// import styled from 'styled-components';


export default function Compose(props){
    const { compose, setCompose } = props;
    const [composeChar, setComposeChar] = useState('');
    const [author, setAuthor] = useState(props.author);
    const [authorSlug, setAuthorSlug] = useState(props.authorSlug);
    const [dateAdded, setDateAdded] = useState(new Date());
    const [twootLength, setTwootLength] = useState (140);
    const [counterVal, setCounterVal] = useState(true);
    const [twoots, setTwoots] = useState(props.setTwoots);
    const twootInput = useRef(null);
    // console.log('props',props);
    const handleSubmit = (event)=>{
        event.preventDefault();
        // console.log('compose props', props);
        console.log('twooted', composeChar);
        const newTwoot = {
            author:props.author,
            content: composeChar,
            authorSlug:props.authorSlug,
            dateAdded:dateAdded,
        };
        console.log('new compose',newTwoot);

        axios.post('http://localhost:8080/twoot',{ newTwoot })
        .then((res)=>{
            console.log('compose res',res);
            setCompose([...setTwoots, {...res.data}]);
            console.log('twoots', setCompose);
        })
        .catch((error)=> console.log('error',error));

        window.location.reload(false);
    };

    const handleInputChange = (e)=>{
        setComposeChar(e.target.value);
        
        const length = e.target.value.length;
        setTwootLength(140 - length);

        if(length >= 1 && length < 141){
            setCounterVal(true);
            document.getElementById('counter').style.color = '#000000';
        }else{
            setCounterVal(false);
            alert('Size of Twoot Exceeded, Please be more Concise');
            document.getElementById('counter').style.color = '#CD1818';
        }
    };

    function focusHandler() {
        twootInput.current.focus();
    }

    return (
        
        <div>
            <StyleCompose>
            <div className="focusBtn">
                <i className="fas fa-angle-double-down" onClick={focusHandler}></i>
            </div>
            <label className='compose-label' >Compose Twoot</label>
            <form action="" onSubmit={handleSubmit}>
                <input 
                id='compose'
                type="text" 
                value={compose}
                required
                className='input'
                onChange={handleInputChange}
                ref={twootInput}
                />
                <br></br>
                <button className='submitBtn' type='submit'>
                    Twoot
                </button>
                <label 
                id='counter'
                className='counter' 
                htmlFor="" >
                    {twootLength > 140 ? '-' + twootLength:twootLength}
                    </label>
            </form>
            </StyleCompose>
        </div>
       
    );
}