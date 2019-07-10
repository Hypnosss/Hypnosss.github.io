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
		// console.log(num)
		return arr.slice((num||num==0)?num:1);
	},
	dropRight: function a(arr, num) {
		return arr.slice(0,(num||num==0)?arr.length-num:arr.length-1);
	},
	fill: function a(arr, value, start, end) {
		start = start || 0;
		end = end || arr.length;
		for(let i = start; i < end; i++) {
			arr[i] = value;
		}
		return arr;
	}
}