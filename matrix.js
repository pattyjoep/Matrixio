function generateMatrix() {
    // get the reference for the body
    let body = $("#NewTableContainer");
    let RowSize = parseInt(document.getElementById("RowSize").value)
    let ColumnSize = parseInt(document.getElementById("ColumnSize").value)
    // creates a <table> element and a <tbody> element
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
    for (let j = 0; j < ColumnSize + 1; j++) {
            // creates a table column header
            if (j === 0) {
                let ColumnHeader = document.createElement("th");
                ColumnHeader.setAttribute("contenteditable", "true");
                ColumnHeader.setAttribute("placeholder", "Enter Here")
                tblBody.prepend(ColumnHeader);
            }
            else {
                let ColumnHeader = document.createElement("th");
                ColumnHeader.setAttribute("contenteditable", "true");
                ColumnHeader.setAttribute("placeholder", "Enter Here");
                tblBody.prepend(ColumnHeader);
            }
        }
    // creating all cells
    for (let i = 0; i < RowSize; i++) {
        // creates a table row
        let row = document.createElement("tr");
        // creates a table row header
        let RowHeader = document.createElement("th");
            RowHeader.setAttribute("contenteditable", "true");
            RowHeader.setAttribute("placeholder", "Enter Here");
            row.append(RowHeader);
        for (let j = 0; j < ColumnSize; j++) {
            let cell = document.createElement("td");
            // let button = document.createElement("button");
            // button.setAttribute("class", "btn btn-light tableBtn tableBtn-fail");
            // button.setAttribute("onClick", "Pass()");
            // button.textContent = "X"
            let StatusCard = document.createElement("div")
            let StatusCardFront = document.createElement("div")
            let StatusCardBack = document.createElement("div")
            StatusCard.setAttribute("onClick", "changeStatus()");
            StatusCard.setAttribute("class", "status-card")
            StatusCard.setAttribute("id", ColumnSize[j])
            StatusCardFront.setAttribute("class", "status-card-front");
            StatusCardFront.textContent = "X"
            StatusCardBack.setAttribute("class", "status-card-back");
            StatusCardBack.textContent = "✓"
            StatusCard.append(StatusCardFront)
            StatusCard.append(StatusCardBack)
            cell.append(StatusCard)
            row.append(cell);
        }
        // add the row to the end of the table body
        tblBody.append(row);
    }
    // put the <tbody> in the <table>
    tbl.append(tblBody);
    // appends <table> into <body>
    body.append(tbl);
}
function changeStatus() {
    this.attr(".flipped");
}