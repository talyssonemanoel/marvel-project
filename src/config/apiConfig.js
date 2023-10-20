import md5 from 'md5';

const publicKey = 'SuaChavePública';
const privateKey = 'SuaChavePrivada';
const timestamp = Number(new Date());
const hash = md5(timestamp + privateKey + publicKey);

export const apiConfig = {
  publicKey,
  privateKey,
  timestamp,
  hash,
};
