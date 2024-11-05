import React from 'react';
import { motion} from 'framer-motion';
import awsCertificate from '../assets/certificates/aws.png';
import googleCertificate from '../assets/certificates/google.png';
import cpaCertificate from '../assets/certificates/cpa.png';


const certificateVariants = (duration) => ({
    initial: {y: -100},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
})
const Certificates = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
          whileInView={{opacity: 1, y: 0}}
          initial = {{opacity: 0, y: -100}}
          transition={{duration: 1.5}}
          className='my-20 text-center text-4xl'>
          Certification
        </motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className='p-4'>
            <motion.img variants={certificateVariants(1.5)} initial='initial' animate='animate' src={awsCertificate} alt="awspng" />
            </div>
            <div className='p-4'>
            <motion.img variants={certificateVariants(1.5)} initial='initial' animate='animate' src={googleCertificate} alt="awspng" />
            </div>
            <div className='p-4'>
            <motion.img variants={certificateVariants(1.5)} initial='initial' animate='animate' src={cpaCertificate} alt="awspng" />
            </div>
        </div>
    </div>
  )
}

export default Certificates