import { _users } from '#/_mock';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

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

import { CONFIG } from 'src/config-global';

export default function PatientPage() {
  const { t } = useTranslation('user');

  const i18n = {
    labelRowsPerPage: 'Linhas por Página',
    name: 'Nome',
    company: 'Empresa',
    role: 'Papel',
    isVerified: 'Verificado',
    status: 'Status',
    actions: '',
  };

  const i18nEn = {
    labelRowsPerPage: 'Lines per Page',
    name: 'Name',
    company: 'Company',
    role: 'Role',
    isVerified: 'Verified',
    status: 'Status',
    actions: '',
  };

  console.log(i18nEn);

  const table = useTable();

  const [filterName, setFilterName] = useState('');

  const dataFiltered: UserProps[] = applyFilter({
    inputData: _users,
    comparator: getComparator(table.order, table.orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <>
      <Helmet>
        <title> {`Pacientes - ${CONFIG.appName}`}</title>
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
                  rowCount={_users.length}
                  numSelected={table.selected.length}
                  onSort={table.onSort}
                  onSelectAllRows={(checked) =>
                    table.onSelectAllRows(
                      checked,
                      _users.map((user) => user.id)
                    )
                  }
                  headLabel={[
                    { id: 'name', label: i18n.name },
                    { id: 'company', label: i18n.company },
                    { id: 'role', label: i18n.role },
                    { id: 'isVerified', label: i18n.isVerified, align: 'center' },
                    { id: 'status', label: i18n.status },
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
                    emptyRows={emptyRows(table.page, table.rowsPerPage, _users.length)}
                  />

                  {notFound && <TableNoData searchQuery={filterName} />}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            component="div"
            page={table.page}
            count={_users.length}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={table.onChangeRowsPerPage}
            labelRowsPerPage={i18n.labelRowsPerPage}
          />
        </Card>
      </DashboardContent>
    </>
  );
}
