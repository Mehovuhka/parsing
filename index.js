import axios from "axios";
import fs from "node:fs";

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

  fs.writeFileSync("./kinopoisk.json", JSON.stringify(allFilms.flat(1)));
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
  }

  fs.writeFileSync("./start.json", JSON.stringify(allFilms.flat(1)));
};

const thirdParse = async () => {
  const genre = [
    146, 1, 42, 5, 4, 138, 147, 2, 40, 137, 150, 101, 3, 148, 140, 574, 1056,
    139, 142, 141, 1055, 149, 136, 1519, 1520,
  ];
  const requests = [];
  for (let i = 0; i < genre.length; i++) {
    const request = axios.get(
      `https://api.ott.kinopoisk.ru/v12/selections/${genre[i]}?limit=10000000&offset=0&selectionWindowId=tvod_est&serviceId=25`,
      {
        headers: {
          "X-Request-Id": "2e166d47b17455ee-1eafe62d3c9ccbf5",
          "uber-trace-id": "2e166d47b17455ee:1d9cc590d02119e8:0:1",
          Cookie:
            "i=76Uuahy3KH4azqriulfZM8jBQ+Dc0ZqWsLfG/AoVTwAyZf7/c1fjeFHxSG4Tp9jy2i6z/tSadExx5m0NFqGSkSxmaGk=; gdpr=0; _ym_uid=163908350162479482; ya_sess_id=noauth:1639083502; yandex_login=; ys=c_chck.1586652267; mda2_beacon=1639083502772; _ym_isad=2; sso_status=sso.passport.yandex.ru:synchronized; yandexuid=8660515221639083502; yuidss=8660515221639083502; _ym_visorc=b; cycada=9zSA8PnYe6eLk7yRa77BxvVSsHjncErr1CTwXLF3rZ0=; _ym_d=1639087007",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36",
        },
      }
    );
    requests.push(request);
  }

  const responses = await Promise.all(requests);

  const fileData = responses.map(({ data }) => data.data).flat(1);

  fs.writeFileSync("./kinopoisk2.json", JSON.stringify(fileData));
};

firstParse();
secondParse();
thirdParse();
