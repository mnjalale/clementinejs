'use strict';

(function(){
    var addButton = document.querySelector('.btn-add');
    var deleteButton = document.querySelector('.btn-delete');
    var clickNbr = document.querySelector('#click-nbr');
    var apiUrl = appUrl + '/api/:id/clicks';
    
    function updateClickCount(data){
        var clickObject = JSON.parse(data);
        clickNbr.innerHTML = clickObject.clicks;
    }
    
    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET',apiUrl,updateClickCount));
    
    addButton.addEventListener('click',function(){
        ajaxFunctions.ajaxRequest('POST',apiUrl,function(){
            ajaxFunctions.ajaxRequest('GET',apiUrl,updateClickCount);
        });
    });
    
    deleteButton.addEventListener('click',function(){
        ajaxFunctions.ajaxRequest('DELETE',apiUrl,function(){
            ajaxFunctions.ajaxRequest('GET',apiUrl,updateClickCount);
        });
    });
    
})();