import React, { useState } from "react";
import axios from 'axios';
import BlogForm from "./BlogForm";
  

const CreateBlog = () => {
  const [formValues, setFormValues] = 
    useState({content: ''})
  // onSubmit handler
  const onSubmit = blogObject => {
    axios.post(
'http://localhost:5000/blog/create-blog', 
    blogObject)
      .then(res => {
        if (res.status === 200){
          alert('Blog successfully created');
          window.location = "/blog-list";
        }
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    

  return(
    <BlogForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create Blog
    </BlogForm>
  )
}
  

export default CreateBlog