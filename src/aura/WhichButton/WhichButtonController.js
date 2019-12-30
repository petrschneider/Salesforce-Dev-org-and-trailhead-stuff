/**
 * Created by UG60RA on 30.12.2019.
 */

({
    nameThatButton : function (cmp, event, helper){
        var whichOne = event.getSource().getLocalId();
        console.log(whichOne);
        cmp.set("v.whichButton", whichOne)
    }
});