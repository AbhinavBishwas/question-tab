var tabbuttons=document.querySelectorAll(".tabcontainer .buttoncontainer button");
var tabpanels=document.querySelectorAll(".tabcontainer .tabpanel");
function showpanel(panelIndex,colorCode) {
    tabbuttons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabbuttons[panelIndex].style.backgroundColor =colorCode;
    tabbuttons[panelIndex].style.color ="white";
    tabpanels.forEach(function(node){
        node.style.display="none";
    });
        tabpanels[panelIndex].style.display="block";
        tabpanels[panelIndex].style.backgroundColor=colorCode;
}
showpanel(0,'#FFFFFF');