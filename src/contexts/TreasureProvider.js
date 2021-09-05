import React,{useState} from 'react';
import TreasureContext from './TreasureContext'

const TreasureProvider=({children})=>{
    const[treasure,setTreasure] = useState([]);

    function addItem(fruta){
      const {id, imagemFruta,nome,preco,descricao,imagemUsuario,categoria} = fruta;
        setTreasure([...treasure,{id, imagemFruta,nome,preco,descricao,imagemUsuario,categoria}])
    }

    function removeItem(id) {
        const filteredCart = treasure.filter(item => item.id !== id);
        setTreasure(filteredCart);
      }
    
      function clearTreasure() {
        setTreasure([]);
      }
      return (
        <TreasureContext.Provider value={{treasure, addItem, removeItem, clearTreasure}}>
          {children}
        </TreasureContext.Provider>
      )

}

export default TreasureProvider;