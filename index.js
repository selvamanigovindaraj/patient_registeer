
	function clickPatientFunction(){
		$(document).ready(function(){
			$("#patientForm").validate({
				rules:{
					name:{
						required:true,
						minlength:3
					},
					age:{
						required:true,
						number:true
					},
					adhar:{
						required:true,
						number:true,
						minlength:12
					},
					address:{
						required:true,
						minlength:15
					}
				},
				messages:{
					name:{
						required:"This is neccessary",
						minlength:"Atleast 3 characters"
					},
					age:{
						required:"This is neccessary",
						number:"This must be in Number"
					},
					adhar:{
						required:"This is neccessary",
						number:"This must be in Number",
						minlength:"Atleast 12 characters"
					},
					address:{
						required:"This is neccessary",
						minlength:"Atleast 15 characters"
					}
				},
					success:function(){
						var patient={
							name:$("#name").val(),
							age:$("#age").val(),
							gender:$(".form-check-input:checked").val(),
							adhar:$("#adhar").val(),
							address:$("#address").val()
						}
						$.post("http://59e0ace73b0a4d001272d0f1.mockapi.io/patients",patient,function(){
							$("#name").val(""),
							$("#age").val(""),
							$(".form-check-input:checked").prop('checked', false),
							$("#adhar").val(""),
							$("#address").val("")
							
						})
					
					}
				
			});
		});
		
	};
