import css from './Segment.module.scss';

import React from 'react';

export const Segment = ({
  title,
  size = 1,
  subtitle,
  children,
  className,
}: {
  title: React.ReactNode;
  size?: 1 | 2;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`${css.segment} ${className}`}>
      {size === 1 ? (
        <h1 className={css.title}>{title}</h1>
      ) : (
        <h2 className={css.titleh2}>{title}</h2>
      )}
      {subtitle && <span className={css.subtitle}>{subtitle}</span>}
      {children}
    </section>
  );
};
