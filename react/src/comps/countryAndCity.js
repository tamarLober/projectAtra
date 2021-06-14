import React, { useState } from 'react'


const SelectCountry = (props) => {
    const { countries, selectCountry, setSelectCountry } = props;

    return (
        //תיבת בחירה שבתוכה כל המדינות שבמערך שהגיע מהאבא 
        <select onChange={(e) => setSelectCountry(e.target.value)}>
            <option disabled selected value>בחר מדינה</option>
            {countries.map((country, index) => (
                <option key={index} /*value={country}*/>{country}</option>
            ))}
        </select>
    )
}
const SelectCity = (props) => {
    const { cities, selectCity, setSelectCity,count } = props;

    return (
        //תיבת בחירה שבתוכה כל הערים שבמערך שהגיע מהאבא 
        <select key={count} onChange={(e) => setSelectCity(e.target.value)}>
            <option disabled selected value>בחר עיר</option>
            {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
            ))}
        </select>
    )
}


export default function CountryAndCity(props) {
    const countriesAndCities = {
        ישראל: ['ירושלים', 'תל אביב', 'רעננה'],
        ארהב: ['ניו יורק', 'וושינגטון'],
        דנמרק: ['קופנהגן', 'הירלוד', 'הולבורג']

    }
    const { city, country, page } = props;
    const [selectCountry, setSelectCountry] = useState();
    const [selectCity, setSelectCity] = useState();
    const [count,setCount] = useState(0);

    const countries = Object.keys(countriesAndCities)
    const cities = countriesAndCities[selectCountry];

    function replaceCountry(newCountry) {
        setSelectCountry(newCountry)
        setSelectCity(null)
        setCount(count+1)
    }
    function sendDetails() {
        city(selectCity)
        country(selectCountry)
        page(3)
    }

    return (
        <>
            <div>
                {cities && <p>בחרת :  {selectCountry} / {selectCity}</p>}
                <SelectCountry
                    countries={countries}
                    selectCountry={selectCountry}
                    setSelectCountry={replaceCountry}
                ></SelectCountry>
                <br></br>
                <br></br>
                {cities && <SelectCity
                    cities={cities}
                    selectCity={selectCity}
                    setSelectCity={setSelectCity}
                    count={count}
                ></SelectCity>}
            </div>
            <br></br>
            <button onClick={sendDetails}>אישור</button>
        </>
    )


}