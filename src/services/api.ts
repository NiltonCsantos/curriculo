const Api = {
  getUser: async () => {
    const response: {
      user:{name: string, photo: string,
      job: string,
      location: string,
      phone: string,
      linkedin: string,
      email: string;
      }
    } = await fetch(
      "https://raw.githubusercontent.com/NiltonCsantos/curriculo/main/public/data/profile.json"
    ).then((res) => res.json());

    JSON.stringify(response.user)

    return response.user;
  },

  getHardSkills: async () => {
    const response: {
      skills: {
        hardSkills: [
          {
            name: string;
            logo: string;
          }
        ];
      };
    } = await fetch(
      "https://raw.githubusercontent.com/NiltonCsantos/curriculo/main/public/data/profile.json"
    ).then((res) => res.json());

    return response.skills.hardSkills;
  },

  getSoftSkills: async () => {
    const response: {
      skills:{
        softSkills: [];
      }
      
    } = await fetch("https://raw.githubusercontent.com/NiltonCsantos/curriculo/main/public/data/profile.json").then((res) => res.json());

    return response.skills.softSkills;
  },

  getLanguages: async () => {
    const response:{
      languages:[]
    } = await fetch("https://raw.githubusercontent.com/NiltonCsantos/curriculo/main/public/data/profile.json").then(
      (res) => res.json()
    );


    return response.languages;
  },
  getPortifolio: async () => {
    const response:{
      portfolio: [{name: string; url: string; github: boolean }]
    } = await fetch("https://raw.githubusercontent.com/NiltonCsantos/curriculo/main/public/data/profile.json").then(
      (res) => res.json()
    );

    return response.portfolio;
  },

  getCertificates: async () => {
    const response:{
      certificates:[{name: string; date: string; description: string; url: string }]
    } = await fetch("https://raw.githubusercontent.com/NiltonCsantos/curriculo/main/public/data/profile.json").then(
      (res) => res.json()
    );

    return response.certificates;
  },
};

export default Api;
