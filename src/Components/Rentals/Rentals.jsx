import axios from "axios";
import { useEffect, useState } from "react";
import "./Rentals.css";

export const Rentals = () => {

const [ data , setData] = useState([])

useEffect(() =>{
  axios.get("http://localhost:8080/houses").then((res)=>{
    setData(res.data)
  })

},[])

const sortbyID = async () =>{
  let D1 = data.sort((a , b) =>{
    return  a.id - b.id 
  })
  setData([...D1])
}

const rentLow = async () =>{
  let D1 = data.sort((a , b) =>{
    return  a.rent - b.rent 
  })
  setData([...D1])
}
const renthigh = async () =>{
  let D1 = data.sort((a , b) =>{
    return  b.rent - a.rent 
  })
  setData([...D1])
}

const areaLow = async () =>{
  let D1 = data.sort((a , b) =>{
    return  a.areaCode - b.areaCode 
  })
  setData([...D1])
}
const areahigh = async () =>{
  let D1 = data.sort((a , b) =>{
    return  b.areaCode - a.areaCode 
  })
  setData([...D1])
}

const filterData = (val) =>{
  let D1 = data.filter((el) =>{
    return el.address === val
  })
  setData([...D1])
}


  return (
    <div className="rentalContainer">
         <div className="sortingButtons"> 
        <button className="sortById" onClick={sortbyID}>Sort by ID</button>
        <button className="sortByRentAsc" onClick={rentLow}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={renthigh}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={ areaLow }>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={areahigh}>Area High to Low</button>
      </div>
  
      
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
        onChange={filterData}
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                   {house.married === true ? "married" : "bachelor"}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
