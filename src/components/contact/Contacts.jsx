import React ,{ useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css'

function Contacts() {
//   return (
//     <section id="contact-section" >
//     <h1 className="heading">contact</h1>
//     <div className="form">
//         <input type="text" placeholder="name"/>
//         <input type="email" placeholder="email"/>
//         <input type="text" placeholder="subject"/>
//         <textarea placeholder="message"></textarea>
//         <button className="contact-btn">contact</button>
//     </div>
// </section>
//   )
// 

const [formData, setFormData] = useState({
  name: '',
  email: '',
  comments: '',
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  // Your form submission logic goes here
  console.log('Form submitted with data:', formData);


  if (!formData.name || !formData.email || !formData.comments) {
    // If any of the fields are empty, show a toast message
    toast.error('Please fill in all the form fields!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return; // Exit the function early if validation fails
    
  }else{
    // For demonstration purposes, let's show a success message
    toast.success('Form submitted successfully!',  {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  }

  
  // Clear the form fields
  setFormData({
    name: '',
    email: '',
    comments: '',
  });
};

return (
  <div className='form' >
    <section id="contact-section" >
     <h1 className="heading">Contact</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Comments:
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className='contact-btn' type="submit">Submit</button>
    </form>
    <ToastContainer />
    </section>
  </div>
);
};


export default Contacts