
function makeBoard(){
    let dataSet = [];

    let tbody = tet_Board.querySelector("#tet");

    for(let i = 0; i < 17; i++)
    {
        let arr = [];
        let tr = document.createElement('tr');
        dataSet.push(arr);
        for(let j = 0; j < 17; j++)
        {
            arr.push(1);
            let td = document.createElement('td');
            tr.appendChild(td);
            if(i == 8 || j == 8){
                td.innerHTML = "■";
            }else{
                td.innerHTML = "(" + Math.abs(i-8) + ", " + Math.abs(j-8) + ")";
            }
        }
        tbody.appendChild(tr);
    }

    console.log(dataSet);
}