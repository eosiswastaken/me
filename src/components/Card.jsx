import './Card.css'
import lesbian from "../assets/lesbian.svg"
import trans from "../assets/trans.svg"

export default function Card(){
    return (
        <div className='card'>
            <p className="name">eosis</p>
            <p className="about"><b>web dev and CS enjoyer</b></p>
            <p className="personnal">19 yo / INFP / <span><img src={trans} className='flag'/> <img src={lesbian} className='flag'/></span></p>
            <div className="socials"></div>
            <p className="email">hey@eosis.space</p>
        </div>
    )
}