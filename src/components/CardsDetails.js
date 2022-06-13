import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { DLT,ADD, REMOVE } from '../redux/actions/action';


export const CardsDetails = () => {

  const [data, setData] = useState([])

  const { id } = useParams();

  const dispatch = useDispatch();

  const history = useNavigate();

  //add data
  const send=(e)=>{
    // console.log(e)
    dispatch(ADD(e))

  }

  const dlt = (id) =>{
    dispatch(DLT(id));
    history('/');
}

//remove one

const remove =(item)=>{
  dispatch(REMOVE(item))
}

  const getdata = useSelector((state) => state.cartreducer.carts)
  // console.log(getdata)

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    })
    setData(comparedata)
  }

  useEffect(() => {
    compare();
  }, [id])

  return (
    <>
      <div className='container mt-2'>
        <h2 className='text-center'>Items Details Page</h2>

        <section className='container mt-3'>
          <div className='iteamsdetails'>
            {
              data.map((ele) => {
                return (
                  <>
                    <div className='items_img'>
                      <img src={ele.filename} style={{ height: '14rem',marginLeft:20 }} alt='' />
                    </div>

                    <div className='details'>
                      <Table>
                        <tr>
                          <td>
                            <p><strong>Product</strong> : {ele.title}</p>
                            <p><strong>Price</strong> : $ {ele.price}</p>
                            <p><strong>Type</strong> :  {ele.type}</p>
                            <p><strong>Total</strong> :  $ {ele.price * ele.quantity}</p>
                            <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:'pointer',background:'#ddd',color:'#111'}}>
                              <span style={{fontSize:24}} onClick={ele.quantity <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                              <span style={{fontSize:22}}>{ele.quantity}</span>
                              <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>
                            </div>
                          </td>
                          <td>
                            <p><strong>Rating : </strong><span style={{ background: 'green', color: "#fff", padding: "2px 5px", borderRadius: '5px' }}>3.5 ★</span></p>
                            <p><strong>Description :</strong><span >{ele.description}</span></p>
                            <p><strong>Remove :</strong><span ><i className='fas fa-trash'onClick={()=>dlt(ele.id)} style={{ color: 'red', fontSize: 20, cursor: 'pointer' }}></i></span></p>

                          </td>
                        </tr>
                      </Table>
                    </div>
                  </>
                )
              })
            }

          </div>
        </section>
      </div>
    </>
  )
}
