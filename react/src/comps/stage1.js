import React, { useState } from 'react';
import Main from './main'
import Stage2 from './stage2'
import Stage3 from './stage3'
import CountryAndCity from './countryAndCity'

//parent component
export default function Stage1() {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [country, setCountry] = useState(null);
    const [city, setSCity] = useState(null);
    const [age, setAge] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(0);

    return (
        <>{page == 0 ?
            <Main></Main>

            : page == 1 ?
                <Stage2
                    name1={setName}
                    password1={setPassword}
                    page1={setPage}
                    age={setAge}
                    phone={setPhone}
                    email={setEmail}
                ></Stage2>

                : page == 2 ?
                    <CountryAndCity
                        city={setSCity}
                        country={setCountry}
                        page={setPage}
                        age={setAge}
                        phone={setPhone}
                        email={setEmail}
                    ></CountryAndCity>

                    : page == 3 ?
                        <Stage3
                            name1={setName}
                            password1={setPassword}
                            page1={setPage}
                            age={setAge}
                            phone={setPhone}
                            email={setEmail}
                        ></Stage3>

                        : <div>
                            <h1>שלום {name}</h1>
                            <h2>הסיסמה שלך היא: {password}</h2>
                            <h3>אתה גר במדינת {country} בעיר {city}</h3>
                            <h4>הגיל שלך הוא{age}</h4>
                            <h5>פלאפון :{phone}</h5>
                            <h6>מייל :{email}</h6>
                        </div>
        }
        </>
    )
}

