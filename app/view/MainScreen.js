/*
 * File: app/view/MainScreen.js
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

Ext.define('MyApp.view.MainScreen', {
    extend: 'Ext.Container',
    alias: 'widget.mainScreen',

    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Device Native Demo'
            },
            {
                xtype: 'container',
                margin: '60 20 20 20',
                items: [
                    {
                        xtype: 'button',
                        id: 'contBut',
                        itemId: 'mybutton3',
                        margin: 20,
                        text: 'Contacts'
                    },
                    {
                        xtype: 'button',
                        id: 'camBut',
                        itemId: 'mybutton2',
                        margin: 20,
                        text: 'Camera'
                    },
                    {
                        xtype: 'button',
                        id: 'conBut',
                        itemId: 'mybutton1',
                        margin: 20,
                        text: 'Connection'
                    },
                    {
                        xtype: 'button',
                        id: 'geoBut',
                        itemId: 'mybutton',
                        margin: 20,
                        text: 'GeoLocation'
                    }
                ]
            }
        ]
    }

});