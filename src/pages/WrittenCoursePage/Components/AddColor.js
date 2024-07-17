export const addBlueColorToUppercase = (text, color) => {
  const words = text.split(/\b/);

  const coloredText = words.map((word, index) => {
    const isUppercase = word === word.toUpperCase() && !/[.?!]$/.test(word);
    const separator = index === words.length - 1 ? '' : '';
    const disallowedPunctuation = [",", ".", "?", "!","(",")"];

    if (isUppercase && disallowedPunctuation.every(mark => !word.includes(mark))) {
      return (
        <span key={index} style={{ color, fontWeight: 'bolder' }}>
          {word}
          {separator}
        </span>
      );
    } else {
      return word + separator;
    }
  });

  return coloredText;
};
