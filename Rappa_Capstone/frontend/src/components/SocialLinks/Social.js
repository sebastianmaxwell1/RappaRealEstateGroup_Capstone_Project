import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './Socials.css';


export default function Social() {
    return (
        <div className= "social-container">
            <h3 className="social-title" > Follow Rappa @</h3>
            <a
                href= "https://www.facebook.com/rappatherealtor"
                className="facebook social"
                >
                    <FontAwesomeIcon icon={faFacebook} size="4x" />
                </a>
                <a
                href= "https://www.instagram.com/rappa_realty_group/"
                className="instagram social"
                >
                    <FontAwesomeIcon icon={faInstagram} size="4x" />
                </a>
                
        </div>
    );
}








// import { FacebookButton, FacebookCount } from "react-social";
 
// export default function Social() {
 
//     let url = "https://www.facebook.com/rappatherealtor";
 
//     return (
//       <FacebookButton url={'https://www.facebook.com/rappatherealtor'} appId={appId} >
//         <FacebookCount url={url} />
//         {" Follow Rappa " + url}
//       </FacebookButton>
//     );
//   }

