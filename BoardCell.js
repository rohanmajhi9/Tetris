import ""
import Board from "../components/Board";

const BoardCell=({cell})=>(
    <div className={'BoardCell ${cell.className}'}>
        <div className="Sparkle"></div>
    </div>
);

export default BoardCell;