import React from "react"
import styles from "./home.module.scss"

import Header from "components/Header"
import Menu from "components/Menu"
import Banner from "components/Banner"
import Galery from "components/Galery"
import Popular from "components/Popular"
import Footer from "components/Footer"




export default function Home(){
    return(
        <>
        <Header />
        <main>
            <section className={styles.main}>
                <Menu />
                <Banner />
            </section>
            <div className={styles.galery}>
                <Galery/>
                <Popular/>
            </div>
        </main>
        <Footer/>
        </>
    )
}