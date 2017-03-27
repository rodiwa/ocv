import React, { Component } from 'react';
import Header from '../../modules/header/Header';
import Paper from 'material-ui/Paper';
import NavigationScrollDown from 'material-ui/svg-icons/navigation/expand-more';
import RaisedButton from 'material-ui/RaisedButton';
import { green400, green200, green50, lime50, lime200, lime400, yellow300 } from 'material-ui/styles/colors'

const style = {
    paperMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        padding: '20px',
        height: '100vh',
        textAlign: 'center',
        boxShadow: 'none'
    },
    chartHolder: {
        background: 'none',
        width: '100%',
        maxWidth: '768px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: 'none',
        fontFamily: 'Roboto'
    },
    title: {
        fontFamily: '"Gloria Hallelujah"',
        fontSize: '2em'
    },
    topSpacer: {
        marginTop: '40px'
    },
    noClick: {
        cursor: 'default'
    },
    buttonStyle: {
        marginRight: '10px',
        marginBottom: '10px'
    },
    chipHolder: {
        margin: '50px 0'
    }
};

class Details extends Component {
    render() {
        return (
            <div>
                <Header />
                <Paper style={style.paperMain}>
                    <Paper style={style.chartHolder}>
                        <h2 style={style.title}>Summary Of skill set</h2>
                        <p>Since JavaScript already uses way too many tools and libraries, it would make more sense to classify them visually based on my level of proficiency. Such as,  </p>
                        <div style={style.chipHolder}>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green400} label="Confident"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green200} label="Somewhat Confident"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green50} label="Okayish"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime50} label="Will Do Better"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime200} label="Still Learning"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime400} label="Read About It"/>
                        </div>
                        <div>
                            <NavigationScrollDown />
                        </div>
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.chartHolder}>
                        <h2 style={style.title}>Single App Frameworks</h2>
                        <div style={style.chipHolder}>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green400} label="DurandalJS"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green400} label="ReactJS"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green200} label="AngularJS 1.x"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green50} label="BackboneJS"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime50} label="AngularJS 2.0"/>
                        </div>
                        <div>
                            <NavigationScrollDown />
                        </div>
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.chartHolder}>
                        <h2 style={style.title}>Utility, Automation, Build, Module Dependency Management</h2>
                        <div style={style.chipHolder}>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green400} label="RequireJS"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green400} label="Lodash"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green400} label="Promises"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green400} label="Gulp"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green200} label="NPM"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green200} label="WebPack"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green200} label="RegEx"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green200} label="KnockoutJS"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green50} label="Underscore"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime200} label="Bower"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime400} label="Yelp"/>
                            
                        </div>
                        <div>
                            <NavigationScrollDown />
                        </div>
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.chartHolder}>
                        <h2 style={style.title}>Backend & Servers</h2>
                        <div style={style.chipHolder}>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green200} label="NodeJS"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green200} label="Firebase"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green50} label="Python"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green50} label="PHP"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime50} label="WAMP"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime200} label="Nginx"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime200} label="Apache"/>
                        </div>
                        <div>
                            <NavigationScrollDown />
                        </div>
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.chartHolder}>
                        <h2 style={style.title}>Database</h2>
                        <div style={style.chipHolder}>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green200} label="Firebase Realtime DB"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green50} label="MongoDB"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime200} label="MySQL"/>
                        </div>
                        <div>
                            <NavigationScrollDown />
                        </div>
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.chartHolder}>
                        <h2 style={style.title}>Code Revisioning</h2>
                        <div style={style.chipHolder}>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green400} label="Git"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green400} label="Perforce"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green200} label="Github Desktop"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green50} label="SourceTree"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime200} label="SVN"/>
                        </div>
                        <div>
                            <NavigationScrollDown />
                        </div>
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.chartHolder}>
                        <h2 style={style.title}>Design & Mockup Tools</h2>
                        <div style={style.chipHolder}>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green400} label="Balsamiq"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green50} label="Photoshop CS5"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green50} label="Lightroom"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green50} label="Pencil Plugin"/>
                        </div>
                        <div>
                            <NavigationScrollDown />
                        </div>
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.chartHolder}>
                        <h2 style={style.title}>Issue Tracking</h2>
                        <div style={style.chipHolder}>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green400} label="JIRA"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green50} label="BugZilla"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green50} label="Team Foundation Server"/>
                        </div>
                        <div>
                            <NavigationScrollDown />
                        </div>
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.chartHolder}>
                        <h2 style={style.title}>Visualization & Graphs</h2>
                        <div style={style.chipHolder}>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green200} label="Google Charts"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green200} label="Highcharts"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green200} label="D3JS"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green50} label="Datatables Plugin"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green50} label="SVG"/>
                        </div>
                        <div>
                            <NavigationScrollDown />
                        </div>
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.chartHolder}>
                        <h2 style={style.title}>IDE</h2>
                        <div style={style.chipHolder}>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green50} label="Android Studio"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime50} label="Aptana"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime400} label="XCode"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime400} label="Eclipse"/>
                        </div>
                        <div>
                            <NavigationScrollDown />
                        </div>
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.chartHolder}>
                        <h2 style={style.title}>Text Editors</h2>
                        <div style={style.chipHolder}>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green400} label="Brackets"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green200} label="Sublime"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime400} label="Notepad++"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime400} label="Atom"/>
                        </div>
                        <div>
                            <NavigationScrollDown />
                        </div>
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.chartHolder}>
                        <h2 style={style.title}>Transpilers & Mobile Apps With Modern Javascript</h2>
                        <div style={style.chipHolder}>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green200} label="ES6"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={green200} label="Webpack"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime50} label="Babel"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime50} label="React Native"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime50} label="Native Script"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime50} label="React Ionic"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={lime400} label="TypeScript"/>
                        </div>
                        <div>
                            <NavigationScrollDown />
                        </div>
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.chartHolder}>
                        <h2 style={style.title}>Spare Time Shenanigans</h2>
                        <div style={style.chipHolder}>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={yellow300} label="Unity3D Game Development"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={yellow300} label="Blender 3D MODELLING"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={yellow300} label="Augmented Reality"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={yellow300} label="AI"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={yellow300} label="Machine Learning"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={yellow300} label="Raspberry Pi"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={yellow300} label="Machine Learning"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={yellow300} label="Desktop Applications In Javascript"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={yellow300} label="ElectronJS"/>
                            <RaisedButton style={style.buttonStyle} overlayStyle={style.noClick} backgroundColor={yellow300} label="Internet Of Things"/>
                        </div>
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default Details;