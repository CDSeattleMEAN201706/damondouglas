const express = require('express')
const path = require('path')
const app = express()

var PORT = 8000

const template = {
    locS:[
      'space',
      'mars',
      'moon'
    ], 
    langS: [
      'Perl',
      'JavaScript'
    ]
}

app.use(express.static(path.join(__dirname, './client')))
app.use(express.static(path.join(__dirname, './node_modules')))

app.set("views", path.join(__dirname, './client/views'))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index", template)
})

app.get("/result", (req, res) => {
  console.log("Submitted:", req.query)
  name = req.query.name
  loc_index = req.query.loc 
  lang_index = req.query.favlang
  loc = template['locS'][loc_index]
  lang = template['langS'][lang_index]
  comment = req.query.comment
  res.render(
    "result", {
      name: name,
      loc: loc,
      lang: lang,
      comment: comment
    }
  )
})

app.listen(PORT, function () {
  console.log('Example app listening on port 8000')
})
