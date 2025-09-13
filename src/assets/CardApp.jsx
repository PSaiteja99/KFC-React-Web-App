import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class CardApp extends Component {
  render() {
    return (
      <Card 
        style={{ width: "250px"}} 
        className="bg-light shadow"
      >
        <Card.Img variant="top" src={this.props.cardimg} />

        <Card.Body 
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <Card.Title className="text-center">{this.props.cardtitle}</Card.Title>
            <Card.Text className="text-center">{this.props.cardtext}</Card.Text>
            <div className="text-center">
              <u>{this.props.cardu}</u>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <Button
              style={{
                backgroundColor: "#000",
                border: "none",
                borderRadius: "30px",
                padding: "10px 24px",
                fontWeight: "500"
              }}
            >
              {this.props.cardbutton}
            </Button>
          </div>
          
        </Card.Body>
      </Card>
    );
  }
}
export default CardApp;