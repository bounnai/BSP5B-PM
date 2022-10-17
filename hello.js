 // comment here ****
 let name = 'Mark';
 // document.write(name)
 /*
   comment multi
   line  
  */
 console.log(name)
 // object variable
 const person = {
     name: 'Mark',
     phone: '9787 7777',
     address: {
         village: 'Nongborn',
         district:'Xaysettha',
         province: 'Vientiance'
     },
     offices: ['BitDigo','wecare','MTS'],
 }
 console.log(person)
 console.log(person.name)
 console.log(person.address.village)
 console.log(person.offices[0])
 // function
 function sayHi(name) {
     alert(`Hi. ${name}`)
 }
 // sayHi('Mark')
 // sayHi('Alex')

 // function call api
async function getApi(){
    try {
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        // send request api from server 
        // [http method: GET,POST,DELETE,PUT...etc]
        const req = await fetch(url, {
            method:'GET'
        })
        console.log(req)
        const res = await req.json() // convert data to [JSON data]
        console.log(res)
        // javaScript [DOM]
        document.getElementById('time').innerText = res.time.updated

    } catch (error) {
        console.error(error)
    }
}
// call function
getApi()