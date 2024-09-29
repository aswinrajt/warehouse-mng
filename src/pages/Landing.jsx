import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <Container fluid className="p-4 p-md-5 bg-light">
  <Row className="mb-4">
    <Col className="text-center">
       <h1 className="display-4 text-primary mb-3">
        <i className="fas fa-warehouse"></i> 
        <span className="d-block d-sm-inline">WarehousePro</span>
      </h1>

      <p className="lead mb-4">
        Effortlessly manage your inventory with our intuitive platform.
      </p>

      <Link className="btn btn-dark btn-lg btn-sm mt-3" to={"/dash"}>
        Get Started <i className="fas fa-arrow-right"></i>
      </Link>
    </Col>
  </Row>





      <br />
      <br /><br />



      <Row className="text-center">
        <Col lg={4} md={6} className="mb-4">
          <Card className="h-100 shadow">
            <Card.Body>
              <i className="fas fa-search fa-3x text-primary mb-3"></i>
              <Card.Title>Real-Time Product Tracking</Card.Title>
              <Card.Text>
                Monitor product stock and inventory levels in real-time to prevent stockouts or overstocking.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="h-100 shadow">
            <Card.Body>
              <i className="fas fa-edit fa-3x text-success mb-3"></i>
              <Card.Title>Add, Edit, & Delete Products</Card.Title>
              <Card.Text>
                Easily manage your product inventory by adding, updating, or removing products in just a few clicks.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="h-100 shadow">
            <Card.Body>
              <i className="fas fa-cogs fa-3x text-warning mb-3"></i>
              <Card.Title>Customizable Inventory</Card.Title>
              <Card.Text>
                Organize your inventory with custom product fields like price, stock level, and more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="h-100 shadow">
            <Card.Body>
              <i className="fas fa-user fa-3x text-info mb-3"></i>
              <Card.Title>User-Friendly Interface</Card.Title>
              <Card.Text>
                Simple and intuitive design ensures anyone can manage inventory without extensive training.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="h-100 shadow">
            <Card.Body>
              <i className="fas fa-chart-line fa-3x text-danger mb-3"></i>
              <Card.Title>Inventory Insights</Card.Title>
              <Card.Text>
                Get detailed insights and analytics about your inventory to make informed decisions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="h-100 shadow">
            <Card.Body>
              <i className="fas fa-shield-alt fa-3x text-secondary mb-3"></i>
              <Card.Title>Secure & Scalable</Card.Title>
              <Card.Text>
                Our platform ensures your data is secure and can scale as your business grows.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
