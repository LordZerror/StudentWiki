const a1=document.getElementById('acadAnnouncement');
const a2=document.getElementById('nonAcadAnnouncement');
let c1=a1.childElementCount;
let c2=a2.childElementCount;
let c=1;

while(c1>3 || c2>3){

    if(c1>2){
        a1.removeChild(a1.lastChild);
        c1--;
    }
    if(c2>2){
        a2.removeChild(a2.lastChild);
        c2--;
    }
    c=0;
}

if(c==0){
    var moreAnn=document.createElement('a');
    moreAnn.href="/Announcements.html";
    var title=document.createTextNode('More Announcements');
    moreAnn.appendChild(title);
    moreAnn.id='more';
    document.getElementById('announcements').appendChild(moreAnn);
}

c=1;
const asn1=document.getElementById('assignment');
let cAsn=asn1.childElementCount;
if(cAsn>4){
    asn1.removeChild(asn1.lastChild);
    c=0;
}

if(c==0){
    var moreAsn=document.createElement('a');
    moreAsn.href="/Assignments.html";
    var title=document.createTextNode('More Assignments');
    moreAsn.appendChild(title);
    moreAsn.id='more';
    document.getElementById('assignment').appendChild(moreAsn);
}

document.addEventListener('DOMContentLoaded', function() {

    var calendarEl = document.getElementById('calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, cal);
    calendar.render();
    calendar.setOption('aspectRatio', 2);
    calendar.changeView('dayGridDay');

  });