import "./EyeVisual.css";
import {useState} from 'react';
import { ReactComponent as Eyebrow } from '../images/eyebrow.svg';
import { ReactComponent as Browbone} from '../images/browbone.svg';
import { ReactComponent as Eyelashes} from '../images/eyelashes.svg';





function EyeVisual(){
    //Skin color
    const [skin_color, setSkinColor] = useState('#ffffff'); 
    const handleSkinColorChange = (event) => {
        setSkinColor(event.target.value);
        const skinBackground = document.getElementById('eye-visual-box');
        skinBackground.style.backgroundColor = skin_color;
    };

    //Eyebrow color
    const [eyebrow_color, setEyebrowColor] = useState('#000000'); 
    const handleEyebrowColorChange = (event) => {
        setEyebrowColor(event.target.value);
    };

    //Browbone color
    const [browbone_color, setBrowboneColor] = useState('#000000'); 
    const handleBrowboneColorChange = (event) => {
        setBrowboneColor(event.target.value);
    };

    //Eyelashes color
    const [eyelashes_color, setEyelashesColor] = useState('#000000'); 
    const handleEyelashesColorChange = (event) => {
        setEyelashesColor(event.target.value);
    };
    return (
        <section>
            <section id="color-selectors">
                <label for="skin-color">Skin Color</label>
                <input type="color" value={skin_color} onChange={handleSkinColorChange} name="skin color"/>
                <label for="eyebrow-color">Eyebrow Color</label>
                <input type="color" value={eyebrow_color} onChange={handleEyebrowColorChange} name="eyebrow-color" />{/* 
                <label for="browbone-color">Browbone Color</label>
                <input type="color" value={browbone_color} onChange={handleBrowboneColorChange} name="browbone-color"/> */}
                <label for="browbone-color">Eyelash Color</label>
                <input type="color" value={eyelashes_color} onChange={handleEyelashesColorChange} name="eyelashes-color"/>
            </section>
            <section id="eye-visual-box">
                <section>
                <Eyebrow class="svg-image eyebrow" fill={eyebrow_color} />
                {/* <Browbone class="svg-image" fill={browbone_color} /> */}
                <Eyelashes class="svg-image" fill={eyelashes_color} /> 
                </section>
            </section>
        </section>
    )
}

export default EyeVisual;