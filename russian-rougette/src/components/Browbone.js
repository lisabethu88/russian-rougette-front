
const Browbone = ({ className, showText, strokeWidth, filter, fill, stroke, transform, viewBox}) => {
    return (

<svg xmlns="http://www.w3.org/2000/svg"
    width="100%" height="100%" stroke={stroke} fill={fill} stroke-width={strokeWidth} filter={filter}
    preserveAspectRatio="xMidYMid meet" viewBox={viewBox} class={className}> 
    {showText && <text fill="#000000" stroke="none" font-weight="bold" 
    font-size="16" x="100" y="270" transform='scale(1.9)'>Browbone</text>}
  <path transform={transform}
  id="Selection" 
        d="M 492.00,123.00
           C 485.71,123.83 485.63,124.07 479.00,124.00
             479.00,124.00 435.00,116.17 435.00,116.17
             435.00,116.17 400.00,113.08 400.00,113.08
             400.00,113.08 392.00,114.04 392.00,114.04
             392.00,114.04 382.00,114.04 382.00,114.04
             382.00,114.04 363.00,116.00 363.00,116.00
             363.00,116.00 354.00,116.00 354.00,116.00
             341.29,116.02 313.10,123.12 300.00,126.64
             300.00,126.64 291.00,129.32 291.00,129.32
             291.00,129.32 274.00,131.75 274.00,131.75
             274.00,131.75 248.00,138.43 248.00,138.43
             248.00,138.43 234.00,143.10 234.00,143.10
             227.30,144.71 228.08,143.19 219.00,145.98
             219.00,145.98 204.00,151.64 204.00,151.64
             204.00,151.64 184.00,157.69 184.00,157.69
             184.00,157.69 159.00,167.60 159.00,167.60
             159.00,167.60 138.00,175.60 138.00,175.60
             138.00,175.60 107.00,187.81 107.00,187.81
             107.00,187.81 92.00,194.56 92.00,194.56
             92.00,194.56 71.00,201.02 71.00,201.02
             59.88,204.45 45.47,211.75 41.82,195.00
             41.16,191.96 41.04,190.08 41.00,187.00
             40.90,177.79 40.92,171.09 48.43,164.41
             54.00,159.47 64.18,158.36 71.00,155.82
             71.00,155.82 125.00,136.23 125.00,136.23
             125.00,136.23 159.00,124.34 159.00,124.34
             159.00,124.34 185.00,114.09 185.00,114.09
             185.00,114.09 207.00,108.71 207.00,108.71
             207.00,108.71 219.00,104.72 219.00,104.72
             219.00,104.72 238.00,100.08 238.00,100.08
             238.00,100.08 246.00,97.51 246.00,97.51
             246.00,97.51 294.00,89.17 294.00,89.17
             294.00,89.17 315.00,87.83 315.00,87.83
             315.00,87.83 343.00,85.00 343.00,85.00
             343.00,85.00 372.00,85.00 372.00,85.00
             372.00,85.00 384.00,85.96 384.00,85.96
             384.00,85.96 396.00,85.96 396.00,85.96
             404.57,86.10 412.73,88.84 421.00,90.77
             421.00,90.77 451.00,97.54 451.00,97.54
             451.00,97.54 458.00,100.42 458.00,100.42
             458.00,100.42 470.00,104.51 470.00,104.51
             475.90,106.48 489.08,110.05 491.40,116.04
             492.12,117.89 491.99,120.98 492.00,123.00 Z" />
</svg>

    )};
  
  export default Browbone;