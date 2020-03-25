import React from 'react';

const DateBar = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleString('en-EN', options);

    return (

        <h1 style={{ textAlign : "center"}}>{today}</h1>

    )
}

export default DateBar