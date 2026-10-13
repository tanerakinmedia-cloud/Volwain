const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('volwain', { version: '1.0.0' });
