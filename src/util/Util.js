import React from 'react';

class UtilClass {
    isEmptyString(str) {
        if(str == null) return true;
        if(typeof(str) == 'undefined') return true;
        let contents = str + '';
        contents = contents.trim();
        return (contents == '');
    }
    parseBool(obj) {
        if(this.isEmptyString(obj)) return true;
        if(typeof(obj) == 'boolean') return obj;
        let contents = obj + '';
        contents = contents.trim().toLowerCase();
        if(contents == 'y' || contents == 'yes' || contents == 't' || contents == 'true' ) return true;
        if(contents == 'n' || contents == 'no'  || contents == 'f' || contents == 'false') return false;
        throw new Error("Cannot convert to boolean from " + obj);
    }
}

const Util = new UtilClass();
export default Util;
