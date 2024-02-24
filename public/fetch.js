fetch('https://maimaidx-eng.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=3')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    const elements = doc.getElementsByClassName('f_10');
    const stats = [];
    const attributes = [
      'Clear', 'S', 'S+', 'SS', 'SS+', 'SSS', 'SSS+', 'FC', 'FC+', 'AP', 'AP+', 'sync play', 'FS', 'FS+', 'FDX', 'FDX+', '1', '2', '3', '4', '5'
    ];

    for (let i = 0; i < elements.length; i++) {
      const value = elements[i].textContent;
      const attribute = attributes[i];
      stats.push({ value, attribute });
    }

    const formData = {};

    stats.forEach(stat => {
      formData[stat.attribute] = stat.value;
    });

    // Send the form data to your backend API endpoint
    fetch('https://song-list-backend.vercel.app/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          console.log('Form data sent successfully');
          return response.json(); // Parse the response JSON
        } else {
          throw new Error('Failed to send form data');
        }
      })
      .then(data => {
        console.log('Response from backend:', data);
      })
      .catch(error => {
        console.error('An error occurred while sending form data:', error);
      });
  })
  .catch(error => {
    console.error(error);
  });