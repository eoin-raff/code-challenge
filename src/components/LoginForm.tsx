import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import { getUserById, getUserByUsername } from '../utils/api'
import { UserData } from '../../types'
import { useForm, SubmitHandler } from "react-hook-form"
import { AuthContext } from '../context/AuthContext'
import User from '../classes/user'
import { Box, Button, Container, TextField, Typography } from '@mui/material'

type Inputs = {
    username: string
}

interface LoginFormProps {
    setUser: Dispatch<SetStateAction<User | undefined>>
}
const LoginForm = ({ setUser }: LoginFormProps) => {
    const user = useContext(AuthContext)

    const [username, setUsername] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [apiError, setApiError] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = ({ username }) => setUsername(username)

    useEffect(() => {
        (async () => {
            if (!username) return
            if (isLoading) return
            setIsLoading(true)
            setApiError('')

            try {
                const { id } = await getUserByUsername(username)
                const user = await getUserById(id)
                setUser(new User(user))
                setIsLoading(false)
            } catch (error) {
                setApiError('Error finding user')
                setIsLoading(false)

            }
        })()


    }, [username])
    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <Box flexDirection={'column'}>
            <Container>
                <Box display={'flex'} flexDirection={'column'}>
                    <Box display={'flex'} gap={2} flexDirection={'column'} component={'form'} onSubmit={handleSubmit(onSubmit)}>
                        {/* include validation with required or other standard HTML validation rules */}
                        <TextField id="outlined-basic" label="Username" variant="outlined" {...register("username", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        <Button type="submit" variant='contained'>Log In</Button>
                    </Box>
                    {errors.username && <Typography variant='subtitle1' color='error'>Username is required</Typography>}
                    {apiError && <Typography variant='subtitle1' color='error'>{apiError}</Typography>}
                </Box>
            </Container>
        </Box>
    )
}

export default LoginForm




// export default function App() {

//   )
// }