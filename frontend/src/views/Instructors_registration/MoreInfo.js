import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Instructors_registration.css";


function SocialProfiles(props) {

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [regions, setRegions] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:3001/regions', { 'headers': { 'key': 'd4dapplicationregistrationapigetmethod1234567890' } })
      .then(response => {
        var regions = response.data;
        setRegions(regions);
      })
},[])

    const Submit = e => {
        e.preventDefault();
        props.nextStep();
        props.lastStep();
        const formData = new FormData();
        formData.append('file', file);
        if (typeof(file) == 'object') {
            try {
            axios.post('http://localhost:3001/instructors/upload/img', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'key': 'd4dapplicationregistrationapipostmethod1234567890'
                }
            });
        }
        catch (err) {
            if (err.response.status === 500) {
            alert('therer was a problem whit the server');
            } else {
                alert('Please chosee a valid photo');
            }
        }
        }else{return;}  
 
    };

    const onChangePhoto = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const options = regions.map((region) => <option value={parseInt(region.id)} name={region.name}>{region.name}</option>
    );  

    const { values, inputChange } = props;
    return (
        <form onSubmit={(e) => { e.preventDefault() }}>
            <div className="form-container">
                <h1 className="mb-5">More Information</h1>
                <h6 id="h6_more">this part is fully optional which means you can jamp from it </h6>

                <div className="form-group">
                    <label htmlFor="github">Phone Number</label>
                    <input type="text" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} required />
                </div>
                <div className="form-group">
                    <label htmlFor="github">Zip</label>
                    <input type="text" className="form-control" name="zip" onChange={inputChange('zip')} value={values.zip} required />
                    </div>
              <div className="form-group">
                <label htmlFor="github">Region</label>
                <select
                  defaultValue={null}
                  name="region"
                  noValidate required
                  onChange={inputChange('region_id')} value={values.region_id}
                  className="form-control-select">
                  <option selected value={null} >Select your region</option>
                    {options}
                </select>
                </div>


              <div className="form-group">
                <label htmlFor="github">Street</label>
                <input type="text" className="form-control" name="street" 
                 noValidate required
                 onChange={inputChange('street')} value={values.street}  />
              </div>

              <div className="form-group">
                <label htmlFor="github">Street Number</label>
                <input type="number" className="form-control" name="street_number" 
                 noValidate required
                 onChange={inputChange('street_number')} value={values.street_number}  />
              </div>

              <div className="form-group">
                <label htmlFor="github">Education</label>
                <input type="text" className="form-control" name="education" 
                 noValidate required
                 onChange={inputChange('education')} value={values.education}  />
              </div>
      
                <div className="form-group">
                    <label htmlFor="github">Occupation</label>
                    <input type="text" className="form-control" name="occupation" onChange={inputChange('occupation')} value={values.occupation} required />
                </div>
                <div className="form-group">
                    <label htmlFor="github">Details</label>
                    <input type="text" className="form-control" name="details" onChange={inputChange('details')} value={values.details} required />
                </div>
                <label htmlFor="github">Photo</label>
                <div className='custom-file mb-4'>
                    <input
                        type='file'
                        className='custom-file-input'
                        name='photo'
                        id='customFile'
                        onChange={onChangePhoto}
                        accept={'image/*'}
                        onInput={inputChange('photo')}
                        required
                    />
                    <label className='custom-file-label' htmlFor='customFile'>
                        {filename}
                    </label>
                </div>
                <br required />
                <div class="row">
                    <button type="button" onClick={Submit} class="btn btn-primary btn-lg btn-block">Submit</button>
                </div>
            </div>
        </form>

    )
}

export default SocialProfiles;
