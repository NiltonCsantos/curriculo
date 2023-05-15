import { Fragment } from "react";

import { FaCheck } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

import { BsFillClipboard2CheckFill } from "react-icons/bs";

import Api from "../../../../services/api";

import { useState } from "react";

const Section = () => {
  const [hardskills, setHardSkills] = useState([{ name: "", logo: "" }]);
  const [portfolio, setPortfolio] = useState([
    { name: "", url: "", github: false },
  ]);
  const [softskills, setSoftSkills] = useState([" "]);
  const [languages, setLanguages] = useState([" "]);
  const [certificates, setCertificates] = useState([
    { name: "", date: "", description: "", url: "" },
  ]);

  const GetHardSkills = async () => {
    const hardSkills: [{ name: string; logo: string }] =
      await Api.getHardSkills();

    setHardSkills(hardSkills);
  };

  const GetSoftSkills = async () => {
    const response: [] = await Api.getSoftSkills();

    setSoftSkills([...response]);
  };

  const GetLanguages = async () => {
    const response: [] = await Api.getLanguages();

    setLanguages([...response]);
  };

  const GetPortfolio = async () => {
    const response: [{ name: string; url: string; github: boolean }] =
      await Api.getPortifolio();

    setPortfolio(response);
  };
  const GetCertificate = async () => {
    const response: [
      { name: string; date: string; description: string; url: string }
    ] = await Api.getCertificates();

    setCertificates(response);
 
  };

  if (hardskills.length == 1) {
    GetHardSkills();

  }
  if (softskills.length == 1) {
    GetSoftSkills();
  }

  if (languages.length == 1) {
    GetLanguages();
  }
  if (portfolio.length == 1) {
    GetPortfolio();
  }

  if (certificates.length == 1) {
    GetCertificate();
  }

  return (
    <Fragment>
      <section>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                id="btn"
              >
                Habilidades
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div id="skills">
                  <div className="container-tools">
                    <h3>Ferramentas</h3>

                    <div className="tools">
                      {hardskills.map((hardSkill, index) => {
                        return (
                          <div className="tools-img" key={index}>
                            <img src={hardSkill.logo} alt="" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="container-personal">
                    <h3>Pessoal</h3>

                    <div className="personal">
                      <ul>
                        <div>
                          {softskills.map((element, index) => {
                            return (
                              <li key={index}>
                                {" "}
                                <FaCheck />
                                {element}
                              </li>
                            );
                          })}
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                id="btn"
              >
                Idiomas
              </button>
            </h2>

            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="languages">
                  {languages.map((element, index) => {
                    return (
                      <p key={index}>
                        <FaCheck />
                        {element}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                id="btn"
              >
                Portifólio
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                {portfolio.map((element, index) => {
                  return (
                    <Fragment key={index}>
                      <h5>
                        <FaGithub />
                        {element.name}
                      </h5>
                      <p>
                        <a href={element.url} rel="external" target="_blank">
                          {" "}
                          Link do projeto
                        </a>
                      </p>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
                id="btn"
              >
                Certificados
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                {certificates.map((element, index) => {
                  return (
                    <div key={index}>
                      <h5>
                        <BsFillClipboard2CheckFill className="certificate" />
                        {element.name}
                      </h5>
                      <p>{element.date}</p>
                      <p>{element.description} </p>
                      {element.url!=""?<p>  <a href={element.url} target="_blank" rel="external">Verifique</a></p>: null}
                     
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Section;
