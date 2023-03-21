import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import { MDBContainer } from 'mdb-react-ui-kit';
import { useEffect, useState } from "react"
import Table from '@/src/components/table';

export default function CSR(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(true);
    const title = 'Client Side Rendering (CSR)';

    useEffect(() => {
        if (visible) {
            setLoading(true);
            fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {
                setTimeout(() => {
                    setData(result);
                    setLoading(false);
                }, 4000)

            }).catch((err) => {
                setLoading(false);
            })
        }
    }, [visible]);

    const columns = [
        {
            name: 'Nama Barang',
            selector: row => row.title,
            width: '15%'
        },
        {
            name: 'Kategori',
            selector: row => row.category,
            width: '5%'
        },
        {
            name: 'Harga',
            selector: row => row.price,
            width: '5%'
        },
        {
            name: 'description',
            selector: row => row.description,
        }
    ];
    console.log(data)

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