// Created by Jette(https://github.com/djbdeguzman) for Northspyre's CS team PH
// This is used to sort projects with pending data in All Portfolio Incoming Costs (https://prod.northspyre.com/inbox/cost_inbox_portfolio_summary)
// This will add new div for the list of pending data in the cost inbox

function populateList() {
    const containerRow = document.querySelector(".row");
    const newDiv = document.createElement("div");
    newDiv.className= "card";
    newDiv.style.margin = "24px auto";
    newDiv.style.borderRadius = ".25em";
    newDiv.style.width =" 98%"
    const list = document.createElement("ol");
    list.className = "unprocessedList";
    list.style.marginTop = "16px";
    list.style.marginBottom = "0px";
       

    //append elements
    containerRow.appendChild(newDiv);
    newDiv.appendChild(list);

    // code for red bg
    const withPendingRed = document.getElementsByClassName("card text-white bg-danger h-100");
    for (let r=0; r < withPendingRed.length ; r++) {
        const projectName = withPendingRed[r].firstElementChild.children[0].children[0].innerText;
        const nsURL = withPendingRed[r].firstElementChild.children[3].href;
        const pendingData = withPendingRed[r].firstElementChild.children[3].children[12].innerText;
        /* console.log("RED - " + nsURL + ", Project Name: " + projectName + " - "+ pendingData); */
        //create DOM li
        let link = document.createElement('li');
        link.innerHTML += "<p>"+"Project Name: "+"<a href=' "+nsURL+"'> "+projectName+"</a>"+" Pending: "+" "+pendingData+"</p>";
        //append element to Ordered List
        list.appendChild(link);
    }
    
    // code for yellow bg
    const withPendingYellow = document.getElementsByClassName("card text-white bg-warning h-100");
    for (let y=0; y<withPendingYellow.length; y++){
        const projectName = withPendingYellow[y].firstElementChild.children[0].children[0].innerText;
        const nsURL = withPendingYellow[y].firstElementChild.children[3].href;
        const pendingData = withPendingYellow[y].firstElementChild.children[3].children[12].innerText;
        //create DOM li
        let link = document.createElement('li');
        link.innerHTML += "<p>"+"Project Name: "+"<a href=' "+nsURL+"'> "+projectName+"</a>"+" Pending: "+" "+pendingData+"</p>";
        //append element to Ordered List
        list.appendChild(link);
    }
}
populateList();