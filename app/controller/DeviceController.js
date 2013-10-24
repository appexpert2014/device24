/*
 * File: app/controller/DeviceController.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.DeviceController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.device.Connection',
        'Ext.device.Contacts',
        'Ext.device.Camera',
        'Ext.device.Geolocation'
    ],

    config: {
        control: {
            "#contBut": {
                tap: 'onContButTap'
            },
            "#camBut": {
                tap: 'onCamButTap'
            },
            "#conBut": {
                tap: 'onConButTap'
            },
            "#geoBut": {
                tap: 'onGeoButTap'
            },
            "#backBut3": {
                tap: 'onBackBut3Tap'
            },
            "#backBut": {
                tap: 'onBackButTap'
            },
            "#fromCameraBut": {
                tap: 'onFromCameraButTap'
            },
            "#fromFileBut": {
                tap: 'onFromFileButTap'
            },
            "#backBut1": {
                tap: 'onBackBut1Tap'
            },
            "#backBut4": {
                tap: 'onBackBut4Tap'
            },
            "#conStatusBut": {
                tap: 'onConStatusButTap'
            },
            "#geoStatusBut": {
                tap: 'onGeoStatusButTap'
            }
        }
    },

    onContButTap: function(button, e, eOpts) {
        Ext.Viewport.setActiveItem('contactsScreen');
        
    },

    onCamButTap: function(button, e, eOpts) {
        Ext.Viewport.setActiveItem('cameraScreen');
        
    },

    onConButTap: function(button, e, eOpts) {
        Ext.Viewport.setActiveItem('connectionScreen');
        
    },

    onGeoButTap: function(button, e, eOpts) {
        Ext.Viewport.setActiveItem('geoScreen');
        
    },

    onBackBut3Tap: function(button, e, eOpts) {
        //Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.setActiveItem('mainScreen');
    },

    onBackButTap: function(button, e, eOpts) {
        //Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.setActiveItem('mainScreen');
    },

    onFromCameraButTap: function(button, e, eOpts) {
        Ext.device.Camera.capture({
            success: function(image) {
                var imageView = Ext.getCmp('testImg');
                 imageView.setSrc(image);
            },
            quality: 75,
            width: 200,
            height: 200,
            destination: 'data'
        });
    },

    onFromFileButTap: function(button, e, eOpts) {
        Ext.device.Camera.capture({
        
            success: function(image) {
                //  var imgSrc = 'data:image/jpeg;base64,'.concat(image);
                  var imageView = Ext.getCmp('testImg');
                 imageView.setSrc(image);
        
            },
            quality: 75,
            width: 200,
            height: 200,
            source: 'library',
            destination: 'file'
        });
    },

    onBackBut1Tap: function(button, e, eOpts) {
        //Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.setActiveItem('mainScreen');
    },

    onBackBut4Tap: function(button, e, eOpts) {
        //Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.setActiveItem('mainScreen');
    },

    onConStatusButTap: function(button, e, eOpts) {
<<<<<<< HEAD
alert('Your connection type is: ' + Ext.device.Connection.getType());
=======
        alert('Your connection type is: ' + Ext.device.Connection.getType());
>>>>>>> change
    },

    onGeoStatusButTap: function(button, e, eOpts) {
        Ext.device.Geolocation.getCurrentPosition({
            success: function(position) {
                console.log(position.coords);
                 Ext.Msg.alert('Geolocation', ''+position.coords);
            },
            failure: function() {
                Ext.Msg.alert('Geolocation', 'Something went wrong!');
            }
        });
        
        //alert('Your connection type is: ' + Ext.device.Connection.getType());
    }

});
