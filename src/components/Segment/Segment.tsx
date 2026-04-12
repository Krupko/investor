import css from './Segment.module.scss';

import React from 'react';

export const Segment = ({
  title,
  size = 1,
  subtitle,
  children,
}: {
  title: React.ReactNode;
  size?: 1 | 2;
  subtitle?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section className={css.title}>
      {size === 1 ? (
        <h1 className={css.title}>{title}</h1>
      ) : (
        <h2 className={css.titleh2}>{title}</h2>
      )}
      {subtitle && <span className={css.subtitle}>{subtitle}</span>}
      {children && <div className={css.content}>{children}</div>}
    </section>
  );
};
