import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drug-add',
  templateUrl: './drug-add.component.html',
  styleUrls: ['./drug-add.component.css']
})
export class DrugAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/*
 $(document).ready(function () {
            $("#addType").click(function () {
                var x = document.getElementById("myDiv");
                if (x.style.display == "none") {
                    x.style.display = "block";
                }
                else {
                    x.style.display = "block";
                }
        

                //$("#myForm")[0].reset();
               
                var num = $('#strengthText').val();
                var unit = $('#dropDownUnit option:selected').text();
                var strength = num + unit;
                //////////////////
                //var v0='<td class="counterCell"></td>';
                var v1 = $('#dropDownType option:selected').val();
                var v2 = $('#textOnOneSide').val();
                var v3 = $('#textOnOtherSide').val();
                var v4 = $('#dropDownColor :selected').text();
                var v5 = $('#dropDownShape :selected').text();
                var v6 = $('#strengthText option:selected').val() + $('#dropDownUnit option:selected').val();
                var tds = v1 + v2 + v3 + v4 + v5 + v6;
                //$("table:first tr td:last-child").addClass('Delete');
                $("#mytable").append('<tr><td class="counterCell"></td><td>' + v1 + '</td><td>' + v2 + '</td><td>' + v3 + '</td><td>' + v4 + '</td><td>' + v5 + '</td><td>' + strength + '</td><td><button class="Delete" onclick="myFun(this)"><i class="fa fa-times"></i></button></td></tr>');

            });
          
  
          myFun=function(e){
                e.closest('tr').remove();
             }

        });
 */
}
