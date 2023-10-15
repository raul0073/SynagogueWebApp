export const getTransactionById = async (id) => {
    try {
      const res = await fetch(`http://127.0.0.1:3000/api/transactions/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("failed to fetch");
      }
  
      return res.json();
    } catch (err) {
      console.log("cant get trnasaction data", err);
    }
  }