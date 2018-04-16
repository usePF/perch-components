import React from "react";
import PropTypes from "prop-types";
import { Data } from "perch-data";
import { TableRow, TableCell, Typography } from "material-ui";
import { BaseTable as Table, LoadingRow } from "./";

const ErrorRow = ({ columnCount }) => (
  <TableRow>
    <TableCell colSpan={columnCount}>
      <Typography type="caption" align="center">
        An error occurred while fetching this data.
      </Typography>
    </TableCell>
  </TableRow>
);

ErrorRow.propTypes = {
  columnCount: PropTypes.number.isRequired
};

class AutoTable extends React.Component {
  constructor(props) {
    super(props);

    const { initialOrdering = null } = props;
    let sortColumn = null;
    let sortDirection = null;

    if (initialOrdering) {
      const firstCharIsDirection = initialOrdering.slice(0, 1) === "-";
      sortColumn = firstCharIsDirection
        ? initialOrdering.slice(1)
        : initialOrdering;
      sortDirection = firstCharIsDirection ? "desc" : "asc";
    }

    this.state = {
      ordering: initialOrdering,
      page: 1,
      rowsPerPage: props.rowsPerPage,
      search: null,
      sortColumn,
      sortDirection
    };
  }

  getPaginationForData = data => {
    const { rowsPerPageOptions } = this.props;

    if (data && data.total_count > 0) {
      return {
        count: data.total_count,
        onChangePage: this.handleChangePage,
        onChangeRowsPerPage: this.handleChangeRowsPerPage,
        page: data.page_number,
        rowsPerPage: data.page_size,
        rowsPerPageOptions
      };
    }
    return null;
  };

  getTableBodyForResult = ({ data, error, loading }) => {
    const { children, columns } = this.props;
    const { rowsPerPage } = this.state;

    if (data) {
      return children(data);
    } else if (error) {
      return <ErrorRow columnCount={columns.length} />;
    } else if (loading) {
      return [...Array(rowsPerPage || 1)].map((_, index) => (
        <LoadingRow key={index} rows={columns.length} /> // eslint-disable-line react/no-array-index-key
      ));
    }

    return null;
  };

  handleSort = (column, direction) => {
    const ordering = `${direction === "desc" ? "-" : ""}${column}`;
    this.setState({ ordering, sortColumn: column, sortDirection: direction });
  };

  handleSearch = search => this.setState({ search });

  handleChangePage = page => this.setState({ page });

  handleChangeRowsPerPage = rowsPerPage => this.setState({ rowsPerPage });

  render() {
    const {
      action,
      columns,
      filter,
      headerPadding,
      paginatable,
      searchable,
      sortable
    } = this.props;

    const {
      ordering,
      page,
      rowsPerPage,
      search,
      sortColumn,
      sortDirection
    } = this.state;

    const variables = { ...filter, ordering, page, rowsPerPage, search };

    return (
      <Data action={action} variables={variables}>
        {result => (
          <Table
            columns={
              sortable
                ? columns
                : columns.map(({ sortId, ...column }) => column)
            }
            headerPadding={headerPadding}
            onSearch={this.handleSearch}
            onSort={this.handleSort}
            pagination={
              paginatable ? this.getPaginationForData(result.data) : null
            }
            searchable={searchable}
            sortColumn={sortColumn}
            sortDirection={sortDirection}
          >
            {this.getTableBodyForResult(result)}
          </Table>
        )}
      </Data>
    );
  }
}

AutoTable.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string,
        sortId: PropTypes.string
      })
    ])
  ).isRequired,
  filter: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  headerPadding: PropTypes.string,
  initialOrdering: PropTypes.string,
  paginatable: PropTypes.bool,
  rowsPerPage: PropTypes.number,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  searchable: PropTypes.bool,
  sortable: PropTypes.bool
};

AutoTable.defaultProps = {
  filter: null,
  headerPadding: "default",
  paginatable: false,
  rowsPerPage: null,
  rowsPerPageOptions: [10, 25, 50, 100],
  searchable: false,
  initialOrdering: null,
  sortable: false
};

export default AutoTable;
