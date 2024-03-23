import TableUserMetrics from '../../../../ui/Table/UserMetrics'

const TableUserData = ({ fetchData, setFetchData }) => {

    return (
        <section>
            <TableUserMetrics 
                fetchData={fetchData}
                setFetchData={setFetchData}
            />
        </section>
    )
}

export default TableUserData