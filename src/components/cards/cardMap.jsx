
import React from "react";
import Card from "./cards";

function cardMap(propComp){
    return(
     <Card 
      key={propComp.id}
      emoji={propComp.emoji}
      title={propComp.title}
      meaning={propComp.meaning}
     />
    );
}

export default cardMap;