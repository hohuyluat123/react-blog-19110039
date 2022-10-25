import React, { useState } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";


const DetailForm = (props) => {

  const [formValues, setFormValues] = 
    useState({comment: ''})
 
  const { id, content, comment}=props.initialValues;
  //console.log('comment', list.length, final);
// let listComment={};
//   for(let value of comment){
//     listComment.push(value);
//   }
//const comt= JSON.stringify(comment);

  // console.log('comment', comment);
    const onSubmit = blogObject => {
      axios.post(
  'http://localhost:5000/blog/comment/'+id, 
      blogObject)
        .then(res => {
          if (res.status === 200){
            alert('Blog successfully created');
            window.location = "/detail-blog/"+id;
            setFormValues();
          }
          else
            Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
    }
      

     
  // let abc= {conts}.content;
//var abc= JSON.parse({content});
//const conts= {content}.content;
  return (
    <div>
      <h2>BLOG HỌC TẬP</h2>
        <section>
          <article class="detailcontainer">
            <h2>{content}</h2>
          </article>
        </section>
        <CommentForm initialValues={formValues} 
              onSubmit={onSubmit} 
              enableReinitialize>
              Comment
        </CommentForm>
        <h3> List Comment</h3>
         <a class="navbar-brand">{comment}</a>
         
    </div>
    
  );
};
  
export default DetailForm;