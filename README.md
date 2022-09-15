Deployed application: https://samyfrey.github.io/passbook/

# Passbook 📊
Passbook is a banking transaction management tool that allows bankers and their analysts to manage their client portfolio, providing a consolidated view of their revenue targets, outstanding loans and budget performance. Users also have access to all the latest business and client-specific news (requires business tier to work in deployed apps)

**View your dashboard, search clients and get the latest news**

<p align="center">
<img src="http://g.recordit.co/v3ndC4HCHg.gif" alt="site-overview" width="700" >
</p>

**Create an account, add new loans, track progress as charts and number get updated automatically**


<p align="center">
<img align="center" src="http://g.recordit.co/tp0zyRSLww.gif" alt="add-loan" width="700">
</p>

## Set Up
* ```npm install``` to install all dependencies 
* Creating a user account is not necessary to access all the functionalities, it is required for creating, editing and deleting resources though 
* Note: the application is deployed with heroku


## Solution 
This project aims to be a solution to issues I faced as an investment banking analyst: automate repetitive tasks and provide instant snapshot of business metrics avoiding manual work done through excel. Passbook also integrates NewsAPI to speed up the news summary process

## User Story
As a banking analyst, I want to: 
- Quickly access a consolidated view of all my portfolio to track my revenue objectives
- Visualize my authorizations
- Create and manage client profiles and loans to keep my portfolio up-to-date
- Manage my budget and be able to instantly update my objectives
- Follow news relevant to my clients easily

## Main Features
* Dashboard: View all important information in one place, revenues year-over-year, budget progress, recent loan transactions, latest business news
* Search: Type the name of a client to access its page
* Loans: Track all loans in the portfolio, delete loans as needed
* Clients: Add new clients, edit details and delete as needed, follow relevant news on client page. When a user creates new client, the logo get retrieved automatically through an API
* Budget: Edit my budgets as needed
* Newsfeed: Get all relevant news on my dashboard and for each client 


## Main Libraries
* Charts: [recharts](https://recharts.org/en-US/)
* Icons: [materialUI](https://mui.com/)
* News API: [NewsAPI](https://newsapi.org/) - Note: unavailable in the deployed version as the API requires a business tier to work with deployed sites


## Architecture
* MongoDB resource models are created with mongoose, there is a one-to-many relationship between a client and loan documents and a one-to-one relationship between a loan and a client. A loan can only be created if a client exisits. 
* CRUD functions for each resource
* RESTful routes to hit each API endpoint 
* React components are seperated in two folders: pages and feature components. 


resource | index | available routes 
--- | --- | ---
users | /account | /sign-up, /sign-in, /change password, /sign-out 
clients | /clients | /create, /:borrowerId, :borrowerId/edit 
loans | /loans | /create 
budget | /budget | /:budgetId

* React framework with features and pages components
* Styling applicable to multiple elements is done inside index.scss and component-specific is done inside each component folder 

## Stretch and Potential improvements
* Calculate loan interests
* Adding loans closed at different times (as opposed to chronologically) creates a bug 

## Glows and Grows
* Learned tremedously on react, manipulated arrays of data with nested objects (to calculate progress and feed charts dynamically), worked with Axios and complex requests (authenticated, mutliple data object properties etc.) 
* Could have used SQL database to faciliate working with loan resource (as opposed to mongoose subarrays)
