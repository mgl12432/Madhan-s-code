document.writeln('<script type="text/javascript" src="/js/jquery-3.5.1.min.js"></script>');

function sub()
{		
	$(".loaderthing").show();
	$.ajax
	({
		type:"POST",
		url:"",
		data:{'button' : 'addbtn'},
		success : function(result) 
		{
			console.log(result);
			$(".loaderthing").hide();
			$(".loadedthing").show();
			setTimeout(()=>{ $(".loadedthing").hide(); },1534);	
		}
	});
}
function cartbtn()
{
	$(".cartloaderthing").show();
	$.ajax
	({
		type:"POST",
		url:"",
		data:{'button':'showcart'},	
		success : function(result) 
		{
			alert(result[0].category_name);
			$(".cartloaderthing").hide();
			
			
		}
	});
}
