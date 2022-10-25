import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const BlogTableRow = (props) => {
  const {  id, content, comment} = props.obj;
  console.log('id',id, comment);
  const deleteBlog = () => {
    axios
      .delete(
"http://localhost:5000/blog/delete-blog/" + id)
      .then((res) => {
        if (res.status === 200) {
          alert("Blog successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  return (
    <tr>
      <td>{content}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-blog/" + id}>
          Edit
        </Link>
        <Link class="edit-link button2 button" 
          to={"/detail-blog/" + id}>
          Detail
        </Link>
        <button onClick={deleteBlog} class="button button3">
          Delete
        </button>
      </td>
    </tr>
  );
};
  
export default BlogTableRow;