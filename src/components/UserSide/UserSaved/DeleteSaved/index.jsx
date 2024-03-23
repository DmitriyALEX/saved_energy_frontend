import SubNavigationBtn from '../../../../ui/Buttons/SubNavigationBtn'

const DeleteSaved = ({ postId, renderedData, setRenderedData }) => {

    const URL = import.meta.env.VITE_URL_DEL_POST.replace(':postId', postId)
   
    function deleteItem() {
        try {
            fetch(URL, {
                method: 'DELETE',
            })
            .then(()=> {
                const updatedData = renderedData.filter(item => item._id !== postId);
                setRenderedData(updatedData);
            })
        } catch(e) {
            console.log(e)
        }
    }

    return <>
            <SubNavigationBtn 
                onClick={deleteItem}
                label="✖"
            />
        </>
}

export default DeleteSaved