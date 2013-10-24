/*
 * File: app/view/CameraScreen.js
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

Ext.define('MyApp.view.CameraScreen', {
    extend: 'Ext.Container',
    alias: 'widget.cameraScreen',

    requires: [
        'Ext.device.Camera'
    ],

    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Camera',
                items: [
                    {
                        xtype: 'button',
                        id: 'backBut',
                        itemId: 'mybutton4',
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'container',
                margin: '20 10 10 10',
                items: [
                    {
                        xtype: 'button',
                        id: 'fromCameraBut',
                        itemId: 'mybutton9',
                        margin: 20,
                        text: 'Camera'
                    },
                    {
                        xtype: 'button',
                        id: 'fromFileBut',
                        itemId: 'mybutton10',
                        margin: 20,
                        text: 'File'
                    },
                    {
                        xtype: 'image',
                        height: 201,
                        id: 'testImg',
                        margin: 20,
                        ui: '',
                        width: 200
                    }
                ]
            }
        ]
    }

});