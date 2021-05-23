# UFOs

## Purpose
A webpage is created utilizing JavaScript and HTML within VSCode.  Boostrap, CSS, D3 are used to aid in visualization for the HTML portion of the webpage.  The webpage is designed for reviewing UFO sightings with the ability to filter based on the date of the sighting, the country, city, or state of the sighting, or by the shape of the UFO.   
## Software 
    JavaScript
    Visual Studio Code
    CSS
    Bootstrap
    HTML
    D3
# Results
Users who wish to conduct a search will find the process easy.  Users must navigate to the filter search area where they will find all available search criteria.  Date, city, state, country, and shape of the UFO can be entered into the filter.  The filter will automatically filter based on any, or all, entered criteria.  Once an entry is made into one of the boxes, the webpage automatically filters based on that entry.  When a second entry is made, the webpage refilters the source data based on both criteria.  Removal of all filters results in the original data.   


Filter area:
![base_filter_and_results](https://user-images.githubusercontent.com/79231355/119246528-f73d6480-bb47-11eb-81ed-59d75a5355f4.png)

Filter area with 2 criteria entered:
![filter_with_2_criteria_and_results](https://user-images.githubusercontent.com/79231355/119246533-002e3600-bb48-11eb-9093-9ff7f6858e74.png)


# Summary 
The webpage is clean and easy to read.  Jumbotron styling with an intriguing picture captures the user’s attention as soon as the page is loaded.  A short article is presented that compels the user to further investigate reported sightings.  


Webpage home:
![Webpage](https://user-images.githubusercontent.com/79231355/119246570-38357900-bb48-11eb-945b-790743422900.png)


Improvements needed
1.	 Change the color of the text within the search criteria box.  Current color scheme is white text, which is the same as the background color of the box.   This can be accomplished by adding code in the style.css file.  Under the code for “li”, the a new line can be added with “color:#080808” to change text color to black.  The contrast against the white box background will allow the text to be easily seen. 


Text color in search criteria area- note highlighted text is nearly unnoticable:


![filter_needs_text_color_changed](https://user-images.githubusercontent.com/79231355/119246546-12a86f80-bb48-11eb-8f67-45b6daf37cb0.png)


Text color in search area after change:


![filter_with_text_color_changed](https://user-images.githubusercontent.com/79231355/119246554-1b00aa80-bb48-11eb-9c62-fc202473f135.png)


2.	The search criteria require lowercase letters.  However, country and city are routinely entered with capital first letters.   To avoid user errors and poor user experience, script should be added to change entered search criteria to all lower-case letters.  


3.	The data set is extremely small.  For a better webpage, the data set requires constant updating.  Users may be curious about UFO sightings but will quickly lose interest if the searchable timeframe is only a couple of years. 


4.	The search does not show anything when zero results sightings were found if the filter criteria is not met.  Users may see this as a poor design or extremely limited source data.  A tabulator should be added above the results area to show total results and the total number of sightings in the data set. 
