import Tool from "./Tool"


function ToolBar() {
    return (
         <div className="bar"> 
    {Array.from(Array(6).keys()).map((i) => {
        return (<Tool item={i} key = {i}/>)
    })}
        </div>);
}



export default ToolBar;