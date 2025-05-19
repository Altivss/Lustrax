import React from 'react'

const Terms = () => {
  return (
    <div className='px-4 py-8 text-white'>
        <div className='text-center font-semibold text-3xl pt-8 border-t border-gray-700'>
            <h1 className='mt-5'>Terms and Conditions</h1>
        </div>
         <div className='flex flex-col gap-6 mt-8 text-justify'>
            <section>
              <h2 className='font-semibold text-2xl mb-2'>1. Introduction</h2>
              <p>Welcome to our website. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>
            </section>

            <section>
              <h2 className='font-semibold text-2xl mb-2'>2. User Responsibilities</h2>
              <p>Users must be at least 18 years old to use our services. You agree not to misuse our website, engage in fraudulent activities, or violate any applicable laws and regulations.</p>
            </section>

            <section>
              <h2 className='font-semibold text-2xl mb-2'>3. Product Information and Availability</h2>
              <p>We strive to ensure that product information is accurate and up-to-date. However, we do not guarantee the availability of any product and reserve the right to discontinue any item without prior notice.</p>
            </section>

            <section>
              <h2 className='font-semibold text-2xl mb-2'>4. Payment Terms</h2>
              <p>All payments must be made in full at the time of purchase. Accepted payment methods are specified on our website. We are not responsible for any transaction fees imposed by third-party payment processors.</p>
            </section>

            <section>
              <h2 className='font-semibold text-2xl mb-2'>5. Shipping and Delivery</h2>
              <p>Shipping times may vary based on location and product availability. We are not liable for any delays caused by third-party shipping providers.</p>
            </section>

            <section>
              <h2 className='font-semibold text-2xl mb-2'>6. Returns and Refunds</h2>
              <p>Returns are accepted within 30 days of purchase, provided the product is in its original condition. Refunds will be processed using the original payment method, minus any applicable shipping fees.</p>
            </section>

            <section>
              <h2 className='font-semibold text-2xl mb-2'>7. Limitation of Liability</h2>
              <p>We are not responsible for any indirect, incidental, or consequential damages arising from the use of our website or products.</p>
            </section>

            <section>
              <h2 className='font-semibold text-2xl mb-2'>8. Privacy and Data Protection</h2>
              <p>We value your privacy and are committed to protecting your personal data. Please refer to our Privacy Policy for more information on how we collect, use, and protect your information.</p>
            </section>
         </div>
    </div>
  )
}

export default Terms;
