import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Loading from './components/Loading/Loading';
import Alert from './components/Alert/Alert';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

const App = () => {
  const [datas, setDatas] = useState({});
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ msg: '', type: '', icon: '', visible: false });

  const getDatas = () => {
    setLoading(true);
    setTimeout(() => {
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=bfc9399e5cd9455ca1e103248210703&q=${city}&days=6`).then(res => res.json()).
        then(data => {
          setDatas(data);
          setLoading(false);
          checkData(data);
        });
    }, 1000);
  }
  const checkData = (data) => {
    if (!data.error) {
      setAlert({ msg: 'Keep calm everything is ok', type: 'success', icon: 'fas fa-thumbs-up', visible: true });
    } else {
      setAlert({ msg: 'Please Check The Value', type: 'warning', icon: 'fas fa-exclamation-circle', visible: true });
    }
  }

  const onClickHandler = (e) => {
    if (city.trim() === '') {
      setAlert({ msg: 'Please Enter a Value', type: 'error', icon: 'far fa-times-circle', visible: true });
    } else {
      getDatas();
    }
  }
  useEffect(() => {
    if (alert.visible) {
      setTimeout(() => {
        setAlert({ msg: '', type: '', icon: '', visible: false });
      }, 2000);
    }
  }, [alert])

  return (
    <>
      <Navbar icon="fas fa-snowflake" text="Weather App" />
      <Search city={city} setCity={setCity} onClickHandler={onClickHandler} />
      <Loading loading={loading} />
      <Alert type={alert.type} message={alert.msg} icon={alert.icon} visible={alert.visible} />
      <CurrentWeather datas={datas} />
    </>
  );
}

export default App;
