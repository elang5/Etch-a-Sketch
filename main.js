let refs = [];

function createGrid(v) {
    const e = document.getElementById('container');
    for (let i = 0; i < v; i++) {
        let row = document.createElement('div');
        row.className = "row";
        refs.push(row);
        for(var x = 1; x <= v; x++) {
            let cell = document.createElement('div');
            cell.addEventListener("mouseover", (e) => {
                e.target.style.background = "orange";
                setTimeout(function() {
                    e.target.style.background = "";
                }, 700);
            });
            cell.className = "gridsquare";
            row.appendChild(cell);
        }
        e.appendChild(row);
    }
}

const button = document.getElementById('click');

button.addEventListener("click", (e) => {
    let myNode = document.getElementById("container");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    v = prompt("What kind of grid would you like?")
    createGrid(v);
})