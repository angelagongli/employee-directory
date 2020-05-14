# Employee Directory

## Description
The employee directory application lists basic personal information of a company's employees in a table that can be sorted and filtered by the user.

It is deployed to GitHub Pages here: https://angelagongli.github.io/employee-directory/

## Usage
Start typing in the input field to filter employees by one of three fields, name, number or email address. The table is dynamically re-rendered as you are typing in real time. Click on the column header of the Name column to sort the list of employees alphabetically by last name, in ascending and descending order.

## Credits
This single-page [React](https://reactjs.org/) application was built with [create-react-app](https://create-react-app.dev/) and deployed to GitHub Pages using the [gh-pages](https://www.npmjs.com/package/gh-pages) node package.

The [moment](https://www.npmjs.com/package/moment) and [axios](https://www.npmjs.com/package/axios) npm packages are required in the app's JS files to correctly display the DOB column using the [moment.js](https://momentjs.com/) JS library and to make the API call to generate data respectively.

The list of people is created with data returned by the [Random User Generator API](https://randomuser.me/).

The favicon image and icons were taken from the collection of icons at [Font Awesome](https://fontawesome.com/) and the page styling uses the [Bootstrap](https://getbootstrap.com/) CSS framework.

## License
Copyright (c) Angela Li. All rights reserved.
Licensed under the [MIT License](LICENSE).