// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0081a7] p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <input
            type="text"
            name="name"
            placeholder="Name*"
            required
            className="w-full p-4 bg-gray-200 border-none rounded-lg focus:ring-2 focus:ring-[#0081a7] outline-none transition-all"
            onChange={handleChange}
          />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            className="w-full p-4 bg-gray-200 border-none rounded-lg focus:ring-2 focus:ring-[#0081a7] outline-none transition-all"
            onChange={handleChange}
          />

          {/* Phone Field */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            required
            className="w-full p-4 bg-gray-200 border-none rounded-lg focus:ring-2 focus:ring-[#0081a7] outline-none transition-all"
            onChange={handleChange}
          />

          {/* Subject Dropdown */}
          <select
            name="subject"
            required
            className="w-full p-4 bg-gray-200 border-none rounded-lg focus:ring-2 focus:ring-[#0081a7] outline-none transition-all appearance-none text-gray-600"
            onChange={handleChange}
          >
            <option value="" disabled selected>Subject*</option>
            <option value="BCA">BCA</option>
            <option value="CSIT">BScCSIT</option>
            <option value="BIT">BIT</option>
          </select>

          {/* Message Field */}
          <textarea
            name="message"
            placeholder="Message*"
            required
            rows="1"
            className="w-full p-4 bg-gray-200 border-none rounded-lg focus:ring-2 focus:ring-[#0081a7] outline-none transition-all resize-none"
            onChange={handleChange}
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-[#006d77] hover:bg-[#005a63] text-white font-semibold py-3 px-12 rounded-lg transition-colors duration-200 text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;