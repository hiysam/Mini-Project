import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import { MDBContainer } from 'mdb-react-ui-kit';
import { useEffect, useState } from "react"
import Table from '@/src/components/table';

export const config = {
    hydrate: true
}

export default function SSRAndCSR(props){
    // const [ data, setData ] = useState(()=> {
    //     if(props?.data) return props?.data
    //     return []
    // })
    const [ data, setData ] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(true);
    const title = "SSR DAN CSR";

    useEffect(() => {
        if (visible && props?.data) {
            setLoading(false);
            setData(props?.data);
        }
    }, [visible]);

    const columns = [
        {
            name: 'User ID',
            selector: row => row?.userId,
            width: '5%'
        },
        {
            name: 'ID',
            selector: row => row?.id,
            width: '5%'
        },
        {
            name: 'Title',
            selector: row => row?.title,
            width: '20%'
        },
        {
            name: 'Body',
            selector: row => row?.body,
        }
    ];

    return(
        <div>
            <Header />
            <MDBContainer className="mt-5 mb-5">
                {
                    loading ? 'LOADING...' :
                    Array.isArray(data) && data.length > 0 &&
                    <Table 
                        title={title}
                        columns={columns}
                        data={data}
                    />
                }
            </MDBContainer>
            <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    let data = []

    data = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((response) => {
        return response;
    }).catch((err) => {
        return []
    })
    return {
        props: {
            data: data ?? []
        }
    }
}