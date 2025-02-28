import React, { Component } from 'react';
import '../css/home.css'
import exampleimg from '../image/slackexample.png'
import slackJsonImg from '../image/slackjson.png'
import YTexp from '../image/youtube-exp.png'
import WhoAreWe from "../image/whoarewe.png"

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="containerx">
                    <h1 style={{ marginTop: "30px" }}>Documentation</h1>
                    <div className="parragraph-container">
                        <p>This a form to add commands to be able to execute in slack.</p>
                        <p>To be able to use your command you must install the RV slack app in your slack work station</p>

                        <h2 style={{ marginTop: "10px" }}>Adding Command Use case</h2>
                        <p>The command is any key word you like to link the API endpoint to view any data you want!</p>
                        <h2 style={{ marginTop: "10px" }}>Example</h2>
                        <div className="parragraph-container">
                            <h3 style={{ marginTop: "10px" }}>Endpoint Example</h3>
                            <p><b>Command use:</b> In Slack use <code>/execute</code> GetEmployee. <b>("GetEmployee"</b> is the command added by this web form<b>)</b></p>
                            <p><b>Body use:</b> The <code>Body</code> set in this web form will be stored in the database to be able to query it when using slack.</p>
                            <p><b>Type use:</b>  <code>Endpoint</code> </p>
                            <img src={exampleimg} alt="example slack" className="example-img" />
                            <hr></hr>
                            <p>To get this <code>JSON</code> data from the requested endpoint in this example: <code></code></p>
                            <img src={slackJsonImg} alt="example json" className="example-img" />

                            <hr></hr>
                            <h3 style={{ marginTop: "10px" }}>Video Example</h3>
                            <p><b>Command use:</b> In Slack use <code>/execute</code> WhoAreWe <b>("WhoAreWe"</b> is the command added by this web form<b>)</b></p>
                            <p><b>Body use:</b> The <code>Body</code> set in this web form will be stored in the database to be able to query it when using slack.</p>

                            <p><b>Type use:</b>  <code>String</code> </p>
                            <img src={YTexp} alt="example json" className="example-img" />
                            <br />

                            <br />
                            <p><b>Example in slack:</b>  <code>Who are we</code> by: Red Ventures</p>
                            <img src={WhoAreWe} alt="example whoarewe" className="example-img" />
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Home;
