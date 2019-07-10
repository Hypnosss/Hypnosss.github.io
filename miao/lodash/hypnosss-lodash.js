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
	}
}