
var academicAnn={
    record1:{
        title: "Time Table from 8th Dec 2021 till further notice for Div A & Div B",
        url: "https://tsec.edu/wp-content/uploads/2021/12/Tentative-TT.pdf"
    },
    record2:{
        title: "First Year Students Details (SEM-I) 2021-2022",
        url: "https://tsec.edu/wp-content/uploads/2021/12/Attenance-Provisional.pdf"
    },
    record3:{
        title: "FE Time Table 2021-2022",
        url: "https://tsec.edu/wp-content/uploads/2021/12/Scan-03-Dec-2021-at-1.51-PM.pdf"
    }
};

var nonAcademicAnn={
    record1:{
        title: "The Happiness Club Membership Drive is OPEN!",
        url: "https://forms.gle/NChQpMWqntJaJ8Ze7"
    },
    record2:{
        title: "TIE Club brings to you another vent session: Let it go!",
        url: "https://discord.com/invite/P8rgJ6V3ne"
    }
};

Object.keys(academicAnn).reverse().forEach(acadAnn => createAcadAnnouncement(acadAnn)); 

Object.keys(nonAcademicAnn).reverse().forEach(nonAcadAnn => createNonAcadAnnouncement(nonAcadAnn)); 

function createAcadAnnouncement(x){
    var myDiv=document.createElement('div');

    var icon=document.createElement('i');
    icon.classList.add("bx", "bx-chevron-right");
    icon.style.marginLeft='-15px';
    
    var ann=document.createElement('a');
    ann.href=academicAnn[x].url;
    
    var titleText=document.createTextNode(academicAnn[x].title);
    ann.appendChild(titleText);

    var br=document.createElement('br');
    
    myDiv.appendChild(icon);
    myDiv.appendChild(ann);
    myDiv.appendChild(br);
    document.getElementById('acadAnnouncement').appendChild(myDiv);
}

function createNonAcadAnnouncement(x){
    var myDiv=document.createElement('div');

    var icon=document.createElement('i');
    icon.classList.add("bx", "bx-chevron-right");
    icon.style.marginLeft='-15px';
    
    var ann=document.createElement('a');
    ann.href=nonAcademicAnn[x].url;
    
    var titleText=document.createTextNode(nonAcademicAnn[x].title);
    ann.appendChild(titleText);

    var br=document.createElement('br');
    
    myDiv.appendChild(icon);
    myDiv.appendChild(ann);
    myDiv.appendChild(br);
    document.getElementById('nonAcadAnnouncement').appendChild(myDiv);
}