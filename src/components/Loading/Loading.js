import React from 'react'
import './Loading.css'

const Loading = ({ loading }) => {
    return (
        <>
            {
                loading && (
                    <div className="container">
                        <div className="loading">
                            <img src="https://weareiu.com/wp-content/uploads/2018/11/weather.gif" className="loading-img" alt="" />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Loading
