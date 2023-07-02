'use client'

import Input from '@/components/input/input'
import { useCallback, useState } from 'react'
import cl from './page.module.css'


const Auth = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])

    return (

        <div className={cl.auth}>
            <div className={cl.container}>
                <nav className={cl.nav}>
                    <img className={cl.logo} src="/images/logo.png" alt="Logo" />
                </nav>
                <div className={cl.content}>
                    <div className={cl.inner}>
                        <h2 className={cl.title}>
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className={cl.article}>
                            {variant === 'register' && (
                                 <Input
                                 label='Username'
                                 onChange={(e) => setName(e.target.value)}
                                 id={'name'}
                                 value={name}
                             />
                            )}
                           
                            <Input
                                label={'Email'}
                                onChange={(e) => setEmail(e.target.value)}
                                id={'email'}
                                type={'email'}
                                value={email}
                            />
                            <Input
                                label={'Password'}
                                onChange={(e) => setPassword(e.target.value)}
                                id={'password'}
                                type={'password'}
                                value={password}
                            />
                        </div>
                        <button className={cl.btn}>
                            {variant === 'login' ? 'login' : 'Sign up'}
                        </button>
                        <p className={cl.p}>
                            {variant === 'login' ? 
                            'First time using Netfilx?' 
                            : 'Already have an accuont?'}
                            
                            <span onClick={toggleVariant}>
                                {variant === 'login' ? 'Create an account' : 'Login'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth