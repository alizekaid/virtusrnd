/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import BlogListPaginator from '@theme/BlogListPaginator';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './BlogListPage.module.css';

export default function BlogListPage(props) {
  const {siteConfig} = useDocusaurusContext();
  const {metadata, items, recentPosts = items} = props;
  return (
    <Layout
      title={metadata.title}
      description={metadata.description || siteConfig.tagline}>
      <main className={styles.blogMainWithSidebar}>
        <aside className={styles.sidebar} aria-label="Blog recent posts navigation">
          <div className={styles.sidebarTitle}>Recent posts</div>
          <ul className={styles.sidebarList}>
            {recentPosts.slice(0, 5).map(({content: BlogPostContent}) => (
              <li key={BlogPostContent.metadata.permalink} className={styles.sidebarItem}>
                <Link to={BlogPostContent.metadata.permalink} className={styles.sidebarLink}>
                  {BlogPostContent.metadata.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <section className={styles.blogContentSection}>
          <h1 className={styles.pageTitle}>{metadata.title}</h1>
          <div className={styles.blogGrid}>
            {items.map(({content: BlogPostContent}) => {
              const meta = BlogPostContent.metadata;
              const author = meta.authors && meta.authors[0];
              return (
                <div className={styles.card} key={meta.permalink}>
                  <h2 className={styles.cardTitle}>
                    <Link to={meta.permalink}>{meta.title}</Link>
                  </h2>
                  <p className={styles.cardDesc}>{meta.description || meta.title}</p>
                  <div className={styles.cardMeta}>
                    <span>{meta.formattedDate}</span>
                    {author && (
                      <span className={styles.cardAuthor}>
                        {author.imageURL && (
                          <img src={author.imageURL} alt={author.name} className={styles.authorImg} />
                        )}
                        {author.name}
                      </span>
                    )}
                  </div>
                  <Link className={styles.readMore} to={meta.permalink}>Read more</Link>
                </div>
              );
            })}
          </div>
          <BlogListPaginator metadata={metadata} />
        </section>
      </main>
    </Layout>
  );
}
