import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  // file paths: json/<channel_name>/YYYY-MM-dd.json
  // url: /api/staticdata?channelName=CHANNEL_NAME&date=YYYYmmdd

  const { query: { channel_name, date } } = req;

  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  let fileContents = await fs.readFile(`${jsonDirectory}/data.json`);
  if (channel_name && date) fileContents = await fs.readFile(`${jsonDirectory}/${channel_name}/${date}.json`, 'utf8');
  //Return the content of the data file in json format
  res.status(200).json(JSON.parse(fileContents));
}
