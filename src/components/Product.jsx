import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
flex: 1;
margin: 5px;

`
const Circle = styled.div``
const Image = styled.div``
const Info = styled.div``
const Icon = styled.div``

function Product({item}) {
    return (
        <Container>
            <Circle/>
            <Image src={item.img} />
         
                <Info>
                    <Icon>
                        <ShoppingCartCheckoutOutlined/>
                    </Icon>
                    <Icon>
                        <SearchOutlined/>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Info>
          
        </Container>
      )
}

export default Product