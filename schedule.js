$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"http://59e0ace73b0a4d001272d0f1.mockapi.io/patients",
		dataType:"json",
		success:function(result){
			var txt=""
			for(i=0;i<result.length;i++){
				txt+="<tr><td>"+result[i].id+"</td><td>"+result[i].name+"</td><td>"+result[i].age+"</td><td>"+result[i].gender+"</td><td>"+result[i].adhar+"</td><td>"+result[i].address+"</td></tr>"
			}
			$("#tbody").html(txt);
		}
	})
})