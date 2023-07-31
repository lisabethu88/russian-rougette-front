import React, { useEffect, useState } from "react";
import "./Wheel.css";
/*
    Credit: https://dev.to/sababg/custom-wheel-of-prize-with-canvas-589h
*/

const WheelComponent = ({
    segments,
    segColors,
    winningSegment,
    onFinished,
    onRotate,
    onRotatefinish,
    primaryColor,
    primaryColoraround="#000",
    contrastColor,
    buttonText,
    isOnlyOnce = true,
    size = 290,
    upDuration = 1000,
    downDuration = 100,
    fontFamily = "Urbanist",
    width,
    height
}) => {
    let currentSegment = "";
    let currentSegColor = "";
    let isStarted = false;
    const [isFinished, setFinished] = useState(false);
    let timerHandle = 0;
    const timerDelay = segments.length;
    let angleCurrent = 0;
    let angleDelta = 0;
    let canvasContext = null;
    let maxSpeed = Math.PI / `${segments.length}`;
    const upTime = segments.length * upDuration;
    const downTime = segments.length * downDuration;
    let spinStart = 0;
    let frames = 0;
    const centerX = 300;
    const centerY = 300;
    
    useEffect(() => {
        document.getElementById("canvas").onclick = function () { spin();}
        wheelInit();/* 
        setTimeout(() => {
            window.scrollTo(0, 1);
        }, 0); */
    }, [segColors]);

    const wheelInit = () => {
        initCanvas();
        wheelDraw();
    };

    const initCanvas = () => {
        let canvas = document.getElementById("canvas");
        if (navigator.appVersion.indexOf("MSIE") !== -1) {
            canvas = document.createElement("canvas");
            canvas.setAttribute("width", width);
            canvas.setAttribute("height", height);
            canvas.setAttribute("id", "canvas");
            document.getElementById("wheel").appendChild(canvas);
        }
        canvasContext = canvas.getContext("2d");
    };

    const spin = () => {
        isStarted = true;
        
        if (timerHandle === 0) {
            spinStart = new Date().getTime();
            maxSpeed = Math.PI / segments.length;
            frames = 0;
            timerHandle = setInterval(onTimerTick, timerDelay);
        }

        
    };

    const onTimerTick = () => {
        frames++;
        draw();
        const duration = new Date().getTime() - spinStart;
        let progress = 0;
        let finished = false;
        if (duration < upTime) {
            progress = duration / upTime;
            angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2);
        
        } else {
            if (winningSegment) {
                if (currentSegment === winningSegment && frames > segments.length) {
                    progress = duration / upTime;
                    angleDelta =
                        maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
                    progress = 1;
                } else {
                    progress = duration / downTime;
                    angleDelta =
                        maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
                }
            } else {
                progress = duration / downTime;
                if (progress >= 0.8) {
                    angleDelta =
                        maxSpeed / 1.2 * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
                } else if (progress >= 0.98) {
                    angleDelta =
                        maxSpeed / 2 * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
                } else
                    angleDelta =
                        maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
            }
            if (progress >= 1) finished = true;
        }

        angleCurrent += angleDelta;
        while (angleCurrent >= Math.PI * 2) angleCurrent -= Math.PI * 2;
        if (finished) {
            setFinished(true);
            onFinished();
            clearInterval(timerHandle);
            timerHandle = 0;
            angleDelta = 0;
        }
        
    };

    const wheelDraw = () => {
        clear();
        drawWheel();
    };

    const draw = () => {
        clear();
        drawWheel();
    };

    const drawSegment = (key, lastAngle, angle) => {
        const ctx = canvasContext;
        const value = segments[key];
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, size, lastAngle, angle, false);
        ctx.lineTo(centerX, centerY);
        ctx.closePath();
        ctx.fillStyle = segColors[key];
        ctx.fill();
        ctx.stroke();
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate((lastAngle + angle) / 2);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.fillStyle = 'white';
        ctx.font = "bolder 1.5em " + fontFamily;
        ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);
        ctx.strokeText(value.substr(0, 21), size / 2 + 20, 0);
        ctx.restore();
    };

    const drawWheel = () => {
        const ctx = canvasContext;
        let lastAngle = angleCurrent;
        const len = segments.length;
        const PI2 = Math.PI * 2;
        ctx.lineWidth = 1;
        ctx.strokeStyle = primaryColor || "black";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.font = "1em " + fontFamily;
        for (let i = 1; i <= len; i++) {
            const angle = PI2 * (i / len) + angleCurrent;
            drawSegment(i - 1, lastAngle, angle);
            lastAngle = angle;
        }

        // Draw a center circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, 40, 0, PI2, false);
        ctx.closePath();
        ctx.fillStyle = "white";
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.fill();
        ctx.font = "bold 1.5em " + fontFamily;
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText(buttonText || "Spin", centerX, centerY + 3);
        ctx.stroke();

        // Draw outer circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, size, 0, PI2, false);
        ctx.closePath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = primaryColoraround || "white";
        ctx.stroke();
    };

    const clear = () => {
        const ctx = canvasContext;
        ctx.clearRect(0, 0, 1000, 800);
    };
    return (
        <section id="wheel">
            <canvas
                id="canvas"
                width="550"
                height="600"
                style={{
                    pointerEvents: isFinished && isOnlyOnce ? "none" : "auto"
                }}
            />
        </section>
    );
};
export default WheelComponent;