var hypnosss = {
  chunk: function(arr, n) {
    var ans = [];
    var num = Math.ceil(arr.length / n);
    for(let i = 0; i < num; i++) {
      if(i == num - 1) {
        ans[i] = arr.slice((num - 1) * n);
      } else {
        ans[i] = arr.slice(i * n, (i + 1) * n);
      }
    }
    return ans;
  },
  compact: function (ary) {
    return ary.filter(it => it);
  },
  difference: function a(arr1, ...values) {
    var arr2 = [];
    for(let value of values) {
      arr2 = arr2.concat(value);
    }
    return arr1.filter(arr1mem=>arr2.indexOf(arr1mem) == -1);
  },
  drop: function a(arr, num) {
    return arr.slice((num||num==0)?num:1);
  },
  dropRight: function a(arr, num) {
    var end = (num||num==0)?arr.length-num:arr.length-1;
    return arr.slice(0,end<0?0:end);
  },
  fill: function a(arr, value, start, end) {
    start = start || 0;
    end = end || arr.length;
    for(let i = start; i < end; i++) {
      arr[i] = value;
    }
    return arr;
  },
  flatten: function a(arr) {
    var ans = [];
    for(let arrmem of arr) {
      if(Array.isArray(arrmem)) {
        for(let i = 0; i < arrmem.length; i++) {
          ans.push(arrmem[i]);
        }
      }	else {
        ans.push(arrmem);
      }
    }
    return ans;
  },
  flattenDeep: function a(arr) {
    var ans = [];
    for(let arrmem of arr) {
      if(Array.isArray(arrmem)) {
        ans = ans.concat(this.flattenDeep(arrmem));
      } else {
        ans.push(arrmem);
      }
    }
    return ans;
  },
  flattenDepth: function a(arr, depth) {
    var ans = [];
    for(let i = 0; i < arr.length; i++) {
      ans[i] = arr[i]; 
    }
    for(let i = 0; i < depth; i++) {
      ans = this.flatten(ans);
    }
    return ans;
  },
  fromPairs: function a(pairs) {
    var hash = {};
    for(let pair of pairs) {
      hash[pair[0]] = pair[1];
    }
    return hash;
  },
  head: function a(arr) {
    return arr.length>0?arr[0]:undefined;
  },
  indexOf: function a(arr, val, from) {
    from = from || 0;
    for(let i = (from < 0 ? arr.length + from : from); i < arr.length; i++) {
      if(arr[i] == val) {
        return i;
      }
    }
    return -1;
  },
  initial: function a(arr) {
    return arr.length > 0 ? arr.slice(0, arr.length - 1) : [];
  },
  intersection: function a(...arrs) {
    var hash = {};
    var ans = [];
    for(let arr of arrs) {
      for(let arrmem of arr) {
        if(!hash[arrmem]) {
          hash[arrmem] = 1;
        } else {
          hash[arrmem] ++;
        }
      }
    }
    for(let key in hash) {
      if(hash[key] == arrs.length) {
        ans.push(+key);
      }
    }
    return ans;
  },
  join: function a(arr, sep) {
    var ans = "";
    for(let i = 0; i < arr.length; i++) {
      if(i == arr.length - 1) {
        ans += "" + arr[i];
      } else {
        ans += "" + arr[i] + sep;
      }
    }
    return ans;
  },
  last: function a(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : undefined;
  },
  lastIndexOf: function a(arr, val, from) {
    from = from || from == 0 ? from : arr.length - 1;
    from = from < 0 ? Math.max(0, arr.length + from) : Math.min(arr.length - 1, from);
    for(let i = from; i > 0; i--) {
      if(arr[i] == val) {
        return i;
      }
    }
    return -1;
  },
  pull: function a(arr, ...vals) {
    var ans = [];
    for(let arrmem of arr) {
      if(vals.indexOf(arrmem) == -1) {
        ans.push(arrmem);
      }
    }
    return ans;
  },
  reverse: function a(arr) {
    arr = arr || [];
    if(arr.length <= 1) {
      return arr;
    }
    var start = 0, end = arr.length - 1;
    while(start < end) {
      var temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
    return arr;
  },
  sortedIndex: function a(arr, val) {
    var start = 0;
    var end = arr.length;
    var mid = Math.floor((start+end)/2);
    while(start < end) {
      if(val > arr[mid]) {
        start = mid + 1;
      } else {
        end = mid;
      }
      mid = Math.floor((start+end)/2);
    }
    return mid;
  },
  uniq: function a(arr) {
    var hash = new Map();
    var ans = [];
    for(let arrmem of arr) {
      if(!hash.get(arrmem)) {
        hash.set(arrmem, 1);
      } 
    }
    for(let key of hash.keys()) {
      ans.push(key)
    }
    return ans;
  },
  without: function a(arr, ...vals) {
    var ans = [];
    for(arrmem of arr) {
      if(vals.indexOf(arrmem) == -1) {
        ans.push(arrmem);
      }
    }
    return ans;
  },
  zip: function a(...arrs) {
    var ans = [];
    for(let i = 0; i < arrs[0].length; i++) {
      ans[i] = [];
      for(let j = 0; j < arrs.length; j++) {
        ans[i][j] = arrs[j][i];
      }
    }
    return ans;
  },
  unzip: function a(arr) {
    var ans = [];
    for(let i = 0; i < arr[0].length; i++) {
      ans[i] = [];
      for(let j = 0; j < arr.length; j++) {
        ans[i][j] = arr[j][i];
      }
    }
    return ans;
  },
  countBy: function a(collection, functionb) {
    var hash = {};
    var flag;
    if(functionb+"" === functionb) {
      flag = 1//str
    } else {
      flag = 0;//fun
    }
    for(let co of collection) {
      if(!flag) {
        if(!hash[functionb(co)]) {
          hash[functionb(co)] = 1
        } else {
          hash[functionb(co)] ++;
        }
      } else {
        if(!hash[co[functionb]]) {
          hash[co[functionb]] = 1
        } else {
          hash[co[functionb]] ++;
        }
      }
    }
    return hash;
  },
  forEach: function a(collection, functionb) {
    // var obj = {
    // 	functionbb: eval("(" + functionb + ")")
    // };
    // if(Array.isArray(collection)) {
    // 	for(let key in collection) {
    // 		obj.functionbb(collection[key], key);
    // 	}
    // } else {
    // 	for(let [keyo,val] in collection) {
    // 		obj.functionbb(val, keyo);
    // 	}
    // }
    return collection;
  },
  groupBy: function a(collection, functionb) {
    var hash = {};
    var flag;
    if(functionb+"" === functionb) {
      flag = 1//str
    } else {
      flag = 0;//fun
    }
    for(let co of collection) {
      if(!flag) {
        if(!hash[functionb(co)]) {
          hash[functionb(co)] = [co]
        } else {
          hash[functionb(co)].push(co);
        }
      } else {
        if(!hash[co[functionb]]) {
          hash[co[functionb]] = [co];
        } else {
          hash[co[functionb]].push(co);
        }
      }
    }
    return hash;
  },
  differenceBy: function a(arr, ...rest) {
    var limits = [], func, vals = [], ans = [];
    if(rest.length > 0) {
      if(Array.isArray(rest[rest.length - 1])) {
        for(let i = 0; i < rest.length; i++) {
          limits[i] = rest[i];
        } 
      } else {
        for(let i = 0; i < rest.length - 1; i++) {
          limits[i] = rest[i];
        } 
        func = rest[rest.length - 1];
      }
    }
    for(let i = 0; i < limits.length; i++) {
      for(let mem of limits[i]) {
        vals.push(mem);
      }
    }
    var map = new Map();
    var flag = (func+""===func);
    if(!func) {
      for(let arrmem of arr) {
        map.set(arrmem, arrmem);
      }
      for(let val of vals) {
        if(map.has(val)) {
          map.delete(val);
        }
      }
      for(let arrmem of arr) {
        if(map.has(arrmem)) {
          ans.push(arrmem);
        }
      }
      return ans;
    }
    if(flag) {//str
      for(let arrmem of arr) {
        map.set(arrmem[func], arrmem);
      }
      for(let val of vals) {
        if(map.has(val[func])) {
          map.delete(val[func]);
        }
      }
      for(let arrmem of arr) {
        if(map.has(arrmem[func])) {
          ans.push(arrmem);
        }
      }
    } else {//func
      for(let arrmem of arr) {
        map.set(func(arrmem), arrmem);
      }
      for(let val of vals) {
        if(map.has(func(val))) {
          map.delete(func(val));
        }
      }
      ans = [...map.values()];
    }
    return ans;
  },
  map: function a(collection, func) {
    var ans = [];
    var flag1 = Array.isArray(collection);//1arr 0obj
    var flag2 = (func + "" === func)// 1str 0func
    if(flag1) {
      if(+collection[0] == collection[0]) {// num in arr
        for(let i = 0; i < collection.length; i++) {
          ans.push(func(collection[i], i, collection));
        }
      } else {//obj in arr
        if(flag2) { //str
          for(let co of collection) {
            if(func.includes(".")) {
              var tempArr = func.split(".");
              var temp = co;
              for(let i = 0; i < tempArr.length; i++) {
                temp = temp[tempArr[i]];
              }
              ans.push(temp);
            } else {
              ans.push(co[func]);
            }
          }
        } else {
          for(let co of collection) {
            ans.push(func(co));
          }
        }
      }
    } else if(!flag1 && !flag2){
      for(let key in collection) {
        ans.push(func(collection[key]));
      }
    } else if(!flag1 && flag2) {
      for(let key in collection) {
        ans.push(co[func]);
      }
    }
    return ans;
  },
  // sample: function a(collection) {
  // 	if(Array.isArray(collection)) {
  // 		for(let co of collection) {
  // 			return co;
  // 		}
  // 	} else {
  // 		for(let [key, val] in collection) {
  // 			return [key, val]
  // 		}
  // 	}
  // 	return 2;
  // },
  size: function a(collection) {
    if(collection + "" === collection || Array.isArray(collection)) {
      return collection.length;
    }
    var len = 0;
    for(let key in collection) {
      len++;
    }
    return len;
  },
  isArray: function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  },
  isBoolean: function(arg) {
    return Object.prototype.toString.call(arg) === '[object Boolean]';
  },
  isNumber: function(arg) {
    return +arg === arg;
  },
  isString: function(arg) {
    return "" + arg === arg;
  },
  max: function(arr) {
    if(arr) {
      var max = arr[0];
      for(let arrmem of arr) {
        max = arrmem>max?arrmem:max;
      }
    }
    return max;
  },
  min: function(arr) {
    if(arr) {
      var min = arr[0];
      for(let arrmem of arr) {
        min = arrmem<min?arrmem:min;
      }
    }
    return min;
  },
  isFinite: function(val) {
    return +val === val && val - 1 != val;
  },
  isFunction: function(val) {
    return typeof(val) == "function";
  },
  isNaN: function a(val) {
    if(val != undefined && val != null) {
      return val.toString() === "NaN";
    }
    return false;
  },
  isNil: function(val) {
    return val === undefined || val === null;
  },
  isNull: function(val) {
    return val === null;
  },
  isObject: function a(val) {
    var valType =  Object.prototype.toString.call(val);
    return valType.includes("object") && val != null;
  },
  isUndefined: function(val) {
    return val === undefined;
  },
  toArray: function(val) {
    if(this.isString(val)) {
      return val.split("");
    }
    if(this.isObject(val)) {
      var ans = [];
      for(let key in val) {
        ans.push(val[key]);
      }
      return ans;
    }
    return [];
  },
  ceil: function(num, pre = 0) {
    function myceil(val) {
      if(val % 1 == 0) {//整数
        return val;
      } else {
         return val - (val % 1) + 1;
      }
    }
    var ans =  myceil(num / Math.pow(10, -pre)) * Math.pow(10, -pre);
    return ans;
  },
  round: function(num, pre = 0) {
    function myceil(val) {
      var left = val % 1;
      if(left == 0) {//整数
        return val;
      } else if(left >= 0.5) {
        return val - (val % 1) + 1;
      } else {
        return val - (val % 1);
      }
    }
    var ans =  myceil(num * Math.pow(10, pre)) / Math.pow(10, pre);
    return ans;
  },
  forIn: function(obj, func) {
    for(let key in obj) {
      func(obj[key], key, obj);
    }
    return obj;
  },
  forInRight: function(obj, func) {
    var keyArr = [];
    for(let key in obj) {
      keyArr.push(key);
    }
    for(let i = keyArr.length - 1; i >= 0; i--) {
      func(obj[keyArr[i]], keyArr[i], obj);
    }
    return obj;
  },
  forOwn: function(obj, func) {
    var keyArr = Object.keys(obj);
    for(let i = 0; i <= keyArr.length - 1; i++) {
      func(obj[keyArr[i]], keyArr[i], obj);
    }
    return obj;
  },
  forOwnRight: function(obj, func) {
    var keyArr = Object.keys(obj);
    for(let i = keyArr.length - 1; i >= 0; i--) {
      func(obj[keyArr[i]], keyArr[i], obj);
    }
    return obj;
  },
  functions: function(obj) {
    var ans = [];
    var keyArr = Object.keys(obj);
    for(let i = 0; i <= keyArr.length - 1; i++) {
      if(this.isFunction(obj[keyArr[i]])) {
        ans.push(keyArr[i]);
      }
    }
    return ans;
  },
  // get: function(obj, path, defaultValue) {
  //   if(defaultValue) {
  //     return defaultValue;
  //   }
  // },
  invert: function(obj) {
    var ans = {};
    for(let key in obj) {
      ans[obj[key]] = key;
    }
    return ans;
  },
  invertBy: function(obj, func) {
    var ans = {};
    for(let key in obj) {
      var val = obj[key];
      if(func) {
        if(!ans[func(val)]) {
          ans[func(val)] = [key];
        } else {
          ans[func(val)].push(key);
        }
      } else {
        if(!ans[val]) {
          ans[val] = [key];
        } else {
          ans[val].push(key);
        }
      }
    }
    return ans;
  },
  pick: function(obj, paths) {
    var ans = {};
    if(this.isString(paths)) {
      ans[paths] = obj[paths];
    } else {
      for(let path of paths) {
        ans[path] = obj[path];
      }
    }
    return ans;
  },
  omit: function(obj, paths) {
    var ans = {};
    if(this.isString(paths)) {
      for(let key in obj) {
        if(key != paths) {
          ans[key] = obj[key];
        }
      }
    } else {
      for(let key in obj) {
        if(paths.indexOf(key) == -1) {
          ans[key] = obj[key];
        }
      }
    }
    return ans;
  },
  toPairs: function(obj) {
    var ans = [];
    var keyArr = Object.keys(obj);
    for(let key of keyArr) {
      ans.push([key, obj[key]]);
    }
    return ans;
  },
  values: function(obj) {
    if(this.isString(obj)) {
      return obj.split("");
    } else {
      return Object.values(obj);
    }
  },
  escape: function(str) {
    return str.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("'", "&apos;");
  },
  pad: function(str = "", len = 0, chars = " ") {
    var all = Math.ceil((len - str.length) / chars.length);
    var left = Math.floor(all / 2);
    var right = all - left;
    for(let i = 0; i < left; i++) {
      str = chars + str;
    }
    for(let i = 0; i < right; i++) {
      str = str + chars;
    }
    str = str.slice(0, len);
    return str;
  },
  padEnd: function(str = "", len = 0, chars = " ") {
    var all = Math.ceil((len - str.length) / chars.length);
    for(let i = 0; i < all; i++) {
      str = str + chars;
    }
    str = str.slice(0,len);
    return str;
  },
  padStart: function(str = "", len = 0, chars = " ") {
    var newstr = "";
    var all = Math.ceil((len - str.length) / chars.length);
    for(let i = 0; i < all; i++) {
      newstr = chars + newstr;
    }
    newstr = newstr.slice(0, len - str.length);
    return newstr + str;
  },
  repeat: function(str = "", n = 1) {
    var ans = "";
    for(let i = 0; i < n; i++) {
      ans += str;
    }
    return ans;
  },
  unescape: function(str = "") {
    return str.replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">").replace("&apos;", "'");
  },
  range: function(...rest) {
    var start = 0;
    var end;
    var step = 1;
    if(rest.length == 1) {
      end = rest[0];
    } else if(rest.length == 2) {
      start = rest[0];
      end = rest[1];
    } else if(rest.length == 3) {
      start = rest[0];
      end = rest[1];
      step = rest[2];
    }
    if(end < 0 && start == 0) {
      step = -1;
    }
    var ans = [];
    var n = 0;
    for(let i = start; i != end; i += step) {
      ans.push(i);
      if(Math.abs(end - i) >= Math.abs(end - start)) {
        n++;
      }
      if(n == 3) {
        break;
      }
    }
    return ans;
  },
  times: function(n, func) {
    var i = 0;
    var ans = [];
    while(i < n) {
      ans.push(func(i++));
    }
    return ans;
  },
  identity: function(...rest) {
    return rest[0];
  },
  concat: function(arr, ...rest) {
    var ans = [];
    for(let arrmem of arr) {
      ans.push(arrmem);
    }
    for(let restmem of rest) {
      if(Array.isArray(restmem)) {
        for(let i = 0; i < restmem.length; i++) {
          ans.push(restmem[i]);
        }
      } else {
        ans.push(restmem);
      }
    }
    return ans;
  },
  differenceWith: function(arr, ...rest) {
    if(typeof(rest[rest.length - 1]) === "function") {
      var func = rest.pop();
    }

    var tempArr = [];
    for(let restmem of rest) {
      for(let restmemno of restmem) {
        tempArr.push(restmemno);
      }
    }

    var ans = [];
    for(let arrmem of arr) {
      ans.push(arrmem);
    }
    for(let restmem of tempArr) {
      for(let i = 0; i < ans.length; i++) {
        if(func(ans[i], restmem)) {
          ans = ans.slice(0, i).concat(ans.slice(i+1));
        }
      }
    }
    return ans;
  },
  intersectionBy: function(...rest) {
    var hash = {};
    var func = rest.pop();
    var arrs = rest;
    if(func + "" === func) { //str
      for(let arr of arrs) {
        for(let arrmem of arr) {
          if(!hash[arrmem[func]]) {
            hash[arrmem[func]] = 1;
          } else {
            hash[arrmem[func]] ++;
          }
        }
      }

      var ans = [];
      for(let arr1mem of arrs[0]) {
        if(hash[arr1mem[func]] == arrs.length) {
          ans.push(arr1mem);
        }
      }
      return ans;
    } else {
      for(let arr of arrs) {
        for(let arrmem of arr) {
          if(!hash[func(arrmem)]) {
            hash[func(arrmem)] = 1;
          } else {
            hash[func(arrmem)] ++;
          }
        }
      }
      var ans = [];
      for(let arr1mem of arrs[0]) {
        if(hash[func(arr1mem)] == arrs.length) {
          ans.push(arr1mem);
        }
      }
      return ans;
    }
  },
  nth: function(arr, n = 0) {
    if(n >= 0) {
      return arr[n];
    } else {
      return arr[arr.length + n];
    }
  },
  pullAll: function(arr, vals) {
    var ans = [];
    for(let arrmem of arr) {
      if(vals.indexOf(arrmem) == -1) { 
        ans.push(arrmem);
      }
    }
    return ans;
  },
  pullAllBy: function(arr, vals, func) {
    if(func + "" == func) { //str
      var todelete = {};
      for(let val of vals) {
        if(!todelete[val[func]]) {
          todelete[val[func]] = 1;
        }
      }

      var ans = [];
      for(let arrmem of arr) {
        if(!todelete[arrmem[func]]) {
          ans.push(arrmem);
        }
      }
      return ans;
    } else {
      var todelete = {};
      for(let val of vals) {
        if(!todelete[func(val)]) {
          todelete[func(val)] = 1;
        }
      }

      var ans = [];
      for(let arrmem of arr) {
        if(!todelete[func(arrmem)]) {
          ans.push(arrmem);
        }
      }
      return ans;
    }
  },
  sortedIndexBy: function (arr, val, func) {
    if(func + "" === func) {
      for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][func];
      }
      val = val[func];
    } else {
      for(let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
      }
      val = func(val);
    }
    return this.sortedIndex(arr, val);
  },
  sortedLastIndex: function a(arr, val) {
    var start = 0;
    var end = arr.length;
    var mid = Math.floor((start+end)/2);
    while(start < end) {
      if(val >= arr[mid]) {
        start = mid + 1;
      } else {
        end = mid;
      }
      mid = Math.floor((start+end)/2);
    }
    return mid;
  },
  sortedLastIndexBy: function(arr, val, func) {
    if(this.isString(func)) {
      for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][func];
      }
      val = val[func];
    } else {
      for(let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
      }
      val = func(val);
    }
    return this.sortedLastIndex(arr, val);
  },
  union: function(...arrs) {
    var map = new Map();
    for(arr of arrs) {
      for(arrmem of arr) {
        if(!map.has(arrmem)) {
          map.set(arrmem, 1);
        }
      }
    }
    return [... map.keys()];
  },
  unionBy: function(...rest) {
    var func = rest.pop();
    var arrs = rest;
    var map = new Map();
    if(this.isString(func)) {
      for(arr of arrs) {
        for(arrmem of arr) {
          if(!map.has(arrmem[func])) {
            map.set(arrmem[func], arrmem);
          }
        }
      }
    } else {
      for(arr of arrs) {
        for(arrmem of arr) {
          if(!map.has(func(arrmem))) {
            map.set(func(arrmem), arrmem);
          }
        }
      }
    }
    return [...map.values()]; 
  },
  xor: function(...arrs) {
    var narr = [];
    for(arr of arrs) {
      for(arrmem of arr) {
        narr.push(arrmem);
      }
    }

    var map = new Map();
    for(narrmem of narr) {
      if(!map.has(narrmem)) {
        map.set(narrmem, 1);
      } else {
        map.set(narrmem, map.get(narrmem) + 1);
      }
    }

    var ans = [];
    for(key of [...map.keys()]) {
      if(map.get(key) === 1) {
        ans.push(key);
      }
    }
    return ans;
  },
  uniqBy: function(arr, func) {
    var map = new Map();
    if(this.isString(func)) {
      for(arrmem of arr) {
        if(!map.has(arrmem[func])) {
          map.set(arrmem[func], arrmem);
        }
      }
    } else {
      for(arrmem of arr) {
        if(!map.has(func(arrmem))) {
          map.set(func(arrmem), arrmem);
        }
      }
    }
    return [...map.values()];
  },
  isMatch: function(obj, source) {
    for(key in source) {
      if(!source[key].toString().includes("Object")) {
        if(source[key] != obj[key]) {
          return false;
        }
      } else {
        if(!this.isMatch(obj[key], source[key])) {
          return false;
        }
      }
    }
    return true;
  },
  matches: function a(obj) {
    return function(arrmem, idx, arr) {
      // console.log(arrmem)
      var n = 0;
      var len = 0;
      for(key in obj) {
        len++;
        if(arrmem[key] && arrmem[key] !== obj[key]) {
          continue;
        } else {
          n++;
        } 
      }
      return len == n; 
    }
  },
  dropWhile: function(objects, pre) {
    var p = -1;
    var flag  = 1;
    for(let i = 0; i < objects.length; i++) {
      if(flag) {
        switch(typeof(pre)) {
          case "function":
            if(!pre(objects[i])) {
              p = i;
              flag = 0;
            }
            break;
          case "object":
            if(this.isArray(pre)) {//array
              if(objects[i][pre[0]] != pre[1]) {
                p = i;
                flag = 0;
              }
            } else {//obj
              if(!this.matches(pre)(objects[i])) {
                p = i;
                flag = 0;
              }
            }
            break;
          case "string":
            if(!objects[i][pre]) {
              p = i;
              flag = 0;
            }
            break;
        }
      } else {
        break;
      }
    }
    if(p === -1) {
      return [];
    } else {
      return objects.slice(p);
    }
  },
  dropRightWhile: function(arr, pre) {
    return this.dropWhile(arr.reverse(), pre).reverse();
  },
  findIndex: function(objects, pre, fidx = 0) {
    var p = -1;
    var flag = 1;
    for(let i = fidx; i < objects.length; i++) {
      if(flag) {
        switch(typeof(pre)) {
          case "function":
            if(pre(objects[i])) {
              p = i;
              flag = 0;
            }
            break;
          case "object":
            if(this.isArray(pre)) {//array
              if(objects[i][pre[0]] == pre[1]) {
                p = i;
                flag = 0;
              }
            } else {//obj
              if(this.matches(pre)(objects[i])) {
                p = i;
                flag = 0;
              }
            }
            break;
          case "string":
            if(objects[i][pre]) {
              p = i;
              flag = 0;
            }
            break;
        }
      } else {
        break;
      }
    }
    return p;
  },
  findLastIndex: function(objects, pre, fidx = objects.length - 1) {
    var p = -1;
    var flag = 1;
    for(let i = fidx; i >= 0; i--) {
      if(flag) {
        switch(typeof(pre)) {
          case "function":
            if(pre(objects[i])) {
              p = i;
              flag = 0;
            }
            break;
          case "object":
            if(this.isArray(pre)) {//array
              if(objects[i][pre[0]] == pre[1]) {
                p = i;
                flag = 0;
              }
            } else {//obj
              if(this.matches(pre)(objects[i])) {
                p = i;
                flag = 0;
              }
            }
            break;
          case "string":
            if(objects[i][pre]) {
              p = i;
              flag = 0;
            }
            break;
        }
      } else {
        break;
      }
    }
    return p;
  },
  every: function(objects, pre) {
    if(!this.isArray(objects)) {
      objects = [objects];
    }
    var p = 0;
    var flag = 1;
    for(let i = 0; i < objects.length; i++) {
      if(flag) {
        switch(typeof(pre)) {
          case "function":
            if(pre(objects[i])) {
              p ++;
            } else {
              flag = 0;
            }
            break;
          case "object":
            if(this.isArray(pre)) {//array
              if(objects[i][pre[0]] == pre[1]) {
                p ++;

              } else {
                flag = 0;
              }
            } else {//obj
              if(this.matches(pre)(objects[i])) {
                p ++;

              } else {
                flag = 0;
              }
            }
            break;
          case "string":
            if(objects[i][pre]) {
              p ++;
            } else {
              flag = 0;
            }
            break;
        }
      } else {
        break;
      }
    }
    return p == objects.length;
  },
  filter: function(objects, pre) {
    if(!this.isArray(objects)) {
      objects = [objects];
    }

    var ans = [];
    for(let i = 0; i < objects.length; i++) {
      switch(typeof(pre)) {
        case "function":
          if(pre(objects[i])) {
            ans.push(objects[i]);
          }
          break;
        case "object":
          if(this.isArray(pre)) {//array
            if(objects[i][pre[0]] == pre[1]) {
              ans.push(objects[i]);
            }
          } else {//obj
            if(this.matches(pre)(objects[i])) {
              ans.push(objects[i]);
            }
          }
          break;
        case "string":
          if(objects[i][pre]) {
            ans.push(objects[i]);
          }
          break;
      }
    }
    return ans;
  },
  find: function(objects, pre, fidx = 0) {
    if(!this.isArray(objects)) {
      objects = [objects];
    }
    for(let i = fidx; i < objects.length; i++) {
      switch(typeof(pre)) {
        case "function":
          if(pre(objects[i])) {
            return objects[i];
          }
          break;
        case "object":
          if(this.isArray(pre)) {//array
            if(objects[i][pre[0]] == pre[1]) {
              return objects[i];
            }
          } else {//obj
            if(this.matches(pre)(objects[i])) {
              return objects[i];
            }
          }
          break;
        case "string":
          if(objects[i][pre]) {
            return objects[i];
          }
          break;
      }
    }
  },
  flatMap: function(collection, func) {
    if(!this.isArray(collection)) {
      collection = [collection];
    }
    var ans = [];
    var idx = 0;
    for(co of collection) {
      ans = ans.concat(func(co, idx++, collection));
    }
    return ans;
  },
  flatMapDepth: function(collection, func, depth = 1) {
    if(!this.isArray(collection)) {
      collection = [collection];
    }
    var ans = [];
    var midAns, newmidAns;
    for(let i = 0; i < collection.length; i++) {
      midAns = func(collection[i]);
      newmidAns = [];
      for(let j = 0; j < depth; j++) {
        for(midAnsMem of midAns) {
          if(this.isArray(midAnsMem)) {
            for(midAnsMmem of midAnsMem) {
              newmidAns.push(midAnsMmem);
            }
          } else {
            newmidAns.push(midAnsMem);
          }
        }
        midAns = newmidAns;
        newmidAns = [];
      }
      // console.log()
      ans.push(midAns);
    }
    return ans;
  },
  keyBy: function(collection, func) {
    var ans = {};
    if(this.isString(func)) {//str
      for(co of collection) {
        ans[co[func]] = co;
      }
    } else {
      for(co of collection) {
        ans[func(co)] = co;
      }
    }
    return ans;
  },
  partition: function(objects, pre) {
    if(!this.isArray(objects)) {
      objects = [objects];
    }
    var tarr = [], farr = [];
    for(let i = 0; i < objects.length; i++) {
      switch(typeof(pre)) {
        case "function":
          if(pre(objects[i])) {
            tarr.push(objects[i]);
          } else {
            farr.push(objects[i]);
          }
          break;
        case "object":
          if(this.isArray(pre)) {//array
            if(objects[i][pre[0]] == pre[1]) {
              tarr.push(objects[i]);
            } else {
              farr.push(objects[i]);
            }
          } else {//obj
            if(this.matches(pre)(objects[i])) {
              tarr.push(objects[i]);
            } else {
              farr.push(objects[i]);
            }
          }
          break;
        case "string":
          if(objects[i][pre]) {
            tarr.push(objects[i]);
          } else {
            farr.push(objects[i]);
          }
          break;
      }
    }
    return [tarr, farr];
  },
  reduce: function(collection, func, start = 0) {
    var idx = 0;
    var ans = start;
    if(this.isArray(collection)) {
      for(co of collection) {
        ans = func(ans, co, idx++, collection);
      }
    } else {
      for(key in collection) {
        ans = func(ans, collection[key], key, collection);
      }
    }
    return ans;
  },
  reduceRight: function(collection, func, start = 0) {
    var ans = start;
    if(this.isArray(collection)) {
      for(let i = collection.length - 1; i >= 0; i--) {
        ans = func(ans, collection[i], i, collection)
      }
    } else {
      for(key in collection) {
        ans = func(ans, collection[key], key, collection);
      }
    }
    return ans;
  },
  reject: function(objects, pre) {
    if(!this.isArray(objects)) {
      objects = [objects];
    }

    var ans = [];
    for(let i = 0; i < objects.length; i++) {
      switch(typeof(pre)) {
        case "function":
          if(!pre(objects[i])) {
            ans.push(objects[i]);
          }
          break;
        case "object":
          if(this.isArray(pre)) {//array
            if(!objects[i][pre[0]] == pre[1]) {
              ans.push(objects[i]);
            }
          } else {//obj
            if(!this.matches(pre)(objects[i])) {
              ans.push(objects[i]);
            }
          }
          break;
        case "string":
          if(!objects[i][pre]) {
            ans.push(objects[i]);
          }
          break;
      }
    }
    return ans;
  },
  some: function(objects, pre) {
    if(!this.isArray(objects)) {
      objects = [objects];
    }
    var p = 0;
    var flag = 1;
    for(let i = 0; i < objects.length; i++) {
      if(flag) {
        switch(typeof(pre)) {
          case "function":
            if(!pre(objects[i])) {
              p ++;
            } else {
              flag = 0;
            }
            break;
          case "object":
            if(this.isArray(pre)) {//array
              if(!objects[i][pre[0]] == pre[1]) {
                p ++;
              } else {
                flag = 0;
              }
            } else {//obj
              if(!this.matches(pre)(objects[i])) {
                p ++;
              } else {
                flag = 0;
              }
            }
            break;
          case "string":
            if(!objects[i][pre]) {
              p ++;
            } else {
              flag = 0;
            }
            break;
        }
      } else {
        break;
      }
    }
    return !(p == objects.length);
  },
  defer: function(func, ...rest) {
    return setTimeout(function(rest) {
      func(rest);
    }, 0);
  },
  delay: function(func, wait, ...rest) {
    return setTimeout(function(rest) {
      func(rest);
    }, wait);
  },
  isArguments: function(val) {
    return Object.prototype.toString.call(val) === "[object Arguments]";
  },
  isElement: function(val) {
    return Object.prototype.toString.call(val) === "[object Element]";
  },
  isDate: function(val) {
    return Object.prototype.toString.call(val) === "[object Date]";
  },
  isEmpty: function(val) {
    var i = 0;
    for(key in val) {
      i++;
    }
    return i == 0;
  },
  isEqual: function a(val1, val2) {
    // console.log(val1, Object.prototype.toString.call(val1))
    
    var len1 = 0, len2 = 0;
    for(key in val1) {
      len1++;
    }
    for(key in val2) {
      len2++;
    }
    if(len1 != len2) {
      return false;
    }

    if(len1 === 0) {//num
      if(Object.prototype.toString.call(val1).includes("Object")) {//空对象
        return true;
      }
      if(val1.valueOf() !== val2.valueOf()) {
        return false;
      }
    }

    for(key in val1) {
      var type = Object.prototype.toString.call(val1[key]);
      if(type.includes("Object") || type.includes("Array")) {
        if(!this.isEqual(val1[key], val2[key])) {
          return false;
        }
      } else {
        if(val1[key].valueOf() !== val2[key].valueOf()) {
          return false;
        }
      }
      // console.log(val1[key], Object.prototype.toString.call(val1[key]));
    }
    return true;
  },
  isError: function(val) {
    return Object.prototype.toString.call(val)==="[object Error]";
  },
  isRegExp: function(val) {
    return Object.prototype.toString.call(val)==="[object RegExp]";
  },
  maxBy: function(arr, func) {
    if(this.isString(func)) {
      var maxobj = arr[0];
      var max = maxobj[func];
      for(object of arr) {
        if(object[func] > max) {
          maxobj = object;
          max = maxobj[func];
        }
      }
    } else {
      var maxobj = arr[0];
      var max = func(maxobj);
      for(object of arr) {
        if(func(object) > max) {
          maxobj = object;
          max = func(maxobj);
        }
      }
    }
    return maxobj;
  },
  sumBy: function(arr, func) {
    var sum = 0;
    for(obj of arr) {
      if(this.isString(func)) {
        sum += obj[func];
      } else {
        sum += func(obj);
      }
    } 
    return sum;
  },
  findKey: function(objects, pre) {
    for(myKey in objects) {
      // console.log(objects[myKey])
      switch(typeof(pre)) {
        case "function":
          if(pre(objects[myKey])) {
            return myKey;
          }
          break;
        case "object":
          if(this.isArray(pre)) {//array
            if(objects[myKey][pre[0]] == pre[1]) {
              return myKey;
            }
          } else {//obj
            if(this.matches(pre)(objects[myKey])) {
              return myKey;
            }
          }
          break;
        case "string":
          if(objects[myKey][pre]) {
            return myKey;
          }
          break;
      }
    }
  },
  keys: function(obj) {
    var ans = [];
    for(key in obj) {
      if(obj.hasOwnProperty(key)) {
        ans.push(key);
      }
    }
    return ans;
  },
  assignIn: function(obj, ...sources) {
    for(source of sources) {
      for(key in source) {
        obj[key] = source[key];
      }
    }
    return obj;
  },
  defaults: function(obj, ...sources) {
    var ans = {};
    for(source of sources) {
      for(key in source) {
        ans[key] = source[key];
      }
    }
    for(key in obj) {
      ans[key] = obj[key];
    }
    return ans;
  },
  mapKeys: function(obj, func) {
    var ans = {};
    for(key in obj) {
      var funcRes = func(obj[key], key, obj);
      ans[funcRes] = obj[key];
    }
    return ans;
  },
  mapValues: function(obj, func) {
    for(key in obj) {
      if(this.isString(func)) {
        obj[key] = obj[key][func];
      } else {
        obj[key] = func(obj[key], key, obj);
      }
    }
    return obj;
  },
  bindAll: function(obj, strs) {
    if(this.isString(strs)) {
      strs = [strs];
    }
    for(str of strs) {
      document.addEventListener(str, function() {
        obj[str];
      })
    }
    return obj;
  },
  negate: function(func) {
    return function() {
      return !func();
    }
  },
  once: function(func) {
    var n = 1;
    return function() {
      if(n > 0) {
        n--;
        return func();
      }
    }
  },
  spread: function(func, start = 0) {
    return function(...rest) {
      var args = [];
      for(let i = start; i < rest.length; i++) {
        args.push(rest[i]);
      }
      func.apply(null, args);
    }
  },
  curry: function(func, num) {
    return function(...rest) {
      func.apply(rest);
    }
  },
  constant: function(val) {
    return function() {
      return val;
    }
  }
}