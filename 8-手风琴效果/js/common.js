function openWindow(url,iWidth,iHeight) {
    var iLeft = (screen.availWidth - iWidth)/2;
    var iTop = (screen.availHeight - iHeight)/2;
    
    window.open(url, "_blank", "toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=no,resizable=no,width=" + iWidth + ",height=" + iHeight + ",top= " + iTop + ",left=" + iLeft + "");

    /*window.location.href = url;*/

}

function openDialog(url, iWidth, iHeigth){
    var sURL = url;
    var vArguments = "";
    var sFeatures = "dialogHeight: " + iHeigth + "px; dialogWidth: " + iWidth + "px; location:no; edge: Raised; center: Yes; help: No; resizable: No; status: No;";
    
    window.showModalDialog(url, vArguments, sFeatures);
}

function PrintForm() {
    alert ("打印系统!");
}

function CheckInput(str, iType) {
    var re;
    switch (iType) {
        case 1:
            re = /[^\d]/g;
            break;
        case 2:
            re = /[^\w+$]/g;
            break;
        /*case 3:
            re = /^(d{2}|d{4})-((0([1-9]{1}))|(1[1|2]))-(([0-2]([1-9]{1}))|(3[0|1]))$/g;
            //    (\d{4}|\d{2})((0([1-9]{1}))|(1([1|2]{1})))((([0-2]{1})([1-9]{1}))|(3([0|1]{1})))$
            break;*/
     }
    
    if(re.test(str))
        return true;
    else
        return false;
}
function movstar(a,time){
    movx=setInterval("mov("+a+")",time)
    }
function movover(){
    clearInterval(movx)
    }
function mov(a){
    scrollx=new_date.document.body.scrollLeft
    scrolly=new_date.document.body.scrollTop
    scrolly=scrolly+a
    new_date.window.scroll(scrollx,scrolly)
    }
function o_down(theobject){
object=theobject
    while(object.filters.alpha.opacity>60){
        object.filters.alpha.opacity+=-10}
        }
function o_up(theobject){
object=theobject
    while(object.filters.alpha.opacity<100){
        object.filters.alpha.opacity+=10}
        }
function wback(){
    if(new_date.history.length==0){window.history.back()}
    else{new_date.history.back()}
    }