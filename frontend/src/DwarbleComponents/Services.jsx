import { Car } from 'lucide-react';
import React from 'react'
// import { Oil, Tire, Battery, Transmission, Filter, Wiper, Suspension, Headlight } from 'lucide-react';

const serviceData = [
  { service: 'Oil Change', icon: 'oil', description: 'Regular oil changes to keep your engine running smoothly.', iconColor: '#F4A300' },
  { service: 'Tire Rotation', icon: 'tire', description: 'Ensures even wear and extends the life of your tires.', iconColor: '#4B9CD3' },
  { service: 'Brake Inspection', icon: 'brake', description: 'Check and replace brake pads to ensure safety.', iconColor: '#C72C48' },
  { service: 'Battery Check', icon: 'battery', description: 'Inspect and test your car battery\'s performance.', iconColor: '#6C757D' },
  { service: 'Engine Tune-Up', icon: 'engine', description: 'Optimize engine performance and fuel efficiency.', iconColor: '#17A2B8' },
  { service: 'Transmission Service', icon: 'transmission', description: 'Maintain and repair the transmission system.', iconColor: '#FFC107' },
  { service: 'Coolant Flush', icon: 'coolant', description: 'Flush and refill the coolant system for optimal temperature control.', iconColor: '#28A745' },
  { service: 'Air Filter Replacement', icon: 'filter', description: 'Replace the air filter to ensure clean air intake.', iconColor: '#DC3545' },
  { service: 'Alignment Check', icon: 'alignment', description: 'Align the wheels to ensure proper handling and tire wear.', iconColor: '#007BFF' },
  { service: 'Wiper Blade Replacement', icon: 'wiper', description: 'Replace old wiper blades for better visibility.', iconColor: '#6F42C1' },
  { service: 'Suspension Repair', icon: 'suspension', description: 'Repair and maintain your vehicle\'s suspension system.', iconColor: '#20C997' },
  { service: 'Headlight Restoration', icon: 'headlight', description: 'Restore clarity to foggy or hazy headlights.', iconColor: '#E83E8C' }
];

// const icons = {
//   oil: <Oil />,
//   tire: <Tire />,
//   brake: <Suspension />,
//   battery: <Battery />,
//   engine: <Oil />,
//   transmission: <Transmission />,
//   coolant: <Wiper />,
//   filter: <Filter />,
//   alignment: <Oil />,
//   wiper: <Wiper />,
//   suspension: <Suspension />,
//   headlight: <Headlight />
// };

export default function Services() {
  return (
    <div className='relative w-[65%] mt-[50px]'>
        <h1 className='text-center text-4xl uppercase font-bold mb-[40px]'>Our Services</h1>
      <div className=' flex flex-wrap gap-[40px] p-5'>
      {serviceData.map(service => (
      <div key={service.service} className='flex flex-col justify-center items-center text-2xl w-[250px]'>
        <div style={{ color: service.iconColor, marginRight: '10px' }}>
          {/* {icons[service.icon]} */}
          <Car size='50px'/>
        </div>
        <div>
          <h4 className='text-center'>{service.service}</h4>
        </div>
      </div>
    ))}
      </div>
    </div>
  )
}
