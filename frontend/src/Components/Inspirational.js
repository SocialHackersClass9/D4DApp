import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`

padding: 10px 

`

const Inspirational = () => (
<Styles className="container-fluid">
        <hr style={{paddingTop:"50px", borderTop:"1px solid black"}}></hr>
        <div className="row text-center">
            <div className="col-xs-12 col-sm-6 col-md-4" style={{paddingBottom:"100px"}}>
                <h3>❝I lost my leg aged five...<br></br>Now I'm 1.9 seconds behind Usain Bolt.❞</h3>
                <p>Jonnie Peacock</p>
                <p>Rio Paralympics 2016</p>
    
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
                
                
                <h3>❝You dont't know your own <strong>STRENGTH</strong><br></br>
                until you are forced to <strong><br></br>USE IT.</strong>❞</h3>
                <p>Amy Purdy</p>
                <p>US paralympic Team Snowboarder</p>
               
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4" style={{paddingBottom:"100px"}}>
                <h3>❝Let me <strong>WIN.</strong><br></br>But if i cannot win,<br></br>
                let me be <strong>BRAVE</strong> in the attempt.❞</h3>
                <p>Special Olympics athlete oath</p>
                
    
            </div>
           
        </div>
        <hr style={{paddingBottom:"50px", borderTop:"1px solid black"}}></hr>
    </Styles>
)

export default Inspirational;