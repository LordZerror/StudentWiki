var cal={
          
    initialView: 'timeGridWeek',

    allDaySlot: false,

    nowIndicator: true,

    slotMinTime: '08:00:00',

    slotMaxTime: '19:00:00',

    expandRows: true,

    titleFormat: { // will produce something like "September 2018"
      month: 'long',
      year: 'numeric',
    },

    firstDay: 1,

    themeSystem: 'bootstrap',

    eventTimeFormat:{
      hour: 'numeric',
      minute: '2-digit',
      meridiem: 'short'
    },

    eventSources:[
        {
          events: [
              {
              title  : 'EM-III',
              startTime  : '10:15:00',
              endTime    : '12:15:00',
              color: '#24305e',
              daysOfWeek: ['1']
              },
              {
                title  : 'Lunch',
                startTime  : '12:15:00',
                endTime    : '13:00:00',
                color: '#e4e4e4',
                textColor: 'black',
                daysOfWeek: ['1', '2', '3', '4', '5']
              },
              {
              title  : 'OOP-Java',
              startTime  : '13:00:00',
              endTime    : '14:00:00',
              color: '#24305e',
              daysOfWeek: ['1'],
              
              },
              {
                title: 'Data Structures',
                startTime: '14:00:00',
                endTime: '15:00:00',
                color: '#24305e',
                daysOfWeek:['1']
              },
              {
                title: 'Computer Graphics',
                startTime: '15:00:00',
                endTime: '16:00:00',
                color: '#24305e',
                daysOfWeek:['1']
              },
              {
                title: 'MPR',
                startTime: '16:00:00',
                endTime: '17:00:00',
                color: '#24305e',
                daysOfWeek:['1']
              },
              {
                title: 'Lab',
                startTime: '10:15:00',
                endTime: '12:15:00',
                color: '#24305e',
                daysOfWeek:['2']
              },
              {
                title: 'DSGT',
                startTime: '13:00:00',
                endTime: '14:00:00',
                color: '#24305e',
                daysOfWeek:['2']
              },
              {
                title: 'Data Structures',
                startTime: '14:00:00',
                endTime: '15:00:00',
                color: '#24305e',
                daysOfWeek:['2']
              },
              {
                title: 'EM-III',
                startTime: '15:00:00',
                endTime: '16:00:00',
                color: '#24305e',
                daysOfWeek:['2']
              },
              {
                title: 'EM-III (T)',
                startTime: '16:00:00',
                endTime: '17:00:00',
                color: '#24305e',
                daysOfWeek:['2']
              },
              {
                title: 'DSGT',
                startTime: '10:15:00',
                endTime: '11:15:00',
                color: '#24305e',
                daysOfWeek:['3']
              },
              {
                title: 'Computer Graphics',
                startTime: '11:15:00',
                endTime: '12:15:00',
                color: '#24305e',
                daysOfWeek:['3']
              },
              {
                title: 'Data Structures',
                startTime: '13:00:00',
                endTime: '14:00:00',
                color: '#24305e',
                daysOfWeek:['3']
              },
              {
                title: 'DLCA',
                startTime: '14:00:00',
                endTime: '15:00:00',
                color: '#24305e',
                daysOfWeek:['3']
              },
              {
                title: 'Lab',
                startTime: '15:00:00',
                endTime: '17:00:00',
                color: '#24305e',
                daysOfWeek:['3']
              },
              {
                title: 'DLCA',
                startTime: '10:15:00',
                endTime: '11:15:00',
                color: '#24305e',
                daysOfWeek:['4']
              },
              {
                title: 'DSGT',
                startTime: '11:15:00',
                endTime: '12:15:00',
                color: '#24305e',
                daysOfWeek:['4']
              },
              {
                title: 'Lab',
                startTime: '13:00:00',
                endTime: '15:00:00',
                color: '#24305e',
                daysOfWeek:['4']
              },
              {
                title: 'OOP-Java',
                startTime: '15:00:00',
                endTime: '16:00:00',
                color: '#24305e',
                daysOfWeek:['4']
              },
              {
                title: 'Lab',
                startTime: '10:15:00',
                endTime: '12:15:00',
                color: '#24305e',
                daysOfWeek:['5']
              },
              {
                title: 'Computer Graphics',
                startTime: '13:00:00',
                endTime: '14:00:00',
                color: '#24305e',
                daysOfWeek:['5']
              },
              {
                title: 'DLCA',
                startTime: '14:00:00',
                endTime: '15:00:00',
                color: '#24305e',
                daysOfWeek:['5']
              }

          ]
    
        }
    ]

}