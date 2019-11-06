import React, { useState, useEffect } from "react";
import DocumentService from "./DocService";
import PDFContainer from "./PDFContainer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import APIManager from "../../../util/APIManager";
import { Typography } from "@material-ui/core";

const ProjectPDFOverview = props => {
  const [project, setProject] = useState({});
  const [technologies, setTechnologies] = useState([]);
  const [supplementals, setSupplementals] = useState([]);
  const [collaborators, setCollaborators] = useState([]);

  const getProject = () => {
    APIManager.get("projects", `${props.match.params.projectId}`).then(
      project => {
        setProject(project);
        setTechnologies(project.technologies);
        setSupplementals(project.supplementals);
        setCollaborators(project.collaborators);
      }
    );
  };

  useEffect(() => {
    getProject();
  }, []);

  const createPdf = html => DocumentService.createPdf(html);
  const ReactMarkdown = require("react-markdown");

  return (
    <>
      <PDFContainer createPdf={createPdf}>
        <div style={{ padding: "1.5em" }}>
          <Typography variant="h1">{project.title}</Typography>
          <br />
          <Typography variant="h4">Primary Technology:</Typography>
          <div>
            <ul>
              {technologies
                .filter(technology => technology.technology_type_id === 1)
                .map(technology => (
                  <li>{technology.technology}</li>
                ))}
            </ul>
          </div>
          <Typography variant="h4">Supplemental Technologies:</Typography>
          <div>
            <ul>
              {technologies
                .filter(technology => technology.technology_type_id === 2)
                .map(technology => (
                  <li>{technology.technology}</li>
                ))}
            </ul>
          </div>
          <Typography variant="h4">Overview:</Typography>
          <div>
            <ReactMarkdown source={project.overview} escapeHtml={false} />
          </div>
          <Typography variant="h4">Supplemental Notes:</Typography>
          <br />
          <div>
            {supplementals
              .filter(supplemental => supplemental.supplemental_type_id === 1)
              .map(note => (
                <div style={{background: "Gainsboro", borderRadius: 6, padding: "1em"}}>
                  <Typography variant="h6">{note.title}</Typography>
                  <ReactMarkdown source={note.text} escapeHtml={false} />
                </div>
              ))}
          </div>
          <br />
          <Typography variant="h4">Supplemental Code Snippets:</Typography>
          <br />
          <div>
            {supplementals
              .filter(supplemental => supplemental.supplemental_type_id === 2)
              .map(code => (
                <div>
                  <Typography variant="h6">{code.title}</Typography>
                  <SyntaxHighlighter
                    language={code.language}
                    style={atomDark}
                    wrapLines={true}
                    >
                    {code.text}
                  </SyntaxHighlighter>{" "}
                </div>
              ))}
          </div>
        </div>
      </PDFContainer>
    </>
  );
};

export default ProjectPDFOverview;
