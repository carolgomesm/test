console.log("Initial Test");
// document.getElementById('addButton').onclick = addtext;

document.getElementById('addButton').onclick = addtext;
//Create regular expression to validate the data
var regex = /^([a-zA-Z0-9]+=[a-zA-Z0-9]+)$/;

    function addtext() {
      //gets the value from the input
      var nameValue = document.getElementById('name').value;
      if (regex.test(nameValue)){
        var newItem = document.getElementById('receiver');
        //Creates a new item to include in the list
        var items = document.createElement('option');
        items.text = nameValue;
        //Adds the item to the list
        newItem.add(items)
      }
      else{
        //if the data entered do not match the specification the user receives an alert
        alert('Enter a valid value');
      }
  }


 document.getElementById('deleteButton').onclick = deleteText;
 function deleteText(){
   //creates a variable to get the list items
   var items = document.getElementById('receiver');
   //for loop to loop through all the items in the list
   for(var i = items.length - 1; i >= 0; i--){
  //if the item is selected it removes the item
     if(items.options[i].selected){
       items.remove(i);
     }
   }
 }

 document.getElementById('sortNameButton').onclick = sortName;
 function sortName(){
   var items = document.getElementById('receiver');
   var array = new Array();

   for(var j = 0; j < items.options.length; j++){
     array[j] = items.options[j].text;
   }

   array.sort(function(x,y){
     if (x != '' && y != '') {
       return x.split('=')[0].localeCompare(y.split('=')[0])
     }
     else{
       return 0
     }
   });

   empty(items);
   putElementsList(items, array);
 }

 function empty(receiver){
   while(receiver.options.length > 0){
     receiver.options[0] = null;
   }
 }

 function putElementsList(items, array){
   for(var j = 0; j < array.length; j++){
     var option = document.createElement('option');
     option.text = array[j];
     items.options[j] = option;
   }
 }

 document.getElementById('SortValueButton').onclick = sortValue;
 function sortValue(){
   var items = document.getElementById('receiver');
   var array = new Array();

   for(var j = 0; j < items.options.length; j++){
     array[j] = items.options[j].text;
   }

   array.sort(function(x,y){
     if (x != '' && y != '') {
       return x.split('=')[1].localeCompare(y.split('=')[1])
     }
     else{
       return 0
     }
   });

   empty(items);
   putElementsList(items, array);
}

document.getElementById('showXML').onclick =
$('#receiver').each(function(){
  var xml = '<?xml version="1.0" enconding="utf-8"?>';
  xml = xml + '<Root><Classes>';

  var cells = $('option');
    if(cells.length > 0){
      xml =+ "<ClassName= '" + cells.eq(0).text() + "'>";

      for(var i = 1; i < cells.length; ++i){
        xml += '<Data year="' + $('#receiver').find('option').eq(i).text() + '"/>';
      }
      xml += '</Class>'
    }
    xml = xml + '</Classes></Root>';

    console.log(xml);
});

console.log("End test");
