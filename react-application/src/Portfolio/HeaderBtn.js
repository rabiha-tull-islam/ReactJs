import React, { useState } from 'react';
import "../App.css"
// import {Row} from 'react-bootstrap'
const HeaderBtn = () => {
    const [flag, setflag] = useState(false)
    const changeFlag=()=>{
        setflag(!flag)

    }
    return (

        <div>

            <div>
                <a className=" Header_btn" onClick={changeFlag}> <span className='Text_color'>View My Work</span>  {flag ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -4.5 24 24" width="24" fill="currentColor"><path d="M8 11.243l3.95-3.95a1 1 0 1 1 1.414 1.414l-5.657 5.657a.997.997 0 0 1-1.414 0L.636 8.707A1 1 0 1 1 2.05 7.293L6 11.243V1.657a1 1 0 1 1 2 0v9.586z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24" width="24" fill="currentColor"><path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z"></path></svg>}
                </a>

            </div>




        </div>
    )
}

export default HeaderBtn
