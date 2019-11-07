import React, { useState, useEffect } from "react";
import DocumentService from "./DocService";
import PDFContainer from "./PDFContainer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import APIManager from "../../../util/APIManager";
import { Typography, Paper } from "@material-ui/core";
import { whileStatement } from "@babel/types";

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
        <Paper elevation={5} style={{ width: "90%", margin: "4em auto" }}>
          <div style={{ padding: "1.5em" }}>
            <Typography variant="h1">{project.title}</Typography>
            <br />
            <Typography
              style={{
                color: "white",
                background: "#ca3e47",
                borderRadius: 6,
                padding: 5
              }}
              variant="h4"
            >
              Primary Technology:
            </Typography>
            <div style={{ fontSize: "1.5em" }}>
              <ul>
                {technologies
                  .filter(technology => technology.technology_type_id === 1)
                  .map(technology => (
                    <li>{technology.technology}</li>
                  ))}
              </ul>
            </div>
            <Typography
              style={{
                color: "white",
                background: "#ca3e47",
                borderRadius: 6,
                padding: 5
              }}
              variant="h4"
            >
              Supplemental Technologies:
            </Typography>
            <div style={{ fontSize: "1.5em" }}>
              <ul>
                {technologies
                  .filter(technology => technology.technology_type_id === 2)
                  .map(technology => (
                    <li>{technology.technology}</li>
                  ))}
              </ul>
            </div>
            <Typography
              style={{
                color: "white",
                background: "#ca3e47",
                borderRadius: 6,
                padding: 5
              }}
              variant="h4"
            >
              Overview:
            </Typography>
            <div>
              <ReactMarkdown source={project.overview} escapeHtml={false} />
            </div>
            {supplementals.filter(
              supplemental => supplemental.supplemental_type_id === 1
            ).length !== 0 ? (
              <div>
                <Typography
                  style={{
                    color: "white",
                    background: "#ca3e47",
                    borderRadius: 6,
                    padding: 5
                  }}
                  variant="h4"
                >
                  Supplemental Notes:
                </Typography>
                <br />
                <div>
                  {supplementals
                    .filter(
                      supplemental => supplemental.supplemental_type_id === 1
                    )
                    .map(note => (
                      <div>
                        <Typography variant="h6">{note.title}</Typography>
                        <div
                          style={{
                            background: "#F5F5F5",
                            borderRadius: 6,
                            padding: ".1em 1em .1em 1em"
                          }}
                        >
                          <ReactMarkdown
                            source={note.text}
                            escapeHtml={false}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ) : null}
            <br />
            {supplementals.filter(
              supplemental => supplemental.supplemental_type_id === 2
            ).length !== 0 ? (
              <div>
                <Typography
                  style={{
                    color: "white",
                    background: "#ca3e47",
                    borderRadius: 6,
                    padding: 5
                  }}
                  variant="h4"
                >
                  Supplemental Code Snippets:
                </Typography>
                <br />
                <div>
                  {supplementals
                    .filter(
                      supplemental => supplemental.supplemental_type_id === 2
                    )
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
            ) : null}
          </div>
        </Paper>
      </PDFContainer>
    </>
  );
};

export default ProjectPDFOverview;
