
import React, { useState } from "react";

const AddListing = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  
  const [price, setPrice] = useState("");
  const [capacity, setCapactiy] = useState("");

  const [delivery, setDelivery] = useState("pickup");
  const handleTypeBtn=(e, value)=>{
    e.preventDefault();
    setDelivery(value);
  }
    return (
      <div id="overlay-add-listing">
        
        <div class="add-listings-popup">
          <h1 className="new-post-h1">Add Listing</h1>
          <p className="popup-grey-text">INFORMATION</p>
          <form>
            <div className="row">
             <div className="col-6">
          <input placeholder="Title"  onChange={e => setTitle(e.target.value)} className="add-listings-input"/>
          <textarea rows="4" 
          onChange={e => setDescription(e.target.value)} 
          className="add-listings-description" placeholder="description"></textarea>
          <input placeholder="Address" 
          onChange={e => setAddress(e.target.value)} 
          className="add-listings-input"/>
              <input placeholder="City" 
              onChange={e => setCity(e.target.value)} 
              className="add-listings-input"/>
              <input placeholder="Country" 
              onChange={e => setCountry(e.target.value)} 
              className="add-listings-input"/>
          
              </div>
              <div className="col-6 right-col-add-listing">
              <input placeholder="Price per unit" 
              onChange={e => setPrice(e.target.value)} 
              className="add-listings-input"/>
          <input 
          onChange={e => setCapactiy(e.target.value)} 
          placeholder="Weekly production capacity" className="add-listings-input"/>
                <div className="row">
              <button className={(delivery=="pickup")?"listing-type-chosen":"listing-type"} onClick={(e)=>{handleTypeBtn(e, "pickup")}}>Pick Up</button> 
          <button className={(delivery=="delivery")?"listing-type-chosen":"listing-type"} onClick={(e)=>{handleTypeBtn(e, "delivery")}}>Delivery</button>
          </div>
          Upload image
          <label class="upload-file-btn">
   <input type="file" className="img-upload" accept="image/jpeg, image/png"/></label>
   <button className="submit-post-btn">Submit</button>
              </div>
            </div>
          </form>
        </div>
        </div>
           )
  }


  export default AddListing;