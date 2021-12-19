require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remember snake grid kitten success giggle'; 
let testAccounts = [
"0x1f1b7176ce50acc94cd6df0555296cf7ca1be793a5655d769551bb9e77b8c3d5",
"0xb2f6ec1802e5a65653aa18f234bfc93733d6f40f417f6ec3b63f55d7e9e90a52",
"0x9ad9d7b97f41d1a8898829130e1f03e41c63985ca26d0fc32fe22351089c48af",
"0x57adb303db3b463e47ea6144be4d65416889dd2840dac9e830dd183e9af56a2b",
"0x1493b3e690615fddbf06e4922e2a2c234bdf90890f111514b53b0c135a87f95b",
"0x9469ff336079021ff9157c2ef89d8f24421dd387dbae4c4a7d7f8052acb89e81",
"0x2bcebaa142585bb944b7ce90a154602e5f7ebc0f3d568b407057d08acc9f6f80",
"0x0f22ce4fd9798c2be83e596c683da44dcc573b15be67979f8c34168b26ebddc6",
"0x1ed626a358a49649e3eadd2b91d1a2aed7b4241e5d2717a9440ac75305f9b8cc",
"0x8ff245e2205a2af6743d389b5090aeb7373fa88f2bf10a4dfd4371577f12c5c9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


