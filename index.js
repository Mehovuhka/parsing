import axios from "axios";
import fs from "fs-extra";

axios.defaults.headers = {
  "X-API-KEY": "f6e77863-4ca3-45d4-b72c-3a68b632fecd",
};

const firstParse = async () => {
  const allFilms = [];
  for (let i = 1; i < 21; i++) {
    const res = await axios
      .get("https://kinopoiskapiunofficial.tech/api/v2.2/films", {
        params: { page: i },
      })
      .then((response) => response.data.items);
    if (res.length != 0) allFilms.push(res);
    console.log(i);
  }

  fs.writeJson("./kinopoisk.json", allFilms);
};

const secondParse = async () => {
  const allFilms = [];
  for (let i = 1; i < 2; i++) {
    const res = await axios
      .get(
        "https://api.start.ru/recommendation/b41ac7cb-82c5-487b-961b-feae09d998fb?apikey=a20b12b279f744f2b3c7b5c5400c4eb5"
      )
      .then((response) => response.data.items);
    if (res.length != 0) allFilms.push(res);
    console.log(i);
  }

  fs.writeJson("./start.json", allFilms);
};
const thirdParse = async () => {
  const allFilms = [];
  for (let i = 1; i < 2; i++) {
    const res = await axios
      .get(
        "https://api.start.ru/recommendation/b41ac7cb-82c5-487b-961b-feae09d998fb?apikey=a20b12b279f744f2b3c7b5c5400c4eb5"
      )
      .then((response) => response.data.items);
    if (res.length != 0) allFilms.push(res);
    console.log(i);
  }

  fs.writeJson("./start.json", allFilms);
};

firstParse();
secondParse();
