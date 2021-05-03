import { RowEditor } from "../row_editor";
import styles from './home.module.css'
import { Header } from './header';

export const Home = (props) => (
    <div className={styles.content}>
        <Header />
        <RowEditor />
    </div>
    
)