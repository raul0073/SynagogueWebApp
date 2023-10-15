export const getTransactions = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/transactions`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("failed to fetch");
      }
  
      return res.json();
    } catch (err) {
      console.log("cant get trnasactions", err);
    }
  }