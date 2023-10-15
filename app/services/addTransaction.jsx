
export const addTrans = async ( trans ) => {
    try {
        const response = await fetch('http://127.0.0.1:3000/api/transactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(trans),
        });
  
        if (response.ok) {
          // Order was successfully added
          console.log('Transaction added successfully');
          // Reset the form or take appropriate action
        } else {
          console.error('Failed to add transaction');
        }
      } catch (error) {
        console.error('Error adding transaction', error);
      }
    };
  