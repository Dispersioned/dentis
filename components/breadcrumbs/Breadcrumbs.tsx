import { Breadcrumbs as MUIBreadcrumbs, Link as MUILink, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { CrumbLink, createCrumbsLinks } from '../../utility/createCrumbsLinks';
import { isContentfulId } from '../../utility/isContentfulId';

export const Breadcrumbs = () => {
  const router = useRouter();
  const crumbs = router.asPath.split('/').filter((crumb) => crumb !== '' && !isContentfulId(crumb));
  const links = createCrumbsLinks(crumbs);

  if (crumbs.length < 2) return <div />;

  return (
    <MUIBreadcrumbs aria-label="breadcrumb" style={{ marginTop: 15 }}>
      {links.map((link: CrumbLink, index: number) => {
        if (index === links.length - 1) {
          return (
            <Typography key={link.to} color="text.primary">
              {link.text}
            </Typography>
          );
        }
        return (
          <Link key={link.to} href={`/${link.to}`}>
            <MUILink style={{ cursor: 'pointer' }} component="a" key={link.to} underline="hover" color="inherit">
              {link.text}
            </MUILink>
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};
