class URLSearchParams {
    constructor(parmas) {
        this.arrParams = parmas.split(/\&|\#/);
        this.hasParams = this.format(this.arrParams)
    };
    format() {
        let _hasParams = {};
        this.arrParams.forEach((item) => {
            if (item.indexOf('=') > -1) {
                let _arrItem = item.split('=')
                _hasParams[_arrItem[0]] = _arrItem[1];
            }
        })
        return _hasParams
    };
    has(key) {
        if (!key) return
        return Boolean(this.hasParams[key])
    }
    get(key) {
        if (!key) return null
        else return this.hasParams[key]
    }
    keys() {
        let _keys = [];
        for (let _key in this.hasParams) {
            _keys.push(_key)
        }
        return _keys
    }
    values() {
        let _values = [];
        for (let _key in this.hasParams) {
            _values.push(this.hasParams[_key])
        }
        return _values
    }

}
export default Boolean(window.URLSearchParams) ? window.URLSearchParams : URLSearchParams