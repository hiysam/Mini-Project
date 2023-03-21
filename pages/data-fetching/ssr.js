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
                       <MDBCol md='4'>
                          <MDBCardImage src={props?.img} alt='...' fluid />
                       </MDBCol>
                       <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>{props?.title}</MDBCardTitle>
                                <MDBCardText>
                                    <small className='text-muted'>{props?.description}</small>
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

export async function getServerSideProps() {
    return {
        props: {
            title: "Server Side Rendering",
            img: "../Server-sideRendering.PNG",
            description: "Cara kerja Next.js pada server side rendering adalah server mengubah package React dan JavaScript menjadi HTML setiap kali browser memanggil halaman tersebut."
        }
    }
}