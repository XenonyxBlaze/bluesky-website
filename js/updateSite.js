"use strict";

const newsCont = document.getElementById('news')

async function getJsonUpdate() {
    let jsonResp = await ((await fetch('js/changelog.json')).text());
    let jsonObj = JSON.parse(jsonResp);
    insertUpdates(jsonObj);
}

let insertUpdates = (obj) => {
    //create main update list
    let mainList = document.createElement('ul');
    mainList.setAttribute('class','p-2');
    newsCont.appendChild(mainList);

    //add changelog

    obj.updates.reverse().forEach(update => {
        //add heading/subheading/date
        let headingEl = document.createElement('li');
        headingEl.setAttribute('class','h1 text-warning');
        headingEl.innerText = update.heading;
        mainList.appendChild(headingEl);

        headingEl.appendChild(document.createElement('br'))

        let subheadingEl = document.createElement('span');
        subheadingEl.setAttribute('class','h5');
        subheadingEl.innerText = update.subheading;
        headingEl.appendChild(subheadingEl);

        let dateEl = document.createElement('span');
        dateEl.setAttribute('class','float-end lead');
        dateEl.innerText = update.date;
        headingEl.appendChild(dateEl);

        //add changelog list

        let changeList = document.createElement('ul');
        changeList.setAttribute('class','h6 text-white p-3');
        headingEl.appendChild(changeList);


        update.log.forEach(log => {
            let logEl = document.createElement('li');
            logEl.setAttribute('class','p-2');
            logEl.innerText = log;
            changeList.appendChild(logEl);
        });
    });
    //add date
    //add heading
    //add subheading
    

}

getJsonUpdate();