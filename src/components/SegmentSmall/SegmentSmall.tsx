import css from './SegmentSmall.module.scss';
import React from 'react';

export const SegmentSmall = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`${css.segmentSmall} ${className}`}>{children}</section>
  );
};
