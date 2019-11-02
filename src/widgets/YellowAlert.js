import React from "react";
import { Container } from "@material-ui/core";

const YellowAlert = props => {

  return (    
      <Container
        style={{
          background: "#fff3cd",
          borderRadius: ".25em",
          padding: "1em",
          color: "#856404",
          textAlign: "center"
        }}
      >
        {props.message}
      </Container>
  );
};

export default YellowAlert;
