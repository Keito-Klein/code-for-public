const axios = require("axios");
const cheerio = require("cheerio");

//Script By Taufik Qillah
const fb = async(url) => {
    const header = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Origin': 'https://getmyfb.com',
      'Referer': 'https://getmyfb.com/'
    };
  
    const query = {
      id: url,
      locale: 'en'
    };
  
    const res = await axios.post('https://getmyfb.com/process', qs.stringify(query), { header })
      const $ = cheerio.load(res.data)
      response = $(".results-download").find("ul > li:nth-child(1) > a").attr("href")
      return response;
    
  };