import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import data from "../data";
console.log(data);


let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
<div style={{display:"flex",gap:"20px",fontFamily:"24px National 2 Condensed"}}>
    {data.map(res=>{
        return(
        <App cardimg={res.cardimg} cardtitle={res.cardtitle} cardtext={res.cardtext} cardu={res.cardu} cardbutton={res.cardbutton}/>
        )
    })}
</div>
</>
);
export default root;