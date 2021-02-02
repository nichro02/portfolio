import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Contact.module.css'

function Contact(props){
    return(
        <a href={props.link} title={props.alt}>
            <Image
                src={props.src}
                alt={props.alt}
                width={35}
                height={30}
            />
        </a>
    )
}

export default Contact