import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';

export default function SSR(props) {
    return (
        <div>
            <Header />
            <MDBContainer className="mt-5 mb-5">
                <MDBCard style={{ maxWidth: '100%' }}>
                   <MDBRow className='g-0'>
                       <MDBCol md='12'>
                            <MDBCardBody>
                                <MDBCardTitle>SPEK API</MDBCardTitle>
                                <MDBCardText>
                                    <small className='text-muted'>POST : http://localhost:3200/api/sdb</small>
                                </MDBCardText>
                                <MDBCardText>
                                    <small className='text-muted'>DELETE : http://localhost:3200/api/sdb</small>
                                </MDBCardText>
                                <MDBCardText>
                                    <small className='text-muted'>GET : http://localhost:3200/api/sdb</small>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBContainer>
            <Footer />
        </div>
    );
}