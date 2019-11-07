import React from "react";
import { Button } from "@material-ui/core";
import GetApp from "@material-ui/icons/GetApp";

export default props => {
  const bodyRef = React.createRef();
  const createPdf = () => props.createPdf(bodyRef.current);
  return (
    <section className="pdf-container">
      <section className="pdf-toolbar">
        <Button
          style={{ margin: "4em 2em 0em 6em", background: "#ca3e47", color: "white" }}
          size="large"
          variant="contained"
          startIcon={<GetApp />}
          onClick={createPdf}
        >
          Create PDF
        </Button>
      </section>
      <section className="pdf-body" ref={bodyRef}>
        {props.children}
      </section>
    </section>
  );
};
