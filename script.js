const quizData = [
	{
		question: `  هنگاميكه در يك پروژه با افراد ديگر مشغول مي شويد `,

		a_1: 'می توانم در مورد پيگيري و سازماندهي كارهايي كه مي بايسـت انجـام شـوند، قابـل اعتماد باشم',

		a_2: ' از قلم افتادگي ها و خطاهايي كه توسط افراد ديگر ملاحظـه نگرديـده را جمـع آوري مي نمايم',
		a_3: 'من هنگاميكه جلسات از مسير و هدف اصلي شان فاصله مـي گيرنـد، شـديداً عكـس العمل نشان مي دهم',
		a_4: 'اگر كاري را بپذيرم به نتيجه رساندن آن بيش از هر موضوعي برايم اهميت دارد',
		a_5: 'من بي طرفانه نظريات ديگران را تجزيه و تحليل مي كنم، و نقاط ضعف و قوتشـان را درمي يابم',
		a_6: 'من مشتاق به پيدا كردن آخرين نظريه ها و پيشرفت ها هستم',
		a_7: 'من استعداد سازماندهي افراد را دارم',
		a_8: 'من همیشه آمادگی پشتیبانی و حمایت از نظرات و پیشنهادات خوب و مناسب که کمک به حل مجدد مساله میکند ، را دارم'
	},
	{
		question: ' در جستجوي رضايت و خشنودي در بين كارم',
		a_1: ' -من دوست دارم كه تأثير قوي و فوق العاده اي بر روي تصميمات داشته باشم',
		a_2: '    من اين توانايي را دارم كه كارهايي كه نياز به توجه و رسيدگي و تمركز بـالايي دارند را انجام دهم',

		a_3: ' من علاقه مند به كمك به همكارانم در مشكلاتشان مي باشم',
		a_4: 'من به تفاوتهاي موجود بين گزينه هاي مختلف اهميت زيادي مي دهم ',
		a_5: 'من از مطالعه و ارزيابي نظرات و تكنيك هاي گوناگون لذت مي برم ',
		a_6: 'من به داشتن رويكردي خلاق در حل مسئله، گرايش دارم',
		a_7: ' من بيشتر مجذوب كارهاي عملي و قابل اجرا مي باشم تا انديشه هاي جديد و نو',
		a_8: ' من از تطبيق نقطه نظرات گوناگون و متفاوت لذت مي برم'
	},
	{
		question: 'هنگاميكه تيم سعي در حل يك مسئله پيچيده خاص را دارد',
		a_1: ' من قابليت استفاده مفيد از توانايي ها و استعدادهاي ديگران را دارم و مي توانم آنها را هماهنگ کنم',
		a_2: 'من به دنبال نظراتي هستم كه كاربرد بيشتري را نسبت به يك عمل سريع دارند ',
		a_3: 'من آمادگي كمك در هر زماني كه بتوانم را دارم ',
		a_4: ' من تحت هر شرايطي از يك رويكرد سيستماتيك يكنواخت استفاده مي كنم',
		a_5: 'من تمايل به ارزيابي كامل پيشنهادات قبل از انتخاب دارم ',
		a_6: 'من براي يك مسئله طولاني دنباله دار، يك رويكرد جديد را ايجاد مي كنم',
		a_7: 'در صورت لزوم، من مي توانم نظراتم را به طور موثر و قوي به ديگران بشناسانم ',
		a_8: ' -من بر جاهايي كه امكان بروز مشكل از آنها مي رود، كاوش و پيگيري مي كنم'
	},
	{
		question: 'در انجام كار روزانه',
		a_1: ' -من دوست دارم كه هيچ نقطه ابهامي در كار و هدفم نباشد',
		a_2: ' من تمايل به تأكيد نقطه نظراتم در جلسات دارم',
		a_3:
			'  من مي توانم با افراد زيادي كاركنم به شرطي كه آنها كـار مـورد نظـر را داراي ارزش بدانند ، تا در انجام کار همکاری کنند',
		a_4: ' من از اينكه دائماٌ مشغول باشم، رضايتمند و خشنود مي باشم',
		a_5: ' من معمولاٌ قادرم كه براي تكذيب موضوعات نادرست، استدلالي بيابم',
		a_6: ' من مايلم طرحهايي را كه از نظر ديگران بي ربط و غير مربوطند، كشف كنم',
		a_7: ' من به پيگيري نظرات جالب و آشنايي با دوستان جديد علاقه زيادي دارم.',
		a_8: ' من علاقه كمي به شناخت بهتر افراد دارم'
	},
	{
		question: 'اگر بطور ناگهاني يك كار مشكل با زمان محدود و افراد نا آشنا به من داده شود',
		a_1: ' من در رسيدن به توافق با ديگران، مهارت دارم',
		a_2: ' من تلاش مي كنم كه ساختاري مؤثر را شكل دهم',
		a_3: ' من مي توانم با افرادي كه تغييرات زيادي در خصوصيات و نظرياتشان دارند، كار كنم',
		a_4: ' من مي توانم حس اضطراري و بحراني بودن شرايط را، در افراد ايجاد نمايم',
		a_5: ' احساساتم بندرت بر قضاوت و داوري ام اثر مي گذارد',
		a_6:
			' مـن احسـاس مـي كـنم اگـر بتـوانيم بـه نظراتـي يكسـان در گـروه برسـيم، گـاهي ارزشمندست که برخی از برنامه های موقتی را متحمل شویم',
		a_7: '  مــن غالبــاٌ فــردي را كــه داراي دانــش تخصصــي مناســب و خــوبي اســت را میشناسم(درصورت لزوم)',
		a_8: '   من غالباٌ در يك كار گروهي، بدون ابتكار و خلاقيت عمل مي كنم'
	},
	{
		question: 'هنگاميكه بطور ناگاه از شما، رسيدگي به يك پروژه جديد خواسته مي شود',
		a_1: ' من از گرفتن مقام رياست خوشحال مي شوم اگر اين عمل لازم باشد',
		a_2: ' شروع به جستجوي نظرات و راه حل هاي ممكن مي نمايم',
		a_3: ' من به مسئله با يك شيوه تحليلي دقيق نزديك مي شوم',
		a_4: ' علاقمند به اتمام پروژه فعلي هستم، پيش از آنكه بعدي را شروع نمايم',
		a_5: ' من به همكاران و ابتكارهاي آنان پاسخ مثبت مي دهم',
		a_6: ' من اكثر مواقع توانايي بكارگيري نگاهي مستقل و ابتكاري را، در موقعيت هاي مختلف دارم',
		a_7: ' من ادعا مي كنم كه اين توانايي را دارم كه اگر نياز باشد از ديگران استفاده نمايم',
		a_8: '  من در برابر كارهايي كه اهدافشان به درستي مشخص نگرديده، به سختي تسليم می شوم'
	},
	{
		question: 'نحوه همكاري در پروژه هاي گروهي، عموماً',
		a_1:
			' من فكر مي كنم كه استعداد گروهبندي گامهايي كه نياز به برداشتن دارند را دارا میباشم و می توانم شرح گسترده ای در مورد آنها بدهم',
		a_2: ' شايد قضاوت هاي من زمان بر باشد ولي به هدف نزديك است',
		a_3: ' ارتباطات و تماس هاي افراد مي تواند در شيوه عملكرد و كـار كـردن مـن تأثيرگـذار باشد',
		a_4: ' من دقت خاصي در يافتن نكات ريز به طور صحيح و دقيق دارم',
		a_5: ' من مي توانم دو روي مسئله را ببينم و تصميمي قابل قبـول بـراي تمـام آنهـا اتخـاذ نمایم',
		a_6: ' من نحوه استفاده از نظرات و تكنيك ها، در روابط جديد را مي توانم درك كنم',
		a_7: ' من به كارهاي گروهي اعتقاد بيشتري دارم',
		a_8: ' من پيشرفت مناسبي را با ديگرخواهم داشت و با تمام وجود براي گـروه فعاليـت میکنم'
	}
];
let j0 = 0,
	j1 = 0,
	j2 = 0,
	j3 = 0,
	j4 = 0,
	j5 = 0,
	j6 = 0,
	j7 = 0;

var table;
const emailUser = localStorage.getItem('email');
const userFirstNameLocal = localStorage.getItem('userFirstName');
const userLastNameLocal = localStorage.getItem('userLastName');
let totalGrades = [ ...Array(quizData.length) ];
let currentCunt = 0;
const container = document.querySelector('.container');
const question = document.getElementById('question');
const a1text = document.getElementById('1_text');
const a2text = document.getElementById('2_text');
const a3text = document.getElementById('3_text');
const a4text = document.getElementById('4_text');
const a5text = document.getElementById('5_text');
const a6text = document.getElementById('6_text');
const a7text = document.getElementById('7_text');
const a8text = document.getElementById('8_text');
const sumOfInputs = document.getElementById('sumOfInputs');
const btn = document.getElementById('btn');
const headerforinputs = document.querySelectorAll('.headerforinput');
const inputs = document.querySelectorAll('.inputRange');

inputs.forEach((x, i) => {
	x.addEventListener('input', () => {
		headerforinputs[i].innerText = x.value;
		makeSum();
	});
});
function makeSum(){
	let cunt = 0;
	inputs.forEach((x, i) => {
		cunt += Number(x.value);
	});
	sumOfInputs.innerText = cunt;
	if (cunt != 10) {
		btn.disabled = true;
	} else {
		btn.disabled = false;
	}
}

loadQuiz();

function loadQuiz(){
	const currentData = quizData[currentCunt];
	question.innerText = currentData.question;
	a1text.innerText = currentData.a_1;
	a2text.innerText = currentData.a_2;
	a3text.innerText = currentData.a_3;
	a4text.innerText = currentData.a_4;
	a5text.innerText = currentData.a_5;
	a6text.innerText = currentData.a_6;
	a7text.innerText = currentData.a_7;
	a8text.innerText = currentData.a_8;
}

btn.addEventListener('click', () => {
	if (currentCunt < quizData.length) {
		totalGrades[currentCunt] = new Object();
		inputs.forEach((x, i) => {
			totalGrades[currentCunt][`a${i}`] = x.value;
		});
		currentCunt++;

		if (currentCunt < quizData.length) {
			loadQuiz();
		}

		inputs.forEach((x, i) => {
			x.value = 0;
			headerforinputs[i].innerText = x.value;
		});

		makeSum();
	}
	if (currentCunt === quizData.length) {
		//to do : show resutls

		totalGrades.forEach((x, i) => {
			j0 += Number(x.a0);
			j1 += Number(x.a1);
			j2 += Number(x.a2);
			j3 += Number(x.a3);
			j4 += Number(x.a4);
			j5 += Number(x.a5);
			j6 += Number(x.a6);
			j7 += Number(x.a7);
		});
		table = document.createElement('table');

		var rowHead1 = document.createTextNode('گروه یک');
		var rowHead2 = document.createTextNode('گروه دو');
		var rowHead3 = document.createTextNode('گروه سه');
		var rowHead4 = document.createTextNode('گروه چهار');
		var rowHead5 = document.createTextNode('گروه پنج');
		var rowHead6 = document.createTextNode('گروه شش');
		var rowHead7 = document.createTextNode('گروه هفت');
		var rowHead8 = document.createTextNode('گروه هشت');
		var trrowH = document.createElement('tr');
		var tdrowH1 = document.createElement('td');
		var tdrowH2 = document.createElement('td');
		var tdrowH3 = document.createElement('td');
		var tdrowH4 = document.createElement('td');
		var tdrowH5 = document.createElement('td');
		var tdrowH6 = document.createElement('td');
		var tdrowH7 = document.createElement('td');
		var tdrowH8 = document.createElement('td');
		tdrowH1.appendChild(rowHead1);
		tdrowH2.appendChild(rowHead2);
		tdrowH3.appendChild(rowHead3);
		tdrowH4.appendChild(rowHead4);
		tdrowH5.appendChild(rowHead5);
		tdrowH6.appendChild(rowHead6);
		tdrowH7.appendChild(rowHead7);
		tdrowH8.appendChild(rowHead8);

		var thRH = document.createElement('th');

		var thRHH = document.createTextNode(`جدول پاسخ`);

		thRH.appendChild(thRHH);
		trrowH.appendChild(thRH);
		trrowH.appendChild(tdrowH1);
		trrowH.appendChild(tdrowH2);
		trrowH.appendChild(tdrowH3);
		trrowH.appendChild(tdrowH4);
		trrowH.appendChild(tdrowH5);
		trrowH.appendChild(tdrowH6);
		trrowH.appendChild(tdrowH7);
		trrowH.appendChild(tdrowH8);

		table.appendChild(trrowH);

		totalGrades.forEach((x, i, a) => {
			var th1 = document.createElement('th');
			let bakhshha = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
			var header1 = document.createTextNode(`${bakhshha[i]} بخش`);

			th1.appendChild(header1);

			var tr = document.createElement('tr');
			var td1 = document.createElement('td');
			var td2 = document.createElement('td');
			var td3 = document.createElement('td');
			var td4 = document.createElement('td');
			var td5 = document.createElement('td');
			var td6 = document.createElement('td');
			var td7 = document.createElement('td');
			var td8 = document.createElement('td');

			var text1 = document.createTextNode(x.a0);
			var text2 = document.createTextNode(x.a1);
			var text3 = document.createTextNode(x.a2);
			var text4 = document.createTextNode(x.a3);
			var text5 = document.createTextNode(x.a4);
			var text6 = document.createTextNode(x.a5);
			var text7 = document.createTextNode(x.a6);
			var text8 = document.createTextNode(x.a7);

			td1.appendChild(text1);
			td2.appendChild(text2);
			td3.appendChild(text3);
			td4.appendChild(text4);
			td5.appendChild(text5);
			td6.appendChild(text6);
			td7.appendChild(text7);
			td8.appendChild(text8);

			tr.appendChild(th1);

			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			tr.appendChild(td5);
			tr.appendChild(td6);
			tr.appendChild(td7);
			tr.appendChild(td8);
			table.appendChild(tr);
		});
		var text1 = document.createTextNode(j0);
		var text2 = document.createTextNode(j1);
		var text3 = document.createTextNode(j2);
		var text4 = document.createTextNode(j3);
		var text5 = document.createTextNode(j4);
		var text6 = document.createTextNode(j5);
		var text7 = document.createTextNode(j6);
		var text8 = document.createTextNode(j7);
		var trj = document.createElement('tr');
		var tdj1 = document.createElement('td');
		var tdj2 = document.createElement('td');
		var tdj3 = document.createElement('td');
		var tdj4 = document.createElement('td');
		var tdj5 = document.createElement('td');
		var tdj6 = document.createElement('td');
		var tdj7 = document.createElement('td');
		var tdj8 = document.createElement('td');
		tdj1.appendChild(text1);
		tdj2.appendChild(text2);
		tdj3.appendChild(text3);
		tdj4.appendChild(text4);
		tdj5.appendChild(text5);
		tdj6.appendChild(text6);
		tdj7.appendChild(text7);
		tdj8.appendChild(text8);

		var thj = document.createElement('th');

		var thjj = document.createTextNode(`مجموع`);

		thj.appendChild(thjj);
		trj.appendChild(thj);
		trj.appendChild(tdj1);
		trj.appendChild(tdj2);
		trj.appendChild(tdj3);
		trj.appendChild(tdj4);
		trj.appendChild(tdj5);
		trj.appendChild(tdj6);
		trj.appendChild(tdj7);
		trj.appendChild(tdj8);

		table.appendChild(trj);
		console.log(table);

		container.style.height = '800px';
		container.style.width = '600px';

		container.innerHTML = ` <h2> ، شما آزمون را تکمیل کردید <br> لطفا پاسخنامه را برای مسئول خود بفرستید </h2><br> <p>  نام و نام خانوادگی : <strong> ${userFirstNameLocal} ${userLastNameLocal} </strong>  <br> <strong> ${emailUser} </strong>  : ادرس ایمیل شما<br> </p><br><button method="post" onclick="sendEmails()" id="btn" >ارسال نتایج </button> `;
		document.querySelector('.container').appendChild(table);
	}
});

function sendEmails(){
	html2canvas(document.querySelector('table')).then(function(canvas){
		var anchorTag = document.createElement('a');
		document.body.appendChild(anchorTag);

		anchorTag.download = 'result.jpg';
		anchorTag.href = canvas.toDataURL();

		anchorTag.target = '_blank';
		anchorTag.click();
	});
	container.style.height = '200px';
	container.style.padding = '60px 20px';
	container.innerHTML = ' <h2>  لطفا تا ارسال ایمیل صبور باشید  </h2>';
	Email.send({
		Host: 'smtp.gmail.com',
		Username: 'hopestartsagain@gmail.com',
		Password: 'e1561373',
		To: 'hopestartsagain@gmail.com',
		From: `hopestartsagain@gmail.com`,

		Subject: `${userFirstNameLocal} ${userLastNameLocal}`,
		Body: `  <strong> ${userFirstNameLocal} ${userLastNameLocal} </strong>  : نام و نام خانوادگی
        <br>
        ${emailUser}  : ایمیل کاربر
                <br>
            ${table.innerHTML}
         `
	}).then((message) => {
		window.open('index3.html', '_self');
		alert(`نتایج با موفقیت ارسال شد`);
	});
}
