import React from 'react'
// const { BrowserWindow } = window.require('electron').remote

// const openWindow = () => {
//     let win = new BrowserWindow({ width: 400, height: 320 })
//     win.on('close', () => { win = null })
//     win.loadURL('http://localhost:3000')
//     win.show()
// }

const Test = (props) => {
    return (
        <>
        <button onClick={()=>console.log('hello')}>Open Window</button>
        <p>{props.match.params.id}</p>
        </>
    )
}


// const newWindowBtn = document.getElementById('new-window')

// newWindowBtn.addEventListener('click', (event) => {
//   const modalPath = path.join('file://', __dirname, '../../sections/windows/modal.html')
//   let win = new BrowserWindow({ width: 400, height: 320 })

//   win.on('close', () => { win = null })
//   win.loadURL(modalPath)
//   win.show()
// })

export default Test

