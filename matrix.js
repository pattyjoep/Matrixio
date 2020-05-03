function generateMatrix() {
    // get the reference for the body
    var body = $("#NewTableContainer");
    var RowSize = parseInt(document.getElementById("RowSize").value)
    var ColumnSize = parseInt(document.getElementById("ColumnSize").value)
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for (var j = 0; j < ColumnSize + 1; j++) {
            // creates a table column header
            if (j === 0) {
                var ColumnHeader = document.createElement("th");
                ColumnHeader.setAttribute("contenteditable", "true");
                ColumnHeader.setAttribute("placeholder", "Enter Here")
                tblBody.prepend(ColumnHeader);
            }
            else {
                var ColumnHeader = document.createElement("th");
                ColumnHeader.setAttribute("contenteditable", "true");
                ColumnHeader.setAttribute("placeholder", "Enter Here");
                tblBody.prepend(ColumnHeader);
            }
        }
    // creating all cells
    for (var i = 0; i < RowSize; i++) {
        // creates a table row
        var row = document.createElement("tr");
        // creates a table row header
        var RowHeader = document.createElement("th");
            RowHeader.setAttribute("contenteditable", "true");
            RowHeader.setAttribute("placeholder", "Enter Here");
            row.append(RowHeader);
        for (var j = 0; j < ColumnSize; j++) {
            var cell = document.createElement("td");
            // var button = document.createElement("button");
            // button.setAttribute("class", "btn btn-light tableBtn tableBtn-fail");
            // button.setAttribute("onClick", "Pass()");
            // button.textContent = "X"
            var StatusCard = document.createElement("div")
            var StatusCardFront = document.createElement("div")
            var StatusCardBack = document.createElement("div")
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