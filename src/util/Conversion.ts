export const FormatSeconds = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60); // Calculate total minutes
  const seconds = totalSeconds % 60; // Remaining seconds after minutes
  return `${minutes}:${seconds.toString().padStart(2, "00")}`; // Format as mm:ss
};
