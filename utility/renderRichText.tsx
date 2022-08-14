import { Options, documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, INLINES } from '@contentful/rich-text-types';
import { Link, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';

import S from '../styles/renderRichText.module.css';

type RichText = (string | false | JSX.Element)[];

export const renderRichText = (data: Document) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Typography>{children}</Typography>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <Typography variant="h1" fontWeight="bold" style={{ margin: '3rem 0 1.5rem' }}>
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Typography variant="h2" fontWeight="bold" style={{ margin: '2.5rem 0 1.1rem' }}>
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Typography variant="h3" fontWeight="bold" style={{ margin: '2.2rem 0 1rem' }}>
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Typography variant="h4" fontWeight="bold" style={{ margin: '2rem 0 0.7rem' }}>
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <Typography variant="h5" fontWeight="bold" style={{ margin: '1.5rem 0 0.5rem' }}>
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <Typography variant="h6" fontWeight="bold" style={{ margin: '1.2rem 0 0.3rem' }}>
          {children}
        </Typography>
      ),
      [BLOCKS.TABLE]: (node, children) => (
        <div style={{ overflowX: 'auto' }}>
          <Table>
            <TableBody>{children}</TableBody>
          </Table>
        </div>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => <TableRow>{children}</TableRow>,
      [BLOCKS.TABLE_HEADER_CELL]: (node, children) => <TableCell>{children}</TableCell>,
      [BLOCKS.TABLE_CELL]: (node, children) => <TableCell>{children}</TableCell>,
      [INLINES.HYPERLINK]: (node, children) => (
        <Link
          href={node.data.uri}
          target="_blank"
          rel="noreferrer"
          color="inherit"
          fontWeight="bold"
          className={S.link}
        >
          {children}
        </Link>
      ),
    },
    renderText: (text) => {
      return text.split('\n').reduce((children: RichText, textSegment: string, index: number) => {
        // eslint-disable-next-line react/no-array-index-key
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return documentToReactComponents(data, options);
};
