define(function() {
    'use strict'; 
    
    var subscribers = {}; 
    return {
        publisher: function(topic, data) {
            if(!subscribers[topic]) {
                return; 
            }
            subscribers[topic].forEach(function(subscriber) {
                subscriber(data);
            })
        }
        ,
        subscribe: function(topic, callback) {
            if(!subscribers[topic]) {
                subscribers[topic] = []; 
            }
            subscribers[topic].push(callback)
        }
    }; 
})