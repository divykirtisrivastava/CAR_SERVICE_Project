import { Check, ChevronDown, Chrome, Phone } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import pic from '../assets/pic.png'
import { Link } from 'react-router-dom'

let shops = [
    {
      "shopName": "Auto Care Express",
      "address": "1234 Elm Street, Springfield, IL 62704",
      "phone": "+1-555-123-4567",
      "website": "http://www.autocareexpress.com",
      "services": [
        {
          "serviceName": "Oil Change",
          "price": "$39.99"
        },
        {
          "serviceName": "Tire Rotation",
          "price": "$29.99"
        },
        {
          "serviceName": "Brake Inspection",
          "price": "$49.99"
        },
        {
          "serviceName": "Battery Replacement",
          "price": "$89.99"
        }
      ]
    },
    {
      "shopName": "Quick Fix Auto",
      "address": "5678 Oak Avenue, Rivertown, TX 75001",
      "phone": "+1-555-234-5678",
      "website": "http://www.quickfixauto.com",
      "services": [
        {
          "serviceName": "Oil Change",
          "price": "$34.99"
        },
        {
          "serviceName": "Tire Alignment",
          "price": "$59.99"
        },
        {
          "serviceName": "Engine Tune-Up",
          "price": "$119.99"
        },
        {
          "serviceName": "AC Service",
          "price": "$89.99"
        }
      ]
    },
    {
      "shopName": "City Auto Repair",
      "address": "9101 Maple Road, Metropolis, NY 10001",
      "phone": "+1-555-345-6789",
      "website": "http://www.cityautorepair.com",
      "services": [
        {
          "serviceName": "Oil Change",
          "price": "$39.99"
        },
        {
          "serviceName": "Brake Replacement",
          "price": "$149.99"
        },
        {
          "serviceName": "Transmission Flush",
          "price": "$129.99"
        },
        {
          "serviceName": "Suspension Check",
          "price": "$79.99"
        }
      ]
    },
    {
      "shopName": "Elite Car Service",
      "address": "2345 Pine Street, Greenfield, CA 94043",
      "phone": "+1-555-456-7890",
      "website": "http://www.elitecarservice.com",
      "services": [
        {
          "serviceName": "Oil Change",
          "price": "$44.99"
        },
        {
          "serviceName": "Wheel Balancing",
          "price": "$49.99"
        },
        {
          "serviceName": "Cooling System Service",
          "price": "$99.99"
        },
        {
          "serviceName": "Exhaust Repair",
          "price": "$139.99"
        }
      ]
    },
    {
      "shopName": "Precision Auto Center",
      "address": "3456 Birch Lane, Lakeside, FL 33101",
      "phone": "+1-555-567-8901",
      "website": "http://www.precisionautocenter.com",
      "services": [
        {
          "serviceName": "Oil Change",
          "price": "$29.99"
        },
        {
          "serviceName": "Transmission Repair",
          "price": "$199.99"
        },
        {
          "serviceName": "Brake Pads Replacement",
          "price": "$129.99"
        },
        {
          "serviceName": "Radiator Flush",
          "price": "$74.99"
        }
      ]
    },
    {
      "shopName": "Midas Auto Services",
      "address": "4567 Cedar Street, Townsville, OH 44101",
      "phone": "+1-555-678-9012",
      "website": "http://www.midasautoservices.com",
      "services": [
        {
          "serviceName": "Oil Change",
          "price": "$39.99"
        },
        {
          "serviceName": "Tire Repair",
          "price": "$19.99"
        },
        {
          "serviceName": "Battery Check",
          "price": "$29.99"
        },
        {
          "serviceName": "Air Filter Replacement",
          "price": "$24.99"
        }
      ]
    },
    {
      "shopName": "Top Gear Garage",
      "address": "5678 Elmwood Drive, Hillcrest, WA 98001",
      "phone": "+1-555-789-0123",
      "website": "http://www.topgeargarage.com",
      "services": [
        {
          "serviceName": "Oil Change",
          "price": "$35.99"
        },
        {
          "serviceName": "Brake Fluid Replacement",
          "price": "$49.99"
        },
        {
          "serviceName": "Power Steering Fluid Service",
          "price": "$59.99"
        },
        {
          "serviceName": "Timing Belt Replacement",
          "price": "$199.99"
        }
      ]
    },
    {
      "shopName": "Reliance Auto Repair",
      "address": "6789 Oakwood Avenue, Southgate, MI 48201",
      "phone": "+1-555-890-1234",
      "website": "http://www.relianceautorepair.com",
      "services": [
        {
          "serviceName": "Oil Change",
          "price": "$31.99"
        },
        {
          "serviceName": "Brake Repair",
          "price": "$109.99"
        },
        {
          "serviceName": "Engine Diagnostic",
          "price": "$89.99"
        },
        {
          "serviceName": "Suspension Repair",
          "price": "$139.99"
        }
      ]
    },
    {
      "shopName": "Advanced Auto Care",
      "address": "7890 Willow Lane, Brookside, CO 80123",
      "phone": "+1-555-901-2345",
      "website": "http://www.advancedautocare.com",
      "services": [
        {
          "serviceName": "Oil Change",
          "price": "$37.99"
        },
        {
          "serviceName": "Tire Balancing",
          "price": "$39.99"
        },
        {
          "serviceName": "Fuel System Cleaning",
          "price": "$119.99"
        },
        {
          "serviceName": "Wiper Blade Replacement",
          "price": "$19.99"
        }
      ]
    },
    {
      "shopName": "Superior Auto Clinic",
      "address": "8901 Park Avenue, Fairview, OR 97024",
      "phone": "+1-555-012-3456",
      "website": "http://www.superiorautoclinic.com",
      "services": [
        {
          "serviceName": "Oil Change",
          "price": "$32.99"
        },
        {
          "serviceName": "AC Recharge",
          "price": "$79.99"
        },
        {
          "serviceName": "Alternator Replacement",
          "price": "$149.99"
        },
        {
          "serviceName": "Headlight Restoration",
          "price": "$59.99"
        }
      ]
    },
    {
      "shopName": "Dynamic Car Services",
      "address": "9012 Maple Street, Riverview, NC 28201",
      "phone": "+1-555-123-7890",
      "website": "http://www.dynamiccarservices.com",
      "services": [
        {
          "serviceName": "Oil Change",
          "price": "$28.99"
        },
        {
          "serviceName": "Tire Replacement",
          "price": "$89.99"
        },
        {
          "serviceName": "Engine Repair",
          "price": "$299.99"
        },
        {
          "serviceName": "Transmission Service",
          "price": "$179.99"
        }
      ]
    }
]

export default function ShopDetails() {
    let [finalData, setfinalData] = useState('')

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('data')) || ''
        setfinalData(data)
    },[])
  return (
    <div>
       <div className='absolute w-[65%] mt-[120px] p-9'>
      <div className=' flex flex-col gap-[20px]'>
      {shops.map((s) => (
        <div className='w-full p-2 h-[250px] border-2 border-gray-400 gap-[20px] rounded-[20px] flex justify-evenly items-center'>
            <div className='flex flex-col gap-[20px]'>
                <h1 className='text-3xl font-bold uppercase'>{s.shopName}</h1>
                <h1 className='text-2xl font-[600]'>📌 {s.address}</h1>
                <h1 className='text-2xl font-[600] flex gap-[10px] items-center'> <Phone/> {s.phone}</h1>
                <h1 className='text-2xl font-[600] flex gap-[10px] items-center'> <Chrome/> {s.website}</h1>
            </div>
            <div>
                {s.services.map((data)=>(
                    <div className='flex gap-[20px] mt-[10px] justify-between'>
                        <div className='flex gap-[10px]'>
                        <div className='bg-green-600 flex justify-center items-center rounded-full w-[30px] h-[30px]'>
                        <Check color='white'/>
                        </div>
                    <div className='text-xl'> {data.serviceName}</div>
                        </div>
                    <div>{data.price}</div>
                    </div>
                ))}
            </div>
        </div>
    ))}
      </div>
    </div>
    <div className='w-[33%] h-[450px] shadow-2xl rounded-xl border-black border-2 fixed z-50 top-1/4 right-[40px] p-9 flex flex-col justify-around items-center'>
    <Link className='text-xl text-red-600 font-bold' to='/'>Change</Link>
        <div className='flex w-full p-2 justify-between uppercase text-xl font-[600] border-2 border-gray-400 cursor-pointer'>
            <h3>{finalData ? `${finalData.manufacturer},${finalData.model},${finalData.fuelType}`: 'Select your car'}</h3>
        </div>
        <img src={pic} alt="" />
      </div>
    </div>
  )
}
