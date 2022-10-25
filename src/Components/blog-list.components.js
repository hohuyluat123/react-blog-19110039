import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import BlogTableRow from "./BlogTableRow";
  
const BlogList = () => {
  const [blog, setBlog] = useState([]);
  
  useEffect(() => {
    
    axios
      .get("http://localhost:5000/blog/")
      .then(({ data }) => {
        setBlog(data);
        console.log('data',data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return blog.map((res, i) => {
      return <BlogTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default BlogList;