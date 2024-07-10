const axios = require("axios");
const qs = require("qs");
const cheerio = require("cheerio");

const igDownloader = async(url) => {
	const header = {
		'Content-type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'Host': "v3.igdownloader.app",
		'Origin' : 'https://idownloader.app',
		'Referer': 'https://idownloader.app',
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0"
		
	};

	const data = {
    q: url,
    lang: 'id'
  }

	const resp = await axios.post('https://v3.igdownloader.app/api/ajaxSearch', qs.stringify(data), { header })
	const $ = cheerio.load(resp.data.data)
    result = $('ul').find('li > div > .download-items__btn > a').attr("href")
    return result;
	
}