function change (obj,num) 
{
	var n = num;
	//alert("查看n： " + n);
	var timer = setInterval(function(){
		if( num > 0)
		{
			obj.id = "demo"+num;
			num -= 1;
			//alert("查看obj.id： " + obj.id);
		} else {
			num = n;
		}		
	}, 150);
}
function changeS (obj,num) 
{
	var n = num;
	//alert("查看n： " + n);
	var timer = setInterval(function(){
	if( num > 0)
		{
			obj.id = "demos"+num;
			num -= 1;
			//alert("查看obj.id： " + obj.id);
		} else {
			num = n;
		}		
	}, 150);
}
function prizeItem(prize)
{
	switch(prize)
	{
		case SWALLOW: changeClass();
    	break;
    	case PIGEON: changeClass();
    	break;
    	case PEAFOWL: changeClass();
    	break;
    	case EAGLE: changeClass();
    	break;
    	case LION: changeClass();
    	break;
    	case PANDA: changeClass();
    	break;
    	case MONKEY: changeClass();
    	break;
    	case RABBIT: changeClass();
    	break;
    	case GOLD_SHARK: changeClass();
    	break;
    	case BOMB: changeClass();
    	break;
    	case SILVER_SHARK: changeClass();
    	break;
    	default : changeClass(); 
		break; 
	}
}
function changeClass()
{
	var a=document.getElementById("demo3");
 	a.className = 'box1';
}