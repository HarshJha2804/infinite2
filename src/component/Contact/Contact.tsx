


import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "./firebaseConfig";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    message: ""
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { fullName, email, mobileNumber, message } = formData;

    try {
      const response = await fetch("https://infinite-groups.com/users/api/empower-edu/query/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 672b111e353bcaf8105cfc85f8fab6666b5cf99b'
        },
        body: JSON.stringify({ fullName, email, mobileNumber, message })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error(`Error ${response.status}: ${response.statusText}`, errorData);
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      console.log('Data submitted successfully');
      setFormData({
        fullName: "",
        email: "",
        mobileNumber: "",
        message: ""
      });
    } catch (error) {
      console.error('Failed to submit data:', error);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:p-16 mx-auto mt-[2rem] bg-white gap-8">
        <div className="flex flex-col md:gap-20 gap-3 mb-[1rem]">
          <div className="w-[fit-content]">
            <div className="flex flex-col justify-center items-center gap-1">
              <h2 className="h2 text-primary"> Partner With Us</h2>
              <p className="h-[4px] w-[60%] bg-secondary"></p>
            </div>
          </div>
          <div>
            <div className="flex flex-col md:gap-2 gap-0">
              <p className="font-medium">Contact Details:</p>
              {/* <div className="flex flex-row gap-1">
                <Icon icon="ph:phone-bold" fontSize={20} className="text-primary" />
                <p> +91 8588897029</p>
              </div> */}
              <div className="flex flex-row gap-1 items-center">
                <Icon icon="material-symbols:mail-outline" fontSize={20} className="text-primary" />
                <p> contact@empoweredu.global</p>
              </div>
            </div>
          </div>

          {/* 
      <p>I-59/60, Lajpat Nagar-1 <br />
        New Delhi</p> */}

        </div>


        <div className="md:max-w-[60vw] overflow-hidden">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] gap-8">
              <div className="grid grid-rows-2 items-start">
                <label htmlFor="fullName" className="text-[1rem]">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="p-2 contactus-form-input"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="grid grid-rows-2 items-start">
                <label htmlFor="email" className="text-[1rem]">Email
                  <span className="text-red-500 ml-1">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-2 contactus-form-input"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="grid grid-rows-2 items-start">
              <label htmlFor="mobileNumber" className="text-[1rem]">Mobile Number
                <span className="text-red-500 ml-1">*</span></label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                className="p-2 contactus-form-input"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="grid grid-rows-2 items-start">
              <label htmlFor="message" className="text-[1rem]">Message
                <span className="text-red-500 ml-1">*</span></label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-2 contactus-form-input h-[3rem]"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <button type="submit" className="primary-button border-[1px] p-[2rem] text-[1rem] md:mt-8" > Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
