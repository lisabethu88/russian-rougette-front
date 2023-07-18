const InnerCorner = ({ className, showText, strokeWidth, filter, fill, stroke, transform }) => {
    return(
<svg xmlns="http://www.w3.org/2000/svg"
        width="100%" height="100%" stroke={stroke}
        preserveAspectRatio="xMidYMid meet" 
         viewBox="300 605 2400 1210"  fill={fill} stroke-width={strokeWidth} 
     filter={filter} class={className}> 
     {showText &&  <text fill="#fff" stroke="#000" stroke-width="2px"  font-weight="bold" 
           font-size="27" x="120" y="700" transform='scale(2.8)'>Inner Corner</text>}
  <path id="Selection"
           transform='scale(2.4)'
        d="M 234.11,718.00
           C 234.11,718.00 242.00,719.79 242.00,719.79
             242.00,719.79 252.00,720.41 252.00,720.41
             260.38,722.45 275.67,733.58 280.00,741.00
             282.55,745.37 282.99,753.92 283.00,759.00
             283.01,766.83 284.56,773.67 279.23,779.96
             277.71,781.75 276.19,783.37 273.96,784.26
             271.78,785.13 268.37,785.00 266.00,785.00
             266.00,785.00 240.00,784.00 240.00,784.00
             223.66,783.78 216.73,775.56 203.00,771.18
             188.85,766.66 191.28,766.67 179.00,759.90
             174.78,757.57 170.95,756.46 167.45,752.83
             164.44,749.70 161.23,745.18 159.98,741.00
             156.77,730.34 160.22,707.76 165.40,698.00
             170.94,687.56 182.19,678.40 189.41,669.00
             198.75,656.83 209.76,637.33 224.00,630.54
             229.89,627.73 236.57,627.01 243.00,627.00
             247.12,626.99 254.35,626.56 257.77,628.93
             260.72,630.98 260.75,633.84 261.50,637.00
             263.50,645.48 264.12,644.62 264.00,654.00
             263.83,666.69 254.38,669.18 247.90,678.04
             243.39,684.20 235.32,701.62 234.11,709.00
             234.11,709.00 234.11,718.00 234.11,718.00 Z" />
</svg>

    )

}

export default InnerCorner;