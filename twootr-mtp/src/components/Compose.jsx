import React, { useState } from 'react';
import axios from 'axios';
import {StyleCompose} from './styles/Compose.styles';

export default function Compose(props){
    // Construct the Twoot Text
    const { compose, setCompose } = props;
    const [composeChar, setComposeChar] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log('twooted', composeChar);
        const newCompose = {
            compose: composeChar,
        };
        console.log('new compose',newCompose);
        axios.get('/Compose').then((res)=>{
            console.log('get twoots',res.data);
            setCompose(res.data);
        }).catch((error)=> console.log('error',error.response.data));
        axios.post('/Compose',{ newCompose: compose })
        .then((res)=>{
            console.log('compose res',res);
            setCompose([...compose, {...res.data}]);
            console.log('twoots', setCompose);
        }).catch((error)=> console.log('error',error.response.data));
    };
    const handleInputChange = (e)=>{
        setComposeChar(e.target.value);
    };
    return (
        <StyleCompose>
        <div>
            <label>Compose Twoot</label>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" 
                value={compose}
                required
                onChange={handleInputChange} />
                <br></br>
                <button type='submit'>
                    Twoot
                </button>
                <label htmlFor="">Counter</label>
            </form>
        </div>
        </StyleCompose>
    );
}