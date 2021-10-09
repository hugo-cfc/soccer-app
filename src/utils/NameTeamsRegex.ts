export const DataMatchRegex = (date: string): string => {
  return date.replace(
    /^([\w\W]{2} )?([\w\W]{2} )?([\w\W ]*)( \w{2})?$/gm,
    '$4/$3/$2 - $6:$7H',
  );
};

export default DataMatchRegex;
