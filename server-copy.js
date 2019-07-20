const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios');
require('dotenv').config()

const app = express();
// app.use(express.static('public'));
// app.use(bodyParser.json());
// app.use(cors());

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Home!')
})

app.get('/onboard', (req, res) => {
    //URL to get values of properties for a specific user
    //Make Interpolation and loop through properties from HubSpot
    const userPropertyQueryURL = 'https://api.hubapi.com/contacts/v1/contact/vid/101/profile?propertyMode=value_only&property=assign_a_bulb&property=create_a_bulb&property=create_a_class&hapikey=' + process.env.HS_API;
    //URL to get all properties in Onboard Checklist group on HubSpot
    const checklistPropertiesQueryURL = 'https://api.hubapi.com/properties/v1/contacts/groups/named/onboard_checklist?includeProperties=true&hapikey=' + process.env.HS_API
    //Array to hold names of properties and their values - to be passed to Frontend
    const checklistPropertiesInfo = []    
    axios
        .get(checklistPropertiesQueryURL)
        .then(checklistProperties => {
            for (property of checklistProperties.data.properties) {
                checklistPropertiesInfo.push({label : property.label})
            }
                axios
                .get(userPropertyQueryURL)
                .then(response => {
                    let i = 0;
                    for(property in response.data.properties) {
                        if(property != "lastmodifieddate") {
                            checklistPropertiesInfo[i].name = property;
                            checklistPropertiesInfo[i].value = response.data.properties[property].value
                            i++;    
                        }
                    }
                    console.log(checklistPropertiesInfo)
                    // res.json(checklistPropertiesInfo)
                })
            
        })
        
})

app.listen(3000, ()=>{
    console.log('Listening on port ' + port);
});