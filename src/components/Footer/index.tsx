import { ReactElement } from 'react';
import DevicesIcon from '@mui/icons-material/Devices';

import styles from './footer.module.css';
import Link from 'next/link';

const Footer = (): ReactElement => {
  return (
    <footer>
      <div className='container'>
        <div className={styles['footer__author']}>
          <DevicesIcon className={styles['footer__author-icon']} />

          C. Squire

          {process.env.NEXT_PUBLIC_GITHUB_URL && (
            <>
              <span className={styles['footer__author-spacer']}>|</span>
              <Link href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank">
                Github
              </Link>
            </>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer;
