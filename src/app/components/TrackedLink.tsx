'use client';

import Link from 'next/link';
import { trackEvent } from './Analytics';
import { ComponentProps } from 'react';

interface TrackedLinkProps extends ComponentProps<typeof Link> {
  eventName: string;
  eventProperties?: Record<string, unknown>;
}

export default function TrackedLink({ 
  eventName, 
  eventProperties = {}, 
  onClick,
  children, 
  ...props 
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent(eventName, {
      href: props.href,
      ...eventProperties,
    });
    onClick?.(e);
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
