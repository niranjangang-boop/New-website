import EducationArticle from './EducationArticle.jsx';
import hi from '../data/translations-extra-hi.json';

export default function HindiArticle() {
  return <EducationArticle routeLang="hi" preloaded={{ hi }} />;
}
