export const DataMatchRegex = (date: string): string => {
  return date.replace(
    /(^(\d{4})-(\d{2})-(\d{2}))T((\d{2}):(\d{2}):(\d{2}))Z$/gm,
    '$4/$3/$2 - $6:$7H',
  );
};

export default DataMatchRegex;
