import React, { useState } from 'react'

export default function Login(props) {
    const {name1,password1,numPage}=props;
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

    function Update(){
        name1(name);
        password1(password);
        numPage(2);
    }
    return (
        <>
            <h1>ברוכים הבאים</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="הכנס שם" />
            <br></br>
            <br></br>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="הכנס סיסמה" />
            <br></br>
            <br></br>
            <input type="text" onChange={(e) => setPhone(e.target.value)} placeholder="פלאפון" />
            <br></br>
            <br></br>
            <input type="text" onChange={(e) => setAge(e.target.value)} placeholder="הגיל שלך" />
            <br></br>
            <br></br>
            <input type="text" onChange={(e) => setHometown(e.target.value)} placeholder="עיר מגורים" />
            <br></br>
            <br></br>
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="אימייל" />
            <br></br>
            <br></br>
            <button onClick={Update}>אישור</button>
        </>

    )
}