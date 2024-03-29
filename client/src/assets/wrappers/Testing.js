import styled from 'styled-components'
const Wrapper=styled.main`
nav{
    width:var(--fluid-width) ;
    max-width:var(--max-width);
    margin:3rem auto;
    height: var(--nav-height);
    display:flex;
    align-items: centers;
}
.page{
    min-height: calc(100vh - var(--nav-height));
    display:flex ;
    align-items:flex-start ;
    margin-top:3rem ;

    h1{
        font-weight:700;
        span{
            color:var(--primary-500)
        }

    }
    p{
        color:var(--grey-600)
    }
    .main-img{
        display:none ;
    }
    @media (min-width:992px){
        .page{
            grid-template-columns:1fr 1fr ;
            column-gap:3rem;
        }
        .main-img{
            display: block;
            
        }
        

    }
}
.info{
    margin-right:2rem ;
}
.logo {
    
        width: 300px;
        height:80px ;

    
    
}
`
export default Wrapper
