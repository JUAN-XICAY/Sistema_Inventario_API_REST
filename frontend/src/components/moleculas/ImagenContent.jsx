import styled from "styled-components"
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { v } from "../../styles/variables"

export function ImagenContent({imagen}) {
  return (
    <Container>
        <LazyLoadImage placeholder={<v.iconoreact/>} effect="blur"  src={imagen} width={80} height={80} >
        </LazyLoadImage>
      
    </Container>
  )
}

const Container = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 10%;
    overflow: hidden;
    img{
        object-fit: cover;
    }
`