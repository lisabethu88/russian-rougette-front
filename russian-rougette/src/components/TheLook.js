import "./TheLook.css"

const TheLook = ({
    browboneShade,
    aboveCreaseShade,
    creaseShade,
    deepCreaseShade,
    outerLidShade,
    middleLidShade,
    innerLidShade,
    innerCornerShade}) => {

   
const toggleH6 = (shade) =>{
    if(shade.name){
        return (
        <section class="h6-info">
        <h6>Shade: {shade.name}</h6>
        <h6>Palette/Brand: {shade.palette_name} - {shade.brand}</h6>
        </section>
        )
    }
    else{
        return(<hr/>);
    }
}

return(
    <section class="look-section">
        <label class="look-label header">
            <h2>The Look</h2>
        </label>
        <section class="look-container box-container">
            <h5>Browbone</h5>
            {toggleH6(browboneShade)}
            <h5>Above Crease</h5>
            {toggleH6(aboveCreaseShade)}
            <h5>Crease</h5>
            {toggleH6(creaseShade)}
            <h5>Deep Crease</h5>
            {toggleH6(deepCreaseShade)}
            <h5>Outer Lid</h5>
            {toggleH6(outerLidShade)}
            <h5>Middle Lid</h5>
            {toggleH6(middleLidShade)}
            <h5>Inner Lid</h5>
            {toggleH6(innerLidShade)}
            <h5>Inner Corner</h5>
            {toggleH6(innerCornerShade)}
        </section>
    </section>
)
}
export default TheLook;