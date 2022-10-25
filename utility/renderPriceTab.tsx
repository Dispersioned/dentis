import { Options, documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';

type RichText = (string | false | JSX.Element)[];

export const renderPriceTab = (data: Document) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Typography>{children}</Typography>,
      [BLOCKS.TABLE]: (node, children) => (
        <Table>
          <colgroup>
            <col width="25%" />
            <col width="55%" />
            <col width="auto" />
          </colgroup>
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
