const copiedText = document.getElementById("coordinates");
const processButton = document.getElementById("go");
const cleanButton = document.getElementById("clean");

copiedText.addEventListener("input", (ev) => {
    const lines = copiedText.value.split("\n");
    copiedText.value = lines.map(l => l.trim()).join("\n")
})


cleanButton.addEventListener( "click", (ev) => {
    ev.preventDefault;
    copiedText.value = ""
})

go.addEventListener( "click", (ev) => {
    ev.preventDefault;
    const lines = copiedText.value.split("\n");
    const x = lines[0].slice(2).split("--").map( l => l.trim())
    const y = lines[1].slice(2).split("--").map( l => l.trim())

    document.getElementById("x-dim").textContent = `${x[1] - x[0]} mm`;
    document.getElementById("y-dim").textContent = `${y[1] - y[0]} mm`;
    document.getElementById("rectangle").textContent = `rectang ${x[0]},${y[0]} ${x[1]},${y[0]} `
    
    if (lines.length > 2) {
        const z = lines[2].slice(2).split("--").map( l => l.trim())
        document.getElementById("z-dim").textContent = `${z[1] - z[0]} mm`;
        document.getElementById("prism").textContent = `prismarect ${x[0]},${y[0]},${z[0]} ${x[1]},${y[1]},${z[1]} `
    }

})

document.getElementById("btn-3d").addEventListener("click", (ev) => {
    document.getElementById("prism").select();
    document.execCommand("copy")
})

document.getElementById("btn-2d").addEventListener("click", (ev) => {
    document.getElementById("rectangle").select();
    document.execCommand("copy")
})
