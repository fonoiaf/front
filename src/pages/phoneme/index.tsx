import { _phonemes } from '#/_mock';
import { CONFIG } from '#/config-global';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import PhonemeService from '#/services/phoneme-service';
import { useState, useEffect, useCallback } from 'react';

import type { UserProps } from '#/components/table/user-table-row';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { DashboardContent } from '#/layouts/dashboard';

import { useTable } from '#/hooks/use-table';

import { emptyRows, applyFilter, getComparator } from '#/utils/table';

import { Iconify } from '#/components/iconify';
import { Scrollbar } from '#/components/scrollbar';
import { TableNoData } from '#/components/table/table-no-data';
import { UserTableRow } from '#/components/table/user-table-row';
import { UserTableHead } from '#/components/table/user-table-head';
import { TableEmptyRows } from '#/components/table/table-empty-rows';
import { UserTableToolbar } from '#/components/table/user-table-toolbar';

export default function PhonemePage() {
  const { t } = useTranslation('phoneme');
  const dataPhonemes = _phonemes;
  console.log(dataPhonemes);

  const i18n = {
    labelRowsPerPage: 'Linhas por Página',
    name: 'Nome',
    symbol: 'Simbolo',
    type: 'Tipo',
    actions: '',
  };

  const table = useTable();
  const [filterName, setFilterName] = useState('');
  const [dataFiltered, setDataFiltered] = useState<UserProps[]>([]);

  const phonemeService = PhonemeService();

  const handleSubmit = useCallback(() => {
    const all: UserProps[] = [];
    phonemeService
      .fetchPhonemes('')
      .then((response) => {
        // handle success
        console.log(response);

        (response.data as Array<any>).forEach((element: any) => {
          all.push(element);
          // console.log(all);
        });

        const bar = applyFilter({
          inputData: response.data,
          comparator: getComparator(table.order, table.orderBy),
          filterName,
        });

        setDataFiltered(() => [...bar]);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }, [filterName, phonemeService, table.order, table.orderBy]);

  // https://18.react.dev/reference/react/useEffect
  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]); // ✅ All dependencies declared

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <>
      <Helmet>
        <title> {`Fonemas - ${CONFIG.appName}`}</title>
      </Helmet>

      <DashboardContent>
        <Box display="flex" alignItems="center" mb={5}>
          <Typography variant="h4" flexGrow={1}>
            {t('title')}
          </Typography>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            {t('new')}
          </Button>
        </Box>

        <Card>
          <UserTableToolbar
            numSelected={table.selected.length}
            filterName={filterName}
            onFilterName={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFilterName(event.target.value);
              table.onResetPage();
            }}
          />

          <Scrollbar>
            <TableContainer sx={{ overflow: 'unset' }}>
              <Table sx={{ minWidth: 800 }}>
                <UserTableHead
                  order={table.order}
                  orderBy={table.orderBy}
                  rowCount={dataFiltered.length}
                  numSelected={table.selected.length}
                  onSort={table.onSort}
                  onSelectAllRows={(checked) =>
                    table.onSelectAllRows(
                      checked,
                      dataFiltered.map((phoneme) => phoneme.id)
                    )
                  }
                  headLabel={[
                    { id: 'name', label: i18n.name },
                    { id: 'symbol', label: i18n.symbol },
                    { id: 'type', label: i18n.type },
                    { id: '' },
                  ]}
                />
                <TableBody>
                  {dataFiltered
                    .slice(
                      table.page * table.rowsPerPage,
                      table.page * table.rowsPerPage + table.rowsPerPage
                    )
                    .map((row) => (
                      <UserTableRow
                        key={row.id}
                        row={row}
                        selected={table.selected.includes(row.id)}
                        onSelectRow={() => table.onSelectRow(row.id)}
                      />
                    ))}

                  <TableEmptyRows
                    height={68}
                    emptyRows={emptyRows(table.page, table.rowsPerPage, dataFiltered.length)}
                  />

                  {notFound && <TableNoData searchQuery={filterName} />}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            component="div"
            page={table.page}
            count={dataFiltered.length}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            rowsPerPageOptions={[5, 10, 25, 50]}
            onRowsPerPageChange={table.onChangeRowsPerPage}
            labelRowsPerPage={i18n.labelRowsPerPage}
          />
        </Card>
      </DashboardContent>
    </>
  );
}
