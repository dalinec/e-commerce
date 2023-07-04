import { colors } from '@src/app/theme';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { NavbarProps } from 'sanity';

const linkStyle: CSSProperties = {
  textDecoration: 'none',
  color: colors.brand.primary,
};

const StudioNavbar = (props: NavbarProps) => {
  return (
    <div>
      <div
        style={{
          padding: '0.5rem 2rem',
          display: 'flex',
          gap: '2rem',
        }}
      >
        <div>
          <Link href={'/'} style={linkStyle}>
            Back Home
          </Link>
        </div>
        <div>
          <Link href={'/products'} style={linkStyle}>
            View Products
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
