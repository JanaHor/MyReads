# MyReads Project

This is app helps you to organize your books into 3 shelfs:
Currently Reading
Want To Read
Read

When you select a different shelf, the book moves there. In search page(/search), you can get the list of books as by your input keywords.

## How to get started
1. node.js + npm is required - you can download it from 
2. git clone or download zip file
3. unzip into "your_folder"
4. cd your_folder
5. install all project dependencies with npm install
6. start the development server with npm start

## Folder structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html # This HTML file is a template.
└── src
    ├── App.css # Styles for the app.
    ├── App.js # The root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
	├── Book.js # Book page.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    ├── index.js # It is used for DOM rendering only.
	├── ListBooks.js # This is the main page.
	└── SearchBooks.js # This is the search page.
```

## Backend Server

The file [`BooksAPI.js`](src/BooksAPI.js) contains the methods which is needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
