// scripts/events.js

document.addEventListener('DOMContentLoaded', () => {
    const calendarEl = document.getElementById('calendar');
  
    const calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: ['interaction', 'dayGrid'],
      editable: true,
      selectable: true,
      events: [
        {
          title: 'Board Game Night',
          start: '2024-07-18',
        },
        {
          title: 'Boba Tasting',
          start: '2024-07-20',
        },
      ],
    });
  
    calendar.render();
  });
  