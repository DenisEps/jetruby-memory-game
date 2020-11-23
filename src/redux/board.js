const cards = [
  { id: 1, color: "#D00000", flipped: false, disabled: false },
  { id: 2, color: "#FFBA08", flipped: false, disabled: false },
  { id: 3, color: "#3F88C5", flipped: false, disabled: false },
  { id: 4, color: "#136F63", flipped: false, disabled: false },
  { id: 5, color: "#F2DDA4", flipped: false, disabled: false },
  { id: 6, color: "#84714F", flipped: false, disabled: false },
  { id: 7, color: "#4B3F72", flipped: false, disabled: false },
  { id: 8, color: "#F5A6E6", flipped: false, disabled: false },
  { id: 9, color: "#D00000", flipped: false, disabled: false },
  { id: 10, color: "#FFBA08", flipped: false, disabled: false },
  { id: 11, color: "#3F88C5", flipped: false, disabled: false },
  { id: 12, color: "#136F63", flipped: false, disabled: false },
  { id: 13, color: "#F2DDA4", flipped: false, disabled: false },
  { id: 14, color: "#84714F", flipped: false, disabled: false },
  { id: 15, color: "#4B3F72", flipped: false, disabled: false },
  { id: 16, color: "#F5A6E6", flipped: false, disabled: false }
];

export const getShuffledCards = () => {
  const newArray = [...cards];
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
};
