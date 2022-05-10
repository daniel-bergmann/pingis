const scraper = require("../../../scrapers/bordtennis");

export default async function handler(req, res) {
  // pasing in the source of data as argument
  const articles = await scraper("https://bordtennis.is/");
  res.status(200).json(articles);
}
