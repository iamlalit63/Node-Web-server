
// fetch('http://localhost:3000/weather?address=jodhpur').then((response)=>{

//       response.json().then((data)=>{
//           console.log(data)
//       })
// })

const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const message_one=document.querySelector('#message-one')
const message_two=document.querySelector('#message-two')



weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(search.value)

    message_one.textContent = 'loading...'
    message_two.textContent = ''

    fetch('/weather?address='+search.value).then((response)=>{

    response.json().then((data)=>{
                   
        if(data.error)
        {
            message_one.textContent=data.error
           // console.log(data.error)
        }else {
            message_two.textContent=data.forecast
           // console.log(data.forecast)
        }

        })
    })
})