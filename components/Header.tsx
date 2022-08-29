// @ts-ignore
import styled from "styled-components";
import logo from "../assets/logo.png";

const Header = () => {
    const isPostPage = false;

    return (
        <Container>
            <img src={logo.src} alt=""/>
            {isPostPage ?
                <div>

                </div>
                :
                <div>

                </div>}
        </Container>
    )
}
export default Header;

const Container = styled.div`

`;