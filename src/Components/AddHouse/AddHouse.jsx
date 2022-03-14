import axios from "axios";
import {useState} from "react"


export const AddHouse = () => {
const [info, setInfo] = useState({
  name:"",
  ownerName:"",
  address:"",
  areaCode:"",
  rent:"",
  bachelor:false,
  married:false,
})

const handlecheck = (e) =>{
  const {className } = e.target
  const value = e.target.checked
  setInfo({...info , [className]:value})
  
}

const handleInput = (e) =>{
  const {className , value} = e.target

  setInfo({...info , [className]:value})
}


const handleSubmit = (e) =>{
  try{
    e.preventDefault();
    axios.post("http://localhost:3001/houses" , info).then(() =>{
      alert("Done")
    })
  }catch(err){
    console.log("worng")
  }
 setInfo({
  name:"",
  ownerName:"",
  address:"",
  areaCode:"",
  rent:"",
  bachelor:false,
  married:false,
 })
}





  return (
    <div className="addHouseContainer" onSubmit={handleSubmit}>
      <form>
        <label>name</label>
        <input type="text" className="name" value={info.name} required  onChange={handleInput} />
        <br />
        <label>ownerName</label>
        <input value={info.ownerName} type="text" className="ownerName" required onChange={handleInput}/>
        <br />
        <label>address</label>
        <input value={info.address} type="text" className="address" required onChange={handleInput}/>
        <br />
        <label>areaCode</label>
        <input value={info.areaCode} type="text" className="areaCode" required onChange={handleInput}/>
        <br />
        <label>rent</label>
        <input value={info.rent} type="text" className="rent" required onChange={handleInput}/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={info.bachelor} type="checkbox" className="bachelor" onChange={handlecheck}/>
        <br />
        <label>married</label>
        <input checked={info.married} type="checkbox" className="married"  onChange={handlecheck}/>
        <br />
        <label>image</label>
        <input value={""} type="text" className="image"  />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
