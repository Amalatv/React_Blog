import React from "react";
import "./Form.css";
import axios from "axios";

const Form = ({formData, handleChange}) => {

  const handleSubmit = async (event) => {
    event.preventDefault();

  const formDataToSubmit = {
    title: formData.title,
    titledescription: formData.titledescription,
    description:formData.description,
    imageUrl: formData.imageUrl,
  };


    try {
      const response = await axios.post(
        "http://localhost:3001/blogpost",
        formDataToSubmit
      );
      if (response.status === 200) {
        alert(response.data);
      }
    } catch (error) {
      console.error(error);
      alert("Blog post failed!");
    }
  };

  return (
    <>
      <div className="w3-margin w3-light-grey shadow">
        <form onSubmit={handleSubmit}>
          <h3 className="form-title">Create New Blog</h3>
          <div className="form-fields">
            <div className="form-group">
              <input
                name="title"
                type="text"
                className="fname"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                name="titledescription"
                type="text"
                className="lname"
                placeholder="Title Description"
                value={formData.titledescription}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="imageUrl"
                // className="email"
                placeholder="Image URL"
                value={formData.imageUrl}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="description"
                placeholder="Write your Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <input type="submit" 
          value="Send Message" 
          className="submit-button" 
          /> */}
            <button type="submit"  className="submit-button">
          Submit
        </button>
        </form>
      </div>
    </>
  );
};

export default Form;
