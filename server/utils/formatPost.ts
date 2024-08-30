import postgres, { Row, ValuesRowList } from 'postgres';

const formatPost = (query: ValuesRowList<Row[]>): string[] => {
  return [query[0][1], query[0][2], query[0][3], query[0][4]]
};

export default formatPost;