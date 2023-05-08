import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Learn() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Learn`}
      description="Here we will have some cards showing the different options of the learn section"
    >
      <main>
      Here we will have some cards showing the different options of the learn section...
      </main>
    </Layout>
  );
}
