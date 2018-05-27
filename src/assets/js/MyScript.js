function AddList() {
    var drugName=document.getElementById("DrugName").value;
   var list=document.getElementById("DrugList").classList.add("show");
   var listBody = document.getElementById("ListBody");
   var itemRow = document.createElement('tr');
   var itemName = document.createElement('td');
   var itemFun = document.createElement('td');
   listBody.appendChild(itemRow);
   var DelElement =  '<div class="five-functions text-left">'+'<a href="#"><i class="fa fa-edit" style="margin-right:4px;"></i></a>'+'<a href="#"><i class="fa fa-trash-o"></i></a>'+'</div>';
   itemFun.innerHTML=DelElement;
   itemRow.appendChild(itemFun);
   itemRow.appendChild(itemName);
   itemName.innerHTML = drugName;

}