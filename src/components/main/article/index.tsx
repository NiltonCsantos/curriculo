import { FaUser } from "react-icons/fa";

import {MdPlace} from "react-icons/md";

import {FaWhatsapp} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";


import Api from "../../../services/api";

import { useState } from "react";

import Section from "./section";

 

const Article = () => {

  const loading: string="carregando...";

  const [user, setUser]=useState({

    name:"",
    photo:"",
    job:"",
    location:"",
    phone:"",
    linkedin:"",
    email:""
  
  });

  const GetUser= async ()=>{
    const res:{name: string, photo: string,
      job: string,
      location: string,
      phone: string,
      linkedin: string,
      email: string}=await Api.getUser();
  
      setUser(res);
  }

  if(("").match(user.name)){
    GetUser();
  }

  return (
    
    <article>
      <div className="information">
        <h3>
          <FaUser /> {("").match(user.job)? loading: user.job}
        </h3>
      </div>
      <div className="information">
        <h3>
          <MdPlace/> {("").match(user.location)?loading: user.location}
        </h3>
      </div>
      <div className="information">
        <h3>
          <FaWhatsapp /> <a href={user.phone} target="_blanck" rel="external">{("".match(user.name)?loading: "Contato")}</a>
         
        </h3>
      </div>
      <div className="information">
        <h3>
          <FaLinkedinIn /> <a href={user.linkedin} rel="external" target="_blank">{("").match(user.linkedin)?loading: user.linkedin}</a>
        </h3>
      </div>

      <div className="information">
        <h3>
          <FaEnvelope/> <a href={user.email} target="_blank" rel="external">{("").match(user.email)? loading:"Email"}</a>
        </h3>
      </div>

      <Section/>

      
    </article>
  );
};

export default Article;
