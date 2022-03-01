function name(s1,s2)
{
    var s1=document.getElementById(s1);
    var s2=document.getElementById(s2);
    s2.innerHTML="";
    if(s1.value=="Delhi"){
        var optionArray=['jaisingh daba','Hotel 3 star'];
    }
    else if(s1.value=='Chennai')
    {
        var optionArray=['KFC','Rajan Hotel ','Nilla Hotel'];
    }
    for(var option in optionArray)
    {
        var pair=optionArray[option].split("|");
        var newoption=document.createElement("option");
        newoption.value=pair[0];
        newoption.innerHTML=pair[1];
        s2.options.add(newoption);
    }
}