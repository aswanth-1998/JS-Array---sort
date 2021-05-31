var arr=[];
 
    function addEvent()
    {
    var x = document.getElementById("eventName").value;    
     arr.push(x);
      document.getElementById("result").innerHTML="Event added successfully";  
    }

   function sort()
    {
       var e ="<h3>The Event name after sorting is</h3><br>";
            
      arr.sort();
      
       e+= "<ol id='eventList'>";
      for(var i=0; i<arr.length; i++)
   {
      e += "<li>" +arr[i]+"</li><br>";
   } 
       document.getElementById("result").innerHTML=e+"</ol>";
    

    }