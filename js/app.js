// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

fucntion buileTable(data) {
    // First, clear out any existing data so we aren't using any pre-existing filters
    tbody.html("");
}
// Next, loop through each object in the data and append a row and cells for each value in the row
data.forEach((dataRow) => {
    // Append a rwo to the table body
    let row = tbody.append("tr");  // tell JS to find the tbody tag (<tbody>) and add a table row (<tr>) tr means table row in html code
    
    // Loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {  // tells JS to reference one object from the array, data row as the arguments tells JS the object goes into the data row.  the for each says one object per row
        let cell = row.append("td");  // tells js to pus the cell into a table  -  td means table data <td>
        cell.text(val); // tells js to take the text value and place into the cell. 
        }
    );      
});