const ranges = document.querySelector("#ranges");
const ans = document.querySelector("#ans");
const shadow_ans = document.querySelector("#horizontal_ans");
const vshadow_ans = document.querySelector("#vertical_ans");
const pic = document.querySelector(".pic");
const shadow_range = document.querySelector("#horizontal");
const vshadow_range = document.querySelector("#vertical");
const design = document.querySelector(".design");
const colour = document.querySelector("#colour");
const pic_color = document.querySelector('.pic_color');
const shadow_col = document.getElementById('shadow_col');
const show = document.querySelector("#display");
const generate = document.querySelector(".generate");
const cpy = document.querySelector(".copy");
let box_colour = "black";
ranges.value = 0;
shadow_col.addEventListener("mousemove",()=>
{
    box_colour = shadow_col.value;
    pic.style.boxShadow=box_colour;
    pic.style.boxShadow = htemporary + "px " + vtemporary + "px 5px " + box_colour;
}
)
pic_color.addEventListener("mousemove",()=>
{
    let bg = pic_color.value;
    pic.style.backgroundColor=bg;
})
ranges.addEventListener("mousemove",()=>
{
    let temp = ranges.value;
    ans.innerText=ranges.value + " px";
    pic.style.borderRadius = temp +"px";
})
shadow_range.addEventListener("mousemove",()=>
{
    let vtemporary = vshadow_range.value; 
    let htemporary = shadow_range.value;
    shadow_ans.innerText = htemporary + " px";
    pic.style.boxShadow = htemporary + "px " + vtemporary + "px 5px " + box_colour;
})
vshadow_range.addEventListener("mousemove",()=>
{
    let htemporary = shadow_range.value;
    let vtemporary = vshadow_range.value;
    vshadow_ans.innerText = vtemporary + " px";
    const y = htemporary + "px " + vtemporary + "px 5px "+ box_colour;
    pic.style.boxShadow = htemporary + "px " + vtemporary + "px 5px "+ box_colour;
})
colour.addEventListener(("mousemove"),()=>
{
    pic.style.border = design.value +"5px" +  colour.value;
})
generate.addEventListener("click",()=>
{
    const k  ="border-radius:"+ ranges.value +";" ;
    const l = "background-color:" + pic_color.value+";";
    const z = "box-shadow:" + shadow_range.value +"px "+ vshadow_range.value+"px 5px " +box_colour+";";
    const x ="border:5px "+ design.value + " "  + colour.value;
    show.innerHTML =  k +"<br>"+ l + "<br>"+ z + "<br>" + x +";";
})
const final = show.value;
cpy.addEventListener("click", () => {
    const showContent = show.innerText; 
    const tempTextArea = document.createElement("textarea"); 
    tempTextArea.value = showContent; 
    document.body.appendChild(tempTextArea); 
    tempTextArea.select(); 
    document.execCommand('copy');
    document.body.removeChild(tempTextArea); 
});
