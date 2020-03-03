//import { UPDATE_COUNT } from './actions';
//import counterReducer from './counterReducer';
import store from './store';
const signalR = require('@aspnet/signalr');

export default class Hub {

    connection;

    constructor() {
        console.log('build connection');
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl("/hubs")
            .build();
    }

    connect() {

        console.log('connect');

        let self = this;

        this.connection.start().then(function () {
            self.testConnection();
        })
        .catch(function (err) {
            return console.error(err.toString());
        });

        this.connection.on("TestConnection", function (response) {
            console.log(response);
        });

        this.connection.on("UPDATE_COUNT", function (response) {
            // update state here
            store.dispatch({ type: "UPDATE_COUNT", data: response });
           // console.log("2", response);
        });
    }

    testConnection = () => {
        console.log('test connection');

        this.connection.invoke("TestConnection").catch(function (err) {
            return console.error(err.toString());
        });
    }
}