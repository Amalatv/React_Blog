import React, { useState }  from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
// import FormAndPreview from "./FormAndPreview";
import Blogs from "./Blogs";



const FormMainContent = () => {
  const [formData, setFormData] = useState({
    title: '',
    titledescription: '',
    imageurl: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { ...formData, id: uuidv4(), date: new Date().toLocaleDateString() };
    console.log(newPost);
    // Reset form
    setFormData({
      title: '',
      titledescription: '',
      imageurl: '',
      description: ''
    });
  };

  return (
    <>
      <div className="w3-row">
        <div className="w3-col l4">
        <Form 
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
        />
       
       
        </div>

        <div className="w3-col l8 s12">
          <Blogs
                 title={formData.title ||  "Title Heading"}
                 titledescription={formData.titledescription || "Title Description " }
                 imageUrl={formData.imageurl || "https://www.shutterstock.com/image-photo/ai-tech-businessman-show-virtual-600nw-2253228203.jpg"} alt="Nature" style={{ width: "100%" }}
                 date={new Date().toLocaleDateString()}
                 description={formData.description || " Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi noncongue ullam corper.Praesent tincidunt sed tellus ut rutrum. Sedvitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."}
          />
     
          <hr />
        </div>
        
      </div>
      <br />
    </>
  );
};

export default FormMainContent;
