
var academicAnn={
    record1:{
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://www.w3schools.com/js/showphp.asp?filename=demo_jsonp"
    },
    record2:{
        title: "Fusce tincidunt purus id lectus vestibulum varius. Maecenas lectus massa,",
        url: "https://www.w3schools.com/js/json_demo.txt"
    },
    record3:{
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
    },
    record3:{
        title: "Vestibulum at libero odio. In commodo eget enim nec luctus. Curabitur",
        url: "https://www.w3schools.com/js/tryit.asp?filename=tryjson_jsonp"
    },
    record4:{
        title: "Vestibulum at libero odio. In commodo eget enim nec luctus. Curabitur",
        url: "https://www.w3schools.com/js/tryit.asp?filename=tryjson_jsonp"
    },
    record5:{
        title: "Vestibulum at libero odio. In commodo eget enim nec luctus. Curabitur",
        url: "https://www.w3schools.com/js/tryit.asp?filename=tryjson_jsonp"
    },
    record6:{
        title: "Vestibulum at libero odio. In commodo eget enim nec luctus. Curabitur",
        url: "https://www.w3schools.com/js/tryit.asp?filename=tryjson_jsonp"
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