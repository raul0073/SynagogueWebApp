
export const addOrder = async ( order ) => {
    try {
        const response = await fetch('http://127.0.0.1:3000/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(order),
        });
  
        if (response.ok) {
          // Order was successfully added
          console.log('Order added successfully');
          // Reset the form or take appropriate action
        } else {
          console.error('Failed to add order');
        }
      } catch (error) {
        console.error('Error adding order', error);
      }
    };
  