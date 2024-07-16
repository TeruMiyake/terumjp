window.onload = OnLoadHandler;

function OnLoadHandler() {
    var jsoutput = document.getElementById("jsoutput");
    jsoutput.innerHTML = "Hello, I'm list.js!<br /><br />Applied styles:";

    var stylesheets = document.styleSheets;
    var css = stylesheets[0];
    for (var cssRule of css.cssRules) {
        AddInnerHTML(cssRule.cssText);
    }
}

function AddInnerHTML(str){
    var jsoutput = document.getElementById("jsoutput");
    jsoutput.innerHTML += `<br />&emsp;${str}`;
}

function ChangeCSS(){
    var stylesheets = document.styleSheets;
    var css = stylesheets[0];
    var cssrule = css.cssRules[0];
    console.log(css.cssRules[0].cssText);
    console.log(cssrule.selectorText);
    console.log(cssrule.style["list-style-type"]);
    cssrule.selectorText = "#id_ol1";
    cssrule.style["list-style-type"] = "upper-alpha";
}