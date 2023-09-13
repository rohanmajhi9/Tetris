import { useState,useCallback } from "react";

export const useGameOver=()=>{
    const [gameOver,setGameOver]=useState(true);

    const resetGameOver=useCallback(()=>{
        setGameOver(false);
    },[]);   //Empty coz we dont want to update
    return [gameOver,setGameOver,resetGameOver];
};

