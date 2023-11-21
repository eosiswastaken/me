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
                <a href="https://github.com/eosiswastaken" target='_blank' rel="noreferrer"><img src={github} className='logo' ></img></a>
                <a href="https://twitter.com/zoermdr" target='_blank' rel="noreferrer"><img src={twitter} className='logo' ></img></a>
                <a href="https://youtube.com/@eosiswastaken" target='_blank' rel="noreferrer"><img src={youtube} className='logo' ></img></a>
                <a href="https://steamcommunity.com/id/eosiswastaken/" target='_blank' rel="noreferrer"><img src={steam} className='logo' ></img></a>
                <a href="https://twitch.com/eosis_" target='_blank' rel="noreferrer"><img src={twitch} className='logo' ></img></a>
                <a href="https://ko-fi.com/eosiswastaken" target='_blank' rel="noreferrer"><img src={kofi} className='logo' ></img></a>
            </div>  
            <a className="email" href="mailto:hey@eosis.space">hey@eosis.space</a>
        </div>
    )
}