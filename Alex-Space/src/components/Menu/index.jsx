import home from "../../assets/icons/home.png"
import moreLikes from "../../assets/icons/more-likes.png"
import moreViews from "../../assets/icons/more-views.png"
import newImg from "../../assets/icons/new-img.png"
import surpriseMe from "../../assets/icons/surprise-me.png"

import styles from "./menu.module.scss"

export default function Menu(){
    return(
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__items}>
                    <img src= {home} alt="Home Icon" />
                    <a href="/">Home</a>
                </li>

                <li className={styles.menu__items}>
                    <img src={moreLikes} alt="MoreLikes Icon" />
                    <a href="/">More likes</a>
                </li>

                <li className={styles.menu__items}>
                    <img src={moreViews} alt="MoreViews Icon" />
                    <a href="/">Most views</a>
                </li>

                <li className={styles.menu__items}>
                    <img src={newImg} alt="" />
                    <a href="/">New</a>
                </li>

                <li className={styles.menu__items}>
                    <img src={surpriseMe} alt="" />
                    <a href="/">Surprise me</a>
                </li>

                
            </ul>
        </nav>
    )
}