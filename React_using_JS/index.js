const root = ReactDOM.createRoot(document.getElementById("root"))


function renderElements() {
    const element =  (
        <div>
            <h1>Hello from Gnani!!</h1>
            <p>{new Date().toLocaleString()}</p>
        </div>
    )
    root.render(element)
}

window.setInterval(renderElements, 1000)