import Canvas from "./Canvas";
import ToolBar from "./ToolBar";



const Board = () => {
    return (
        <>
    <ToolBar/>
    <div className='board'> 
    <Canvas/>
    </div>
    </>
    );

};


export default Board;