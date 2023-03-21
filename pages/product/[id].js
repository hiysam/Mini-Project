import { useEffect, useState } from "react"
import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';

export default function ProductDetail({ id }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        if (visible) {
            setLoading(true);
            fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((result) => {
                setTimeout(() => {
                    setData(result);
                    setLoading(false);
                }, 4000)

            }).catch((err) => {
                setLoading(false);
            })
        }
    }, [visible]);
    console.log(data)

    return (
        <div>
            <Header />
            <MDBContainer className="mt-5 mb-5">
                {
                    loading ? 'LOADING...' :
                        Array.isArray(data) && data.length > 0 &&
                        data.map((item) => {
                            if(item.userId == id){
                                return (
                                    <MDBCard style={{ maxWidth: '100%' }}>
                                        <MDBRow className='g-0'>
                                            <MDBCol md='12'>
                                                <MDBCardBody>
                                                    <MDBCardTitle>{item.title}</MDBCardTitle>
                                                    <MDBCardText>
                                                        <small className='text-muted'>User ID :{item.userId}</small>
                                                    </MDBCardText>
                                                    <MDBCardText>
                                                        <small className='text-muted'>{item.body}</small>
                                                    </MDBCardText>
                                                </MDBCardBody>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCard>
                                )
                            }
                            
                        })
                }
            </MDBContainer>
            <Footer />
        </div>
        
    )
}

export async function getServerSideProps(context) {
    let { id } = context.params

    return {
        props: {
            id
        }
    }

}