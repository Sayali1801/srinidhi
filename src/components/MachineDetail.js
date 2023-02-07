import Data from '../Data.json';
import '../Styles/MachineDetail.css';
function MachineDetail(){
    return(
        <section className='machineDetail-main'>
        {Data.product_basic_details.map((item)=>{
            return(
                <div className='machineDetail-left'>

                <img src={require('../Images/' + item.product_img)} alt="product machine"/>
                <h1>{item.product_price}</h1>
                <button>{item.product_boucher}</button>
                <br/>
                <button>{item.product_enquiry}</button>

                </div>

            )
        })}
{Data.product_full_datails.map((item)=>{
    return(
        <div className='machineDetail-right'>
        <div className='machine-headings'>
            <h1>{item.product_name}</h1>
            <h2>{item.product_sub_title}</h2>
            <p>{item.product_desc}</p>
        </div>
        {Data.product_table_details.map((item)=>{
            return(
                <table className='product-detail-table'>
                    <tr>
                        <th>{item.product_table_title}</th>
                    </tr>
                    <tr>
                        <td>{item.product_table_data}</td>
                    </tr>
                </table>
            )
        })
        }
        </div>

    )
})}


        </section>
    )
}
export default MachineDetail;