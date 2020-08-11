import React from 'react';


const Inspirational = () => (
    <div className="container-fluid">
        <hr style={{ paddingTop: "30px", borderTop: "1px solid black" }}></hr>
        <div className="row text-center">
            <div className="col- 12 col-xs-12 col-sm-12 col-md-4" style={{ paddingBottom: "100px" }}>
                <h3 className="text-center">❝I lost my leg aged five...<br></br>Now I'm 1.9 seconds behind <br></br> Usain Bolt.❞</h3>
                <br></br> <p className="text-center">Jonnie Peacock</p>
                <p className="text-center">Rio Paralympics 2016</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4" style={{ paddingBottom: "100px" }}>
                <h3 className="text-center" style={{ lineHeight: "2em" }} >❝Let me <strong>WIN.</strong><br></br>But if i cannot win,<br></br>
                let me be <strong>BRAVE</strong> <br></br>in the attempt.❞</h3>
                <br></br>
                <p className="text-center">Special Olympics athlete oath</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
                <h3 className="text-center">❝You dont't know your own <br></br>
                    <strong>STRENGTH</strong><br></br>
                until you are forced to <strong><br></br>USE IT.</strong>❞</h3>
                <p className="text-center">Amy Purdy</p>
                <p className="text-center">US paralympic Team Snowboarder</p>
            </div>
        </div>
        <hr style={{ paddingBottom: "30px", borderTop: "1px solid black" }}></hr>
    </div >
)

export default Inspirational;