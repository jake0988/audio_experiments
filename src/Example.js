import * as React from "react";
import Alert from "react-bootstrap/Alert";

export const Example = () => {
  return (
    <Alert dismissible variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>Change this anfdad that and try again.</p>
    </Alert>
  );
};
