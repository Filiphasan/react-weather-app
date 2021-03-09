import React from 'react'
import DailyWeatherCard from '../DailyWeatherCard/DailyWeatherCard';
import { getDateAndMonthWithName } from '../Helper';
import './CurrentWeather.css'

const CurrentWeather = ({ datas }) => {
    if (datas.location) {
        const { location, current, forecast } = datas;
        return (
            <>
                <div className="container">
                    <div className="current-info">
                        <div className="current-info-title">
                            <h1 className="current-name"><i className="fas fa-map-marker-alt"></i> {location.name}, {location.country}</h1>
                            <h2 className="current-date"><i className="far fa-calendar-alt"></i> {getDateAndMonthWithName(location.localtime)}</h2>
                        </div>
                        <div className="current-info-body">
                            <div className="current-state">
                                <img src={current.condition.icon} className="state-img" />
                                <div className="state-info">
                                    <h3>{current.temp_c}°</h3>
                                    <p>{current.condition.text}</p>
                                </div>
                            </div>
                            <div className="current-details">
                                <div className="current-details-content">
                                    <div className="current-details-info">
                                        <h4>{current.feelslike_c}°</h4>
                                        <p>Feels</p>
                                    </div>
                                    <div className="current-details-info">
                                        <h4>{current.wind_kph} kph</h4>
                                        <p>Wind</p>
                                    </div>
                                    <div className="current-details-info">
                                        <h4>{current.pressure_mb} bar</h4>
                                        <p>Pressure</p>
                                    </div>
                                    <div className="current-details-info">
                                        <h4>{current.humidity}%</h4>
                                        <p>Humidity</p>
                                    </div>
                                    <div className="current-details-info">
                                        <h4>{current.uv}</h4>
                                        <p>UV</p>
                                    </div>
                                    <div className="current-details-info">
                                        <h4>{current.cloud}%</h4>
                                        <p>Cloud</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DailyWeatherCard daysData={forecast.forecastday} />
            </>
        )
    } else {
        return (
            <img src="https://i.gifer.com/KH8F.gif" className="default-img" alt="" />
        )
    }
}

export default CurrentWeather
