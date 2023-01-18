import React from "react";
import rigoImage from "../../img/rigo-baby.jpg"

//create your first component
const Card = () => {
  return (
    <div className="col-sm-6">
    <div className="card mt-3">
    <img src="https://via.placeholder.com/500x325" className="img-fluid h-100" alt=" "/>
    <div className="card-body">
      <h5 className="card-title  text-center">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Find Out More!</a>
    </div>
  </div> 
  </div>);
};

export default Card;