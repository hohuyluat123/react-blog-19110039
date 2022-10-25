import React from "react";
  
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } 
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";
  
// Import from react-router-dom
import { BrowserRouter as Router, Switch,
    Route, Link} from "react-router-dom";
  
// Import other React Component
import CreateBlog from 
    "./Components/create-blog.components";
import EditBlog from 
    "./Components/edit-blog.component";
import BlogList from 
    "./Components/blog-list.components";
import DetailBlog from 
    "./Components/Detail-blog.component";


// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                  Blog học tập
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-blog"} 
                    className="nav-link" exact>
                    Create Blog
                   
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/blog-list"} 
                    className="nav-link" exact>
                    BLog List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" 
                    component={CreateBlog}  />
                  <Route path="/create-blog" 
                    component={CreateBlog} />
                  <Route path="/edit-blog/:id" 
                    component={EditBlog} />
                  <Route exact path="/blog-list" 
                    component={BlogList} />
                    <Route path="/detail-blog/:id" 
                    component={DetailBlog} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};
  
export default App;