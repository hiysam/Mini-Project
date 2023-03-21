import DataTable from 'react-data-table-component';

export default function Table(props){
    return(
        <DataTable
            title={props?.title}
            columns={props?.columns}
            data={props?.data}
            pagination
        />
    )
}   