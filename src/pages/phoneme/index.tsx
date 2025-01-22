import { _phonemes } from '#/_mock';
import { CONFIG } from '#/config-global';
import { Helmet } from 'react-helmet-async';
import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PhonemeService from '#/services/phoneme-service';

import type { UserProps } from '#/components/table-phoneme/user-table-row';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { DashboardContent } from '#/layouts/dashboard';

import { Iconify } from '#/components/iconify';
import { Scrollbar } from '#/components/scrollbar';
import { TableNoData } from '#/components/table-phoneme/table-no-data';
import { UserTableRow } from '#/components/table-phoneme/user-table-row';
import { UserTableHead } from '#/components/table-phoneme/user-table-head';
import { TableEmptyRows } from '#/components/table-phoneme/table-empty-rows';
import { UserTableToolbar } from '#/components/table-phoneme/user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '#/components/table-phoneme/utils';

// ----------------------------------------------------------------------

export default function PhonemePage() {
  const { t } = useTranslation('phoneme');

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // https://18.react.dev/reference/react/useEffect
  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]); // ✅ All dependencies declared
  // ...

  // const fobar = await phonemeService.fetchPhonemes('');
  // all.concat(fobar.data);

  // const dataFiltered: UserProps[] = applyFilter({
  //   inputData: all,
  //   comparator: getComparator(table.order, table.orderBy),
  //   filterName,
  // });

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
                  rowCount={_phonemes.length}
                  numSelected={table.selected.length}
                  onSort={table.onSort}
                  onSelectAllRows={(checked) =>
                    table.onSelectAllRows(
                      checked,
                      _phonemes.map((phoneme) => phoneme.id)
                    )
                  }
                  headLabel={[
                    { id: 'name', label: i18n.name },
                    { id: 'company', label: i18n.symbol },
                    { id: 'role', label: i18n.type },
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
                    emptyRows={emptyRows(table.page, table.rowsPerPage, _phonemes.length)}
                  />

                  {notFound && <TableNoData searchQuery={filterName} />}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            component="div"
            page={table.page}
            count={_phonemes.length}
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

// ----------------------------------------------------------------------

export function useTable() {
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState('name');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState<string[]>([]);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const onSort = useCallback(
    (id: string) => {
      const isAsc = orderBy === id && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    },
    [order, orderBy]
  );

  const onSelectAllRows = useCallback((checked: boolean, newSelecteds: string[]) => {
    if (checked) {
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }, []);

  const onSelectRow = useCallback(
    (inputValue: string) => {
      const newSelected = selected.includes(inputValue)
        ? selected.filter((value) => value !== inputValue)
        : [...selected, inputValue];

      setSelected(newSelected);
    },
    [selected]
  );

  const onResetPage = useCallback(() => {
    setPage(0);
  }, []);

  const onChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const onChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      onResetPage();
    },
    [onResetPage]
  );

  return {
    page,
    order,
    onSort,
    orderBy,
    selected,
    rowsPerPage,
    onSelectRow,
    onResetPage,
    onChangePage,
    onSelectAllRows,
    onChangeRowsPerPage,
  };
}
