import Api from "../../services/api";

import { useState } from "react";

import Footer from "../footer";
import Article from "./article";


const Main= ()=>{

  const [user, setUser]=useState({

    name:"",
    photo:"",
    job:"",
    location:"",
    phone:"",
    linkedin:"",
    email:""
  
  })

  const loading: string="carregando...";

  let profile: string="";

  const GetUser= async ()=>{
    const res:{name: string, photo: string,
      job: string,
      location: string,
      phone: string,
      linkedin: string,
      email: string}=await Api.getUser();
  
      setUser(res)
  }

  if(("").match(user.name)){
    GetUser();
  }else{
    profile=user.photo;
  }


  return(
    <div className="container">

      <main>

      <div className="main-img">
        <img src={profile} alt="" />
      </div>

      
      <div className="name">
      <h1>Olá,<br/> eu sou {("").match(user.name)? loading: user.name} </h1>
      </div>

      <Article/>
    
      </main>


      <Footer/>
      

    </div>
  )

}

export default Main;