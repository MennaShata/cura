function AddList() {
    $.ajax({
        type: "get",
        url: "/DrugInteraction/CheckDrugValue?value=" + $("#DrugName").val() ,
        contentType: "application/json",
        success: (data)=> {
            if (data != 0) {
                var drugName = document.getElementById("DrugName").value;
                var list = document.getElementById("DrugList").classList.add("show");
                var listBody = document.getElementById("ListBody");
                var itemRow = document.createElement('tr');
                var itemName = document.createElement('td');
                var itemFun = document.createElement('td');
                listBody.appendChild(itemRow);
                var DelElement = '<div class="five-functions text-left">' + '<a href="#"><i class="fa fa-edit" style="margin-right:4px;"></i></a>' + '<button action="DeleteItem(this)"><i class="fa fa-trash-o"></i></button>' + '</div>';
                itemFun.innerHTML = DelElement;
                itemRow.appendChild(itemFun);
                itemRow.appendChild(itemName);
                itemName.innerHTML = drugName;

            }

            else
            {
                console.log(data);
                alert("error success");
            }

        },
        
        error: function (data) {
            alert("hii"+data);
        }
    });
 
 
}
function DeleteItem(item)
{
    console.log(item)
}