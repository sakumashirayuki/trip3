import styles from './index.less';
import Products from '../components/products'

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Products />
    </div>
  );
}
