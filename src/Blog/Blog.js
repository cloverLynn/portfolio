import React from 'react';
import './Blog.css';
import request from 'request';
export class Blog extends React.Component {
    constructor(props){
        super(props);


        this.state = {
            articles : [],
            display : null,
            back: null,
            forward: null
        }

    }


    render() {
        return (
            <div className="Blog">
                <div className="toolBar">
                    <div className="Tool">←</div>
                    <div className="Tool">→</div>
                    <div className="addressBar">http://wwww.CloverLynn.com</div>
                </div>
                <div className="content">
                    <div className="blogTitle">Clover Lynn</div>
                </div>
            </div>
        );
    }
}