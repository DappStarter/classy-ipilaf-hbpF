require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name regret script collect gesture cover army giggle'; 
let testAccounts = [
"0xe42a58ad1208fb1562509dedb639646916abb9f16287c5b382cc5595be382e52",
"0xa47299d0868f975f308bd8654bb38b881c2b4bdaa1575ae4c431a013307b631e",
"0x2492374c0b049ce182aed4006d6572af4b3b209343b5a46c846eb424e251eb79",
"0x90e7b0cf8cd127d280e3fda0023cb967abc7efb7bc23aaf4c6be51b6ff1c7fed",
"0xd6a3717e921daf75b753317b451babf24b6bd67604fe29ebd8ecfdd109d7af86",
"0x2df2d8c21660805d6f42c755ff52c75b560215f2c8f3158f233f4f149baddbf5",
"0xa5692c2000c4abdc4effcd777c6e20a5586bc6cfbec2cea2ee68dd161df9478e",
"0x140d4b56ec0acdcf8ca5bc0cc186e9faf2e3efcf41ddeeb87590a3aa43654bda",
"0x44ccf5a06c47cc295daa2501cc91ef3871f834b86347a7f8bb03523046f7cfae",
"0x4853d8591cae9de87771b3ee2c6de3efdf416095421a945bada392d2d074095b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

