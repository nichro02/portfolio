import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Project.module.css'

function Project(props){
    return(
        <div className={styles.card}>            
            <h3>{props.title}</h3>
            <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '10px'}}>
                <Image
                    src={props.src}
                    alt={props.alt}
                    width={500}
                    height={300}
                
                />
            </div>            
            <p>{props.description}</p>
            <span className={styles.techSpan}>
                {props.tech_stack.map(item => {
                    return <li key={item}>{item}</li>
                })}
            </span>
            <div className={styles.buttonDiv}>

            
            <span className={styles.buttonSpan}>
                <a
                    href={props.github}
                    target='_blank'
                >
                    <button className={styles.button}>
                        Github repo
                    </button>
                </a>
                <a
                    href={props.live_site}
                    target='_blank'
                >
                    <button className={styles.button}>
                        Live site
                    </button>
                </a>
            </span>
            </div>
        </div>
    )
}

export default Project