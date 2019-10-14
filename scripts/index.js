//全局变量, 以后修改全局变量即可	
	var  mainURL = "https://xiaojiang.tk/"
	var  startChapter = ["基础",       "集合","逻辑","不等式"];
	var  mathFunction = ["函数",       "函数简介", "函数的类型", "函数的性质", "画函数图像"];
	var  trigonometric = ["三角函数",   "三角函数简介", "三角恒等式", "三角函数图像性质", "解三角形"]
	var  vector = ["向量, 复数",         "向量", "复数"]
	var  solidGeo = ["立体几何",        "几何体", "线面关系", "空5间角", "空间向量法"]
	var  analyticGeo = ["解析几何",     "直线与圆", "圆锥曲线", "解6析大题"]
	var  derivative = ["导数",         "切线斜率", "求导运算", "求极7值", "构造原函数"]
	var  sequence = ["数列",           "等差等比", "通项与前n项和", "数学88归纳法"]
	var  probability = ["概率统计",     "统计", "排列组合","二项式","随机99事件与随机变量"]
	var  allChapter = [startChapter, mathFunction, trigonometric, vector, solidGeo, 
		analyticGeo, derivative, sequence, probability];
	
	
	//loading name from global var to button
	function lessonNameFromGlobal(){
		
		for (var i = 0; i < allChapter.length ; i++) {

			const reali = i+1;  //2
			const chapterNumber = "C"+reali; //C2
			const chapter = allChapter[i]; //mathFunction
		
			$('#'+chapterNumber).html(chapter[0]);
			
			for (var l=1; l<chapter.length; l++){
				
				const lessonNumber = "L"+l;
				const clNumber = chapterNumber+"_"+lessonNumber
				const lesson = chapter[l]
				
				$('#'+clNumber).html(lesson);
			}
			
		}

	};



$(document).ready(function () {
	
	//lesson的标题来自global
	lessonNameFromGlobal();
	

	// 点击lesson的按钮, 跳转到响应的知识点.
	//很不错, 就这样把, 可以少些很多代码
	$(".section").click(function () {
		console.log($(this).html());
		
		

		for (let j = 0; j < allChapter.length; j++) {
			
			const realj = j+1;  //2
			const chapterNumber = "C"+realj; //C2
			
			const chapter = allChapter[j];
			
			for (var i = 1; i < chapter.length ; i++) {
				if ($(this).html() == chapter[i]) {
					console.log(i);
					
					const lessonNumber = "L"+i;
					
					//“知识点/“后面的就是 Mweb的标题, 如: C1基础_L1集合
					let string = mainURL+"LessonsOfMath/" 
					
					+ chapterNumber + chapter[0] + "_" + lessonNumber + chapter[i]
					
					+".html"
					
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
					let string = mainURL+"高考真题/"+element[0]+i+element[i]+".html"
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
					let string = mainURL+"例题/"+element[0]+i+element[i]+".html"
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
