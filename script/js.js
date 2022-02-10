
function heeHaw(){

    //reset error message
    document.getElementById("err-number").style.display = "none";

    //grab input
    let userNum = document.getElementById("number");

    //grab list UL
    let list = document.getElementById("myList");

    //check for invalid numbers
    if (userNum.value < 0)
    {
        /*document.getElementById('output').innerHTML = "Error! Not a valid input!";*/
        document.getElementById("err-number").style.display = "block";
    }

    else {

        var outputArray = [];

        for (let i = 1; i <= userNum.value; i++) {

            if ((i % 3 === 0) && (i % 5 === 0)) {

                outputArray.push("Hee Haw!");

            } else if (i % 5 === 0) {

                outputArray.push("Haw!");

            } else if (i % 3 === 0) {

                outputArray.push("Hee!");


            } else {

                outputArray.push("" + i + "");
            }

        }

        outputArray.forEach((num)=>{
            let li = document.createElement("li");
            let br = document.createElement("br");
            li.innerText = num;
            list.appendChild(li);
            list.appendChild(br);
        })

    }
}