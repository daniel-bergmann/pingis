// Axios is for HTTP requests
const axios = require("axios");
// cheerio is for web scraping
const cheerio = require("cheerio");

// pageUrl will be the target site, taken as parameter
async function scraper(pageUrl) {
  const { data } = await axios.get(pageUrl);
  const $ = cheerio.load(data);
  const articles = [];
  // looping through the scraped data and making the API according to the data we want to have
  $(".cs-blog").each((i, el) => {
    const article = {};
    article.title = $(el).find("a").text().replace(/\s\s+/g, "");
    article.about = $(el).find(".blog-text p").text().replace(/\s\s+/g, "");
    article.link = $(el).find("a").attr("href");
    article.pic = $(el).find("img").attr("src");
    // pushing scraped data from website into empty "articles" array and returning it when called in the API folder
    articles.push(article);
  });
  return articles;
}

module.exports = scraper;
