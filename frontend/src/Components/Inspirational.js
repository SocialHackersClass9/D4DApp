import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`

padding: 10px 

`

const Inspirational = () => (
    <Styles className="container-fluid">
        <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
        <div className="row text-center">
            <div className="col-xs-12 col-sm-6 col-md-3" style={{ paddingBottom: "100px" }}>
                <h3 className="text-center">❝I lost my leg aged five...<br></br>Now I'm 1.9 seconds behind Usain Bolt.❞</h3>
                <p className="text-center">Jonnie Peacock</p>
                <p className="text-center">Rio Paralympics 2016</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4" style={{ paddingBottom: "100px", paddingTop: "30px" }}>
                <h3 className="text-center">❝Let me <strong>WIN.</strong><br></br>But if i cannot win,<br></br>
                let me be <strong>BRAVE</strong> in the attempt.❞</h3>
                <br></br>
                <p className="text-center">Special Olympics athlete oath</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
                <h3 className="text-center">❝You dont't know your own <br></br>
                    <strong>STRENGTH</strong><br></br>
                until you are forced to <strong><br></br>USE IT.</strong>❞</h3>
                <p className="text-center">Amy Purdy</p>
                <p className="text-center">US paralympic Team Snowboarder</p>
            </div>
        </div>
        <hr style={{ paddingBottom: "50px", borderTop: "1px solid black" }}></hr>
    </Styles>
)

export default Inspirational;