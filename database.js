/* firebase is an eg of a real-time db
reference(ref) = a location in a db for storing data 
the ref() function takes 2 parameters; the db and ref name
*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js" 

import {getDatabase, ref} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
//set the script tag in html to type=module to get this to work (this is the ESM way)

const app = initializeApp(appSettings)

const database = getDatabase(app)

const moviesInDb = ref(database, "movies")

// to fetch items from db, you can use the onValue
