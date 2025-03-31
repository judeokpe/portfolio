// import Image from 'next/image'
// import Link from 'next/link';
// import { Button } from '../ui/button';

// interface ServicesPageCardProps{
//     imageSrc?: string;
//     title?: string;
//     description?: string;
//     keyFeatures?:string;
//     learnMore?: string;
//     urlLink?:string

// }

// function ServicesPageCard({imageSrc, title, description, keyFeatures, learnMore, urlLink}:ServicesPageCardProps) {
//   return (
//     <div>
//       <div className="imaged">
//         <Image src={"/services.png"} width={200} height={200} className='w-6 h-6 object-cover' alt={"sevices"} />
//       </div>
//       <div className="title">
//         <p>{title}</p>
//       </div>
//       <div className="description">
//         <p>{description}</p>
//       </div>
//       <div className="key-features">
//         <p>{...keyFeatures}</p>
//       </div>
//       <Link href={urlLink} className="learn-more-button">
//         <Button>Learn More</Button>
//       </Link>
//     </div>
//   )
// }

// export default ServicesPageCard
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { CheckCheckIcon, CheckCircle2Icon } from 'lucide-react';

interface ServicesPageCardProps {
  imageSrc?: string;
  title?: string;
  description?: string;
  keyFeatures?: string[];
  learnMore?: string;
  urlLink?: string;
}

function ServicesPageCard({ imageSrc, title, description, keyFeatures = [], urlLink }: ServicesPageCardProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 flex flex-col items-center gap-4 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl mt-8 dark:shadow-yellow-200 dark:shadow-sm"
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300">
        <Image src={imageSrc || '/services.png'} width={96} height={96} className='w-full h-full object-cover' alt={title || 'Service'} />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold dark:text-yellow-800">{title}</h3>
        <p className="dark:text-gray-500 mt-2">{description}</p>
      </div>
      <div className="text-sm dark:text-gray-400 italic text-center flex flex-col gap-2">
        {keyFeatures.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
<CheckCircle2Icon  className='text-yellow-500' size={28}/>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <Link href={urlLink || '#'}>
      <Button className="mt-4 bg-gradient-to-r from-yellow-600 via-green-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">
  Learn More
</Button>

      </Link>
    </motion.div>
  );
}

export default ServicesPageCard;