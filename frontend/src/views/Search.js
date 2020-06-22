import React from 'react';

export default function Search() {
    return (
        <div className="container">
            
           <h1>Find Your Instructor</h1>
           
      <hr/>
      <div className="row">
        <div className="col-md-8">
                <label>Select Locations
                    <select className="form-control">
                    <option value="">ALL</option>
                    <option value="Athens">Athens</option>
                    <option value="Thessaloniki">Thessaloniki</option>
                    <option value="Lamia">Lamia</option>
                    <option value="Komotini">Komotini</option>
                    <option value="Ioannina">Ioannina</option>
                    <option value="Corfu">Corfu</option>
                    <option value="Mytilene">Mytilene</option>
                    <option value="Tripoli">Tripoli</option>
                    <option value="Ermoupoli">Ermoupoli</option>
                    <option value="Larissa">Larissa</option>
                    <option value="Patras">Patras</option>
                    <option value="Kozani">Kozani</option>
                    </select>
                </label>

                <label>Select Sports
                    <select className="form-control">
                    <option value="">ALL</option>
                    <option value="football">Football</option>
                    <option value="basketball">Basketball</option>
                    <option value="swimming">Swimming</option>
                    <option value="tennis">Tennis</option>
                    </select>
                </label>
          <hr/>
          

                
            </div>
        </div>

 <div className="col-md-4">
     {/* Put profile picture here! */}
                <h2>Name</h2>
                
                
        <div className="col-md-4">
                <h2>Information</h2>
                
            </div>
        </div>
      </div>
    
    )
}
