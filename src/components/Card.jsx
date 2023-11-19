import './Card.css'
import lesbian from "../assets/lesbian.svg"
import trans from "../assets/trans.svg"
import github from "../assets/github.svg"
import twitter from "../assets/twitter.svg"
import youtube from "../assets/youtube.svg"
import steam from "../assets/steam.svg"
import twitch from "../assets/twitch.svg"
import kofi from "../assets/kofi.svg"

export default function Card(){
    return (
        <div className='card'>
            <p className="name">eosis</p>
            <p className="about"><b>web dev and CS enjoyer</b></p>
            <p className="personnal">19 yo / INFP / <span><img src={trans} className='flag'/> <img src={lesbian} className='flag'/></span></p>
            <div className="socials">
                <img src={github} className='logo' />
                <img src={twitter} className='logo' />
                <img src={youtube} className='logo' />
                <img src={steam} className='logo' />
                <img src={twitch} className='logo' />
                <img src={kofi} className='logo' />
            </div>
            <p className="email">hey@eosis.space</p>
        </div>
    )
}