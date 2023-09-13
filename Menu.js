import "./Menu.css";
const Menu =({onCLick})=>{
    
return (
    <div className="Menu">
        <button className="Button" onClick={ console.log("hey there")}> 
            Play Tetris
        </button>
    </div>
   );
};

export default Menu;