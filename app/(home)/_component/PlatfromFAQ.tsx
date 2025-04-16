import { ArrowDown, BanknoteIcon, Phone, ShieldCheckIcon, Tv2 } from "lucide-react";
import React from "react";
import BannerHeader from "./BannerHeader";


export const PlatfromFAQ = () => {
  return (
<div id="xonnect"> 
        <div className="bg-white min-h-screen p-4 md:p-6 lg:p-8 container text-black mx-auto">
       <BannerHeader H1='Our FAQ' Header='PLATFROM FAQ' Desc='Find answers to common questions about Xonnect streaming services and features. If you can not find what you are looking for, please contact our support team.'/>
     
	    <div className="max-w-4xl mx-auto space-y-8">
	    <section className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
	      
	
	<div className="bg-red-100 p-6 flex items-center">
      <Tv2 className="material-symbols-outlined text-red-700 text-3xl mr-4"/>
	  <h2 className="text-xl md:text-2xl font-semibold">Streaming Services</h2>
	</div>
	
	        
    <div className="p-6 space-y-4">
	  <details className="group border-b pb-4">
	    <summary className="flex justify-between items-center cursor-pointer list-none">
	      <h3 className="text-lg font-medium">What streaming content does Xonnect offer?</h3>
          <ArrowDown className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180"/>
	    </summary>
	    <div className="mt-3 text-gray-600">
	      <p>Xonnect offers a diverse range of on-demand streaming content including exclusive movies, TV shows, live events, sports broadcasts, and original productions. Our premium tier includes access to exclusive music releases and special artist performances.</p>
	    </div>
	  </details>


	  <details className="group border-b pb-4">
	    <summary className="flex justify-between items-center cursor-pointer list-none">
	      <h3 className="text-lg font-medium">What streaming content does Xonnect offer?</h3>
          <ArrowDown className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180"/>
	    </summary>
	    <div className="mt-3 text-gray-600">
	      <p>Xonnect offers a diverse range of on-demand streaming content including exclusive movies, TV shows, live events, sports broadcasts, and original productions. Our premium tier includes access to exclusive music releases and special artist performances.</p>
	    </div>
	  </details>
	</div>
	
	    </section>
	
	    <section  className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
	      <div className="bg-blue-100 p-6 flex items-center">
            <BanknoteIcon className="material-symbols-outlined text-blue-600 text-3xl mr-4"/>
	        <h2 className="text-xl md:text-2xl font-semibold">Billing & Payments</h2>
	      </div>
	      <div className="p-6 space-y-4">
	        <details className="group border-b pb-4">
	          <summary className="flex justify-between items-center cursor-pointer list-none">
	            <h3 className="text-lg font-medium">What payment methods do you accept?</h3>
                <ArrowDown className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180"/>
	          </summary>
	          <div  className="mt-3 text-gray-600">
	            <p >We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For enterprise clients, we also offer invoice-based payments with flexible terms.</p>
	          </div>
	        </details>
	        
	        <details className="group border-b pb-4">
	          <summary className="flex justify-between items-center cursor-pointer list-none">
	            <h3 className="text-lg font-medium">How often will I be billed?</h3>
                <ArrowDown className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180"/>
	          </summary>
	          <div className="mt-3 text-gray-600">
	            <p>We offer monthly and annual billing cycles. Annual subscriptions come with a 15% discount compared to monthly payments. Your billing date corresponds to the date you signed up for our services.</p>
	          </div>
	        </details>
	        
	        <details className="group border-b pb-4">
	          <summary className="flex justify-between items-center cursor-pointer list-none">
	            <h3 className="text-lg font-medium">What happens if my payment fails?</h3>
                <ArrowDown className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180"/>
	          </summary>
	          <div className="mt-3 text-gray-600">
	            <p>If a payment fails, we&apos;ll automatically retry the payment after 3 days. You&apos;ll receive email notifications about the failed payment. If the second attempt fails, your account will enter a 7-day grace period during which you can update your payment information.</p>
	          </div>
	        </details>
	      </div>
	    </section>
	
	    <section className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
	      <div className="bg-green-100 p-6 flex items-center">
            <Phone className="material-symbols-outlined text-green-600 text-3xl mr-4"/>
	        <h2 className="text-xl md:text-2xl font-semibold">Customer Support</h2>
	      </div>
	      <div className="p-6 space-y-4">
	        <details className="group border-b pb-4">
	          <summary className="flex justify-between items-center cursor-pointer list-none">
	            <h3 className="text-lg font-medium">How can I contact customer support?</h3>
                <ArrowDown className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180"/>
	          </summary>
	          <div  className="mt-3 text-gray-600">
	            <p>Our customer support team is available 24/7 via live chat on our website, email at support@example.com, or by phone at +1-800-123-4567. Premium and Enterprise customers have access to dedicated support representatives.</p>
	          </div>
	        </details>
	        
	        <details className="group border-b pb-4">
	          <summary className="flex justify-between items-center cursor-pointer list-none">
	            <h3 className="text-lg font-medium">What are your support hours?</h3>
                <ArrowDown className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180"/>
	          </summary>
	          <div className="mt-3 text-gray-600">
	            <p >Our technical support team is available Monday through Friday from 6am to 8pm PST. Emergency support is available 24/7 for critical issues. Our sales team is available Monday through Friday from 9am to 6pm PST.</p>
	          </div>
	        </details>
	        
	        <details  className="group pb-4">
	          <summary className="flex justify-between items-center cursor-pointer list-none">
	            <h3 className="text-lg font-medium">Do you offer training or onboarding?</h3>
                <ArrowDown className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180"/>
	          </summary>
	          <div  className="mt-3 text-gray-600">
	            <p>Yes, we provide comprehensive onboarding and training for all new customers. Depending on your plan, this might include personalized training sessions, video tutorials, and detailed documentation. Enterprise clients receive customized training programs.</p>
	          </div>
	        </details>
	      </div>
	    </section>
	
	    <section className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
	      <div className="bg-purple-100 p-6 flex items-center">
            <ShieldCheckIcon className="material-symbols-outlined text-purple-600 text-3xl mr-4"/>
	        <h2 className="text-xl md:text-2xl font-semibold">Privacy & Security</h2>
	      </div>
	      <div className="p-6 space-y-4">
	        <details className="group border-b pb-4">
	          <summary className="flex justify-between items-center cursor-pointer list-none">
	            <h3 className="text-lg font-medium">How do you protect my data?</h3>
                <ArrowDown className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180"/>
	          </summary>
	          <div className="mt-3 text-gray-600">
	            <p>We implement industry-leading security measures including end-to-end encryption, regular security audits, and compliance with international data protection regulations. All data is stored in secure, redundant data centers with 24/7 monitoring.</p>
	          </div>
	        </details>
	        
	        <details className="group border-b pb-4">
	          <summary className="flex justify-between items-center cursor-pointer list-none">
	            <h3 className="text-lg font-medium">Can I request deletion of my data?</h3>
                <ArrowDown className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180"/>
	          </summary>
	          <div className="mt-3 text-gray-600">
	            <p >Yes, you can request complete deletion of your personal data at any time through your account settings or by contacting our support team. We comply with data protection regulations and will process your request within the timeframe specified by applicable laws.</p>
	          </div>
	        </details>
	        
	        <details className="group pb-4">
	          <summary  className="flex justify-between items-center cursor-pointer list-none">
	            <h3 className="text-lg font-medium">Do you share my information with third parties?</h3>
                <ArrowDown className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180"/>
	          </summary>
	          <div className="mt-3 text-gray-600">
	            <p>We only share your information with third parties when necessary to provide our services or when legally required. We never sell your data to advertisers or other companies. You can find detailed information in our Privacy Policy.</p>
	          </div>
	        </details>
	      </div>
	    </section>
	  </div>
	  
</div>	
</div>
	
  )
}

