import React, {PropTypes} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


const getCaret = direction => {
  if (direction === 'asc') {
    return (
      <span> <i className="fa fa-sort-asc" aria-hidden="true"/></span>
    );
  }

  if (direction === 'desc') {
    return (
      <span> <i className="fa fa-sort-desc" aria-hidden="true"/></span>
    );
  }

  return (
    <span> <i className="fa fa-sort" aria-hidden="true"/></span>
  );
};


class CourseList extends React.Component {

  constructor(props) {
    super(props);

    this.options = {
      sortIndicator: true,
      noDataText: 'Sem resultados encontrados'
    };

    this.selectRowProp = {
      mode: 'radio',
      bgColor: '#c1f291',
      onSelect: props.handleRowSelect,
      clickToSelect: true,
      hideSelectColumn: true
    };
  }


  render() {


    return (
      <BootstrapTable data={this.props.courses} pagination search={true} multiColumnSearch={true}
                      selectRow={this.selectRowProp} options={this.options} bordered={true}
                      striped hover condensed>
        <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>

        <TableHeaderColumn
          dataField="title"
          dataSort={true}
          caretRender={getCaret}
          columnTitle
        >
          Livro
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="isbn"
          dataSort={true}
          caretRender={getCaret}
          columnTitle
        >
          ISBN
        </TableHeaderColumn>


        <TableHeaderColumn
          dataField="authorId"
          dataSort={true}
          caretRender={getCaret}
          columnTitle
        >
          Autor
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="category"
          dataSort={true}
          caretRender={getCaret}
          searchable={false}
          columnTitle
        >
          Editora
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="length"
          dataSort={true}
          caretRender={getCaret}
          searchable={false}
          filter={ {
            type: 'NumberFilter',
            delay: 1000,
            numberComparators: [ '=', '>', '<=' ]
          } }
          columnTitle
        >
          Ano
        </TableHeaderColumn>

      </BootstrapTable>
    );
  }

}


CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  handleRowSelect: PropTypes.func.isRequired
};


export default CourseList;
