import React from 'react';

interface BadgeProps {
  text: string;
  variant?: 'sale' | 'soldOut' | 'primary';
}

export const Badge: React.FC<BadgeProps> = ({ text, variant = 'primary' }) => {
  let bgColor = 'var(--color-accent)';
  let textColor = '#ffffff';

  if (variant === 'sale') {
    bgColor = 'var(--color-accent)';
  } else if (variant === 'soldOut') {
    bgColor = '#000000';
  }

  return (
    <span style={{
      backgroundColor: bgColor,
      color: textColor,
      padding: '4px 8px',
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: '0.05em',
      display: 'inline-block'
    }}>
      {text}
    </span>
  );
};
