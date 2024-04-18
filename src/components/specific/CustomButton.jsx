// CustomButton.js
import styles from '../../styles/CustomButton.module.scss';

export default function CustomButton({ children, variant = '' }) {
    // Compute class names based on the variant prop
    const buttonClassName = `${styles.customButton} ${variant === 'silver' ? styles.silver : ''}`;

    return (
        <button className={buttonClassName}>
            {children}
        </button>
    );
}
