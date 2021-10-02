(function (window) {
    'use strict';
    var App = window.App || {};

    class DataStore {
        constructor() {
            console.log('running the Datastore constructor');
            this.data = {};
            //return undefined; {} is empty obkect
        }
        add(key, val) {
            this.data[key] = val;
        }
        get(key) {
            return this.data[key];
        }
        getALL() {
            return this.data;
        }
        remove(key) {
            delete this.data[key];
        }

        static runTests(ds) {
            ds.add('m@bond.com', 'tea');
            ds.add('james@bond.com', 'eshpressho');
            ds.getAll();
            ds.remove('james@bond.com');
            ds.getAll();
            ds.get('m@bond.com');
            ds.get('james@bond.com');
        }
    }



    App.DataStore = DataStore;
    window.App = App;
})(window);