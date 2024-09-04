import React from "react";
import Blogs from "./Blogs";
import MyName from "./AboutContent";
import PopularPost from "./PopularPost";
import Tags from "./Tags";
import { about } from "../Datas/data";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useEffect, useState } from "react";


const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const MainContent = () => {
const [articleData, setarticledata] = useState([])

useEffect(() => {
  const fetchBlogs = async () => {
    try{
      const response = await axios.get("https://react-blog-api-i6ni.onrender.com/getblog")
      setarticledata(response.data.reverse())
    } catch (error) {
      console.log(error)
    }
  };

  fetchBlogs();
}, [])



  return (
    <>
      <div className="w3-row">

        <div className="w3-col l8 s12">
          {articleData.map((data) => (
            <Blogs key={uuidv4()} {...data} date={formatDate(data.date)} /> 
          ))}
          <hr />
        </div>

        <div className="w3-col l4">
          {about.map((data) => (
            <MyName key={uuidv4()} {...data} />
          ))}
          <hr />
          <PopularPost />
          <Tags />
        </div>
        
      </div>
      <br />
    </>
  );
};

export default MainContent;
