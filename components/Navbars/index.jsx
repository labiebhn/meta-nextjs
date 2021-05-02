import React from 'react';
import Link from 'next/link';
import styles from './style.module.css';

function Navbar(props) {
  return (
    <div className={styles.Navbar}>
      <Link href="/"><a className={styles.navLink}>Home</a></Link>
      <Link href="/about"><a className={styles.navLink}>About</a></Link>
      <Link href="/blog"><a className={styles.navLink}>Blog</a></Link>
    </div>
  );
}

export default Navbar;
