import {BsFillPenFill,
    BsFillCursorFill,
BsFillEraserFill} from 'react-icons/bs';
import {MdTextFields} from 'react-icons/md'; 
import {TbMath} from 'react-icons/tb'; 
import {AiFillCode} from 'react-icons/ai';
import { IconButton } from '@mui/material';
import styled from '@emotion/styled'




const ToolStyle = {
    width : "20px",
    height : "20px",
    "color" : "black",
    background: "white",
};
const StyledButton = styled(IconButton)`
    padding: 10px;
`;

const tools = [BsFillPenFill,BsFillCursorFill,
    BsFillEraserFill,MdTextFields,TbMath, AiFillCode];


function Tool({item}: {item : number}) {
    const Icon = tools[item];
    return <div> 
    <StyledButton>
    <Icon style={ToolStyle}/>
    </StyledButton>
    </div>
}

export default Tool;