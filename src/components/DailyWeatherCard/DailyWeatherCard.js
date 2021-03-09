import React from 'react'
import './DailyWeatherCard.css'
import { getDateAndMonthWithName } from '../Helper';

const DailyWeatherCard = ({ daysData }) => {
    return (
        <div className="container">
            <div className="daily-weather-boxes">
                {
                    daysData.map(item => {
                        return (
                            <>
                                <div key={item.date} className="daily-weather-box">
                                    <div className="daily-weather">
                                        <h1>{getDateAndMonthWithName(item.date)}</h1>
                                        <div className="daily-weather-info">
                                            <div className="daily-state-info">
                                                <img src={item.day.condition.icon} className="daily-state-img" />
                                                <h5>{item.day.avgtemp_c}°</h5>
                                                <p>{item.day.condition.text}</p>
                                            </div>
                                        </div>
                                        <div className="daily-weather-details">
                                            <div className="daily-detail">
                                                <h4>{item.day.maxtemp_c}°</h4>
                                                <p>Max°</p>
                                            </div>
                                            <div className="daily-detail">
                                                <h4>{item.day.mintemp_c}°</h4>
                                                <p>Min°</p>
                                            </div>
                                            <div className="daily-detail">
                                                <h4>{item.day.maxwind_kph} kph</h4>
                                                <p>Max Wind</p>
                                            </div>
                                            <div className="daily-detail">
                                                <h4>{item.day.avghumidity}%</h4>
                                                <p>Humidity</p>
                                            </div>
                                            <div className="daily-detail">
                                                <h4>{item.day.daily_will_it_rain}%</h4>
                                                <p>Rain</p>
                                            </div>
                                            <div className="daily-detail">
                                                <h4>{item.day.uv}</h4>
                                                <p>UV</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default DailyWeatherCard;
