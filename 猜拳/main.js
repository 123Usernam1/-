const choices=$(".choice");
const score=$("#score");
const result=$("#result");
const restart=$("#restart");
const modal=$(".modal");
const scoreboard={
	player:0,
	computer:0
};

$(".choices img").click(function(e){
	//显示重新开始按钮
	restart.show();
	const playerchoice=e.target.id;//获取玩家的选择
	//获得电脑的选择
	const computerChoice=getComputerChoice();		
	const winner=getWinner(playerchoice,computerChoice);
	showWinner(winner,computerChoice);
});
//getComputerChoice
function getComputerChoice(){
	const rand=Math.floor(Math.random()*10/4);
	if(rand==0){
		return "rock";
	}else if(rand==1){
		return "paper";
	}else{
		return "scissors";
	}
}
//决定胜负
function getWinner(p,c){
	if(p===c){
		return "draw";
	}else if(p==="rock"){
		if(c==="paper"){
			return "computer";
		}else{
			return "player";
		}
	}else if(p==="paper"){
		if(c==="scissors"){
			return "computer";
		}else{
			return "player";
		}
	}else if(p==="scissors"){
		if(c==="rock"){
			return "computer";
		}else{
			return "player";
		}
	}
}
//showWinner
function showWinner(winner,computerChoice){
	if(winner==="player"){
		scoreboard.player++;
		result.html(`
		<h1 class="text-win">恭喜你！你赢啦！</h1>
		<p>电脑的选择为</p>
		<img src="images/1-${computerChoice}.png"  id="${computerChoice}">
		 `);
		
	}else if(winner=="computer"){
		scoreboard.computer++;
		result.html(`
		<h1 class="text-lose">笨啊!你输啦!</h1>
		<p>电脑的选择为</p>
		<img src="images/1-${computerChoice}.png"  id="${computerChoice}">
		`);
		
	}else{
		result.html(`
		 <h1>平局</h1>
		<p>电脑的选择为</p>
		<img src="images/1-${computerChoice}.png"  id="${computerChoice}">
		`);		
	}
	//显示分数:
	score.html(`
	<p>玩家：${scoreboard.player}</p>
	<p>电脑：${scoreboard.computer}</p>
	`);
	modal.show();	
}
modal.click(function(){
	modal.hide();
});
restart.click(function(){
	scoreboard.player=0;
	scoreboard.computer=0;
	score.html(`
	 <p>玩家：0</p>
	 <p>电脑：0</p>
	`);
});
//////////////////////////
const loader=$('.page1');
const main=$('.page2');
function init(){
	setTimeout(()=>{
		loader.hide();			
		setTimeout(()=>{
			main.show();
		},50)
	},4000)
}
init();
//slider
//侧边栏动画
   var slide=0;
   $(".btn").click(function(){
	if(slide==0){
	$(".slider").animate({right:"0px"},500);
	slide=1;
	}else{
	$(".slider").animate({right:"-300px"},500);
	slide=0;
	}    
   });