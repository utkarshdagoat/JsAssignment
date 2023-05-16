const tableBody = document.getElementsByClassName('tableBody')[0];

const linkPattern = /https/
const newTableRow = (data) =>{
    const tableRow = document.createElement("tr");
    data.forEach((userData)=>{
        const tableData = document.createElement("td");
        
        tableData.innerHTML = userData;
        if(linkPattern.test(userData)){
            const image = document.createElement("img");
            image.src = userData;
            tableData.innerHTML = "";
            tableData.appendChild(image);
        }
        tableRow.appendChild(tableData);
    })
    tableBody.appendChild(tableRow);
}

const fetcher = async () =>{
    const response = await fetch("https://reqres.in/api/users")
    const data = await response.json();
    const users = data.data;
    console.log(Object.values(users[0]));
    users.forEach((user) => {
        newTableRow(Object.values(user));
    });
}

fetcher();