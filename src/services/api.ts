const Api = {
  getUser: async () => {
    const response: {
      user: string;
    } = await fetch(
      "https://raw.githubusercontent.com/NiltonCsantos/curriculo/main/public/data/profile.json"
    ).then((res) => res.json());

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

    console.log(response.skills.hardSkills);

    return response.skills.hardSkills;
  },

  getSoftSkills: async () => {
    const response: {
      softSkills: [];
    } = await fetch("http://localhost:3000/skills").then((res) => res.json());

    return response.softSkills;
  },

  getLanguages: async () => {
    const response: [] = await fetch("http://localhost:3000/languages").then(
      (res) => res.json()
    );

    return response;
  },
  getPortifolio: async () => {
    const response = await fetch("http://localhost:3000/portfolio").then(
      (res) => res.json()
    );

    return response;
  },

  getCertificates: async () => {
    const response = await fetch("http://localhost:3000/certificates").then(
      (res) => res.json()
    );

    return response;
  },
};

export default Api;
