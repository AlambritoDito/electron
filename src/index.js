'use strict'

//instanciando los objetos app y browser window
const { app, BrowserWindow } = require('electron')

//imprimiendo un mensaje en la consola antes de salir
app.on('before-quit', () => {
    console.log('Saliendo...')
})

//Ejecutando ordenes cuando la aplicación esta lista
app.on('ready', () => {
    //creandu una nueva ventana
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Platzi Picture',
        center: true,
        maximizable : false,
        show: false
    })
    //Este metodo muestra la ventana una vez que es cargada
    win.once('ready-to-show',() => {
        win.show()
    })
    //Metodo que obtiene e imprime la posición de la ventana en consola
    /*
    win.on('move',() =>{
        const position = win.getPosition()
        console.log(`la posición es ${position}`)
    })
    */
    // detectando el cierre de la ventana para cerrar el aplicativo
    win.on('closed', () => {
        win = null
        app.quit()
    })

    win.loadURL(`file://${__dirname}/renderer/index.html`)
    
})

