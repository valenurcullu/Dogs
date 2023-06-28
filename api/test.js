const axios = require('axios');


// const getApi = async () => {
//     const dogsURL = await axios.get('https://api.thedogapi.com/v1/breeds?api_key=live_aSbCh5Jtfk5aDR8Nks3VmxGVneQW2vKac3UpHNzBGfKch3b57K9108CuJ7cAxUvJ');
//     var regex = /(\d+)/g;
//     let dogsInfo = await dogsURL.data.map((dog) => {
//         return {
//                 id : dog.id,
//                 name : dog.name,
//                 temperament : dog.temperament,
//                 weight_min : parseInt(dog.weight.imperial.split("-")[0]),
//                 weight_max : parseInt(dog.weight.imperial.split("-")[1]),
//                 height_min : parseInt(dog.weight.imperial.split("-")[0]),
//                 height_max : parseInt(dog.weight.imperial.split("-")[1]),
//                 lifeTime : dog.life_span.match(regex).map(e=>parseInt(e)).join('-'),
//                 image : dog.image.url,
//                 }
//             })
        
//         return dogsInfo
//     }



























let height = '12-15 años'

// const numero = ()=>Number(height)

// console.log(numero)

/////////////////////////

// const onlyNumbers = ()=>height.replace(/[^0-9]+/g, "");



//////////////////////
var regex = /(\d+)/g;
const numero = height.match(regex).map(e=>parseInt(e)).join('-')
console.log(numero)
// const numero1 = numero.map(e=>parseInt(e))
// const numero2 = numero1.join('-')
// console.log(numero2)

// var name="i_txt_7_14";
// console.log(name.match(regex)); 

// var name2="i_txt__________7_14";
// console.log(name2.match(regex)); 

// var name3="i_t10xt_7_14";
// console.log(name3.match(regex)); 
/////////////