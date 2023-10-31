//Board details
import Container from '@mui/material/Container'
import SignInSide from '~/components/Login'

function Page() {
    return (
        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
            <SignInSide />
        </Container >
    )
}
export default Page