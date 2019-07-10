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
	}	
}