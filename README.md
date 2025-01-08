### Star Wars Planets Search Project Repository!
This project developed a list with filters of planets from the Star Wars universe using Context API and Hooks to manage global states.

### 📝 Skills
In this project, you developed:

Utilization of React's Context API to manage state.
Utilization of React Hooks useState.
Utilization of React Hooks useContext.
Utilization of React Hooks useEffect.
Creation of custom React Hooks.
Writing tests to ensure good test coverage of the application.
Features
1 - Fetch Data from Star Wars API and Populate a Table
A request was made to the /planets endpoint of the Star Wars API, and a table was populated with the returned data, excluding the data in the residents column.

### Table Illustration:

The table was rendered by a component called Table.
The residents column for each planet was removed before saving the data received from the API into the context.
The request was made in a component separate from the table component.
The API was accessed via this URL: https://swapi.dev/api/planets using fetch.
The first row of the table contained the column headers. The subsequent rows displayed the planet data received from the API.
2 - Created a Text Filter for the Table
The table was updated with planets that matched the filter as the name was typed, without needing to click a button to apply the filter. For example, if "Tatoo" was typed, the planet "Tatooine" was displayed as shown in the illustration.

### Technical Observations:

The text field had the property data-testid='name-filter' to facilitate automated testing.
Context API and Hooks were used to manage the application's state, making the development of subsequent requirements easier.
3 - Created a Numeric Filter
4 - Implemented Multiple Numeric Filters
5 - Developed Tests to Achieve 30% Total Application Coverage
6 - Avoided Repetitive Filters
7 - Removed a Numeric Filter by Clicking the "X" Icon and Cleared All Filters Simultaneously
Clicking the "X" icon of a numeric filter removed it, and clicking the "Remove All Filters" button cleared all numeric filters at once.
8 - Developed Tests to Achieve 60% Total Application Coverage
9 - Sorted Columns in Ascending or Descending Order
10 - Developed Tests to Achieve 90% Total Application Coverage
