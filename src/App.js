import React from "react";
import "./style.css";
const Data=[
  {
  id:1,
  name:"nithish"
},
{
  id:1,
  name:"nikhil"
},
{
  id:1,
  name:"Bengalore"
},
{
  id:1,
  name:"mysore"
},
{
  id:1,
  name:"raksith"
},
{
  id:1,
  name:"anil kumar"
},
{
  id:1,
  name:"ekanth"
},
{
  id:1,
  name:"prem kumar"
},
{
  id:1,
  name:"prince"
},
{
  id:1,
  name:"mahesh"
},
{
  id:1,
  name:"abhiseke"
},
{
  id:1,
  name:"gunjal"
},

{
  id:1,
  name:"gowtham"
},
{
  id:1,
  name:"devndrappa"
},
{
  id:1,
  name:"veeresh"
},
{
  id:1,
  name:"boomai"
},
{
  id:1,
  name:"karthik"
},



]
export default function App() {
  const[search,setSearch]= React.useState('')
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
     <h1>Enter values</h1>
     <input type='text' onChange={(e)=>setSearch(e.target.value)}/>
      {Data?.filter(cityname=>cityname.name.toLowerCase().includes(search)).map((city)=>{
        return(
          <div>

            <li>{city.name}</li>
            </div>
        )
      })}








    </div>
  );
}
