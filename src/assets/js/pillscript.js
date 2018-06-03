        var front = document.getElementById("Front");
        console.log("sgasvgsavghs");
        var back = document.getElementById("Back");
        var inputDropColor = document.getElementById("Color");
        var inputDropShape = document.getElementById("Shape");
        
        function disableFunction() {
            if (front.value.length > 0 || back.value.length > 0) {
                document.getElementById('search_button').disabled = false;

            } else if (front.value.length == 0 && back.value.length == 0 && inputDropColor.options[inputDropColor.selectedIndex].text == "None Selected" && inputDropShape.options[inputDropShape.selectedIndex].text == "None Selected") {
                document.getElementById('search_button').disabled = true;
            }
        }

        inputDropColor.addEventListener('change', function () {
            var strColor = inputDropColor.options[inputDropColor.selectedIndex].text;
            if (strColor != "None Selected") {
                document.getElementById('search_button').disabled = false;
            }
            if (strColor == "None Selected" && front.value.length == 0 && back.value.length == 0) {
                document.getElementById('search_button').disabled = true;   
            }
        });

        inputDropShape.addEventListener('change', function () {
            var strShape = inputDropShape.options[inputDropShape.selectedIndex].text;
            if (strShape != "None Selected") {
                document.getElementById('search_button').disabled = false;   
            }
            if (strShape == "None Selected" && front.value.length == 0 && back.value.length == 0) {
                document.getElementById('search_button').disabled = true;    
            }
        });
