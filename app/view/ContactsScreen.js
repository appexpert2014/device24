/*
 * File: app/view/ContactsScreen.js
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

Ext.define('MyApp.view.ContactsScreen', {
    extend: 'Ext.Container',
    alias: 'widget.contactsScreen',

    requires: [
        'Ext.device.Contacts'
    ],

    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Contacts',
                items: [
                    {
                        xtype: 'button',
                        id: 'backBut3',
                        itemId: 'mybutton7',
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            }
        ]
    }

});