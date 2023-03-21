import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardHeader,
    MDBContainer
  } from 'mdb-react-ui-kit';

export default function SSG(){
    return(
        <p>SSG</p>
    )
}

export async function getStaticPaths(context) {
    const [err, data] = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((response) => {
        return [null, response];
      })
      .catch((err) => {
        return [err, null];
      });
  
    if (err) {
      return {
        paths: [],
        fallback: false,
      };
    }
    let paths = [];
  
    if (Array.isArray(data) && data.length > 0) {
      paths = data.map((post) => ({
        params: {
          ssg: `${post.id.toString()}`,
        },
      }));
    }
  
    return {
      paths: paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps(context) {
    let data = [];
  
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((response) => {
        data = response;
      })
      .catch((err) => {
        data = [];
      });
  
    return {
      props: {
        data,
      },
    };
  }