const axios = require('axios');
const { type } = require('os');
const env = require('./env.json');

class ApiCoinMarketCap {

    constructor () {
        this.baseUrl = env.base_url;
        this.baseParams = env.base_params;
    }

    async getMarketPrices(start = 1, limit = 100, options = {}) {
        let baseUrl = this.baseUrl;
        let baseParams = this.baseParams;
        baseParams.start = start;
        baseParams.limit = limit;
        baseParams = this.setBaseParams(baseParams, options);
        let baseParamsImploded = Object.keys(baseParams).map( (key) => [key, baseParams[key]].join("=")).join("&");
        
        let apiUrl = [
            baseUrl,
            baseParamsImploded
        ].join("?");

        const { data } = await axios.get(apiUrl);

        return data.data;
    }

    setBaseParams(baseParams, options) {
        baseParams.sortBy = typeof options['sortBy'] != 'undefined' ? options['sortBy'] : baseParams.sortBy;
        baseParams.sortType = typeof options['sortType'] != 'undefined' ? options['sortType'] : baseParams.sortType;
        baseParams.convert = typeof options['convert'] != 'undefined' && typeof options['convert'] === 'object' ? options['convert'] : baseParams.convert;
        baseParams.cryptoType =typeof options['cryptoType'] != 'undefined' ? options['cryptoType'] : baseParams.cryptoType;
        baseParams.tagType = typeof options['tagType'] != 'undefined' ? options['tagType'] : baseParams.tagType;
        baseParams.audited = typeof options['audited'] != 'undefined' ? options['audited'] : baseParams.audited;
        baseParams.aux = typeof options['aux'] != 'undefined' && typeof options['aux'] === 'object' ? options['aux'] : baseParams.aux;
        baseParams.tagSlugs = typeof options['tagSlugs'] != 'undefined' ? options['tagSlugs'] : baseParams.tagSlugs;

        return baseParams;
    }
}

module.exports = new ApiCoinMarketCap;