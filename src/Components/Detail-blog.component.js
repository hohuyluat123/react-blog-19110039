import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailForm from "./DetailForm";


const DetailBlog = (props) => {
  const [blogContent, setBlogContent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/blog/detail-blog/"+props.match.params.id)
      .then((res) => {
        const value={id: res.data.id, content:res.data.content, comment: res.data.comment };
        setBlogContent(value);
        console.log('data',value);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

 

return(
  <DetailForm
      initialValues={blogContent}
     
      enableReinitialize 
    >
      Update Blog
      
    </DetailForm>
)
 
};
  
export default DetailBlog;