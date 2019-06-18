const express=require('express')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const path=require('path')
const hbs=require('hbs')

const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,'../templates/partials')

const app=express()

app.use(express.static(publicDirectoryPath))
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

app.get('',(req,res)=>{

      res.render('',{
         title:'Weather',
         name:'lalit chaudhary'
     })
})

app.get('/weather',(req,res)=>{

      if(!req.query.address)
      {
          return res.send({
              error:"Please provide address"
          })
      }

      geocode(req.query.address,(error,{latitude,longitude}={})=>{

        if(error)
        {
            return res.send({
                error: error
            })                
        }
        else
        {
           
            forecast(latitude,longitude,(error,forecastData)=>
            {
                return res.send({
                 forecast:forecastData
                })                    
                 
            })
        }
    })


    //  res.render('weather',{
    //      title:'Weather',
    //      name:'lalit chaudhary'
    //  })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about',
        name:'lalit chaudhary'
    })
})

app.get('/help',(req,res)=>{

    res.render('help',{
        title:'Help',
        name:'lalit chaudhary'
    })
})
app.get('*',(req,res)=>{

    res.render('404',{
        title:'404',
        errormessage:'Page not Found',
        name:'lalit chaudhary'
    })
})

app.listen(3000,()=>{

    console.log('server is running')
})
