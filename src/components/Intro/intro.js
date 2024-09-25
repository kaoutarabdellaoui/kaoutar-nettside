import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from'../../assets/hire.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id = "intro">
            <div className="introContent">
                <span className="Hei" >Hei,</span>
                <span className="introText"> jeg er <span className="introName">Kaoutar</span> <br/>Tredjeårs informatikk-student</span>
                <p className="introPara">Jeg brenner for å lage brukervennlig og effektiv programvare, og elsker å løse komplekse utfordringer gjennom kreativ koding. </p>
                <Link><button className="btn"><img src = {btnImg} alt=""/>Ansett Meg</button></Link>
            </div>
            <img id="profil" src = {bg} alt="Profile" />
        </section>

    )
}

export default Intro;