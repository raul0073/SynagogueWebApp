
export const addUser = async ( user ) => {
    try {
        const response = await fetch('http://127.0.0.1:3000/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
  
        if (response.ok) {
          // Order was successfully added
          console.log('User added successfully');
          // Reset the form or take appropriate action
        } else {
          console.error('Failed to add user to db');
        }
      } catch (error) {
        console.error('Error adding order', error);
      }
    };
  