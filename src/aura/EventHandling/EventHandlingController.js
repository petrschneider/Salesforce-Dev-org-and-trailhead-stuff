/**
 * Created by UG60RA on 30.12.2019.
 */

({
      handleActive: function (cmp, event) {
          var tab = event.getSource();
          switch (tab.get('v.id')) {
              case 'tab1':
                  //do something when tab1 is clicked
                  break;
              case 'tab2':
                  //do something when tab2 is clicked
                  break;
          }
      }
})