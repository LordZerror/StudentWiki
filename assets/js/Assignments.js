(function(){

    var Assignments={
        record1:{
            title: 'Experiment 01',
            code: 'CG',
            deadline: '05-11-2021'
        },
        record2:{
            title: 'Experiment 03',
            code: 'J',
            deadline: '01-11-2021'
        },
        record3:{
            title: 'Assignment 02',
            code: 'DS',
            deadline: '10-10-2021'
        }
    };

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

    for(let r in Assignments){
        createAssignment(r);
    }

    function createAssignment(r){
        var record=document.createElement('p');
        var myDiv=document.getElementById('assignment');
        record.className='records';
        myDiv.appendChild(record);

        var code=document.createElement('p');
        code.className='code';
        var codeText=document.createTextNode(Assignments[r].code);
        code.appendChild(codeText);
        record.appendChild(code);

        var title=document.createElement('p');
        title.className='title';
        var titleText=document.createTextNode(Assignments[r].title);
        title.appendChild(titleText);
        record.appendChild(title);

        var subject=document.createElement('p');
        subject.className='subj';
        var subjectText=document.createTextNode(codes(Assignments[r].code));
        subject.appendChild(subjectText);
        record.appendChild(subject);

        var deadline=document.createElement('p');
        deadline.className='dl';
        var dlText=document.createTextNode('Due '+Assignments[r].deadline);
        deadline.appendChild(dlText);
        record.appendChild(deadline);
    }

})();