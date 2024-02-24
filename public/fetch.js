fetch('https://maimaidx-eng.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=3')
  .then(response => response.text())
  .then(masterData => {
    const parser = new DOMParser();
    const doc1 = parser.parseFromString(masterData, 'text/html');

    const elements1 = doc1.getElementsByClassName('f_10');
    const stats1 = [];
    const attributes = [
      'Clear', 'S', 'S+', 'SS', 'SS+', 'SSS', 'SSS+', 'FC', 'FC+', 'AP', 'AP+', 'sync play', 'FS', 'FS+', 'FDX', 'FDX+', '1', '2', '3', '4', '5'
    ];

    for (let i = 0; i < elements1.length; i++) {
      const value = elements1[i].textContent;
      const attribute = attributes[i];
      stats1.push({ value, attribute });
    }

    // Fetch data from the second page
    fetch('https://maimaidx-eng.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=2')
      .then(response => response.text())
      .then(expertData => {
        const doc2 = parser.parseFromString(expertData, 'text/html');

        const elements2 = doc2.getElementsByClassName('f_10');
        const stats2 = [];

        for (let i = 0; i < elements2.length; i++) {
          const value = elements2[i].textContent;
          const attribute = attributes[i];
          stats2.push({ value, attribute });
        }

        // Combine the data from both pages
        const formData = {
          masterData: stats1,
          expertData: stats2
        };

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
        console.error('Error fetching second page:', error);
      });
  })
  .catch(error => {
    console.error('Error fetching first page:', error);
  });