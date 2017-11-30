import sequences from './sequences/sequence';
import RadicatedConnector from '../api/content_bucket/connector';
import config from '../api/config';

const run = () => {
  const sequenceCon = new RadicatedConnector(config.radicated_url);
  sequences.forEach((sequence, index) => {
    sequenceCon.createSequence(sequence)
      .then((data) => {
        console.log(`inserted ${index}`);
        console.log(data);
      })
      .catch((err)  => {
        console.log(err);
      });
  });
};

run();
