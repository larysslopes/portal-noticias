import { Container, Wrapper, Logo, Menu, Link } from "./style";

function Header(){
    return (
        <Container>
            <Wrapper>
                <Logo> Portal de Noticias </Logo>
                <Menu>
                    <Link> Home </Link>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default Header