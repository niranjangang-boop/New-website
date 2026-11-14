import EducationArticle from './EducationArticle.jsx';
import mr from '../data/translations-extra-mr.json';

export default function MarathiArticle() {
  return <EducationArticle routeLang="mr" preloaded={{ mr }} />;
}
