
function msgup_bar(){
$("#C1_L1").html('Save99');
};


$(document).ready(function () {
	msgup_bar();
	



	
	

	var  mainURL = "https://xiaojiang.tk/"
	var  startChapter = ["开篇",       "集合","逻辑","不等式","线性规划","复数","初中"];
	var  mathFunction = ["函数",       "指数对数", "初等函数", "综合函数", "分类讨论"];
	var  trigonometric = ["三角函数",   "单位圆", "和差倍角", "图像性质", "解三角"]
	var  vector = ["向量",             "平面向量", "空间向量"]
	var  solidGeo = ["立体几何",        "几何体", "线面关系", "空间角", "空间向量法"]
	var  analyticGeo = ["解析几何",     "直线与圆", "圆锥曲线", "解析大题"]
	var  derivative = ["导数",         "切线斜率", "求导运算", "求极值", "构造原函数"]
	var  sequence = ["数列",           "等差等比", "通项与前n项和", "数学归纳法"]
	var  probability = ["概率统计",     "统计", "排列组合","二项式","随机事件与随机变量"]
	var  allChapter = [startChapter, mathFunction, trigonometric, vector, solidGeo, 
		analyticGeo, derivative, sequence, probability];
		
		
		
		

	// 很不错, 就这样把, 可以少些很多代码
	$(".section").click(function () {
		console.log($(this).html());
		
		

		for (let j = 0; j < allChapter.length; j++) {
			const element = allChapter[j];
			for (var i = 1; i < element.length ; i++) {
				if ($(this).html() == element[i]) {
					console.log(i);
					let string = mainURL+"知识点/"+element[0]+i+element[i]+".html"
					console.log(string);
					window.location = string
				}
			}
		}
		
		
		
	});

	$(".sectionExam").click(function () {
		console.log($(this).html());

		for (let j = 0; j < allChapter.length; j++) {
			const element = allChapter[j];
			for (var i = 1; i < element.length ; i++) {
				if ($(this).html() == element[i]) {
					console.log(i);
					let string = mainURL+"高考真题/"+element[0]+i+element[i]+"/"+element[0]+i+element[i]+".html"
					console.log(string);
					window.location = string
				}
			}
		}
		
	});

	$(".sectionQA").click(function () {
		console.log($(this).html());

		for (let j = 0; j < allChapter.length; j++) {
			const element = allChapter[j];
			for (var i = 1; i < element.length ; i++) {
				if ($(this).html() == element[i]) {
					console.log(i);
					let string = mainURL+"例题/"+element[0]+i+element[i]+"/"+element[0]+i+element[i]+".html"
					console.log(string);
					window.location = string
				}
			}
		}
		
	});

	var animation = bodymovin.loadAnimation({
		container: document.getElementById("bm"),
		renderer:"svg",
		loop:true,
		autoplay:true,
		path:"datas/bookself.json"
		// path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
	});


});
