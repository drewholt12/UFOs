// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

fucntion buildTable(data) {
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

// add a filterering button using D3
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");  // select() function selects 1st element that mathces our selector string(#datetime)- the item were telling it to look for
                                                        // property("value") tells D3 to grab the information located in the #datetime id and hold it in the "date" variable of the search
    let filteredData = tableData;  // tells the filter default to be the default table- similar to clearing the data in the biuldTable function                                                    
// pseudocode practice
// if (a date is entered) {
//    Filter the efault data to show on the data entered
// };
    //Check to see if a date was entered and filter data using that date
    if (date) {
        //Apply 'filter' to the table data to only keep the rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date); // now cleared, we assign filteredData using the filter function where we find the row, and check the datetime to be equal to the date var entered by the user
    };
    // now build the filtered table using the buildTable function already defined and calling the filteredData we just created  NOte- if no date was enterd then filteredData will just be the original table Data
    buildTable(filteredData);
};

// build function so the code knows when a click happens
d3.selectAll("#filter-btn").on("click", handleClick);  // selector string is #filter-btn (an html tag) so that when the button is "click", code will execute handleclick function

// Build the table when the page loads
buildTable(tableData);