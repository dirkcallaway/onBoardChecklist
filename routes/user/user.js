const router = require("express").Router();

//Check HubSpot for User (by teacher_id held in company name)
router.get('/user', (req, res) => {
    const userSearchQuery = `https://api.hubapi.com/contacts/v1/search/query?q=${req.query.teacher_id}&hapikey=${process.env.HS_API}`
    axios
    .get(userSearchQuery)
    .then(user => {
        //Grab User VID
        // userVID = user.data.contacts[0].vid
        console.log(user.data.contacts[0].properties)
    })
    .catch(error => console.log(error))
})


module.exports = router;