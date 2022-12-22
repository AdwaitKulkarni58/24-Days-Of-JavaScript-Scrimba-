function getReadyTables() {
    const readyTables = []
    for (let i = 0; i < 2; i++) {
        readyTables.push(Math.round(Math.random()*20) + 1)
    }
    return readyTables
}


function displayTables() {
    let readyTablesArray = getReadyTables();
    return readyTablesArray.map(table => `<div class="table">${table}</div>`).join('');
}

document.getElementById("tables").innerHTML = displayTables();
