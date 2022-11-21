import { useState } from "react";

export default function SearchBar(props) {
   const [Character, setCharacter] = useState("");

   function handleChange(e){
      setCharacter(e.target.value);
   } 


   return (
      <div>
         <input type="search" value={Character} onChange={handleChange} /> 
         <button onClick={() => props.onSearch(Character)}>Agregar</button>
      </div>
   );
   
}


