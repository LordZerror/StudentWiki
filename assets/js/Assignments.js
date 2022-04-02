
/* Subject Codes:   CG - Computer Graphics
                    DS - Data Structures
                    DL - Digital Logic & Computer Architecture
                    DG - Discrete Structures & Graph Theory
                    J  - Java
                    EM - Engineering Mathematics  */

var Assignments={
    record1:{
        title: 'Experiment 01',
        code: 'CG',
        deadline: 'January 24 2022'
    },
    record2:{
        title: 'Experiment 03',
        code: 'DS',
        deadline: 'November 29 2021'
    }
};

//This function returns the subject name according to the code mentioned(So no need to mention the whole subject name)
function codes(subCode){
    switch(subCode){
        case 'DS': return 'Data Structures'; break;
        case 'EM': return 'Engineering Mathematics-III'; break;
        case 'DG': return 'Discrete Structures & Graph Theory'; break;
        case 'DL': return 'Digital Logic & Computer Architecture'; break;
        case 'J': return 'OOP-Java'; break;
        case 'CG': return 'Computer Graphics'; break;
        default: return 'None';
    }
}

const today=new Date();
let dl=today.toLocaleString('default', {month: 'long', day: '2-digit'});
Object.keys(Assignments).reverse().forEach(r => {

    //dateCheck(Assignments[r].deadline);

    let hour=today.toLocaleString('default', {hour: 'numeric'});
    let month=today.toLocaleString('default', {month: 'short'});
    let year=today.toLocaleString('default', {year: 'numeric'});
    let currentMonth=dateCheck(month);
    let dlMonth=dateCheck(Assignments[r].deadline);

    if(dlMonth>currentMonth || year<Assignments[r].deadline.substring(Assignments[r].deadline.length-4)){createAssignment(r);}
    
    if(Assignments[r].deadline.localeCompare(dl)=='0' || Assignments[r].deadline.localeCompare(dl)=='-1'){
        if(Assignments[r].deadline.localeCompare(dl)=='0' && hour.localeCompare('11 PM')){
            createAssignment(r);
        }
        else{
            delete Assignments[r];

        }
    } //The assignment will disappear after the deadline is passed
    else{
        createAssignment(r);
    }
    
}); 

function dateCheck(m){
    month=m.substring(0, 3);
    switch(month){
        case 'Jan': return 1; break;
        case 'Feb': return 2; break;
        case 'Mar': return 3; break;
        case 'Apr': return 4; break;
        case 'May': return 5; break;
        case 'Jun': return 6; break;
        case 'Jul': return 7; break;
        case 'Aug': return 8; break;
        case 'Sep': return 9; break;
        case 'Oct': return 10; break;
        case 'Nov': return 11; break;
        case 'Dec': return 12; break;
        default: console.log('none');
    }
}

function index(r){
    let c=r.charAt(r.length-1);
    return c;
}//return the index of assignment to be deleted

function createAssignment(r){

    //Creating container for individual assignments
    var record=document.createElement('p');
    var myDiv=document.getElementById('assignment');
    record.className='records';
    myDiv.appendChild(record);

    //Creating the circle for code of the subject
    var code=document.createElement('p');
    code.className='code';
    var codeText=document.createTextNode(Assignments[r].code);
    code.appendChild(codeText);
    record.appendChild(code);

    //Creating container for title of assignment
    var title=document.createElement('p');
    title.className='title';
    var titleText=document.createTextNode(Assignments[r].title);
    title.appendChild(titleText);
    record.appendChild(title);

    //Creating container for subject name
    var subject=document.createElement('p');
    subject.className='subj';
    var subjectText=document.createTextNode(codes(Assignments[r].code));
    subject.appendChild(subjectText);
    record.appendChild(subject);

    //Creating container for deadline
    var deadline=document.createElement('p');
    deadline.className='dl';  
    var dlText;      
    var deadl=Assignments[r].deadline;
    if(deadl.substring(0, deadl.length-5).localeCompare(dl)=='0'){
        dlText=document.createTextNode('Due Today');
    }
    else{dlText=document.createTextNode('Due '+Assignments[r].deadline);}
    deadline.appendChild(dlText);
    record.appendChild(deadline);
}

function deleteAssignment(r){
    var myRecord=document.getElementById('assignment');
    myRecord.removeChild(myRecord.children[r]);
}//deletes the assignment after the deadline has passed