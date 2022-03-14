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



  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={data.map((e) =>(
        e.id
        )).sort((a,b) =>{
          return a-b
        })}>Sort by ID</button>
        <button className="sortByRentAsc" onClick={data.map((e) =>(
       e.Rentals
        )).sort((a,b) =>{
          return a-b
        })}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={data.map((e) =>(
       e.rent
        )).sort((a,b) =>{
          return b-a
        })}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={data.map((e) =>(
       e.Rentals
        )).sort((a,b) =>{
          return a-b
        })}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={data.map((e) =>(
       e.Rentals
        )).sort((a,b) =>{
          return b - a
        })}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
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
                   {house.married}{house.bachelor}
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
