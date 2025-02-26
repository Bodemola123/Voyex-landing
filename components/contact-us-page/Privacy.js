import React from "react";
import "../../app/globals.css"

const Privacy = ({ onClose }) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-[#0d0d0d] text-white rounded-2xl border border-[#FFFFFF33] p-6 max-w-2xl w-full sm:w-[90%] md:w-[80%] lg:w-[60%] overflow-y-auto lg:h-[80%] sm:h-[60%] scrollbar-hide">
        <h1 className="lg:text-2xl sm:text-base font-semibold mb-4 text-center">Privacy Policy</h1>
        <p className="lg:text-base sm:text-xs text-gray-300 mb-4  max-h-[60vh]">
        At Voyex, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our platform.
        </p>
        <h1 className="lg:text-lg sm:text-sm font-semibold mb-2 text-left">1. Information We Collect</h1>
        <p className="lg:text-base sm:text-xs text-gray-300 mb-4 flex flex-col gap-1 max-h-[60vh]">
        We may collect the following types of data:
        <ol className="flex flex-col gap-1 list-disc px-4">
            <li><span className="font-semibold">Personal Information:</span> Name, email address, and other details provided voluntarily.</li>
            <li><span className="font-semibold">Usage Data:</span>  Information on how you use our platform, including interactions and preferences.</li>
            <li><span className="font-semibold">Device & Technical Data:</span> IP address, browser type, and device identifiers for improving user experience.</li>
        </ol>
        </p>
        <h1 className="lg:text-lg sm:text-sm font-semibold mb-2 text-left">2. How we use your Information</h1>
        <p className="lg:text-base sm:text-xs text-gray-300 mb-4 flex flex-col gap-1 max-h-[60vh]">
        We use the collected data to
        <ol className="flex flex-col gap-1 list-disc px-4">
            <li>Provide and improve our services.</li>
            <li>Personalize user experience.</li>
            <li>Respond to inquiries and offer support.</li>
            <li>Ensure security and prevent fraudulent activities.</li>
            <li>Comply with legal obligations.</li>
        </ol>
        </p>
        <h1 className="lg:text-lg sm:text-sm font-semibold mb-2 text-left">3. Data Protection and security</h1>
        <p className="lg:text-base sm:text-xs text-gray-300 mb-4 flex flex-col gap-1 max-h-[60vh]">Voyex implements industry-standard security measures to protect your personal data from unauthorized access, disclosure, or alteration. We do not sell or share your data with third parties without your consent.</p>
        <h1 className="lg:text-lg sm:text-sm font-semibold mb-2 text-left">4. User Control and Rights</h1>
        <p className="lg:text-base sm:text-xs text-gray-300 mb-4 flex flex-col gap-1 max-h-[60vh]">
        You have the following rights regarding your personal data:
        <ol className="flex flex-col gap-1 list-disc px-4">
            <li><span className="font-semibold">Access & Update:</span> Request access to your data and update inaccuracies.</li>
            <li><span className="font-semibold">Data Deletion:</span>  Request the deletion of your personal data.</li>
            <li><span className="font-semibold">Opt-Out:</span> Unsubscribe from marketing communications at any time.</li>
        </ol>
        </p>
        <h1 className="lg:text-lg sm:text-sm font-semibold mb-2 text-left">5. Data Retention</h1>
        <p className="lg:text-base sm:text-xs text-gray-300 mb-4 flex flex-col gap-1 max-h-[60vh]">We retain your data only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal requirements, and resolve disputes.</p>
        <h1 className="lg:text-lg sm:text-sm font-semibold mb-2 text-left">6. Third-Party Services</h1>
        <p className="lg:text-base sm:text-xs text-gray-300 mb-4 flex flex-col gap-1 max-h-[60vh]">Voyex may use third-party tools and services (e.g., analytics, payment processors) that operate under their own privacy policies. We recommend reviewing their policies to understand how your data is handled.</p>
        <h1 className="lg:text-lg sm:text-sm font-semibold mb-2 text-left">7. Changes to This Policy</h1>
        <p className="lg:text-base sm:text-xs text-gray-300 mb-4 flex flex-col gap-1 max-h-[60vh]">We may update this Privacy Policy periodically. Any changes will be communicated via email or prominently on our website.</p>
        <h1 className="lg:text-lg sm:text-sm font-semibold mb-2 text-left">8. Contact Us</h1>
        <p className="lg:text-base sm:text-xs text-gray-300 mb-4 flex flex-col gap-1 max-h-[60vh]">
            For any privacy-related inquiries, please contact us:
            <ol className="flex flex-col gap-1 list-disc px-4">
                <li>Email: hi@untitledui.com</li>
                <li>Phone: +1 (555) 000-0000</li>
            </ol>
        </p>
        <button
          onClick={onClose}
          className="bg-[#c088fb] px-4 py-2 border border-[#c088fb] rounded-lg sm:text-sm lg:text-base text-[#0a0a0b] w-full text-center"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Privacy;
