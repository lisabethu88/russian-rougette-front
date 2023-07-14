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
return(
    <section class="look-section">
        <label class="look-label header">
        <h2>The Look</h2>
        </label>
        <section class="look-container box-container">
            <h5>Browbone</h5>
            <h6>{browboneShade}</h6>
            <h5>Above Crease</h5>
            <h6>{aboveCreaseShade}</h6>
            <h5>Crease</h5>
            <h6>{creaseShade}</h6>
            <h5>Deep Crease</h5>
            <h6>{deepCreaseShade}</h6>
            <h5>Outer Lid</h5>
            <h6>{outerLidShade}</h6>
            <h5>Middle Lid</h5>
            <h6>{middleLidShade}</h6>
            <h5>Inner Lid</h5>
            <h6>{innerLidShade}</h6>
            <h5>Inner Corner</h5>
            <h6>{innerCornerShade}</h6>
        </section>
    </section>
)
}
export default TheLook;