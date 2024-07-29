const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")



const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req,res)=>{
    const firstname = req.body.first_name
    const lastname = req.body.last_name
    const email = req.body.email
    const data = {
        members:[{
            email_address: email,
            status : "subscribed",
            merge_fields:{
                FNAME: firstname,
                LNAME: lastname
            }
        }]
    }
    jsonData = JSON.stringify(data)

    //const apiKey = "d2d1a70d766dcdaa3c4433d4a08674c3-us22"
    //const list_id= "3469c455a3"
    const url= "https://us22.api.mailchimp.com/3.0/lists/3469c455a3" //this may have been updated and I might need to find the new url
    const options={
        method:"POST",
        auth:"nick:d2d1a70d766dcdaa3c4433d4a08674c3-us22"
    }

    const request = https.request(url, options, (response)=>{

        response.on("data", (data)=> {
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData)
    request.end()
console.log(firstname,lastname,email)
})
app.listen(8080, (req,res)=>{
    console.log("Server is running on port 8080")
})