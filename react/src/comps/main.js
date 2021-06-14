import React, { useState } from 'react'

export default function Main(props) {
    const {  numPage } = props;

///אחכ לסדר בצורה נורמלית
    function sendDetails1() {
        numPage()
    }
    function sendDetails2() {
        
    }
    function sendDetails3() {
        
    }
    return (
        <>
            <h1>ברוכים הבאים</h1>
            <button onClick={sendDetails1}>Page1</button>
            <br />
            <br />
            <button onClick={sendDetails2}>Page2</button>
            <br />
            <br />
            <button onClick={sendDetails3}>Page3</button>
        </>

    )
}