const request=require('request')



const geocode=(address,callback)=>{

    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1Ijoicm95bGFsaXRyb3k2MyIsImEiOiJjandpeGd4c3owOXhhNDhwNnl5MXh5M3F2In0.4DVE-DBPcw9JahCJdQ_gCA"

    request({url:url,json:true},(error,response)=>{
            
        if(error)
        {
          callback('check internet connection',undefined)            
        }
        else if(response.body.features.length ===0)
        {
            callback('no serach found',undefined)
        }
        else
        {
                  
            callback(undefined,{ latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0]})
        }

    })
}

module.exports=geocode