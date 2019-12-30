({
    handleClick : function(component, event, helper){
        var btnClicked = event.getSource();			//the button
        var btnMessage = btnClicked.get("v.label"); //buttons label
        component.set("v.message", btnMessage);		//message update
    }
})