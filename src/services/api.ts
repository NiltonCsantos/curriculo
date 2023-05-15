const Api = {
  getUser: async () => {
    const response: {
      name: string;
      photo: string;
      job: string;
      location: string;
      phone: string;
      linkedin: string;
      email: string;
    } = await fetch("http://localhost:3000/user").then((res) => res.json());

    return response;
  },

  getHardSkills: async () => {
    const response: {
      hardSkills:[ {
        name: string;
        logo: string;
      }];
      
    }= await fetch("http://localhost:3000/skills").then((res) => res.json());

    return response.hardSkills;
  },

  getSoftSkills: async ()=>{

    const response:{
      softSkills:[]
    }=await fetch("http://localhost:3000/skills").then((res)=>res.json());

    return response.softSkills;

  },

  getLanguages:async ()=>{

    const response: []= await fetch("http://localhost:3000/languages").then((res)=>res.json());

    return response;

  },
  getPortifolio: async()=>{
    const response= await fetch("http://localhost:3000/portfolio").then((res)=>res.json())

    return response;
  },

  getCertificates: async()=>{

    const response= await fetch("http://localhost:3000/certificates").then((res)=>res.json())

    return response;

  }
  
};

export default Api;
