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
		var end = arr.length - 1;
		var mid = Math.floor((start+end)/2);
		while(start < end - 1) {
			if(val > arr[mid]) {
				start = mid;
				mid = Math.floor((start+end)/2);
			} else {
				end = mid;
				mid = Math.floor((start+end)/2);
			}
		}
		return mid + 1;
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
		// console.log(arrs[0].length)
		for(let i = 0; i < arrs[0].length; i++) {
			ans[i] = [];
			for(let j = 0; j < arrs.length; j++) {
				// console.log(i, j, arrs[j][i])
				ans[i][j] = arrs[j][i];
			}
		}
		return ans;
	},
	unzip: function a(...arrs) {
		return this.zip(arrs);
	},
	countBy: function a(collection, functionb) {
		var hash = {};
		var flag;
		if(functionb+"" === functionb) {
			flag = 1//str
		} else {
			flag = 0;//fun
		}
		console.log(flag)
		for(let co of collection) {
			if(!flag) {
				if(!hash[functionb(co)]) {
					hash[functionb(co)] = 1
				} else {
					hash[functionb(co)] ++;
				}
			} else {
				// console.log(co.length)
				if(!hash[co[functionb]]) {
					hash[co[functionb]] = 1
				} else {
					hash[co[functionb]] ++;
				}
			}
			
		}
		return hash;
	},
	// flatMap: function a(collection, functionb) {

	// }
}