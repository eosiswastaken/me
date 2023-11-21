import './Card.css'
import lesbian from "../assets/lesbian.svg"
import trans from "../assets/trans.svg"

import socials from "../socials.js"

export default function Card(){
    const socialsElements = socials.map((social) => {
        return <a key={social.id} href={social.link} target='_blank' rel='noreferrer'><img src={social.logo} className='logo'></img></a>
    })
    return (
        <div className='card'>
            <p className="name">eosis</p>
            <p className="about"><b>web dev and CS enjoyer</b></p>
            <p className="personnal">19 yo / INFP / <span><img src={trans} className='flag'/> <img src={lesbian} className='flag'/></span></p>
            <div className="socials">
                {socialsElements}
            </div>  
            <a className="email" href="mailto:hey@eosis.space">hey@eosis.space</a>
        </div>
    )
}