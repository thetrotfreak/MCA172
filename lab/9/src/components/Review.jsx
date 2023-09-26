import React from "react";
import Alert from "react-bootstrap/Alert";

export default function Review({ name, bookName, comment }) {
  return (
    <Alert variant="primary">
      <Alert.Heading className="text-lead">{name}</Alert.Heading>
      <h5 className="h5 text-primary">{bookName}</h5>
      <p className="text-dark">{comment}</p>
    </Alert>
  );
}
