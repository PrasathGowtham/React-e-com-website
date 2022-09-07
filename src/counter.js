import React,{component} from "react";


class counterComponent extends component{
constructor(){
super();
this.state = {
    initialvalue:1,
};

}
render(){
return(
    <>
    initialvalue:{this.state.initialvalue}<br/>
    <button>INCREMENT</button>
    <button>DECREMENT</button>
    <button>RESET</button>
    
    </>
)



}


}

export default counterComponent;