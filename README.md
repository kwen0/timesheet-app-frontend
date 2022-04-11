## Setting up backend
If you do not have mongodb installed, please install it by following the instructions [here]https://www.mongodb.com/docs/manual/administration/install-community/

`git clone git@github.com:kwen0/timesheet-app-backend.git`
`cd timesheet-app-backend`
`npm install`
`npm run devStart`
Ensure that your terminal outputs "Server is running" and "Connected to database"

### Importing sample data from the csv file into mongodb database
Navigate to the timesheet-app-backend directory in your terminal and run the following command: 
`mongoimport --db=data --collection=timesheets --type=csv --headerline --file=data.csv`
Your terminal should say: 
`connected to: mongodb://localhost/`
`588 document(s) imported successfully. 0 document(s) failed to import.`

## Setting up frontend
`git clone git@github.com:kwen0/timesheet-app-frontend.git`
`cd timesheet-app-frontend`
`npm install`
`npm start`
