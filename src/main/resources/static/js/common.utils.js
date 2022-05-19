/*
형식에 맞게 작성 한 Form Tag valdation
ex>
<div class="form-group row">
    <label for="memo" required class="col-sm-2 col-form-label">메모</label>
    <div class="col-sm-10"><textarea id="memo" name="memo" class="form-control"></textarea></div>
</div>
alet("메모을(를) 입력하여 주세요.");
required : 항목 필수
warning : lable의 for 와 input의 id가 일치하여야 alert이 정상 처리 된다.
*/
function fromValidateCheck(formObj){
	var f  = $(formObj);
	var result = true;
	var objects = f.find("input, select, textarea");
	$.each(objects , function(index, object){
		if($(object).prop("required")){
			if($(object).val() == "") {
				var label = jQuery("label[for='"+$(object).attr("id")+"']").text();
				result = false;
				$(object).focus();
				alert(label + "을(를) 입력하여 주세요.");
				return false;
			} else if($(object).attr("minlength") && $(object).attr("minlength") > $(object).val().length){
                var label = jQuery("label[for='"+$(object).attr("id")+"']").text();
				result = false;
				$(object).focus();
                alert(label + "을(를) " +$(object).attr("minlength")+ "자 이상 입력하여 주세요.");
                return false;
            }
		}
	});
	return result;
}

/*
Form 태그의 Serialize 처리 된 Json Object 리턴
*/
jQuery.fn.serializeObject = function() {
    var obj = null;
    try {
        if (this[0].tagName && this[0].tagName.toUpperCase() == "FORM") {
            var arr = this.serializeArray();
            if (arr) {
                obj = {};
                jQuery.each(arr, function() {
                    obj[this.name] = this.value;
                });
            }//if ( arr ) {
        }
    } catch (e) {
        alert(e.message);
    } finally {
    }
 
    return obj;
};