import React from 'react'

export default React.createContext({
    treasure:[],
    addItem:(fruta)=>{},
    removeItem:(id)=>{},
    clearTreasure:()=>{}
});