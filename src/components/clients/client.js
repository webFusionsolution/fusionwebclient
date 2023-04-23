import "./client.css";
import React from "react";
import Social from '../Social/Social'

const Client = () => {
    const ASSETS = process.env.REACT_APP_ASSETS;
    return (
        <div className="client-section">
            <h2 className="text-uppercase">OUR CLIENTS</h2>
            <div className="client-container">
                <div><img src={ASSETS + 'client-1.png'} /></div>
                <div><img src={ASSETS + 'client-2.png'} /></div>
                <div><img src={ASSETS + 'client-3.png'} /></div>
                <div><img src={ASSETS + 'client-4.png'} /></div>
                <div><img src={ASSETS + 'client-5.png'} /></div>
                <div><img src={ASSETS + 'client-6.png'} /></div>

            </div>
        </div>
    );
};

export default Client;
