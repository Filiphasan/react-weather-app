import React from 'react'
import './Loading.css'

const Loading = ({ loading }) => {
    return (
        <>
            {
                loading && (
                    <div className="container">
                        <div className="loading">
                            <img src="https://support.lenovo.com/esv4/images/loading.gif" className="loading-img" alt="" />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Loading
