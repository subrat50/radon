let axios = require("axios")

let weatherController=async function(req,res){
try{
    let options = {
        method: 'get',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=london&appid=0055b88e6e92cea8e822a4e92faafe7d'
    }
    let result = await axios(options);
    console.log(result)
    let data = result.data
    res.status(200).send({ msg: data, status: true })
}
catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}
}

let changeTemprature=async function(req,res){
try{
    let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let changeCities=[]
    for(let i=0;i<cities.length;i++){
        // let obj ={city:cities[i]}
        let resp=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=0055b88e6e92cea8e822a4e92faafe7d`)
        
        console.log(resp.data.main.temp)
         let tempData=resp.data.main.temp
        changeCities.push({cities: cities[i],temp:tempData})
    }
    let sortArray=changeCities.sort((a,b) =>a.temp-b.temp)

    console.log(sortArray)
    res.status(200).send({ msg: sortArray, status: true })
}
catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}
}
   module.exports.weatherController=weatherController
    module.exports.changeTemprature=changeTemprature
// const sortedTempOfCities = async function (req, res) {
// //   try {
   
//     let city = [
//       "Bengaluru",
//       "Mumbai",
//       "Delhi",
//       "Kolkata",
//       "Chennai",
//       "London",
//       "Moscow",
//     ];
//     let cityTemp = [];
//     for (let i = 0; i < city.length; i++) {
//       let options = {
//         method: "get",
//         url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=3e0778464b25e1ff9a26cb98dfce8f9a`,
//       };
//         let weather = await axios(options);
//         let tempData = weather.data.main.temp

//       cityTemp.push({ city: city[i], temp:tempData  });
//     }
//     const result = cityTemp.sort((a, b) => a.temp - b.temp);

//     res.status(200).send({ msg: result });
//   } catch (err) {
//     res.status(500).send({ msg: err.message });
