import "./EyeVisual.css";
import {useState, useEffect} from 'react';
import { ReactComponent as Eyebrow } from '../images/eyebrow.svg';
import { ReactComponent as Eyelashes} from '../images/eyelashes.svg';
import { ReactComponent as SparkleBrowbone} from '../images/browbone-sparkle.svg';
import { ReactComponent as SparkleAboveCrease} from '../images/above-crease-sparkle.svg';
import { ReactComponent as SparkleCrease} from '../images/crease-sparkle.svg';
import { ReactComponent as SparkleDeepCrease} from '../images/deep-crease-sparkle.svg';
import { ReactComponent as SparkleInnerLid} from '../images/inner-lid-sparkle.svg';
import { ReactComponent as SparkleMiddleLid} from '../images/middle-lid-sparkle.svg';
import { ReactComponent as SparkleOuterLid} from '../images/outer-lid-sparkle.svg';
import { ReactComponent as SparkleInnerCorner} from '../images/inner-corner-sparkle.svg';
import AboveCrease from "./AboveCrease.js";
import Browbone from "./Browbone.js";
import Crease from "./Crease.js";
import DeepCrease from "./DeepCrease.js";
import InnerCorner from "./InnerCorner.js";
import InnerLid from "./InnerLid.js";
import OuterLid from "./OuterLid.js";
import MiddleLid from "./MiddleLid.js";

function EyeVisual({
    browboneEyeshadow,
    aboveCreaseEyeshadow,
    creaseEyeshadow,
    deepCreaseEyeshadow,
    outerLidEyeshadow,
    middleLidEyeshadow,
    innerLidEyeshadow,
    innerCornerEyeshadow}){

    //Skin color
    const [skin_color, setSkinColor] = useState('#c4986e'); 
    const handleSkinColorChange = (event) => {
        setSkinColor(event.target.value);
    };

    useEffect (() => {
        const skinBackground = document.getElementById('eye-visual-box');
        skinBackground.style.backgroundColor = skin_color;
    },[skin_color]);
    
    //Eyebrow color
    const [eyebrow_color, setEyebrowColor] = useState('#4d2500'); 
    const handleEyebrowColorChange = (event) => {
        setEyebrowColor(event.target.value);
    };


    //Eyelashes color
    const [eyelashes_color, setEyelashesColor] = useState('#000000'); 
    const handleEyelashesColorChange = (event) => {
        setEyelashesColor(event.target.value);
    };

    const toggleSparkle = (finish, section) => {
        console.log(finish==="Metallic")
        if (finish==="Metallic"){
            if (section==="browbone") {
                return <SparkleBrowbone filter='blur(.25px)'/>;
            }
            else if (section==="above crease") {
                return <SparkleAboveCrease filter='blur(.25px)'/>;
            }
            else if (section==="crease"){
                return <SparkleCrease filter='blur(.25px)'/>;
            }
            else if (section==="deep crease"){
                return <SparkleDeepCrease filter='blur(.25px)' opacity="0.6"/>;
            }
            else if (section==="inner lid"){
                return <SparkleInnerLid filter='blur(.5px)' opacity="0.6"/>;
            }
            else if (section==="middle lid"){
                return <SparkleMiddleLid filter='blur(.5px)' opacity="0.6"/>;
            }
            else if (section==="outer lid"){
                return <SparkleOuterLid filter='blur(.5px)' opacity="0.6"/>;
            }
            else if (section==="inner corner"){
                return <SparkleInnerCorner filter='blur(.5px)' opacity="0.6"/>;
            }
        }
        else{
            console.log("hello")
            return;
        }
    }


    const get_stroke = (color) => {
        if (color !== 'rgba(0, 0, 0, 0)') {
            return color;
        }
        else {
            return 'black';
        }
        
    }

    const get_blur = (color) => {
        if (color !== 'rgba(0, 0, 0, 0)') {
            return 'blur(7px)';
        }
        else {
            return 'none';
        } 
    }

    const increase_stroke_width= (color) => {
        if (color !== 'rgba(0, 0, 0, 0)') {
            return '35';
        }
        else {
            return '1';
        } 
    }

    const show_text = (color) => {
        if (color !== 'rgba(0, 0, 0, 0)') {
            return false;
        }
        else {
            return true;
        }  
    }

    const increase_scale = (color, section) => {
        if (color !== 'rgba(0, 0, 0, 0)') {
            if(section==='browbone'){
                return 'scale(3)';
            }
            else if(section === 'outer lid' ){
                return 'scale(3.4,3.15)';
            }
            else if(section === 'inner lid'
            || section === 'middle lid'){
                return 'scale(3)';
            }
            else if(section === 'deep crease'){
                return 'scale(3.1, 3.9)';
            }
            else{
                return 'scale(2.7)';
            }
        }
        else{
            if(section==='browbone'){
                return 'scale(3)';
            }
            else{
                return 'scale(2.7)';
            }
        }
    }

    const alter_viewbox = (color, section) => {
        if (color !== 'rgba(0, 0, 0, 0)') {
            if(section === 'inner lid'){
                return "420 990 2400 1210";
            } 
            else if(section === 'middle lid'){
                return "500 970 2400 1210";
            } 
            else if (section === 'browbone'){
                return "0 355 1600 840";
            }
            else if (section === 'above crease'){
                return "350 750 2400 1210";
            }
            else if (section === 'outer lid'){
                return "850 1040 2400 1210";
            }
            else if (section === 'crease'){
                return "350 770 2400 1210";
            }
            else if (section === 'deep crease'){
                return "620 1375 2400 1210";
            }
        }
        else{
            if (section === 'browbone'){
                return "0 390 1600 840";
            }
            else {
                return "350 800 2400 1210";
            }
        }
    }

    console.log(browboneEyeshadow.finish)
    console.log(browboneEyeshadow)
    return (
        <section>
            {/* Color selectors for Skin, Eyebrows, and Eyelashes*/}
            <section id="color-selectors" class="header">
                <section>
                    <label for="skin-color">Skin</label>
                    <input type="color" value={skin_color} onChange={handleSkinColorChange} name="skin-color"/>
                </section>
                <section>
                    <label for="eyebrow-color">Eyebrow</label>
                    <input type="color" value={eyebrow_color} onChange={handleEyebrowColorChange} name="eyebrow-color" />
                </section>
                <section>
                <label for="browbone-color">Eyelashes</label>
                <input type="color" value={eyelashes_color} onChange={handleEyelashesColorChange} name="eyelashes-color"/>
                </section>
            </section>

            {/*  Display */}
            <section id="eye-visual-box" class="box-container">
                <section>
                <Eyebrow class="svg-image eyebrow" fill={eyebrow_color} stroke='none'/>

                {toggleSparkle(browboneEyeshadow.finish, 'browbone')}
                {toggleSparkle(aboveCreaseEyeshadow.finish, 'above crease')}
                {toggleSparkle(creaseEyeshadow.finish, 'crease')}
                {toggleSparkle(deepCreaseEyeshadow.finish, 'deep crease')}
                {toggleSparkle(innerLidEyeshadow.finish, 'inner lid')}
                {toggleSparkle(middleLidEyeshadow.finish, 'middle lid')}
                {toggleSparkle(outerLidEyeshadow.finish, 'outer lid')}
                {toggleSparkle(innerCornerEyeshadow.finish, 'inner corner')}
               


                <Browbone className="svg-image"
                    showText={show_text(browboneEyeshadow.color)}
                    stroke-width={increase_stroke_width(browboneEyeshadow.color)} 
                    filter={get_blur(browboneEyeshadow.color)} 
                    fill={browboneEyeshadow.color} 
                    stroke={get_stroke(browboneEyeshadow.color)}
                    transform={increase_scale(browboneEyeshadow.color,'browbone')}
                    viewBox={alter_viewbox(browboneEyeshadow.color, 'browbone')}/>

                <AboveCrease className="svg-image" 
                    showText={show_text(aboveCreaseEyeshadow.color)}
                    strokeWidth={increase_stroke_width(aboveCreaseEyeshadow.color)} 
                    filter={get_blur(aboveCreaseEyeshadow.color)} 
                    fill={aboveCreaseEyeshadow.color} 
                    stroke={get_stroke(aboveCreaseEyeshadow.color)}
                    transform={increase_scale(aboveCreaseEyeshadow.color)}
                    viewBox={alter_viewbox(aboveCreaseEyeshadow.color, 'above crease')}/>

                <Crease className="svg-image" 
                    showText={show_text(creaseEyeshadow.color)}
                    stroke-width={increase_stroke_width(creaseEyeshadow.color)} 
                    filter={get_blur(creaseEyeshadow.color)} 
                    fill={creaseEyeshadow.color} 
                    stroke={get_stroke(creaseEyeshadow.color)} 
                    transform={increase_scale(creaseEyeshadow.color)}
                    viewBox={alter_viewbox(creaseEyeshadow.color, 'crease')}/>

                <InnerLid className="svg-image" 
                    showText={show_text(innerLidEyeshadow.color)}
                    stroke-width={increase_stroke_width(innerLidEyeshadow.color)} 
                    filter={get_blur(innerLidEyeshadow.color)} 
                    fill={innerLidEyeshadow.color} 
                    stroke={get_stroke(innerLidEyeshadow.color)}
                    transform={increase_scale(innerLidEyeshadow.color, 'inner lid')}
                    viewBox={alter_viewbox(innerLidEyeshadow.color, 'inner lid')}/>

                <MiddleLid className="svg-image" 
                    showText={show_text(middleLidEyeshadow.color)}
                    stroke-width={increase_stroke_width(middleLidEyeshadow.color)} 
                    filter={get_blur(middleLidEyeshadow.color)} 
                    fill={middleLidEyeshadow.color} 
                    stroke={get_stroke(middleLidEyeshadow.color)} 
                    transform={increase_scale(middleLidEyeshadow.color, 'middle lid')}
                    viewBox={alter_viewbox(middleLidEyeshadow.color, 'middle lid')}/>

                <InnerCorner className="svg-image" 
                    showText={show_text(innerCornerEyeshadow.color)}
                    stroke-width={increase_stroke_width(innerCornerEyeshadow.color)} 
                    filter={get_blur(innerCornerEyeshadow.color)} 
                    fill={innerCornerEyeshadow.color} 
                    stroke={get_stroke(innerCornerEyeshadow.color)}/>
                
                <OuterLid className="svg-image" 
                    showText={show_text(outerLidEyeshadow.color)}
                    stroke-width={increase_stroke_width(outerLidEyeshadow.color)} 
                    filter={get_blur(outerLidEyeshadow.color)} 
                    fill={outerLidEyeshadow.color} 
                    stroke={get_stroke(outerLidEyeshadow.color)}
                    transform={increase_scale(outerLidEyeshadow.color, 'outer lid')}
                    viewBox={alter_viewbox(outerLidEyeshadow.color, 'outer lid')}/>
                

                <DeepCrease className="svg-image" 
                    showText={show_text(deepCreaseEyeshadow.color)}
                    stroke-width={increase_stroke_width(deepCreaseEyeshadow.color)} 
                    filter={get_blur(deepCreaseEyeshadow.color)} 
                    fill={deepCreaseEyeshadow.color} 
                    stroke={get_stroke(deepCreaseEyeshadow.color)} 
                    transform={increase_scale(deepCreaseEyeshadow.color, 'deep crease')}
                    viewBox={alter_viewbox(deepCreaseEyeshadow.color, 'deep crease')}/>

                <Eyelashes class="svg-image eyelashes" 
                    fill={eyelashes_color} 
                    stroke='none' /> 
                </section>
            </section>
        </section>
    )
}

export default EyeVisual;