// import { useState } from "react";
// // import Form from "./Form";
// // import Preview from "./preview";
// import Blogs from "./Blogs";

// function FormAndPreview({ title, titledescription, imageUrl, date, description}) {

//   const sliceDescription = description.slice(0, 180);
//   const [isDescriptionVisible, setDescriptionVisible] = useState(false);

//   const toggleDescription = () => {
//     setDescriptionVisible(!isDescriptionVisible);
//   };

//   return (
//     <div className="w3-card-4 w3-margin w3-white ">
//       <img src={imageUrl || "https://www.w3schools.com/w3images/woods.jpg"} alt="Nature" style={{ width: "100%" }} />
//       <div className="w3-container">
//         <h3>
//           <b>{title || "Title Heading"}</b>
//         </h3>
//         <h5>
//           {titledescription || "Title Description "}{" "}
//           <span className="w3-opacity">{date}</span>
//         </h5>
//       </div>
//       <div className="w3-container">
//         <p>{isDescriptionVisible ? description || 
//         " Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi noncongue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sedvitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." : sliceDescription} </p>

//         <div className="w3-row">
//           <div className="w3-col m8 s12">
//             <p>
//               <button
//                 onClick={toggleDescription}
//                 className="w3-button w3-padding-large w3-white w3-border"
//               >
//                 <b>{isDescriptionVisible ? "READ LESS »" : "READ MORE »"}</b>
//               </button>
//             </p>
//           </div>
//           <div className="w3-col m4 w3-hide-small">
//             <p>
//               <span className="w3-padding-large w3-right">
//                 <b>Comments &nbsp;</b> <span className="w3-tag">0</span>
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default FormAndPreview;
