import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xE428ffF57ffA97379ab80c4aA9e67521431033ea'
);

export default instance;
