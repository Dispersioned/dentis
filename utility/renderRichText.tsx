import { Options, documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';

type RichText = (string | false | JSX.Element)[];

export const renderRichText = (data: Document) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Typography>{children}</Typography>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <Typography variant="h1" fontWeight="bold" style={{ marginTop: '3rem' }}>
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Typography variant="h2" fontWeight="bold" style={{ marginTop: '2.5rem' }}>
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Typography variant="h3" fontWeight="bold" style={{ marginTop: '2.2rem' }}>
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Typography variant="h4" fontWeight="bold" style={{ marginTop: '2rem' }}>
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <Typography variant="h5" fontWeight="bold" style={{ marginTop: '1.5rem' }}>
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <Typography variant="h6" fontWeight="bold" style={{ marginTop: '1.2rem' }}>
          {children}
        </Typography>
      ),
      [BLOCKS.TABLE]: (node, children) => (
        <Table>
          <TableBody>{children}</TableBody>
        </Table>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => <TableRow>{children}</TableRow>,
      [BLOCKS.TABLE_HEADER_CELL]: (node, children) => <TableCell>{children}</TableCell>,
      [BLOCKS.TABLE_CELL]: (node, children) => <TableCell>{children}</TableCell>,
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
