/*
 * File: app/view/GeoScreen.js
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

Ext.define('MyApp.view.GeoScreen', {
    extend: 'Ext.Container',
    alias: 'widget.geoScreen',

    requires: [
        'Ext.device.Geolocation'
    ],

    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'GeoLocation',
                items: [
                    {
                        xtype: 'button',
                        id: 'backBut4',
                        itemId: 'mybutton8',
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'button',
                id: 'geoStatusBut',
                itemId: 'mybutton12',
                margin: '40 20 20 20',
                text: 'Location'
            }
        ]
    }

});