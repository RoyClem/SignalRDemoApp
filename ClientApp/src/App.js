import React, { Component } from 'react';
import Hub from './Hub';
import Home from './components/Home';
import store from './store';
import { Provider } from 'react-redux';
//const signalR = require('@aspnet/signalr');

export default class App extends Component {
    constructor(props) {
        super();

        //1
    //    alert('//1');

        //let connection = new signalR.HubConnectionBuilder()
        //    .withUrl("/hubs")
        //    //, {
        //    //    skipNegotiation: true,
        //    //    transport: signalR.HttpTransportType.WebSockets
        //    //})
        //    .configureLogging(signalR.LogLevel.Trace)
        //    .build();

        //2
        //function getConnected() {
        //    //alert('//2');
        //    connection.start().then(function () {
        //        TestConnection();
        //    }).catch(function (err) {
        //        return console.error(err.toString());
        //    });
        //}
        ////3
        //function TestConnection() {
        //    //alert('//3');

        //    connection.invoke("TestConnection").catch(function (err) {
        //        return console.error(err.toString());
        //    });
        //}

        //4
        //connection.on("TestConnection", function (response) {
        //    alert(response);
        //});

        //getConnected();

        let hub = new Hub();
        hub.connect();
    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <Home />
                </Provider>
            </div>
        );
    }
}