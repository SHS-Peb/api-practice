try {
  const response = await fetch('https://api.example.com/data');
  
  if (!response.ok) {
    throw new Error(`Server error: ${response.status}`);
  }

  const data = await response.json();
  displayData(data);
  
} catch (error) {
  showErrorToUser("Something went wrong. Please try again later."); // shows up as a popup to the user
  console.error("Fetch failed:", error);
}