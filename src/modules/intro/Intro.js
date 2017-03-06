import React, { Component } from 'react';
import Header from '../../modules/header/Header';
import Paper from 'material-ui/Paper';

const imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bull_cartoon_04.svg/425px-Bull_cartoon_04.svg.png';

const style = {
    paperMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'space-around',
        background: '#002800',
        padding: '20px',
        height: '100vh',
        width: '100vw'
    },
    paper: {
        display: 'flex',
        background: 'none',
        color: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '768px',
        maxHeight: '200px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: 'none',
        fontFamily: 'Roboto'
    }
};
class Intro extends Component {
    render() {
        return (
            <div>
                <Header />
                <Paper style={style.paperMain}>
                    <Paper style={style.paper}>
                        <div><img src={imgSrc} role='presenttion' /></div>
                        <h1>A JAVASCRIPT DEVELOPER</h1>
                        <div>In the ever evolving world of Web Developement, I consider myself a </div>
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default Intro;