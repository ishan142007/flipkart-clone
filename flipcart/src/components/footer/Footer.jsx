import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-4 mt-10 select-none">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 border-b border-gray-700 pb-8">
          <div>
            <h3 className="font-bold text-white mb-3 text-sm">ABOUT</h3>
            <ul className="space-y-2 text-xs cursor-pointer">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Flipkart Stories</li>
              <li>Press</li>
              <li>Flipkart Wholesale</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-3 text-sm  ">HELP</h3>
            <ul className="space-y-2 text-xs cursor-pointer">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
              <li>Report Infringement</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-3 text-sm ">POLICY</h3>
            <ul className="space-y-2 text-xs cursor-pointer">
              <li>Return Policy</li>
              <li>Terms Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>EPR Compliance</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-3 text-sm ">SOCIAL</h3>
            <ul className="space-y-2 text-xs cursor-pointer">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2 lg:col-span-1 ">
            <h3 className="font-bold text-white mb-3 text-sm">Mail Us:</h3>
            <p className="text-xs">Flipkart Internet Private Limited,<br />Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />Outer Ring Road, Devarabeesanahalli Village,<br />Bengaluru, 560103,<br />Karnataka, India</p>
          </div>
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-white mb-3 text-sm">Registered Office Address:</h3>
            <p className="text-xs">Flipkart Internet Private Limited,<br />Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />Outer Ring Road, Devarabeesanahalli Village,<br />Bengaluru, 560103,<br />Karnataka, India<br />CIN : U51109KA2012PTC066107<br />Telephone: 044-45614700</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-6">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="text-xs">© 2007-2025 Flipkart.com</span>
            <span className="text-xs">All Rights Reserved</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Payment icons (SVGs or images) */}
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6" />
            <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="https://img.icons8.com/color/48/000000/rupay.png" alt="Rupay" className="h-6" />
            <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="Paypal" className="h-6" />
            <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
