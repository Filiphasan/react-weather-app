import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Loading from './components/Loading/Loading';

const App = () => {
  const [datas, setDatas] = useState({});
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ msg: '', type: '' });

  const getDatas = () => {
    setLoading(true);
    setTimeout(() => {
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=bfc9399e5cd9455ca1e103248210703&q=${city}&days=3&lang=tr`).then(res => res.json()).
        then(data => setDatas(data), setLoading(false));
    }, 3000);
  }
  const onClickHandler = (e) => {
    if (city.trim() === '') {
      setAlert({ msg: 'Please Enter a Value', type: 'error' });
    } else {
      getDatas();
    }
  }

  return (
    <>
      <Navbar icon="fas fa-snowflake" text="Weather App" />
      <Search city={city} setCity={setCity} onClickHandler={onClickHandler} />
      <Loading loading={loading} />

    </>
  );
}

export default App;
