function his(){
    const down = document.getElementById('bar');
    down.style.left = '1.8rem'; 
    down.style.transition = '0.5s';
    //document.getElementById('moon').innerHTML = 'Map'
}
function mem(){
    const down = document.getElementById('bar');
    down.style.left = '40.5%';
    down.style.transition = '0.5s';
}
var eq = 0
var n=0 
var keep
var j = 0,min =0,mul = 0,div = 0
var check = -1
var ans = 0
var operate = 0
var hold=[]

document.addEventListener("keypress", function (event) {
    switch (event.key) {
        case "0":
            get_val(0)
            break;
        case "1":
            get_val(1)
            break;
        case "2":
            get_val(2)
            break;
        case "3":
            get_val(3)
            break;
        case "4":
            get_val(4)
            break;
        case "5":
            get_val(5)
            break;
        case "6": 
            get_val(6)
            break;
        case "7":
            get_val(7)
            break;
        case "8":
            get_val(8)
            break;
        case "9":
            get_val(9)
            break;
        case "/":
            divide()
            break;
        case "*":
            multiply()
            break;
        case "+":
            addOp()
            break;
        case "-":
            minusOp()
            break;
        case ".":
            val_()
            break;
        case "Enter":
            equal()
            break;
        case "=":
            equal()
            break;
    
        default:
            break;
    }
})

function get_val(val){
    var num = document.getElementById("mid-p").innerHTML;
    if(operate == 0){
        ans = Number(num + val)
        hold[0] = ans
        check++
    }
    if(num == '0' || eq!=0){
        console.log("moon")
        document.getElementById('mid-p').innerHTML = val
        n = Number(val)
        check++
    }
    else{
        document.getElementById('mid-p').innerHTML = num + val
        n = Number(num + val)
        check++
    }
    arith()
    // while(j==-1 && check!=-1){
    //     keep = ans
    //     ans = ans - n
    //     console.log(keep + " - " +n+" = "+ ans)
    // }
    console.log("eq = "+eq)
    console.log("j = "+j)
    console.log("min = "+min)
    console.log("mul = "+mul)
    console.log("div = "+div)
    console.log("num = "+num)
    console.log("hold["+min+"] [" +j +"] = "+ hold[0])
    console.log("n = "+ n)
    eq = 0;
}
function arith(){
    if(j>=1 && check!=-1){
        hold[j] = hold[j-1] + n
        console.log(hold[j-1] + " + " +n+" = "+ hold[j])
        check=-1
    }
    if(min>=1 && check!=-1){
        hold[min] = hold[min-1] - n
        console.log(hold[min-1] + " - " +n+" = "+ hold[min])
        check=-1
    }
    if(mul>=1 && check!=-1){
        hold[mul] = hold[mul-1] * n
        console.log(hold[mul-1] + " * " +n+" = "+ hold[mul])
        check=-1
    }
    if(div>=1 && check!=-1){
        hold[div] = hold[div-1] / n
        console.log(hold[div-1] + " / " +n+" = "+ hold[div])
        check=-1
    }
}
function val_(){
    var num = document.getElementById("mid-p").innerHTML;
    var count = 0;
    var j;
    for(let i=0;i < num.length ;i++){
        j = i+1;
        if(num.slice(i,j) == '.'){
            count++;
        }
    }
    if(num == '0' || eq!=0){
        console.log(num)
        document.getElementById('mid-p').innerHTML ="0"+ "."
    }
    else if(count == 0){
        document.getElementById('mid-p').innerHTML = num + "."
    }
    eq = 0;
}
function del(){
    var num = document.getElementById("mid-p").innerHTML;
    var len = num.length
    if(len != '0'){
        console.log(num)
        document.getElementById('mid-p').innerHTML = num.slice(0,len-1);
        len--;
        if(len == 0){
            document.getElementById('mid-p').innerHTML = "0";
        }
    }
}
function ce(){
    document.getElementById("mid-p").innerHTML = "0";
}
function sign(){
    var num = document.getElementById("mid-p").innerHTML;
    var take = Number(num)
    if(take > 0){
        document.getElementById('mid-p').innerHTML = "-"+num 
        if(min>0){n = take*-1}
        else if(j>0){n= take*-1}
        else if(mul>0){n= take*-1}
        else if(div>0){n= take*-1}
        else{hold[0] = take *-1}
        //hold[0] = take *-1
    }
    else if(take == 0){
        document.getElementById('mid-p').innerHTML = num 
        if(min>0){n = take}
        else if(j>0){n = take}
        else if(mul>0){n= take}
        else if(div>0){n= take}
        else{hold[0] = take}
        //hold[0] = take
    }
    else{
        document.getElementById('mid-p').innerHTML = num.slice(1,num.length)
        if(min>0){n = take*-1}
        else if(j>0){n= take*-1}
        else if(mul>0){n= take*-1}
        else if(div>0){n= take*-1}
        else{hold[0] = take *-1}
        //hold[0] = take *-1
    }
    check++
    arith()
}
function addOp(){
    if(min>0){
        j = min
        min = 0
    }
    else if(mul>0){
        j = mul
        mul = 0
    }
    else if(div>0){
        j = div
        div = 0
    }
    
    j = j + 1
    console.log("+j = "+j)
    eq++
    operate++
    var top = document.getElementById("up-p").innerHTML
    //var num = document.getElementById("mid-p").innerHTML;
    if(top.length > 0 && hold[j-1]!=0 && on_screen!=hold[j-1]){
        document.getElementById('up-p').innerHTML = top + n + "+"
    }
    else if(hold[j-1] != "0"){
        document.getElementById('up-p').innerHTML = hold[j-1] + "+"
    }
    document.getElementById('mid-p').innerHTML = hold[j-1]
}
function minusOp(){
    if(j>0){
        min = j
        j=0
    }
    else if(mul>0){
        min = mul
        mul=0
    }
    else if(div>0){
        min = div
        div=0
    }
    min = min + 1
    console.log("-min = "+min)
    eq++
    operate++
    var top = document.getElementById("up-p").innerHTML
    //var num = document.getElementById("mid-p").innerHTML;
    if(top.length > 0 && hold[min-1]!=0 && on_screen!=hold[min-1]){
        document.getElementById('up-p').innerHTML = top + n + "-"
    }
    else if(hold[min-1] != "0"){
        document.getElementById('up-p').innerHTML = hold[min-1] + "-"
    }
    document.getElementById('mid-p').innerHTML = hold[min-1]
}
function multiply(){
    if(j>0){
        mul = j
        j=0
    }
    else if(min>0){
        mul = min
        min=0
    }
    else if(div>0){
        mul = div
        div=0
    }
    mul = mul + 1
    console.log("-mul = "+mul)
    eq++
    operate++
    var top = document.getElementById("up-p").innerHTML
    //var num = document.getElementById("mid-p").innerHTML;
    if(top.length > 0 && hold[mul-1]!=0 && on_screen!=hold[mul-1]){
        document.getElementById('up-p').innerHTML = top + n + "*"
    }
    else if(hold[mul-1] != "0"){
        document.getElementById('up-p').innerHTML = hold[mul-1] + "*"
    }
    document.getElementById('mid-p').innerHTML = hold[mul-1]  
}
function divide(){
    if(j>0){
        div = j
        j=0
    }
    else if(min>0){
        div = min
        min=0
    }
    else if(mul>0){
        div = mul
        mul=0
    }
    div = div + 1
    console.log("-div = "+div)
    eq++
    operate++
    var top = document.getElementById("up-p").innerHTML
    //var num = document.getElementById("mid-p").innerHTML;
    if(top.length > 0 && hold[div-1]!=0 && on_screen!=hold[div-1]){
        document.getElementById('up-p').innerHTML = top + n + "/"
    }
    else if(hold[div-1] != "0"){
        document.getElementById('up-p').innerHTML = hold[div-1] + "/"
    }
    document.getElementById('mid-p').innerHTML = hold[div-1]  
}
var on_screen = 'a'
function equal(){
    if(min>0){
        if(on_screen!=hold[min]){
            var top = document.getElementById("up-p").innerHTML
            //var num = document.getElementById("mid-p").innerHTML;
            if(top.length > 0 && hold[min-1]!=0){
                document.getElementById('up-p').innerHTML = top + n
            }
            else if(hold[min-1] != "0"){
                document.getElementById('up-p').innerHTML = hold[min-1] + "-"
            }
            document.getElementById('mid-p').innerHTML = hold[min]
            on_screen = hold[min]
        }
    }
    else if(mul>0){
        if(on_screen!=hold[mul]){
            var top = document.getElementById("up-p").innerHTML
            //var num = document.getElementById("mid-p").innerHTML;
            if(top.length > 0 && hold[mul-1]!=0){
                document.getElementById('up-p').innerHTML = top + n
            }
            else if(hold[mul-1] != "0"){
                document.getElementById('up-p').innerHTML = hold[mul-1] + "*"
            }
            document.getElementById('mid-p').innerHTML = hold[mul]
            on_screen = hold[mul]
        }
    }
    else if(div>0){
        if(on_screen!=hold[div]){
            var top = document.getElementById("up-p").innerHTML
            //var num = document.getElementById("mid-p").innerHTML;
            if(top.length > 0 && hold[div-1]!=0){
                document.getElementById('up-p').innerHTML = top + n
            }
            else if(hold[div-1] != "0"){
                document.getElementById('up-p').innerHTML = hold[div-1] + "/"
            }
            document.getElementById('mid-p').innerHTML = hold[div]
            on_screen = hold[div]
        }
    }
    else if(j>0){
        if(on_screen!=hold[j]){
            var top = document.getElementById("up-p").innerHTML
            //var num = document.getElementById("mid-p").innerHTML;
            if(top.length > 0 && hold[j-1]!=0){
                document.getElementById('up-p').innerHTML = top + n
            }
            else if(hold[j-1] != "0"){
                document.getElementById('up-p').innerHTML = hold[j-1] + "+"
            }
            document.getElementById('mid-p').innerHTML = hold[j]
            on_screen = hold[j]
        }
    }
    console.log('we have = '+on_screen)
    //document.getElementById("mid-p").innerHTML = 0
}
function inverse(){
    var num = document.getElementById("mid-p").innerHTML;
    var take = Number(num)
    if(take == 0){
        document.getElementById('mid-p').innerHTML = "MATH ERROR"
    }
    else{
        document.getElementById('mid-p').innerHTML = (1/take).toFixed(4)
        if(min>0){n = 1/take}
        else if(j>0){n = 1/take}
        else{hold[0] = 1/take}
        //hold[0] = take *-1
    }
    check++
    arith()
    eq++
    operate++
}
function pow_2(){
    var num = document.getElementById("mid-p").innerHTML;
    var take = Number(num)
    document.getElementById('mid-p').innerHTML = String(take*take)
    if(min>0){n = take*take}
    else if(j>0){n = take*take}
    else{hold[0] = take*take}
    //hold[0] = take *-1
    check++
    arith()
    eq++
    operate++
}
function root2(){
    var num = document.querySelector("#mid-p").innerHTML;
    var take = Number(num)
    if(take == 0){
        document.getElementById('mid-p').innerHTML = "MATH ERROR"
    }
    else{
        document.getElementById('mid-p').innerHTML = String((Math.pow(take,0.5)).toFixed(4))
        if(min>0){n = Math.pow(take,0.5)}
        else if(j>0){n = Math.pow(take,0.5)}
        else{hold[0] = Math.pow(take,0.5)}
        //hold[0] = take *-1
    }
    check++
    arith()
    eq++
    operate++
}