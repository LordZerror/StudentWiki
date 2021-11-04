
var academicAnn={
    record1:{
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://www.w3schools.com/js/showphp.asp?filename=demo_jsonp"
    },
    record2:{
        title: "Fusce tincidunt purus id lectus vestibulum varius. Maecenas lectus massa,",
        url: "https://www.w3schools.com/js/json_demo.txt"
    }
};

var nonAcademicAnn={
    record1:{
        title: "Vestibulum at libero odio. In commodo eget enim nec luctus. Curabitur",
        url: "https://www.w3schools.com/js/tryit.asp?filename=tryjson_jsonp"
    },
    record2:{
        title: "Vivamus turpis purus, varius quis est eu, ornare dapibus",
        url: "https://www.w3schools.com/js/tryit.asp?filename=tryjson_parse"
    }
};

Object.keys(academicAnn).reverse().forEach(acadAnn => createAcadAnnouncement(acadAnn)); 

Object.keys(nonAcademicAnn).reverse().forEach(nonAcadAnn => createNonAcadAnnouncement(nonAcadAnn)); 

function createAcadAnnouncement(x){
    var icon=document.createElement('i');
    icon.classList.add("bx", "bx-chevron-right");
    
    var ann=document.createElement('a');
    ann.href=academicAnn[x].url;
    
    var titleText=document.createTextNode(academicAnn[x].title);
    ann.appendChild(titleText);

    var br=document.createElement('br');
    
    document.getElementById('acadAnnouncement').appendChild(icon);
    document.getElementById('acadAnnouncement').appendChild(ann);
    document.getElementById('acadAnnouncement').appendChild(br);
}

function createNonAcadAnnouncement(x){
    var icon=document.createElement('i');
    icon.classList.add("bx", "bx-chevron-right");
    
    var ann=document.createElement('a');
    ann.href=nonAcademicAnn[x].url;
    
    var titleText=document.createTextNode(nonAcademicAnn[x].title);
    ann.appendChild(titleText);

    var br=document.createElement('br');
    
    document.getElementById('nonAcadAnnouncement').appendChild(icon);
    document.getElementById('nonAcadAnnouncement').appendChild(ann);
    document.getElementById('nonAcadAnnouncement').appendChild(br);
}