import { useRef, useState } from "react";
import React from "react";



// get the current mouse position for the white board
const getMousePos = (e : React.MouseEvent, canvas : HTMLCanvasElement) => {
    let rect = canvas.getBoundingClientRect();
    let scaleX = canvas.width / rect.width, 
    scaleY = canvas.height / rect.height;
    return {
        prevX : (e.clientX - e.movementX - rect.left) * scaleX,
        prevY : (e.clientY - e.movementY - rect.top) * scaleY,
        curX : (e.clientX - rect.left) * scaleX,
        curY : (e.clientY - rect.top) * scaleY
    };
}

const draw = (e : React.MouseEvent, canvas : HTMLCanvasElement) =>  {
    let context = canvas.getContext('2d');
    if (!context) {
        throw new Error("failed to get context");
    }
    let {prevX, prevY, curX, curY} = getMousePos(e, canvas); 
    context.beginPath();
    context.strokeStyle = 'gray';
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.moveTo(prevX, prevY);
    context.lineTo(curX, curY);
    context.stroke(); 
    context.closePath();
}


const erase = (e : React.MouseEvent, canvas : HTMLCanvasElement) =>  {
    let context = canvas.getContext('2d');
    if (!context) {
        throw new Error("failed to get context");
    }
    let {prevX, prevY, curX, curY} = getMousePos(e, canvas); 
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = 5;
    context.moveTo(prevX, prevY);
    context.lineTo(curX, curY);
    context.stroke(); 
}


function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDraw, setIsDraw] = useState<boolean>(false);

    
    const startDraw = (e : React.MouseEvent) => { 
        setIsDraw(true);
    };



    const stopDraw = (e : React.MouseEvent) => {
        setIsDraw(false);
    };

    const Draw = (e : React.MouseEvent) => {
        if (!isDraw) {
            return;
        }
        const canvas = canvasRef.current;
        if (!canvas) {
            throw new Error("failed to get the canvas");
        }
        draw(e, canvas);        
    }




    return (
        <canvas 
            width={3000}
            height={1800}
            ref = {canvasRef} 
            onMouseDown = {(e) => startDraw(e)}
            onMouseUp = {(e) => stopDraw(e)}
            onMouseMove = {(e) => Draw(e)}
            onMouseOut = {(e) => stopDraw(e)}>                  
        </canvas>
    );
}


export default Canvas;