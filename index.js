function updateContents(page , event){

   switch(page){
      case 'page1':
         document.getElementById('content').innerHTML="This is page1" ;
         break;
         case 'page2':
            document.getElementById('content').innerHTML="This is page2" ;
         break;
            case 'about':
               document.getElementById('content').innerHTML="This is AboutUs" ;
               break;
               case 'contact':
                  document.getElementById('content').innerHTML="This is contact page" ;
                  break;
                  default:
                     document.getElementById('content').innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" ;

   }

}





