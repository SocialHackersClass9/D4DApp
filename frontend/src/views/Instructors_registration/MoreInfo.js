import React, { useState, useEffect } from 'react';
import apis from '../../apis.js';
import "./Instructors_registration.css";


function SocialProfiles(props) {

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [regions, setRegions] = useState([]);



    useEffect(() => {
        apis.get('/regions')
            .then(data => {
                setRegions(data);
            })
    }, [])

    const Submit = e => {
        e.preventDefault();
        props.nextStep();
        props.lastStep();
        const formData = new FormData();
        formData.append('file', file);
        if (typeof (file) == 'object') {
            apis.postForm('/instructors/upload/img', formData)
                .then(data => {
                    alert("Success saved");
                })
                .catch(err => {
                    alert("Error");
                    console.log(err);
                })
        }
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
            <div className="sepNav">
                <form id='form'>
                    <div className="form-container">
                        <h1 className="mb-5">More Information</h1>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" className="form-control" name="zip" onChange={inputChange('zip')} value={values.zip} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="region">Region</label>
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
                            <label htmlFor="street">Street</label>
                            <input type="text" className="form-control" name="street"
                                noValidate required
                                onChange={inputChange('street')} value={values.street} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="street_number">Street Number</label>
                            <input type="number" className="form-control" name="street_number"
                                noValidate required
                                onChange={inputChange('street_number')} value={values.street_number} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="education">Education</label>
                            <input type="text" className="form-control" name="education"
                                noValidate required
                                onChange={inputChange('education')} value={values.education} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="occupation">Occupation</label>
                            <input type="text" className="form-control" name="occupation" onChange={inputChange('occupation')} value={values.occupation} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Details</label>
                            <input type="text" className="form-control" name="details" onChange={inputChange('details')} value={values.details} required />
                        </div>
                        <label htmlFor="photo">Photo</label>
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
            </div>
        </form>

    )
}

export default SocialProfiles;
