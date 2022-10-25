import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogForm from "./BlogForm";


const EditBlog = (props) => {
  const [formValues, setFormValues] = useState({
    content: ""
  });
    
  //onSubmit handler
  const onSubmit = (blogObject) => {
    axios
      .put(
        "http://localhost:5000/blog/update-blog/" +
          props.match.params.id,
        blogObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Blog successfully updated");
      //    props.history.push("/blog-list");

      window.location = "/blog-list";
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize blog form
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/blog/update-blog/" 
        + props.match.params.id
      )
      .then((res) => {
        const { content} = res.data;
        console.log({content});
        setFormValues({ content});
        
      })
      .catch((err) => console.log(err));
      
  }, []);
  

  return (
    <BlogForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize 
    >
      Update Blog
      
    </BlogForm>
  );
};
  
// Export EditBlog Component
export default EditBlog;