import React from 'react'
import "./Test4.css"

const Test4 = () => {
  return (
    <div>
        <div className="login">
                <div className="all">
                    <h1>Sign in</h1>
                    <div className="username">
                    <h4>USERNAME</h4>
                    <input placeholder='      Username' type="text" />
                    </div>
                    <div className="password">
                    <h4>PASSWORD</h4>
                    <input placeholder='      Password' type="text" />
                    </div>
                </div>
                <button>Sign in</button>
                <a href="" className='rem'>Remember Me</a>
                <a href="" className='for' >Forgot Password</a>
        </div>
    </div>
  )
}

export default Test4