import React from 'react';
import {StyleHeader} from './styles/Header.styles';

export default function Header(){
    return (
        <StyleHeader>
        <header>
            <div>
                <label class="title">Twootr</label>
                <label>
                    <span class="bold">Write </span>a New Twoot
                </label>
            </div>
            {/* <image></image> */}
        </header>
        </StyleHeader>
    );
}