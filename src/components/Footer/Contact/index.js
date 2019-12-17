import React from 'react'

import icon1 from '../../../assets/icons8-facebook-64.png'
import icon2 from '../../../assets/icons8-instagram-64.png'
import icon3 from '../../../assets/icons8-twitter-64.png'

const Contact = () => {
    return (
        <div className="contact d-flex justify-content-center py-4">
            <img src={icon1} alt=''/>
            <img src={icon2} alt=''/>
            <img src={icon3} alt=''/>            
        </div>
    )
}

export default Contact