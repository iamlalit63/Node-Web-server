const request=require('request')



const forecast=(latitude,longitude,callback)=>{

   
    const url='https://api.darksky.net/forecast/a9ceb7c1feb4646afe93767660c5e4ef/'+latitude+','+longitude;

    request({url:url,json:true},(error,response)=>{
            
        if(error)
        {
          callback('check internet connection',undefined)            
        }
        else if(response.body.error)
        {
            callback('no serach found',undefined)
        }
        else
        {
            data='your temperature is '+response.body.currently.temperature + " and probablity of rain " + response.body.currently.precipProbability;
            callback(undefined,data)
        }

    })
}

module.exports=forecast