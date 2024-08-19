import { Car, ChevronDown, Fuel, MoveLeft, MoveRight } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'
import tcar from '../assets/toyota.jpg'
import bmw from '../assets/bmw.jpg'
import Chevrolet from '../assets/Chevrolet.jpg'
import ford from '../assets/ford.png'
import honda from '../assets/honda.jpg'
import Hyundai from '../assets/Hyundai.jpg'
import Mercedes from '../assets/Mercedes.jpg'
import Nissan from '../assets/Nissan.png'
import Volkswagen from '../assets/Volkswagen.png'
import { Link, useNavigate } from 'react-router-dom'
  

let cityName = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Vadodara",
    "Patna",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Faridabad",
    "Meerut",
    "Rajkot",
    "Kalyan-Dombivli",
    "Vasai-Virar",
    "Varanasi",
    "Srinagar",
    "Aurangabad",
    "Dhanbad",
    "Amritsar",
    "Navi Mumbai",
    "Allahabad",
    "Howrah",
    "Gwalior",
    "Jabalpur",
    "Coimbatore",
    "Vijayawada",
    "Jodhpur",
    "Madurai",
    "Raipur",
    "Kota",
    "Guwahati",
    "Chandigarh",
    "Solapur",
    "Hubli-Dharwad",
    "Mysuru",
    "Bareilly",
    "Tiruchirappalli"
  ]
  let cardetails = [
    {
      "brand": "Toyota",
      "image": tcar,
      "models": [
        {
          "model": "Corolla",
          "image": "https://example.com/corolla.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Camry",
          "image": "https://example.com/camry.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Prius",
          "image": "https://example.com/prius.png",
          "fuelType": "Hybrid"
        },
        {
          "model": "Hilux",
          "image": "https://example.com/hilux.png",
          "fuelType": "Diesel"
        },
        {
          "model": "Land Cruiser",
          "image": "https://example.com/landcruiser.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Fortuner",
          "image": "https://example.com/fortuner.png",
          "fuelType": "Diesel"
        },
        {
          "model": "RAV4",
          "image": "https://example.com/rav4.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Highlander",
          "image": "https://example.com/highlander.png",
          "fuelType": "Hybrid"
        },
        {
          "model": "Tacoma",
          "image": "https://example.com/tacoma.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Sequoia",
          "image": "https://example.com/sequoia.png",
          "fuelType": "Petrol"
        }
      ]
    },
    {
      "brand": "Honda",
      "image": honda,
      "models": [
        {
          "model": "Civic",
          "image": "https://example.com/civic.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Accord",
          "image": "https://example.com/accord.png",
          "fuelType": "Petrol"
        },
        {
          "model": "CR-V",
          "image": "https://example.com/crv.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Pilot",
          "image": "https://example.com/pilot.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Fit",
          "image": "https://example.com/fit.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Odyssey",
          "image": "https://example.com/odyssey.png",
          "fuelType": "Petrol"
        },
        {
          "model": "HR-V",
          "image": "https://example.com/hrv.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Ridgeline",
          "image": "https://example.com/ridgeline.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Insight",
          "image": "https://example.com/insight.png",
          "fuelType": "Hybrid"
        },
        {
          "model": "Clarity",
          "image": "https://example.com/clarity.png",
          "fuelType": "Hybrid"
        }
      ]
    },
    {
      "brand": "Ford",
      "image": ford,
      "models": [
        {
          "model": "Focus",
          "image": "https://example.com/focus.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Mustang",
          "image": "https://example.com/mustang.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Explorer",
          "image": "https://example.com/explorer.png",
          "fuelType": "Petrol"
        },
        {
          "model": "F-150",
          "image": "https://example.com/f150.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Escape",
          "image": "https://example.com/escape.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Ranger",
          "image": "https://example.com/ranger.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Edge",
          "image": "https://example.com/edge.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Expedition",
          "image": "https://example.com/expedition.png",
          "fuelType": "Petrol"
        },
        {
          "model": "EcoSport",
          "image": "https://example.com/ecosport.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Bronco",
          "image": "https://example.com/bronco.png",
          "fuelType": "Petrol"
        }
      ]
    },
    {
      "brand": "BMW",
      "image": bmw,
      "models": [
        {
          "model": "3 Series",
          "image": "https://example.com/3series.png",
          "fuelType": "Petrol"
        },
        {
          "model": "5 Series",
          "image": "https://example.com/5series.png",
          "fuelType": "Petrol"
        },
        {
          "model": "7 Series",
          "image": "https://example.com/7series.png",
          "fuelType": "Petrol"
        },
        {
          "model": "X1",
          "image": "https://example.com/x1.png",
          "fuelType": "Petrol"
        },
        {
          "model": "X3",
          "image": "https://example.com/x3.png",
          "fuelType": "Petrol"
        },
        {
          "model": "X5",
          "image": "https://example.com/x5.png",
          "fuelType": "Petrol"
        },
        {
          "model": "X7",
          "image": "https://example.com/x7.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Z4",
          "image": "https://example.com/z4.png",
          "fuelType": "Petrol"
        },
        {
          "model": "i4",
          "image": "https://example.com/i4.png",
          "fuelType": "Electric"
        },
        {
          "model": "iX",
          "image": "https://example.com/ix.png",
          "fuelType": "Electric"
        }
      ]
    },
    {
      "brand": "Audi",
      "image": Chevrolet,
      "models": [
        {
          "model": "A3",
          "image": "https://example.com/a3.png",
          "fuelType": "Petrol"
        },
        {
          "model": "A4",
          "image": "https://example.com/a4.png",
          "fuelType": "Petrol"
        },
        {
          "model": "A6",
          "image": "https://example.com/a6.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Q3",
          "image": "https://example.com/q3.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Q5",
          "image": "https://example.com/q5.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Q7",
          "image": "https://example.com/q7.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Q8",
          "image": "https://example.com/q8.png",
          "fuelType": "Petrol"
        },
        {
          "model": "A8",
          "image": "https://example.com/a8.png",
          "fuelType": "Petrol"
        },
        {
          "model": "e-tron",
          "image": "https://example.com/etron.png",
          "fuelType": "Electric"
        },
        {
          "model": "e-tron GT",
          "image": "https://example.com/etron-gt.png",
          "fuelType": "Electric"
        }
      ]
    },
    {
      "brand": "Mercedes",
      "image": Mercedes,
      "models": [
        {
          "model": "A-Class",
          "image": "https://example.com/a-class.png",
          "fuelType": "Petrol"
        },
        {
          "model": "C-Class",
          "image": "https://example.com/c-class.png",
          "fuelType": "Petrol"
        },
        {
          "model": "E-Class",
          "image": "https://example.com/e-class.png",
          "fuelType": "Petrol"
        },
        {
          "model": "S-Class",
          "image": "https://example.com/s-class.png",
          "fuelType": "Petrol"
        },
        {
          "model": "GLA",
          "image": "https://example.com/gla.png",
          "fuelType": "Petrol"
        },
        {
          "model": "GLC",
          "image": "https://example.com/glc.png",
          "fuelType": "Petrol"
        },
        {
          "model": "GLE",
          "image": "https://example.com/gle.png",
          "fuelType": "Petrol"
        },
        {
          "model": "GLS",
          "image": "https://example.com/gls.png",
          "fuelType": "Petrol"
        },
        {
          "model": "EQC",
          "image": "https://example.com/eqc.png",
          "fuelType": "Electric"
        },
        {
          "model": "SLS AMG",
          "image": "https://example.com/sls-amg.png",
          "fuelType": "Petrol"
        }
      ]
    },
    {
      "brand": "Nissan",
      "image": Nissan,
      "models": [
        {
          "model": "Altima",
          "image": "https://example.com/altima.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Maxima",
          "image": "https://example.com/maxima.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Rogue",
          "image": "https://example.com/rogue.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Murano",
          "image": "https://example.com/murano.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Pathfinder",
          "image": "https://example.com/pathfinder.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Armada",
          "image": "https://example.com/armada.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Juke",
          "image": "https://example.com/juke.png",
          "fuelType": "Petrol"
        },
        {
          "model": "370Z",
          "image": "https://example.com/370z.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Leaf",
          "image": "https://example.com/leaf.png",
          "fuelType": "Electric"
        },
        {
          "model": "NV3500",
          "image": "https://example.com/nv3500.png",
          "fuelType": "Petrol"
        }
      ]
    },
    {
      "brand": "Hyundai",
      "image": Hyundai,
      "models": [
        {
          "model": "Elantra",
          "image": "https://example.com/elantra.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Sonata",
          "image": "https://example.com/sonata.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Santa Fe",
          "image": "https://example.com/santa-fe.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Tucson",
          "image": "https://example.com/tucson.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Kona",
          "image": "https://example.com/kona.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Ioniq",
          "image": "https://example.com/ioniq.png",
          "fuelType": "Hybrid"
        },
        {
          "model": "Veloster",
          "image": "https://example.com/veloster.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Kona Electric",
          "image": "https://example.com/kona-electric.png",
          "fuelType": "Electric"
        },
        {
          "model": "Genesis",
          "image": "https://example.com/genesis.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Palisade",
          "image": "https://example.com/palisade.png",
          "fuelType": "Petrol"
        }
      ]
    },
    {
      "brand": "Chevrolet",
      "image": Chevrolet,
      "models": [
        {
          "model": "Malibu",
          "image": "https://example.com/malibu.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Impala",
          "image": "https://example.com/impala.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Equinox",
          "image": "https://example.com/equinox.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Traverse",
          "image": "https://example.com/traverse.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Blazer",
          "image": "https://example.com/blazer.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Colorado",
          "image": "https://example.com/colorado.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Silverado",
          "image": "https://example.com/silverado.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Camaro",
          "image": "https://example.com/camaro.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Corvette",
          "image": "https://example.com/corvette.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Bolt EV",
          "image": "https://example.com/bolt-ev.png",
          "fuelType": "Electric"
        }
      ]
    },
    {
      "brand": "Volkswagen",
      "image": Volkswagen,
      "models": [
        {
          "model": "Jetta",
          "image": "https://example.com/jetta.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Passat",
          "image": "https://example.com/passat.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Golf",
          "image": "https://example.com/golf.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Tiguan",
          "image": "https://example.com/tiguan.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Atlas",
          "image": "https://example.com/atlas.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Arteon",
          "image": "https://example.com/arteon.png",
          "fuelType": "Petrol"
        },
        {
          "model": "ID.4",
          "image": "https://example.com/id4.png",
          "fuelType": "Electric"
        },
        {
          "model": "Beetle",
          "image": "https://example.com/beetle.png",
          "fuelType": "Petrol"
        },
        {
          "model": "T-Roc",
          "image": "https://example.com/troc.png",
          "fuelType": "Petrol"
        },
        {
          "model": "Taos",
          "image": "https://example.com/taos.png",
          "fuelType": "Petrol"
        }
      ]
    },
]

let fuelType = ['petrol', 'diesel', 'cng']
export default function MainForm() {
   let navigation = useNavigate()
    let [main, setMain] = useState(true)
    let [menu, setMenu] = useState(false)
    let [model, setModel] = useState(false)
    let [modelData, setModelData] = useState([])
    let [finalData, setfinalData] = useState('')
    let [fuel, setFuel] = useState(false)
      let {city, setCity,show, setShow} = useContext(UserContext)
      let data = {}
    function handleCity(x){
        let newData = {...data, city:x}
        localStorage.setItem('data', JSON.stringify(newData))
        setCity(x)
        setShow(!show)
    }
    function showCity(){
        setShow(!show)
    }
    function handleMain(){
        let data = JSON.parse(localStorage.getItem('data')) || ''
        setfinalData(data)
        setMain(false)
        setMenu(true)
    }
   function handleMenu(y){
    let data = JSON.parse(localStorage.getItem('data'))
    let newData = {...data, manufacturer:y}
    localStorage.setItem('data', JSON.stringify(newData))
    let modelinfo = cardetails.filter((data)=>( data.brand == y))
    setModelData(modelinfo[0].models)
    setMain(false)
    setMenu(false)
    setModel(true)
   }
   function handleModel(z){
    let data = JSON.parse(localStorage.getItem('data'))
    let newData = {...data, model:z}
    localStorage.setItem('data', JSON.stringify(newData))
    setMain(false)
    setMenu(false)
    setModel(false)
    setFuel(true)
   }
   function handleFuel(p){
    let data = JSON.parse(localStorage.getItem('data'))
    let newData = {...data, fuelType:p}
    localStorage.setItem('data', JSON.stringify(newData))
    setfinalData(newData)
    setModel(false)
    setFuel(false)
    setMenu(false)
    setMain(true)
}
useEffect(()=>{
    let data = JSON.parse(localStorage.getItem('data')) || ''
    setfinalData(data)
},[])

function handleSubmit(e){

  e.preventDefault()
  navigation('/shops')
}

function handleBackModel(){
  setMain(false)
  setMenu(true)
  setModel(false)
  setFuel(false)
}
function handleBackFuel(){
  setMain(false)
  setMenu(false)
  setModel(true)
  setFuel(false)
}
function handleBackMain(){
  setMain(true)
  setMenu(false)
  setModel(false)
  setFuel(false)
}
  return (
    <>
    <div className=''>
      {main && <div className='w-[33%] h-[450px] shadow-2xl rounded-xl border-black border-2 fixed z-50 top-1/4 right-[40px] p-9 flex flex-col justify-around items-center'>
        <h1 className='text-3xl font-bold'>Experience The Best Car Service in <span className='uppercase'>{city}</span></h1>
        <h1 className='text-xl'>Get instant quotes for your car service</h1>
        <div className='flex w-full p-2 justify-between uppercase text-xl font-[600] border-2 border-gray-400 cursor-pointer' onClick={showCity}>
            <h3>{city}</h3>
            <ChevronDown/>
        </div>
        <div className='flex w-full p-2 justify-between uppercase text-xl font-[600] border-2 border-gray-400 cursor-pointer' onClick={handleMain}>
            <h3>{finalData ? `${finalData.manufacturer},${finalData.model},${finalData.fuelType}`: 'Select your car'}</h3>
            <ChevronDown/>
        </div>
        
       <form action="#" method='post' className='w-full' onSubmit={handleSubmit}>
       <input className='flex w-full p-2 justify-between uppercase text-xl font-[600] border-2 border-gray-400' type="number" placeholder='ENTER MOBILE NUMBER' required/>
       <button type='submit'  className='w-full mt-[10px] text-center bg-red-600 p-2 text-xl font-[600] uppercase text-white'>check price for free</button>
       </form>
      </div>}

    {menu &&  <div className='w-[33%] h-[450px] shadow-2xl rounded-xl border-black border-2 fixed z-50 top-1/4 right-[40px] p-9 flex flex-col justify-start items-start overflow-auto '>
        <h1 className='text-2xl uppercase font-bold  flex items-center gap-[15px] bg-white '> <button onClick={handleBackMain} ><MoveLeft size='40px'/></button>Select Menufacturer</h1>
        <div className='flex flex-wrap justify-evenly mt-[40px]'>
           {cardetails.map((y)=>(
             <div className='flex flex-col w-[150px] jutify-center items-center cursor-pointer' onClick={()=>handleMenu(y.brand)}>
             <img src={y.image} className='w-full h-1/2' alt="not found" />
             <h2 className='text-xl font-bold'>{y.brand}</h2>
            </div>
           ))}
        </div>
    </div> }
    {model &&  <div className='w-[33%] h-[450px] shadow-2xl rounded-xl border-black border-2 fixed z-50 top-1/4 right-[40px] p-9 flex flex-col justify-start items-start overflow-auto '>
        <h1 className='text-2xl uppercase font-bold flex items-center gap-[15px] bg-white '> <button onClick={handleBackModel} ><MoveLeft size='40px'/></button> Select Model</h1>
        <div className='flex flex-wrap justify-evenly mt-[40px]'>
           {modelData.map((z)=>(
             <div className='flex flex-col w-[100px] h-[120px] jutify-evenly items-center cursor-pointer' onClick={()=>handleModel(z.model)}>
             <Car size='50px' color='red'/>
             <h2 className='text-xl font-bold text-center uppercase'>{z.model}</h2>
            </div>
           ))}
        </div>
    </div> }
    {fuel &&  <div className='w-[33%] h-[450px] shadow-2xl rounded-xl border-black border-2 fixed z-50 top-1/4 right-[40px] p-9 flex flex-col justify-start items-start overflow-auto '>
        <h1 className='text-2xl uppercase font-bold flex items-center gap-[15px] bg-white '> <button onClick={handleBackFuel} ><MoveLeft size='40px'/></button>Select Fuel Type</h1>
        <div className='flex flex-wrap justify-evenly mt-[40px]'>
           {fuelType.map((p)=>(
             <div className='flex flex-col w-[100px] h-[120px] jutify-evenly items-center cursor-pointer' onClick={()=>handleFuel(p)}>
             <Fuel size='50px' color='red'/>
             <h2 className='text-xl font-bold text-center uppercase'>{p}</h2>
            </div>
           ))}
        </div>
    </div> }
    </div>

    {show && <div className="cityselect w-full h-[60vh] absolute border-2 border-black top-[80px] z-50 bg-white p-9 overflow-auto">
        <h1 className='text-3xl uppercase font-bold'>Choose Your City</h1>
        <h1 className='text-3xl uppercase font-bold w-[90px] ' style={{borderBottom:'5px solid black'}}>India</h1>

        <div className='mt-[20px] flex flex-wrap justify-between gap-[10px]'>
           {cityName.map((x)=>(
             <button className='px-[20px] py-[10px] bg-red-600 text-white text-2xl uppercase font-bold' onClick={()=>handleCity(x)}>{x}</button>
           ))}
        </div>
    </div>}
    </>
  )
}
