// jQuery Validate password
// function validate_Pwd(){
// 	if ($("#signuppwd").val() === $("#signupconfirm_pwd").val()) {
// 		alert("Successful!\nAccount Created");
// 		return true;
// 	}else{
// 		alert("Passwords aren't match.\nPlease re-enter your password.");
// 		return false;
// }
// };



// $(document).ready(function() {
// 	$("#Create_Account").on("submit", function(evt) {
// 		// prevent default behavior of form submission event
// 		evt.preventDefault();
// 		// i think this is the key for this to work
		
// 		if (validate_Pwd()) {
// 			location.href = 'registertq.html';
// 		}
// 		return false;
// 	});
// });

// JS Validate Passwords
function validate_Pwd(){
	password = document.querySelector("#signuppwd").value;
	confirm_password = document.querySelector("#signupconfirm_pwd").value;
	if (password === confirm_password) {
		alert("Successful!\nAccount Created");
		return true;
	}else{
		alert("Passwords aren't match.\nPlease re-enter your password.");
		return false;
}
};

 window.addEventListener("load",function(){
 	console.log("load");
 	document.querySelector("#Create_Account").addEventListener("submit", function(e){
 		e.preventDefault();
 		if(validate_Pwd()){
 			location.href = 'registertq.html';
 		}
 		return false;
 	});
});