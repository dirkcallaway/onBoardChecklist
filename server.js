const express = require('express')
const axios = require('axios')
require('dotenv').config()
const newUserProperties = require('./newUserProperties')
const updateContactProperty = require('./updateContactProperty')
var cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public'))

    // app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}


const PORT = process.env.PORT || 3000;

//API Checks current properties for Onboard Checklist on HubSpot
let onboardChecklistPropertiesQuery = '';
//URL to get all properties in Onboard Checklist group on HubSpot
const checklistPropertiesQueryURL = `https://api.hubapi.com/properties/v1/contacts/groups/named/onboard_checklist?includeProperties=true&hapikey=${process.env.HS_API}`
let userVID

app.get('/onboard', (req, res) => {
    //Get all properties currently in Onboard Checklist and create a query string
    axios
    .get(checklistPropertiesQueryURL)
    .then(allOnboardProperties => {
        for(property of allOnboardProperties.data.properties) {
            onboardChecklistPropertiesQuery += `&property=${property.name}`
        }
    
        //URL to get values of properties for a specific user
        const userPropertyQueryURL = `https://api.hubapi.com/contacts/v1/contact/vid/${userVID}/profile?hapikey=${process.env.HS_API}${onboardChecklistPropertiesQuery}`;
        //Array to hold names of properties and their values - to be passed to Frontend
        const checklistPropertiesInfo = []
        axios
        .get(userPropertyQueryURL)
        .then(response => {
            for (property in response.data.properties) {
                if (property != "lastmodifieddate") {
                    let checklistItemName = property.replace(/_/g, ' ');
                    checklistItemName = checklistItemName.toLowerCase()
                        .split(' ')
                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ');
                    const checklistPropertyValue = response.data.properties[property].value
                    checklistPropertiesInfo.push(
                        {
                            name : checklistItemName, 
                            value : checklistPropertyValue,
                            propertyName : property
                        })
                }
            }
            res.json(checklistPropertiesInfo)
        })
        .catch(error => console.log("User Property Query: " + error))
    })
    .catch(error => console.log("Checklist Property Query: " + error))
})

//Check HubSpot for User (by teacher_id held in company name)
app.get('/user', (req, res) => {
    let userSearchQuery = `https://api.hubapi.com/contacts/v1/search/query?q=${req.query.teacher_id}&hapikey=${process.env.HS_API}`
    console.log(userSearchQuery, userVID)
    axios
    .get(userSearchQuery)
    .then(user => {
        if(user.data.total > 0){
            //Grab User VID
            userVID = user.data.contacts[0].vid
            res.json({userVID: userVID})
        } else {
            //Add new user info to JSON for API call
            let newUserNameID = [{"property" : "company", "value" : req.query.teacher_id}, {"property" : "firstname", "value" : req.query.name}]
            copyNewUserProperties = [...newUserProperties.properties]
            const createNewUser = copyNewUserProperties.concat(newUserNameID)
            const newUserWithProperties = {
                "properties" : createNewUser
            }
            axios
            .post(`https://api.hubapi.com/contacts/v1/contact/?hapikey=${process.env.HS_API}`, newUserWithProperties)
            .then(newUser => {
                userVID = newUser.data.vid
                res.json({userVID: userVID})
            })
        }

    })
    .catch(error => console.log(error))
})

app.get('/update', (req, res) => {
    //POST req to update contacts property
    let updateProperty = {"property" : req.query.updateProperty, "value" : "true"};
    updateContactProperty.properties = []
    updateContactProperty.properties.push(updateProperty)
    console.log(userVID, updateContactProperty)
    axios
    .post(`https://api.hubapi.com/contacts/v1/contact/vid/${userVID}/profile?hapikey=${process.env.HS_API}`, updateContactProperty)
    .then(res.status(200))
    .catch(error => console.log(error))
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port ' + PORT);
});